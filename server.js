import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { getDatabase } from "./src/db/database.js";
dotenv.config();
const app = express();
const PORT = 3000;
app.use(express.json());
// Lazy-initialized Gemini AI Client
let aiClient = null;
function getGenAIClient() {
    if (!aiClient) {
        const apiKey = process.env.GEMINI_API_KEY;
        if (apiKey) {
            aiClient = new GoogleGenAI({ apiKey });
        }
    }
    return aiClient;
}
// Health check endpoint
app.get("/api/health", async (req, res) => {
    try {
        const db = await getDatabase();
        const inquiryCount = await db.get("SELECT COUNT(*) as count FROM inquiries");
        const proposalCount = await db.get("SELECT COUNT(*) as count FROM landowner_proposals");
        res.json({
            status: "ok",
            database: "MySQL Connected",
            stats: {
                totalInquiries: inquiryCount?.count || 0,
                totalLandownerProposals: proposalCount?.count || 0
            },
            timestamp: new Date().toISOString()
        });
    }
    catch (err) {
        res.json({ status: "ok", database: "Initializing", timestamp: new Date().toISOString() });
    }
});
// AI Concierge Endpoint with MySQL log saving
app.post("/api/concierge", async (req, res) => {
    try {
        const { prompt, language = "bn" } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }
        const ai = getGenAIClient();
        let reply = "";
        if (!ai) {
            // Fallback friendly response if no key is present
            reply = language === "bn"
                ? "ধন্যবাদ Matrix Realty-তে যোগাযোগের জন্য! আমাদের প্রতিনিধি খুব শীঘ্রই আপনার সাথে যোগাযোগ করবেন। আপনার সুবিধার্থে আমরা ১-অন-১ ভার্চুয়াল অ্যাপয়েন্টমেন্ট বুকিং সুবিধা প্রদান করছি।"
                : "Thank you for reaching out to Matrix Realty! Our property advisor will get in touch with you shortly. You can also schedule a 1-on-1 consultation directly through our site visit booking form.";
        }
        else {
            const systemInstruction = `You are "Matrix AI Concierge" (ম্যাট্রিক্স এআই প্রপার্টি অ্যাসিস্ট্যান্ট), an expert real estate consultant for Matrix Realty & Development (ম্যাট্রিক্স রিয়েলটি অ্যান্ড ডেভেলপমেন্ট).
Company core belief:
"একটি বাড়ি শুধু ইট-পাথরের নির্মাণ নয়— এটি স্বপ্নের ঠিকানা, নিরাপত্তার প্রতিশ্রুতি, এবং আগামী প্রজন্মের ভবিষ্যতের ভিত্তি।"
("A home is not just a structure of brick and stone— it is a dream destination, a promise of security, and the foundation for the future of the next generation.")

Your tone: Polite, executive, trustworthy, knowledgeable, warm, professional.
Language: Answer in the same language as user request (${language === 'bn' ? 'Bengali/বাংলা' : 'English'}). If user writes in Bengali, reply in natural standard Bengali.
Key Information:
- Key locations in Dhaka: Gulshan, Banani, Dhanmondi, Uttara, Purbachal, Baridhara Diplomatic Zone.
- Key projects: Matrix Skyline (Gulshan 2 - Luxury 4000+ sqft penthouses), Matrix Crown Heights (Banani - Smart eco-living apartments), Matrix Green Pavilion (Uttara - 3-4 BHK family residences), Matrix Tech Park (Commercial tower in Gulshan Avenue).
- Trust pillars: 100% RAJUK & BNBC earthquake compliance, BUET structural engineering certification, 0-delay handover guarantee, smart solar integration.
- Landowner Joint Venture: Matrix develops joint venture projects on 5+ katha plots with attractive profit-sharing ratios.

Provide direct, helpful advice on property specs, location advantages, ROI estimates, RAJUK approvals, mortgage process in Bangladesh, or joint ventures. Keep answers structured, elegant, and concise.`;
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: {
                    systemInstruction: systemInstruction,
                    temperature: 0.7,
                }
            });
            reply = response.text || (language === "bn" ? "দুঃখিত, কোনো উত্তর তৈরি করা সম্ভব হয়নি।" : "Apologies, unable to generate response.");
        }
        // Save to MySQL database
        try {
            const db = await getDatabase();
            await db.run(`INSERT INTO ai_chat_logs (user_prompt, ai_reply) VALUES (?, ?)`, [prompt, reply]);
        }
        catch (dbErr) {
            console.error("MySQL Log Error:", dbErr);
        }
        return res.json({ reply });
    }
    catch (err) {
        console.error("Gemini API Error:", err);
        return res.status(500).json({
            error: "Failed to communicate with AI Concierge",
            details: err.message
        });
    }
});
// Inquiries / Site Visits Endpoint with SQL insert
app.post("/api/inquire", async (req, res) => {
    try {
        const { name, phone, email, project, unitCode, visitType, date, note } = req.body;
        const bookingId = "MX-" + Math.floor(100000 + Math.random() * 900000);
        const db = await getDatabase();
        await db.run(`INSERT INTO inquiries (booking_id, name, phone, email, project, unit_code, visit_type, date, note)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [bookingId, name, phone || "", email || "", project || "", unitCode || "", visitType || "", date || "", note || ""]);
        console.log("SQL Inserted Inquiry:", { bookingId, name, phone });
        return res.json({
            success: true,
            message: "Inquiry saved to local SQL database. Our team will contact you within 2 hours.",
            bookingId
        });
    }
    catch (err) {
        console.error("Error saving inquiry to DB:", err);
        return res.status(500).json({ error: "Database error while saving inquiry" });
    }
});
// Landowner Joint Venture Submission Endpoint with SQL insert
app.post("/api/landowner-proposal", async (req, res) => {
    try {
        const { ownerName, phone, plotLocation, plotSizeKatha, roadWidthFeet } = req.body;
        const proposalId = "JV-" + Math.floor(100000 + Math.random() * 900000);
        const db = await getDatabase();
        await db.run(`INSERT INTO landowner_proposals (proposal_id, owner_name, phone, plot_location, plot_size_katha, road_width_feet)
       VALUES (?, ?, ?, ?, ?, ?)`, [proposalId, ownerName, phone || "", plotLocation || "", plotSizeKatha || "", roadWidthFeet || ""]);
        console.log("SQL Inserted Landowner Proposal:", { proposalId, ownerName, plotLocation });
        return res.json({
            success: true,
            message: "Landowner plot details saved in SQL database! Our land acquisition team will review within 24 hours.",
            proposalId
        });
    }
    catch (err) {
        console.error("Error saving landowner proposal to DB:", err);
        return res.status(500).json({ error: "Database error while saving landowner proposal" });
    }
});
// GET endpoints to view stored SQL records
app.get("/api/db/inquiries", async (req, res) => {
    try {
        const db = await getDatabase();
        const rows = await db.all("SELECT * FROM inquiries ORDER BY created_at DESC");
        res.json({ success: true, count: rows.length, data: rows });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get("/api/db/landowner-proposals", async (req, res) => {
    try {
        const db = await getDatabase();
        const rows = await db.all("SELECT * FROM landowner_proposals ORDER BY created_at DESC");
        res.json({ success: true, count: rows.length, data: rows });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get("/api/db/chat-logs", async (req, res) => {
    try {
        const db = await getDatabase();
        const rows = await db.all("SELECT * FROM ai_chat_logs ORDER BY created_at DESC LIMIT 50");
        res.json({ success: true, count: rows.length, data: rows });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
async function startServer() {
    if (process.env.NODE_ENV !== "production") {
        const vite = await createViteServer({
            server: { middlewareMode: true },
            appType: "spa",
        });
        app.use(vite.middlewares);
    }
    else {
        const distPath = path.join(process.cwd(), "dist");
        app.use(express.static(distPath));
        app.get("*", (req, res) => {
            res.sendFile(path.join(distPath, "index.html"));
        });
    }
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on http://0.0.0.0:${PORT}`);
    });
}
startServer();
