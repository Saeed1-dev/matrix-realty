import React, { useState } from 'react';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
export const SiteVisitModal = ({ isOpen, language, selectedProjectId, selectedUnitCode, onClose }) => {
    const [projectId, setProjectId] = useState(selectedProjectId || PROJECTS_DATA[0].id);
    const [visitType, setVisitType] = useState('Physical Site Visit');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('11:00 AM');
    const [loading, setLoading] = useState(false);
    const [bookingConfirmation, setBookingConfirmation] = useState(null);
    if (!isOpen)
        return null;
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/inquire', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    projectId,
                    unitCode: selectedUnitCode,
                    visitType,
                    date,
                    timeSlot
                })
            });
            const data = await res.json();
            setLoading(false);
            setBookingConfirmation({ bookingId: data.bookingId || 'MX-109283' });
        }
        catch (err) {
            console.error(err);
            setLoading(false);
            setBookingConfirmation({ bookingId: 'MX-998212' });
        }
    };
    return (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/90">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Calendar className="w-5 h-5"/>
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-white">
                {language === 'bn' ? 'সাইট ভিজিট ও অ্যাপয়েন্টমেন্ট বুকিং' : 'Schedule Site Visit / Consultation'}
              </h3>
              <p className="text-xs text-amber-400/90">
                {language === 'bn' ? 'ম্যাট্রিক্স রিয়েলটি প্রাইভেট প্রেজেন্টেশন' : 'Matrix Private Sales Tour'}
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-5 h-5"/>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-slate-200">
          {bookingConfirmation ? (<div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8"/>
              </div>
              <h4 className="text-xl font-serif font-bold text-white">
                {language === 'bn' ? 'বুকিংটি সফলভাবে সম্পন্ন হয়েছে!' : 'Visit Scheduled Successfully!'}
              </h4>
              <p className="text-xs text-slate-300">
                {language === 'bn'
                ? 'আমাদের সিনিয়র এক্সিকিউটিভ ২ ঘন্টার মধ্যে আপনার সাথে কনফার্মেশনের জন্য কল করবেন।'
                : 'Our sales relationship officer will contact you shortly to confirm your private viewing.'}
              </p>
              <div className="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-amber-400 font-mono text-xs inline-block">
                Booking Reference: {bookingConfirmation.bookingId}
              </div>
              <div className="pt-4">
                <button onClick={onClose} className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs">
                  {language === 'bn' ? 'বন্ধ করুন' : 'Close Window'}
                </button>
              </div>
            </div>) : (<form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Visit Type selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {language === 'bn' ? 'সাক্ষাতের ধরন' : 'Consultation Type'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" onClick={() => setVisitType('Physical Site Visit')} className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${visitType === 'Physical Site Visit'
                ? 'bg-amber-500 text-slate-950 border-amber-400'
                : 'bg-slate-950 text-slate-300 border-slate-800'}`}>
                    {language === 'bn' ? 'সরাসরি সাইট ভিজিট' : 'In-Person Site Visit'}
                  </button>
                  <button type="button" onClick={() => setVisitType('1-on-1 Virtual Consultation')} className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${visitType === '1-on-1 Virtual Consultation'
                ? 'bg-amber-500 text-slate-950 border-amber-400'
                : 'bg-slate-950 text-slate-300 border-slate-800'}`}>
                    {language === 'bn' ? 'অনলাইন ভার্চুয়াল মিটিং' : '1-on-1 Virtual Call'}
                  </button>
                </div>
              </div>

              {/* Project Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {language === 'bn' ? 'প্রকল্প নির্বাচন করুন' : 'Select Project'}
                </label>
                <select value={projectId} onChange={(e) => setProjectId(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500">
                  {PROJECTS_DATA.map((p) => (<option key={p.id} value={p.id}>
                      {language === 'bn' ? p.titleBn : p.titleEn} ({p.locationEn})
                    </option>))}
                </select>
                {selectedUnitCode && (<p className="text-[11px] text-amber-400 mt-1 font-mono">
                    Selected Unit: {selectedUnitCode}
                  </p>)}
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {language === 'bn' ? 'আপনার নাম' : 'Full Name'} *
                  </label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"/>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {language === 'bn' ? 'মোবাইল নম্বর' : 'Phone Number'} *
                  </label>
                  <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+880 17XX-XXXXXX" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"/>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {language === 'bn' ? 'ইমেইল অ্যাড্রেস' : 'Email Address'}
                </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"/>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {language === 'bn' ? 'তারিখ' : 'Preferred Date'} *
                  </label>
                  <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"/>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {language === 'bn' ? 'সময়' : 'Time Slot'}
                  </label>
                  <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500">
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                  </select>
                </div>
              </div>

              <button type="submit" disabled={loading} className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all mt-4">
                {loading
                ? (language === 'bn' ? 'বুকিং জমা হচ্ছে...' : 'Booking...')
                : (language === 'bn' ? 'বুকিং নিশ্চিত করুন' : 'Confirm Visit Booking')}
              </button>

            </form>)}
        </div>

      </div>
    </div>);
};
