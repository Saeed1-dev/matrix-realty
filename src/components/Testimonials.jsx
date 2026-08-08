import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/projectsData';
export const Testimonials = ({ language }) => {
    return (<section className="py-20 bg-slate-900 border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest block">
            {language === 'bn' ? 'আমাদের গ্রাহকদের অভিজ্ঞতা' : 'Client Testimonials'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            {language === 'bn' ? (<>গ্রাহকদের <span className="text-amber-400">অনাবিল বিশ্বাস ও সন্তুষ্টি</span></>) : (<>Enduring <span className="text-amber-400">Trust & Satisfaction</span></>)}
          </h2>
          <p className="text-slate-400 text-sm font-light">
            {language === 'bn'
            ? 'ম্যাট্রিক্স পরিবারের সম্মানিত বাসিন্দা ও জমিদাতা পার্টনারদের প্রতিক্রিয়া।'
            : 'Real stories from proud residents and landowner partners who chose Matrix Realty.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (<div key={t.id} className="p-6 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-amber-400"/>))}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed italic">
                  &ldquo;{language === 'bn' ? t.commentBn : t.commentEn}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border border-amber-500/30" referrerPolicy="no-referrer"/>
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">{t.name}</h4>
                  <p className="text-[11px] text-amber-400">{language === 'bn' ? t.roleBn : t.roleEn}</p>
                  <p className="text-[10px] text-slate-500">{language === 'bn' ? t.projectBn : t.projectEn}</p>
                </div>
              </div>
            </div>))}
        </div>

      </div>
    </section>);
};
