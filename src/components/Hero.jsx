import React, { useState } from 'react';
import { Search, MapPin, Building, ChevronRight, ShieldCheck } from 'lucide-react';
import penthouseImg from '../assets/images/matrix_luxury_penthouse_1785830623237.jpg';
export const Hero = ({ language, onSearch, onOpenBooking, onOpenVideoTour }) => {
    const [selectedLocation, setSelectedLocation] = useState('All');
    const [selectedType, setSelectedType] = useState('All');
    const handleQuickSearch = (e) => {
        e.preventDefault();
        onSearch(selectedLocation, selectedType);
        const projectsEl = document.getElementById('projects');
        if (projectsEl) {
            projectsEl.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (<section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Ambient glow only, no background photo */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Manifesto & Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-black  text-xs font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-amber-400"/>
              <span>
                {language === 'bn' ? 'ম্যাট্রিক্স রিয়েলটি অ্যান্ড ডেভেলপমেন্ট' : 'Matrix Realty & Development'}
              </span>
            </div>

            {/* Manifesto Quote, overlaid directly on the penthouse image */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl group">
              <img src={penthouseImg} alt="Matrix Realty Luxury Penthouse" className="w-full h-auto min-h-[420px] object-cover object-center"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20"/>

              <blockquote className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 space-y-3">
                <p className="text-lg sm:text-xl md:text-2xl font-serif text-amber-100 font-bold leading-snug tracking-tight">
                  {language === 'bn' ? (<>
                      &ldquo;একটি বাড়ি শুধু নির্মাণ নয়—<br />
                      এটি <span className="text-amber-400">স্বপ্নের ঠিকানা, নিরাপত্তার প্রতিশ্রুতি </span>,<br />
                      এবং আগামী প্রজন্মের ভবিষ্যতের ভিত্তি।&rdquo;
                    </>) : (<>
                      &ldquo;A house is not just a building—<br />
                      It is a <span className="text-amber-400">dream destination</span>,<br />
                      A <span className="text-amber-400">promise of security</span>,<br />
                      And the foundation for future generations.&rdquo;
                    </>)}
                </p>
                <footer className="pt-3 border-t border-amber-500/20 text-xs sm:text-sm font-medium text-amber-300/90 flex items-center justify-between">
                  <span>
                    {language === 'bn'
            ? '— এই বিশ্বাস নিয়েই এগিয়ে চলছে Matrix Realty & Development'
            : '— Driven by this unwavering core belief since inception'}
                  </span>
                </footer>
              </blockquote>
            </div>

            <p className="text-black text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              {language === 'bn'
            ? 'ঢাকার অভিজাত এলাকা যেমন গুলশান, বনানী, ধানমন্ডি ও উত্তরায় আপনার জীবনের শ্রেষ্ঠ আবাসন ও বাণিজ্যিক স্থান গড়ার কারিগর।'
            : 'Crafting architecturally distinguished residential penthouses and commercial hubs across Gulshan, Banani, Dhanmondi, and Uttara.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects" className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all flex items-center gap-2 hover:translate-y-[-2px]">
                <span>{language === 'bn' ? 'প্রকল্পসমূহ দেখুন' : 'Explore Flagship Projects'}</span>
                <ChevronRight className="w-4 h-4"/>
              </a>

              <button onClick={onOpenBooking} className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700/80 font-semibold text-sm transition-all hover:border-amber-500/50 flex items-center gap-2">
                <span>{language === 'bn' ? 'ভার্চুয়াল সাইট ট্যুর' : 'Schedule Virtual Tour'}</span>
              </button>
            </div>

            {/* Key Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400">100%</div>
                <div className="text-xs text-black  mt-1">
                  {language === 'bn' ? 'যথাসময়ে হ্যান্ডওভার' : 'On-Time Handover'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-white">BUET</div>
                <div className="text-xs text-black  mt-1">
                  {language === 'bn' ? 'সার্টিফাইড স্ট্রাকচারাল সেফটি' : 'Certified Structural Integrity'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400">15+</div>
                <div className="text-xs text-black  mt-1">
                  {language === 'bn' ? 'অভিজাত ল্যান্ডমার্ক প্রজেক্ট' : 'Architectural Landmarks'}
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Property Quick Filter Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-amber-500/30 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">
                    {language === 'bn' ? 'স্বপ্নের ঠিকানা খুঁজুন' : 'Find Your Dream Home'}
                  </h3>
                  <p className="text-xs text-amber-400/90 mt-0.5">
                    {language === 'bn' ? 'সরাসরি প্রপার্টি ও মূল্য ফিল্টার করুন' : 'Instant Property & Location Filter'}
                  </p>
                </div>
                <Building className="w-8 h-8 text-amber-400/80"/>
              </div>

              <form onSubmit={handleQuickSearch} className="space-y-4">
                {/* Location Select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400"/>
                    {language === 'bn' ? 'কাঙ্ক্ষিত এলাকা (Location)' : 'Preferred Location'}
                  </label>
                  <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors">
                    <option value="All">{language === 'bn' ? 'ঢাকার সকল এলাকা (All Dhaka)' : 'All Locations'}</option>
                    <option value="Gulshan">{language === 'bn' ? 'গুলশান (Gulshan)' : 'Gulshan'}</option>
                    <option value="Banani">{language === 'bn' ? 'বনানী (Banani)' : 'Banani'}</option>
                    <option value="Dhanmondi">{language === 'bn' ? 'ধানমন্ডি (Dhanmondi)' : 'Dhanmondi'}</option>
                    <option value="Uttara">{language === 'bn' ? 'উত্তরা (Uttara)' : 'Uttara'}</option>
                  </select>
                </div>

                {/* Property Type Select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {language === 'bn' ? 'প্রপার্টির ধরন (Property Type)' : 'Property Type'}
                  </label>
                  <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors">
                    <option value="All">{language === 'bn' ? 'সব ধরণের প্রপার্টি' : 'All Types'}</option>
                    <option value="Residential">{language === 'bn' ? 'আবাসিক অ্যাপার্টমেন্ট (Residential)' : 'Residential Apartments'}</option>
                    <option value="Commercial">{language === 'bn' ? 'বাণিজ্যিক স্পেস (Commercial Plaza)' : 'Commercial Plazas'}</option>
                    <option value="Penthouse">{language === 'bn' ? 'পেন্টহাউজ ও ডুপ্লেক্স (Penthouses)' : 'Penthouses & Duplexes'}</option>
                  </select>
                </div>

                {/* Status Options */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {language === 'bn' ? 'প্রকল্পের বর্তমান অবস্থা' : 'Development Status'}
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <span className="px-3 py-2 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 text-center font-medium">
                      {language === 'bn' ? 'চলমান (Ongoing)' : 'Ongoing'}
                    </span>
                    <span className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 text-center font-medium">
                      {language === 'bn' ? 'আসন্ন (Upcoming)' : 'Upcoming'}
                    </span>
                    <span className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 text-center font-medium">
                      {language === 'bn' ? 'হস্তান্তরিত (Completed)' : 'Completed'}
                    </span>
                  </div>
                </div>

                <button type="submit" className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 mt-4">
                  <Search className="w-4 h-4 stroke-[2.5]"/>
                  <span>{language === 'bn' ? 'প্রপার্টি খুঁজুন' : 'Filter Properties'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>);
};