import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot } from 'lucide-react';
export const AiConciergeWidget = ({ isOpen, language, onClose, onOpenBooking }) => {
    const [messages, setMessages] = useState([
        {
            id: 'm1',
            sender: 'ai',
            text: language === 'bn'
                ? 'আসসালামু আলাইকুম! আমি ম্যাট্রিক্স রিয়েলটির এআই প্রপার্টি কনসিয়ার্জ। গুলশান, বনানী বা উত্তরায় আমাদের ফ্ল্যাট, মূল্য, নকশা বা ব্যাংক লোন সম্পর্কে আপনার কী জানার আছে?'
                : 'Welcome to Matrix Realty AI Concierge! How can I assist you today regarding our luxury apartments, locations, prices, or joint venture opportunities?',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);
    if (!isOpen)
        return null;
    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || loading)
            return;
        const userMsgText = input.trim();
        setInput('');
        const userMessage = {
            id: Date.now().toString(),
            sender: 'user',
            text: userMsgText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);
        try {
            const res = await fetch('/api/concierge', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: userMsgText, language })
            });
            const data = await res.json();
            setLoading(false);
            const aiReplyText = data.reply || (language === 'bn'
                ? 'ধন্যবাদ প্রশ্নের জন্য। আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।'
                : 'Thank you for your question. Our representative will contact you shortly.');
            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    sender: 'ai',
                    text: aiReplyText,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
            ]);
        }
        catch (err) {
            console.error(err);
            setLoading(false);
            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    sender: 'ai',
                    text: language === 'bn'
                        ? 'ধন্যবাদ! আমাদের হটলাইন +880 1700-MATRIX এ সরাসরি কল করে আরও বিস্তারিত জানতে পারেন।'
                        : 'Thank you! You can also call our hotline +880 1700-MATRIX directly for instant assistance.',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
            ]);
        }
    };
    const quickPromptsBn = [
        'গুলশান ২ স্কাইলাইনের মূল্য কত?',
        'রাজউক অনুমোদন ও ভূ-কম্পন নিরাপত্তা কেমন?',
        'ব্যাংক লোন সুবিধা কী কী আছে?'
    ];
    const quickPromptsEn = [
        'What is the starting price in Gulshan 2?',
        'What are the BUET structural safety details?',
        'How does Landowner Joint Venture work?'
    ];
    const currentQuickPrompts = language === 'bn' ? quickPromptsBn : quickPromptsEn;
    return (<div className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md bg-slate-900 border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[520px]">
      
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 shadow-md">
            <Sparkles className="w-5 h-5 fill-slate-950"/>
          </div>
          <div>
            <h3 className="text-sm font-serif font-bold text-white flex items-center gap-1.5">
              <span>Matrix AI Concierge</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"/>
            </h3>
            <p className="text-[10px] text-amber-300/80">
              {language === 'bn' ? '২৪/৭ স্মার্ট প্রপার্টি অ্যাসিস্ট্যান্ট' : '24/7 Smart Property Advisor'}
            </p>
          </div>
        </div>

        <button onClick={onClose} className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
          <X className="w-5 h-5"/>
        </button>
      </div>

      {/* Messages List */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950/90 text-xs">
        {messages.map((msg) => (<div key={msg.id} className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'ai' && (<div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-3.5 h-3.5"/>
              </div>)}

            <div className={`max-w-[82%] p-3 rounded-2xl ${msg.sender === 'user'
                ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none'
                : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none font-light leading-relaxed'}`}>
              <p>{msg.text}</p>
              <span className={`text-[9px] block text-right mt-1 ${msg.sender === 'user' ? 'text-slate-900/70' : 'text-slate-500'}`}>
                {msg.time}
              </span>
            </div>
          </div>))}

        {loading && (<div className="flex items-center gap-2 text-amber-400 text-xs italic py-2">
            <Sparkles className="w-3.5 h-3.5 animate-spin"/>
            <span>{language === 'bn' ? 'ম্যাট্রিক্স এআই চিন্তা করছে...' : 'Matrix AI is analyzing response...'}</span>
          </div>)}

        <div ref={chatEndRef}/>
      </div>

      {/* Quick Suggestion Chips */}
      <div className="px-3 py-2 bg-slate-900/90 border-t border-slate-800 flex gap-2 overflow-x-auto text-[10px]">
        {currentQuickPrompts.map((prompt, idx) => (<button key={idx} onClick={() => setInput(prompt)} className="px-2.5 py-1 rounded-lg bg-slate-800 text-amber-300 hover:bg-slate-700 whitespace-nowrap shrink-0 border border-slate-700">
            {prompt}
          </button>))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={language === 'bn' ? 'কীভাবে সাহায্য করতে পারি?' : 'Ask about properties, prices, loans...'} className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"/>
        <button type="submit" disabled={!input.trim() || loading} className="p-2 rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 disabled:opacity-50 transition-colors shrink-0">
          <Send className="w-4 h-4"/>
        </button>
      </form>

    </div>);
};
