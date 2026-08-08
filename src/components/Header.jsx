import React, { useState, useEffect, useRef } from 'react';
import { Phone, Globe, DollarSign, Calendar, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import logoImg from '../assets/images/martix-logo-transparent.png';

const PHONE_NUMBER = '01351750029';

export const Header = ({ language, setLanguage, currency, setCurrency, onOpenBooking, onOpenAiConcierge }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop dropdown key
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Simple nav links (no dropdown)
  const simpleLinks = [
    { key: 'home', href: '#', labelBn: 'হোম', labelEn: 'Home' },
    { key: 'land', href: '#landowners', labelBn: 'ল্যান্ড প্রকল্প', labelEn: 'Land Project' },
  ];

  // Dropdown nav groups — placeholder items, wired to existing sections for now
  const dropdownLinks = [
    {
      key: 'development',
      labelBn: 'ডেভেলপমেন্ট',
      labelEn: 'Development',
      items: [
        { href: '#projects', labelBn: 'চলমান প্রকল্প', labelEn: 'Ongoing Projects' },
        { href: '#projects', labelBn: 'আসন্ন প্রকল্প', labelEn: 'Upcoming Projects' },
        { href: '#manifesto', labelBn: 'আমাদের দর্শন', labelEn: 'Our Manifesto' },
      ],
    },
    {
      key: 'buysell',
      labelBn: 'ক্রয় ও বিক্রয়',
      labelEn: 'Buy & Sell',
      items: [
        { href: '#projects', labelBn: 'আবাসিক ইউনিট', labelEn: 'Residential Units' },
        { href: '#projects', labelBn: 'বাণিজ্যিক স্পেস', labelEn: 'Commercial Space' },
        { href: '#calculator', labelBn: 'লোন ক্যালকুলেটর', labelEn: 'Mortgage Calculator' },
      ],
    },
    {
      key: 'architecture',
      labelBn: 'আর্কিটেকচার',
      labelEn: 'Architecture',
      items: [
        { href: '#manifesto', labelBn: 'ডিজাইন ফিলোসফি', labelEn: 'Design Philosophy' },
        { href: '#projects', labelBn: 'পোর্টফোলিও', labelEn: 'Portfolio' },
      ],
    },
  ];

  const trailingLinks = [
    { key: 'about', href: '#manifesto', labelBn: 'আমাদের সম্পর্কে', labelEn: 'About Us' },
    { key: 'contact', href: '#contact', labelBn: 'যোগাযোগ', labelEn: 'Contact Us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-xl'
          : 'bg-gradient-to-b from-slate-950/95 to-slate-950/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo & Brand */}
          <a href="#" className="flex items-center shrink-0 group">
            <img
              src={logoImg}
              alt="Matrix Realty and Development"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-9' : 'h-11'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav ref={dropdownRef} className="hidden xl:flex items-center gap-5 whitespace-nowrap">
            {simpleLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-slate-100 hover:text-amber-400 transition-colors whitespace-nowrap"
              >
                {language === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}

            {dropdownLinks.map((group) => (
              <div key={group.key} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === group.key ? null : group.key)}
                  className="flex items-center gap-1 text-sm font-medium text-slate-100 hover:text-amber-400 transition-colors whitespace-nowrap"
                >
                  {language === 'bn' ? group.labelBn : group.labelEn}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === group.key ? 'rotate-180' : ''}`} />
                </button>

                {openDropdown === group.key && (
                  <div className="absolute top-full left-0 mt-3 w-56 rounded-xl bg-slate-900 border border-amber-500/20 shadow-2xl shadow-black/40 py-2 overflow-hidden">
                    {group.items.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-amber-500/10 hover:text-amber-300 transition-colors"
                      >
                        {language === 'bn' ? item.labelBn : item.labelEn}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {trailingLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-slate-100 hover:text-amber-400 transition-colors whitespace-nowrap"
              >
                {language === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Right Controls & CTA */}
          <div className="hidden xl:flex items-center gap-1.5 shrink-0 whitespace-nowrap">

            {/* Compact utility icons — language / currency / AI concierge */}
            <button
              onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
              className="w-8 h-8 flex items-center justify-center rounded-full text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors"
              title={language === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
            >
              <Globe className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrency(currency === 'BDT' ? 'USD' : 'BDT')}
              className="w-8 h-8 flex items-center justify-center rounded-full text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors"
              title="Toggle Currency"
            >
              <DollarSign className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenAiConcierge}
              className="w-8 h-8 flex items-center justify-center rounded-full text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors"
              title="Matrix AI Concierge"
            >
              <Sparkles className="w-4 h-4" />
            </button>

            {/* Phone CTA — matches target design */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-1.5 pl-3.5 pr-4 py-2 rounded-full border border-white/70 text-white text-sm font-semibold hover:bg-white hover:text-slate-950 transition-all ml-1 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>{PHONE_NUMBER}</span>
            </a>

            {/* Book Site Visit CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>{language === 'bn' ? 'সাইট ভিজিট বুকিং' : 'Book Site Visit'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/70 text-white"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-4 shadow-2xl max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {simpleLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-amber-400 py-2.5 border-b border-slate-800"
              >
                {language === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}

            {dropdownLinks.map((group) => (
              <div key={group.key} className="border-b border-slate-800">
                <button
                  onClick={() => setMobileAccordion(mobileAccordion === group.key ? null : group.key)}
                  className="w-full flex items-center justify-between text-base font-medium text-slate-200 py-2.5"
                >
                  {language === 'bn' ? group.labelBn : group.labelEn}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === group.key ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === group.key && (
                  <div className="pb-2 pl-3 flex flex-col gap-1">
                    {group.items.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm text-slate-300 hover:text-amber-400 py-2"
                      >
                        {language === 'bn' ? item.labelBn : item.labelEn}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {trailingLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-amber-400 py-2.5 border-b border-slate-800"
              >
                {language === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300"
            >
              <Globe className="w-3.5 h-3.5" />
              {language === 'bn' ? 'English' : 'বাংলা'}
            </button>
            <button
              onClick={() => setCurrency(currency === 'BDT' ? 'USD' : 'BDT')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-amber-300"
            >
              <DollarSign className="w-3.5 h-3.5" />
              {currency}
            </button>
          </div>

          <div className="pt-1 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiConcierge();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-amber-300 border border-amber-500/30 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{language === 'bn' ? 'এআই প্রপার্টি অ্যাসিস্ট্যান্ট' : 'Matrix AI Concierge'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>{language === 'bn' ? 'সাইট ভিজিট বুক করুন' : 'Schedule Site Visit'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};