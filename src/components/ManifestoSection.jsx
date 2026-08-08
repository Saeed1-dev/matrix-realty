import React from 'react';
import { ShieldCheck, HeartHandshake, Leaf, Clock, Award, Building2, CheckCircle2 } from 'lucide-react';
export const ManifestoSection = ({ language }) => {
    const trustPillars = [
        {
            icon: ShieldCheck,
            titleBn: 'ভূমিকম্প সহনশীল সেফটি ',
            titleEn: 'BUET Structural Compliance',
            descBn: 'জাতীয় বিল্ডিং কোড (BNBC) ও বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়ের (BUET) সর্বোচ্চ মানদণ্ড মেনে ভূ-কম্পন সহনশীল কনক্রিট কাঠামোর নিশ্চয়তা।',
            descEn: 'Rigorous earthquake-resistant structural framework designed according to BNBC standards and certified by BUET structural experts.'
        },
        {
            icon: Clock,
            titleBn: '১০০% সময়মতো হস্তান্তরের নিশ্চয়তা',
            titleEn: 'Zero-Delay Handover Guarantee',
            descBn: 'আমরা নির্ধারিত চুক্তি অনুযায়ী নির্ধারিত তারিখে হ্যান্ডওভার প্রদানে দৃঢ়প্রতিজ্ঞ। প্রতিশ্রুত সময়ে চাবি তুলে দেওয়াই আমাদের সুনাম।',
            descEn: 'Contractual commitment ensuring exact scheduled key handover. We respect your family plans and timeline guarantees.'
        },
        {
            icon: Leaf,
            titleBn: 'পরিবেশবান্ধব ও স্মার্ট টেকনোলজি',
            titleEn: 'Eco-Smart & Sustainable Architecture',
            descBn: 'সৌর শক্তি, সাইলেন্ট জেনারেটর, বৃষ্টির পানি পুনর্ব্যবহার, শব্দরোধী গ্লাস এবং ইন্টেলিজেন্ট হোম অটোমেশন ব্যবস্থার নিখুঁত সংযোজন।',
            descEn: 'Integration of rooftop solar grids, acoustic insulation glass, rainwater harvesting, and smart biometric security.'
        },
        {
            icon: HeartHandshake,
            titleBn: 'স্বচ্ছ আইনি নথি ও রাজউক অনুমোদন',
            titleEn: '100% Legal Integrity & RAJUK Approved',
            descBn: 'প্রতিটি প্রকল্পের রাজউক (RAJUK) অনুমোদন নম্বর, নিষ্কণ্টক জমি নথিপত্র এবং সহজ কিস্তি সুবিধার পূর্ণাঙ্গ আইনি সহায়তা।',
            descEn: 'Clean title deeds, unencumbered land ownership, and official RAJUK plan registration for complete legal peace of mind.'
        }
    ];
    return (<section id="manifesto" className="py-20 bg-slate-900 border-y border-amber-500/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5"/>
            <span>{language === 'bn' ? 'আমাদের দর্শন ও প্রতিশ্রুতি' : 'Our Brand Manifesto'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            {language === 'bn' ? (<>কেন <span className="text-amber-400">ম্যাট্রিক্স রিয়েলটি</span> আপনার আস্থার সেরা পছন্দ?</>) : (<>Why <span className="text-amber-400">Matrix Realty</span> Stands as Dhaka&apos;s Most Trusted Developer?</>)}
          </h2>

          <p className="text-slate-300 text-base leading-relaxed font-light">
            {language === 'bn'
            ? 'আমরা বিশ্বাস করি একটি নিখুঁত গৃহ শুধু ইট-পাথরের দেয়াল নয়, এটি প্রজন্মের পর প্রজন্ম জুড়ে পারিবারিক জীবনের সবচেয়ে নিরাপদ দুর্গ।'
            : 'Believing that a residence is far beyond bricks and mortar—it is the foundational sanctuary for your legacy and future generations.'}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (<div key={idx} className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:translate-y-[-4px] group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 stroke-[2]"/>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {language === 'bn' ? pillar.titleBn : pillar.titleEn}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    {language === 'bn' ? pillar.descBn : pillar.descEn}
                  </p>
                </div>
                
                <div className="pt-4 mt-4 border-t border-slate-900 flex items-center gap-1.5 text-xs text-amber-400/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5"/>
                  <span>{language === 'bn' ? 'ম্যাট্রিক্স গ্যারান্টি' : 'Matrix Quality Assurance'}</span>
                </div>
              </div>);
        })}
        </div>

        {/* Quality Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/30 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Building2 className="w-8 h-8"/>
            </div>
            <div>
              <h4 className="text-xl font-serif font-bold text-amber-100">
                {language === 'bn' ? 'রাজউক অনুমোদিত ও বুয়েট ভ্যালিডেটেড প্রকল্প' : 'RAJUK Registered & BUET Structural Compliance'}
              </h4>
              <p className="text-sm text-slate-300 font-light mt-0.5">
                {language === 'bn'
            ? 'প্রতিটি প্রকল্পে ভূ-কম্পন সেফটি জোনিং, ফায়ার হাইড্যান্ট সিস্টেম এবং ১০০% শতভাগ আইনগত নিশ্চয়তা।'
            : 'Every Matrix development is equipped with earthquake dampening, modern fire suppression, and flawless land titles.'}
              </p>
            </div>
          </div>

          <a href="#projects" className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm whitespace-nowrap shadow-md shadow-amber-500/20">
            {language === 'bn' ? 'প্রকল্পের তালিকা দেখুন' : 'View Approved Projects'}
          </a>
        </div>

      </div>
    </section>);
};
