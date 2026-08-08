import React from 'react';
import { Building2, Phone, Mail, MapPin, Shield, ArrowUpRight } from 'lucide-react';
export const Footer = ({ language, onOpenBooking }) => {
    return (<footer id="contact" className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-bold">
                <Building2 className="w-6 h-6 stroke-[2.5]"/>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white font-serif">
                  Matix Realty and Development<span className="text-amber-400 font-normal"></span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-amber-300/80 font-medium">
                 
                </span>
              </div>
            </a>

            {/* Manifesto Quote */}
            <p className="text-xs sm:text-sm text-amber-200/90 font-serif leading-relaxed italic border-l-2 border-amber-500 pl-3">
              {language === 'bn'
            ? '“একটি বাড়ি শুধু ইট-পাথরের নির্মাণ নয়— এটি স্বপ্নের ঠিকানা, নিরাপত্তার প্রতিশ্রুতি, এবং আগামী প্রজন্মের ভবিষ্যতের ভিত্তি।”'
            : '“A home is not just a structure of brick and stone— it is a dream destination, a promise of security, and the foundation for the future.”'}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {language === 'bn'
            ? 'ম্যাট্রিক্স রিয়েলটি অ্যান্ড ডেভেলপমেন্ট বাংলাদেশে সততা, আধুনিক স্থাপত্য ও সময়মত হস্তান্তরের প্রতীক।'
            : 'Matrix Realty & Development stands for architectural craftsmanship, BUET safety certification, and timely key delivery.'}
            </p>

          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
              {language === 'bn' ? 'প্রকল্প এলাকা' : 'Prime Locations'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Gulshan 1 & 2 / গুলশান ১ ও ২</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Banani Block E & H / বনানী</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Dhanmondi Lakeside / ধানমন্ডি</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Uttara Sector 11 & 13 / উত্তরা</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Purbachal Diplomatic / পূর্বাচল</a></li>
            </ul>
          </div>

          {/* Corporate Office Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
              {language === 'bn' ? 'কর্পোরেট হেডকোয়ার্টার' : 'Corporate Headquarters'}
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5"/>
                <span>
                  House 1/C, Road 1, Shyamoli, Dhaka-1207, Bangladesh
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0"/>
                <span className="font-mono text-amber-300">(+8801351750029)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0"/>
                <span>info@matrixrealtybd.com</span>
              </div>
            </div>

            <div className="pt-2">
              <button onClick={onOpenBooking} className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5">
                <span>{language === 'bn' ? 'অ্যাপয়েন্টমেন্ট বুক করুন' : 'Schedule Private Meeting'}</span>
                <ArrowUpRight className="w-3.5 h-3.5"/>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Matrix Realty & Development Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">RAJUK Compliance</a>
          </div>
        </div>

      </div>
    </footer>);
};
