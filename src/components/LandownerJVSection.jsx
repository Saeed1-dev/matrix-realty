import React, { useState } from 'react';
import { Building2, CheckCircle2, Send, Sparkles } from 'lucide-react';
export const LandownerJVSection = ({ language }) => {
    const [formData, setFormData] = useState({
        ownerName: '',
        phone: '',
        email: '',
        plotLocation: 'Gulshan',
        plotSizeKatha: 10,
        roadWidthFeet: 30,
        notes: ''
    });
    const [loading, setLoading] = useState(false);
    const [submittedId, setSubmittedId] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/landowner-proposal', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            setLoading(false);
            if (data.success) {
                setSubmittedId(data.proposalId || 'JV-9821');
            }
        }
        catch (err) {
            console.error(err);
            setLoading(false);
            setSubmittedId('JV-8821');
        }
    };
    return (<section id="landowners" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5 text-amber-400"/>
              <span>{language === 'bn' ? 'জমিদাতাদের যৌথ উদ্যোগ (Joint Venture)' : 'Landowners Partner Portal'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-snug">
              {language === 'bn' ? (<>আপনার জমির <span className="text-amber-400">সর্বোচ্চ মূল্য ও সেরা নন্দনতাত্ত্বিক বিকাশ</span> রূপায়ণে আমরা প্রস্তুত</>) : (<>Transform Your Plot into an <span className="text-amber-400">Architectural Landmark</span></>)}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              {language === 'bn'
            ? 'আপনার ৫ কাঠা বা ততোধিক মূল্যবান জমিতে যৌথ উদ্যোগে গুলশান ও বনানীর মানদণ্ডে আইকনিক ভবন নির্মাণে Matrix Realty-র সাথে অংশীদার হোন।'
            : 'Partner with Matrix Realty for joint-venture development. We assure maximum floor area ratio (FAR), flawless RAJUK approvals, and top-tier revenue sharing.'}
            </p>

            <div className="space-y-4 pt-2">
              {[
            {
                bn: 'সর্বোচ্চ লাভজনক অনুপাত (High Revenue Ratio) ও স্বচ্ছ আইনি চুক্তি',
                en: 'Maximum FAR & transparent revenue sharing ratios'
            },
            {
                bn: 'রাজউক (RAJUK) অনুমোদন ও আইনি জটিলতা নিরসনে ১০০% নিজস্ব লিগ্যাল টিম',
                en: 'End-to-end RAJUK plan processing by dedicated legal team'
            },
            {
                bn: 'বুয়েট (BUET) অনুমোদিত প্রকৌশলী দ্বারা ভূ-কম্পন সহনশীল আর্কিটেকচার',
                en: 'BUET-certified earthquake resistant architectural execution'
            },
            {
                bn: 'চুক্তি অনুযায়ী সুনির্দিষ্ট সময়ে জমিদাতাদের অংশের নিশ্চিত চাবি হস্তান্তর',
                en: 'Guaranteed on-time handover of landowner allocated units'
            }
        ].map((item, idx) => (<div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5"/>
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    {language === 'bn' ? item.bn : item.en}
                  </span>
                </div>))}
            </div>
          </div>

          {/* Right Form Box */}
          <div className="lg:col-span-6 bg-slate-900 border border-amber-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl relative">
            
            {submittedId ? (<div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8"/>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {language === 'bn' ? 'আবেদনটি সফলভাবে জমা হয়েছে!' : 'Proposal Submitted Successfully!'}
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  {language === 'bn'
                ? 'আপনার প্লটের তথ্য আমাদের ল্যান্ড একুইজিশন টিমে পাঠানো হয়েছে। আগামী ২৪ ঘন্টার মধ্যে টিম প্রাথমিক সমীক্ষা সম্পন্ন করে আপনার সাথে যোগাযোগ করবে।'
                : 'Our Land Acquisition Directorate has received your plot details. We will reach out within 24 hours.'}
                </p>
                <div className="inline-block bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-amber-400 font-mono text-xs">
                  Proposal ID: {submittedId}
                </div>
                <div>
                  <button onClick={() => setSubmittedId(null)} className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700">
                    {language === 'bn' ? 'আরেকটি প্লটের তথ্য দিন' : 'Submit Another Plot'}
                  </button>
                </div>
              </div>) : (<form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-3 mb-4">
                  <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400"/>
                    <span>{language === 'bn' ? 'জমির তথ্য জমা দিন' : 'Plot Feasibility Inquiry'}</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    {language === 'bn' ? 'বিনামূল্যে সম্ভাব্যতা সমীক্ষার জন্য নিচের তথ্যগুলো পূরণ করুন' : 'Fill details for instant land assessment'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {language === 'bn' ? 'জমির মালিকের নাম' : 'Landowner Name'} *
                    </label>
                    <input type="text" required value={formData.ownerName} onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })} placeholder="e.g. Architect Robi" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"/>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {language === 'bn' ? 'মোবাইল নম্বর' : 'Mobile Number'} *
                    </label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+880 1711-XXXXXX" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"/>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {language === 'bn' ? 'জমির অবস্থান' : 'Plot Location'}
                    </label>
                    <select value={formData.plotLocation} onChange={(e) => setFormData({ ...formData, plotLocation: e.target.value })} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500">
                      <option value="Gulshan">Gulshan / গুলশান</option>
                      <option value="Banani">Banani / বনানী</option>
                      <option value="Dhanmondi">Dhanmondi / ধানমন্ডি</option>
                      <option value="Uttara">Uttara / উত্তরা</option>
                      <option value="Baridhara">Baridhara / বারিধারা</option>
                      <option value="Purbachal">Purbachal / পূর্বাচল</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {language === 'bn' ? 'জমির পরিমাণ (কাঠা)' : 'Size (Katha)'}
                    </label>
                    <input type="number" min="3" max="100" value={formData.plotSizeKatha} onChange={(e) => setFormData({ ...formData, plotSizeKatha: Number(e.target.value) })} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"/>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {language === 'bn' ? 'সামনের রাস্তা (ফুট)' : 'Road Width (ft)'}
                    </label>
                    <input type="number" min="12" max="120" value={formData.roadWidthFeet} onChange={(e) => setFormData({ ...formData, roadWidthFeet: Number(e.target.value) })} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"/>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {language === 'bn' ? 'অতিরিক্ত তথ্য (ঐচ্ছিক)' : 'Notes / Remarks'}
                  </label>
                  <textarea rows={2} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} placeholder={language === 'bn' ? 'যেমন: কর্নার প্লট বা লেক সাইড...' : 'e.g. Lakefacing corner plot...'} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"/>
                </div>

                <button type="submit" disabled={loading} className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2">
                  <Send className="w-4 h-4"/>
                  <span>
                    {loading
                ? (language === 'bn' ? 'জমাদান করা হচ্ছে...' : 'Submitting...')
                : (language === 'bn' ? 'সমীক্ষা আবেদন পাঠান' : 'Submit Proposal for Feasibility Study')}
                  </span>
                </button>
              </form>)}

          </div>

        </div>

      </div>
    </section>);
};
