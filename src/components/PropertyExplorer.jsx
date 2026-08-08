import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { MapPin, Bed, Maximize2, Layers, Calendar, ChevronRight, Eye, Shield } from 'lucide-react';
export const PropertyExplorer = ({ language, currency, onSelectProject, onOpenBooking }) => {
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [locationFilter, setLocationFilter] = useState('All');
    const [typeFilter, setTypeFilter] = useState('All');
    // Currency Converter Helper
    const formatPrice = (priceLacBDT) => {
        if (currency === 'USD') {
            // Approx 1 Lac BDT = ~$850 USD
            const usdValue = Math.round((priceLacBDT * 100000) / 118);
            return `$${usdValue.toLocaleString()}`;
        }
        // BDT Crore / Lac format
        if (priceLacBDT >= 100) {
            const crore = (priceLacBDT / 100).toFixed(2);
            return `৳ ${crore} ${language === 'bn' ? 'কোটি' : 'Cr'}`;
        }
        return `৳ ${priceLacBDT} ${language === 'bn' ? 'লাখ' : 'Lac'}`;
    };
    const filteredProjects = useMemo(() => {
        return PROJECTS_DATA.filter((project) => {
            // Tab Filter
            if (activeTab === 'Ongoing' && project.status !== 'Ongoing')
                return false;
            if (activeTab === 'Upcoming' && project.status !== 'Upcoming')
                return false;
            if (activeTab === 'Completed' && project.status !== 'Completed')
                return false;
            if (activeTab === 'Residential' && project.type !== 'Residential')
                return false;
            if (activeTab === 'Commercial' && project.type !== 'Commercial')
                return false;
            // Location Dropdown Filter
            if (locationFilter !== 'All') {
                const locLower = locationFilter.toLowerCase();
                if (!project.locationBn.toLowerCase().includes(locLower) &&
                    !project.locationEn.toLowerCase().includes(locLower)) {
                    return false;
                }
            }
            // Type Dropdown Filter
            if (typeFilter !== 'All' && project.type !== typeFilter)
                return false;
            // Search Query Filter
            if (searchQuery.trim() !== '') {
                const q = searchQuery.toLowerCase();
                const matchesTitle = project.titleBn.toLowerCase().includes(q) ||
                    project.titleEn.toLowerCase().includes(q) ||
                    project.locationBn.toLowerCase().includes(q) ||
                    project.locationEn.toLowerCase().includes(q) ||
                    project.address.toLowerCase().includes(q);
                if (!matchesTitle)
                    return false;
            }
            return true;
        });
    }, [activeTab, locationFilter, typeFilter, searchQuery]);
    return (<section id="projects" className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest block mb-2">
              {language === 'bn' ? 'আভিজাত্য ও নির্মাণের উৎকর্ষ' : 'Architectural Portfolio'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {language === 'bn' ? (<>ম্যাট্রিক্সের <span className="text-amber-400">স্বপ্নের প্রকল্পসমূহ</span></>) : (<>Matrix Landmark <span className="text-amber-400">Developments</span></>)}
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl font-light">
              {language === 'bn'
            ? 'গুলশান, বনানী, উত্তরা ও ধানমন্ডি এলাকার সেরা লোকেশনে নির্মিত ও নির্মাণাধীন প্রিমিয়াম স্পেস।'
            : 'Discover master-crafted residential penthouses and commercial headquarters across premier Dhaka zones.'}
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 bg-slate-900 border border-amber-500/20 px-4 py-2.5 rounded-2xl text-xs">
            <Shield className="w-4 h-4 text-amber-400"/>
            <span className="text-slate-300">
              {language === 'bn' ? 'রাজউক অনুমোদিত নকশা' : 'RAJUK Reg. Approved Plans'}
            </span>
          </div>
        </div>

        {/* Tab Filter Buttons & Search Controls */}
        <div className="space-y-6 mb-10">
          
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
            {[
            { key: 'All', labelBn: 'সকল প্রকল্প', labelEn: 'All Projects' },
            { key: 'Ongoing', labelBn: 'চলমান প্রকল্প (Ongoing)', labelEn: 'Ongoing' },
            { key: 'Upcoming', labelBn: 'আসন্ন প্রকল্প (Upcoming)', labelEn: 'Upcoming' },
            { key: 'Completed', labelBn: 'হস্তান্তরিত (Completed)', labelEn: 'Completed' },
            { key: 'Residential', labelBn: 'আবাসিক (Residential)', labelEn: 'Residential' },
            { key: 'Commercial', labelBn: 'বাণিজ্যিক (Commercial)', labelEn: 'Commercial' },
        ].map((tab) => (<button key={tab.key} onClick={() => setActiveTab(tab.key)} className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeTab === tab.key
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'}`}>
                {language === 'bn' ? tab.labelBn : tab.labelEn}
              </button>))}
          </div>

          {/* Detailed Search Bar & Location Filter */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
            {/* Search Input */}
            <div className="sm:col-span-1">
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={language === 'bn' ? 'প্রকল্পের নাম বা ঠিকানা লিখুন...' : 'Search by name or street...'} className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"/>
            </div>

            {/* Location Select */}
            <div>
              <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500">
                <option value="All">{language === 'bn' ? 'সকল লোকেশন (All Locations)' : 'All Locations'}</option>
                <option value="Gulshan">Gulshan / গুলশান</option>
                <option value="Banani">Banani / বনানী</option>
                <option value="Dhanmondi">Dhanmondi / ধানমন্ডি</option>
                <option value="Uttara">Uttara / উত্তরা</option>
              </select>
            </div>

            {/* Type Select */}
            <div>
              <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500">
                <option value="All">{language === 'bn' ? 'সকল প্রপার্টি টাইপ' : 'All Property Types'}</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
          </div>

        </div>

        {/* Property Grid */}
        {filteredProjects.length === 0 ? (<div className="text-center py-16 bg-slate-900/50 rounded-3xl border border-slate-800">
            <p className="text-slate-400 text-base">
              {language === 'bn'
                ? 'দুঃখিত, আপনার নির্বাচন করা ফিল্টারে কোনো প্রকল্প পাওয়া যায়নি।'
                : 'No property found matching your filter criteria. Try expanding search.'}
            </p>
            <button onClick={() => {
                setActiveTab('All');
                setLocationFilter('All');
                setTypeFilter('All');
                setSearchQuery('');
            }} className="mt-4 px-4 py-2 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-semibold">
              {language === 'bn' ? 'সকল ফিল্টার রিসেট করুন' : 'Reset Filters'}
            </button>
          </div>) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (<div key={project.id} className="bg-slate-900 rounded-3xl border border-slate-800/80 hover:border-amber-500/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group flex flex-col justify-between">
                {/* Image & Status Badge */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                  <img src={project.image} alt={project.titleEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer"/>
                  
                  {/* Status Overlay Badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-md ${project.status === 'Ongoing'
                    ? 'bg-amber-500 text-slate-950'
                    : project.status === 'Upcoming'
                        ? 'bg-blue-500 text-white'
                        : 'bg-emerald-500 text-slate-950'}`}>
                      {project.status}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {project.type}
                    </span>
                  </div>

                  {/* Starting Price Badge */}
                  <div className="absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur-md border border-amber-500/30 px-3 py-1.5 rounded-xl">
                    <div className="text-[10px] text-slate-400 uppercase font-medium">
                      {language === 'bn' ? 'শুরু' : 'Starts at'}
                    </div>
                    <div className="text-xs font-bold text-amber-400 font-mono">
                      {formatPrice(project.startingPriceBdtLac)}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5"/>
                      <span>{language === 'bn' ? project.locationBn : project.locationEn}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {language === 'bn' ? project.titleBn : project.titleEn}
                    </h3>

                    <p className="text-slate-400 text-xs line-clamp-2 mt-2 font-light">
                      {language === 'bn' ? project.descriptionBn : project.descriptionEn}
                    </p>
                  </div>

                  {/* Specs Pill Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400"/>
                      <span>{project.sizeRangeSqft}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-amber-400"/>
                      <span>{project.bedroomsRange}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-amber-400"/>
                      <span>{project.totalFloors} {language === 'bn' ? 'তলা' : 'Floors'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400"/>
                      <span>{project.handoverDate}</span>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-4 flex items-center gap-2">
                    <button onClick={() => onSelectProject(project)} className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-slate-700">
                      <Eye className="w-3.5 h-3.5 text-amber-400"/>
                      <span>{language === 'bn' ? 'ইউনিট ও ডিটেইলস' : 'View Units'}</span>
                    </button>

                    <button onClick={() => onOpenBooking(project.id)} className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-500/10 flex items-center gap-1">
                      <span>{language === 'bn' ? 'বুকিং' : 'Book'}</span>
                      <ChevronRight className="w-3.5 h-3.5"/>
                    </button>
                  </div>
                </div>

              </div>))}
          </div>)}

      </div>
    </section>);
};
