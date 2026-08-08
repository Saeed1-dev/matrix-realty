import React, { useState } from 'react';
import { X, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
export const ProjectDetailModal = ({ project, language, currency, onClose, onOpenBooking }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [planMode, setPlanMode] = useState('2D');
    if (!project)
        return null;
    const formatPrice = (priceLacBDT) => {
        if (currency === 'USD') {
            const usdValue = Math.round((priceLacBDT * 100000) / 118);
            return `$${usdValue.toLocaleString()}`;
        }
        if (priceLacBDT >= 100) {
            const crore = (priceLacBDT / 100).toFixed(2);
            return `৳ ${crore} ${language === 'bn' ? 'কোটি' : 'Cr'}`;
        }
        return `৳ ${priceLacBDT} ${language === 'bn' ? 'লাখ' : 'Lac'}`;
    };
    return (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/90 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950">
                {project.status}
              </span>
              <span className="text-xs text-amber-400 font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5"/>
                {language === 'bn' ? project.locationBn : project.locationEn}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {language === 'bn' ? project.titleBn : project.titleEn}
            </h2>
          </div>

          <button onClick={onClose} className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
            <X className="w-6 h-6"/>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1 text-slate-200">
          
          {/* Main Gallery & Thumbnails */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <img src={project.gallery[activeImageIndex] || project.image} alt={project.titleEn} className="w-full h-full object-cover" referrerPolicy="no-referrer"/>
            </div>

            {/* Thumbnail Selectors */}
            {project.gallery.length > 1 && (<div className="flex items-center gap-3 overflow-x-auto pb-2">
                {project.gallery.map((imgUrl, idx) => (<button key={idx} onClick={() => setActiveImageIndex(idx)} className={`w-20 h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${activeImageIndex === idx
                    ? 'border-amber-400 scale-105'
                    : 'border-slate-800 opacity-60 hover:opacity-100'}`}>
                    <img src={imgUrl} alt="gallery thumb" className="w-full h-full object-cover" referrerPolicy="no-referrer"/>
                  </button>))}
              </div>)}
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block">{language === 'bn' ? 'জমির পরিমাণ' : 'Land Area'}</span>
              <span className="font-semibold text-white text-sm">{project.landArea}</span>
            </div>
            <div>
              <span className="text-slate-400 block">{language === 'bn' ? 'মোট তলা' : 'Total Floors'}</span>
              <span className="font-semibold text-white text-sm">{project.totalFloors} {language === 'bn' ? 'তলা' : 'Floors'}</span>
            </div>
            <div>
              <span className="text-slate-400 block">{language === 'bn' ? 'রাজউক অনুমোদন নং' : 'RAJUK Reg.'}</span>
              <span className="font-semibold text-amber-300 text-sm font-mono">{project.rajukApprovalNo}</span>
            </div>
            <div>
              <span className="text-slate-400 block">{language === 'bn' ? 'হস্তান্তর তারিখ' : 'Handover Date'}</span>
              <span className="font-semibold text-white text-sm">{project.handoverDate}</span>
            </div>
          </div>

          {/* Description & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-serif font-bold text-white">
                {language === 'bn' ? 'প্রকল্পের বিবরণ' : 'Project Overview'}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {language === 'bn' ? project.descriptionBn : project.descriptionEn}
              </p>
              <div className="pt-2 text-xs text-amber-400/90 font-medium">
                📍 {project.address}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-serif font-bold text-white">
                {language === 'bn' ? 'বিশেষ সুযোগ-সুবিধাসমূহ' : 'Amenities & Features'}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {(language === 'bn' ? project.featuresBn : project.featuresEn).map((feature, idx) => (<li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5"/>
                    <span>{feature}</span>
                  </li>))}
              </ul>
            </div>
          </div>

          {/* Interactive Floor Plan Viewer */}
          <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-serif font-bold text-white">
                  {language === 'bn' ? 'আর্কিটেকচারাল ফ্লোর প্ল্যান' : 'Architectural Floor Plan'}
                </h3>
                <p className="text-xs text-slate-400">
                  {language === 'bn' ? '২ডি ও ৩ডি লেআউট দেখুন' : 'Switch between 2D schematic and 3D interior layout'}
                </p>
              </div>

              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button onClick={() => setPlanMode('2D')} className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${planMode === '2D' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
                  2D Plan
                </button>
                <button onClick={() => setPlanMode('3D')} className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${planMode === '3D' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
                  3D Render
                </button>
              </div>
            </div>

            <div className="aspect-[16/9] bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
              <img src={planMode === '2D' ? project.floorPlan2DImage : project.floorPlan3DImage} alt="Floor plan" className="w-full h-full object-cover" referrerPolicy="no-referrer"/>
            </div>
          </div>

          {/* Available Units Table */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold text-white">
                {language === 'bn' ? 'ইউনিট প্রাপ্যতা ও মূল্য তালিকা' : 'Available Units & Pricing'}
              </h3>
              <span className="text-xs text-amber-400">
                {project.units.filter(u => u.status === 'Available').length} {language === 'bn' ? 'টি ফাঁকা ইউনিট আছে' : 'Units Available'}
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-900 text-amber-400 uppercase text-[10px] font-bold tracking-wider">
                  <tr>
                    <th className="px-4 py-3">{language === 'bn' ? 'তলা (Floor)' : 'Floor'}</th>
                    <th className="px-4 py-3">{language === 'bn' ? 'ইউনিট কোড' : 'Unit Code'}</th>
                    <th className="px-4 py-3">{language === 'bn' ? 'স্কয়ার ফিট' : 'Size (sqft)'}</th>
                    <th className="px-4 py-3">{language === 'bn' ? 'বেড/বাথ' : 'Bed/Bath'}</th>
                    <th className="px-4 py-3">{language === 'bn' ? 'মূল্য' : 'Price'}</th>
                    <th className="px-4 py-3">{language === 'bn' ? 'স্ট্যাটাস' : 'Status'}</th>
                    <th className="px-4 py-3 text-right">{language === 'bn' ? 'অ্যাকশন' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 font-mono text-xs">
                  {project.units.map((unit) => (<tr key={unit.id} className="hover:bg-slate-900/60 transition-colors">
                      <td className="px-4 py-3 font-sans font-medium text-white">{unit.floor}</td>
                      <td className="px-4 py-3 text-amber-300 font-bold">{unit.unitCode}</td>
                      <td className="px-4 py-3">{unit.sqft} sqft</td>
                      <td className="px-4 py-3 font-sans">{unit.bedrooms} Bed / {unit.bathrooms} Bath</td>
                      <td className="px-4 py-3 font-bold text-amber-400">{formatPrice(unit.priceBdt)}</td>
                      <td className="px-4 py-3 font-sans">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${unit.status === 'Available'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : unit.status === 'Booked'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'bg-rose-500/20 text-rose-400'}`}>
                          {unit.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-sans">
                        {unit.status === 'Available' ? (<button onClick={() => {
                    onClose();
                    onOpenBooking(project.id, unit.unitCode);
                }} className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all">
                            {language === 'bn' ? 'বুক করুন' : 'Reserve'}
                          </button>) : (<span className="text-slate-500 text-xs italic">
                            {language === 'bn' ? 'সংরক্ষিত' : 'Reserved'}
                          </span>)}
                      </td>
                    </tr>))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/90 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-slate-400">
            {language === 'bn'
            ? 'Matrix Realty বিক্রয় দল সরাসরি বিস্তারিত বুঝিয়ে দিতে প্রস্তুত।'
            : 'Our executive relationship managers are ready for a private meeting.'}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button onClick={() => {
            onClose();
            onOpenBooking(project.id);
        }} className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4"/>
              <span>{language === 'bn' ? 'সাইট ভিজিট সিডিউল করুন' : 'Schedule Site Visit'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>);
};
