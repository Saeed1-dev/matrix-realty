import heroBannerImg from '../assets/images/matrix_hero_banner_1785830609437.jpg';
import penthouseImg from '../assets/images/matrix_luxury_penthouse_1785830623237.jpg';
import commercialImg from '../assets/images/matrix_commercial_tower_1785830635831.jpg';
export const PROJECTS_DATA = [
    {
        id: 'matrix-skyline-gulshan',
        titleBn: 'ম্যাট্রিক্স স্কাইলাইন (Matrix Skyline)',
        titleEn: 'Matrix Skyline Luxury Residences',
        taglineBn: 'গুলশান ২-এ অভিজাত ও আধুনিক বসবাসের শ্রেষ্ঠ ঠিকানা',
        taglineEn: 'The Pinnacle of Luxury Living in Gulshan 2',
        type: 'Residential',
        status: 'Ongoing',
        locationBn: 'গুলশান ২, ঢাকা',
        locationEn: 'Gulshan 2, Dhaka',
        address: 'Plot 14, Road 71, Gulshan 2, Dhaka 1212',
        image: heroBannerImg,
        gallery: [
            heroBannerImg,
            penthouseImg,
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
        ],
        priceRangeBn: '৳ ৩.৫ কোটি - ৳ ৬.৮ কোটি',
        priceRangeEn: 'BDT 3.5 Cr - BDT 6.8 Cr',
        startingPriceBdtLac: 350,
        sizeRangeSqft: '2,850 - 4,200 sqft',
        bedroomsRange: '4-5 Beds',
        handoverDate: 'December 2027',
        landArea: '18 Katha',
        totalFloors: 16,
        unitsPerFloor: 2,
        rajukApprovalNo: 'RAJUK/BP/GUL-2024/0892',
        descriptionBn: 'গুলশান লেকের অপূর্ব দৃশ্য, ৪০০০+ স্কয়ার ফিটের সুবিশাল স্পেস, এবং অত্যাধুনিক থ্রি-টিয়ার সিকিউরিটি সমৃদ্ধ ম্যাট্রিক্স স্কাইলাইন আপনার স্বপ্নের আবাসনকে এনে দেবে রাজকীয় মাত্রা।',
        descriptionEn: 'Featuring breathtaking views of Gulshan Lake, expansive 4,000+ sqft layouts, and intelligent triple-tier home automation, Matrix Skyline redefines elite urban living in Dhaka.',
        featuresBn: [
            'BUET সার্টিফাইড ভুমিকম্প সহনশীল কাঠামো (Earthquake Resistant)',
            'লেডিজ ও জেন্টস সাউনা এবং সুইমিং পুল (Rooftop Swimming Pool)',
            '২৪ ঘন্টা সোলার ব্যাকআপ ও প্রাইভেট ইভি চার্জিং স্টেশন',
            'স্মার্ট হোম সিকিউরিটি ও ফিঙ্গারপ্রিন্ট ডোর লক',
            'ল্যান্ডস্কেপড গ্রিন ব্যালকনি এবং সাউন্ডপ্রুফ গ্লাস ডোর'
        ],
        featuresEn: [
            'BUET Certified Earthquake Resistant Concrete & Steel Frame',
            'Rooftop Infinity Edge Swimming Pool & Wellness Spa',
            '24/7 Solar Backup Grid & EV Fast-Charging Bay',
            'Integrated Smart Home Automation & Biometric Security',
            'Acoustic Double-Glazed Windows & Landscaping'
        ],
        floorPlan2DImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
        floorPlan3DImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        virtualTourUrl: 'https://my.matterport.com/show/?m=sample',
        featured: true,
        units: [
            { id: 'u101', floor: '4th Floor', unitCode: '4A', sqft: 3250, bedrooms: 4, bathrooms: 5, facing: 'South-East', priceBdt: 390, status: 'Available' },
            { id: 'u102', floor: '4th Floor', unitCode: '4B', sqft: 2850, bedrooms: 4, bathrooms: 4, facing: 'South-West', priceBdt: 350, status: 'Available' },
            { id: 'u103', floor: '8th Floor', unitCode: '8A', sqft: 3500, bedrooms: 4, bathrooms: 5, facing: 'South-East Lake View', priceBdt: 440, status: 'Booked' },
            { id: 'u104', floor: '14th Floor (Duplex Penthouse)', unitCode: '14P', sqft: 4200, bedrooms: 5, bathrooms: 6, facing: '360 Panoramic View', priceBdt: 680, status: 'Available' },
        ]
    },
    {
        id: 'matrix-crown-banani',
        titleBn: 'ম্যাট্রিক্স ক্রাউন হাইটস (Matrix Crown Heights)',
        titleEn: 'Matrix Crown Heights',
        taglineBn: 'বনানীর প্রাইম লোকেশনে আধুনিক ও মার্জিত পরিবারিক আবাসন',
        taglineEn: 'Contemporary Elegance in the Heart of Banani',
        type: 'Residential',
        status: 'Ongoing',
        locationBn: 'বনানী, ঢাকা',
        locationEn: 'Banani, Dhaka',
        address: 'Block E, Road 11, Banani, Dhaka 1213',
        image: penthouseImg,
        gallery: [
            penthouseImg,
            'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80'
        ],
        priceRangeBn: '৳ ২.৪ কোটি - ৳ ৪.২ কোটি',
        priceRangeEn: 'BDT 2.4 Cr - BDT 4.2 Cr',
        startingPriceBdtLac: 240,
        sizeRangeSqft: '2,100 - 3,100 sqft',
        bedroomsRange: '3-4 Beds',
        handoverDate: 'June 2026',
        landArea: '12 Katha',
        totalFloors: 14,
        unitsPerFloor: 2,
        rajukApprovalNo: 'RAJUK/BP/BAN-2023/1104',
        descriptionBn: 'বনানী রোড ১১-এর ঠিক কাছেই শান্ত ও নিরিবিলি পরিবেশে অবস্থিত। প্রতিটি ফ্ল্যাটে পর্যাপ্ত প্রাকৃতিক আলো-বাতাস এবং আধুনিক আর্কিটেকচারের নিখুঁত সংমিশ্রণ।',
        descriptionEn: 'Located steps away from Banani Road 11 in a serene neighborhood. Combines open cross-ventilation layout with cutting-edge interior styling.',
        featuresBn: [
            'অভিজাত কমিউনিটি হল ও জিমনেসিয়াম',
            'ডাবল পার্কিং ক্যাাসিটি এবং ড্রাইভারস লাউঞ্জ',
            'সেন্ট্রাল ওয়াটার পিউরিফায়ার সিস্টেম',
            '২৪ ঘন্টা স্টেট-অফ-দ্য-আর্ট সিসিটিভি নজরদারি'
        ],
        featuresEn: [
            'Executive Community Lounge & Fully-Equipped Gym',
            'Double Dedicated Basement Parking per Apartment',
            'Central RO Water Filtration System',
            '24/7 Multi-Tier CCTV Security & Intercom'
        ],
        floorPlan2DImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
        floorPlan3DImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        featured: true,
        units: [
            { id: 'u201', floor: '3rd Floor', unitCode: '3A', sqft: 2100, bedrooms: 3, bathrooms: 3, facing: 'South', priceBdt: 240, status: 'Available' },
            { id: 'u202', floor: '6th Floor', unitCode: '6B', sqft: 2550, bedrooms: 4, bathrooms: 4, facing: 'South-East', priceBdt: 310, status: 'Available' },
            { id: 'u203', floor: '10th Floor', unitCode: '10A', sqft: 3100, bedrooms: 4, bathrooms: 5, facing: 'South', priceBdt: 420, status: 'Available' }
        ]
    },
    {
        id: 'matrix-tech-park-gulshan-avenue',
        titleBn: 'ম্যাট্রিক্স টেক পার্ক (Matrix Tech Park)',
        titleEn: 'Matrix Tech Park Commercial Plaza',
        taglineBn: 'গুলশান এভিনিউতে এ-গ্রেড বাণিজ্যিক ও করপোরেট হেডকোয়ার্টার',
        taglineEn: 'Grade-A Commercial Headquarters on Gulshan Avenue',
        type: 'Commercial',
        status: 'Ongoing',
        locationBn: 'গুলশান এভিনিউ, ঢাকা',
        locationEn: 'Gulshan Avenue, Dhaka',
        address: 'Gulshan Avenue, Dhaka 1212',
        image: commercialImg,
        gallery: [
            commercialImg,
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80'
        ],
        priceRangeBn: '৳ ৭.৫ কোটি - ৳ ২৫ কোটি',
        priceRangeEn: 'BDT 7.5 Cr - BDT 25 Cr',
        startingPriceBdtLac: 750,
        sizeRangeSqft: '3,500 - 12,000 sqft',
        bedroomsRange: 'Commercial Spaces',
        handoverDate: 'March 2027',
        landArea: '25 Katha',
        totalFloors: 22,
        unitsPerFloor: 2,
        rajukApprovalNo: 'RAJUK/BP/COM-2024/0019',
        descriptionBn: 'আন্তর্জাতিক মানের গ্লাস ক্যাটেন ট্রিপল গ্লেজিং, সেন্ট্রাল ভিআরএফ এসি এবং সুপারফাস্ট ৮টি প্যাসেঞ্জার লিফট সম্বলিত কর্পোরেট পার্ক।',
        descriptionEn: 'Featuring LEED Gold green building compliance, central VRF HVAC system, high-speed elevators, and automated multi-level basement parking.',
        featuresBn: [
            'LEED গোল্ড সার্টিফাইড পরিবেশবান্ধব গ্রিন বিল্ডিং',
            'সেন্ট্রাল ভিআরএফ এয়ার কন্ডিশনিং সিস্টেম',
            'স্মার্ট পার্কিং ও অটোমেটেড এক্সেস কন্ট্রোল',
            '১০০% হেভি ডিউটি জেনারেটর ব্যাকআপ'
        ],
        featuresEn: [
            'LEED Gold Certified Eco-Friendly Commercial Infrastructure',
            'Centralized VRF HVAC Air Conditioning System',
            'Automated Barrier Gate & Visitor Management System',
            '100% Full Electrical Load Generator Backup'
        ],
        floorPlan2DImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
        floorPlan3DImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        featured: true,
        units: [
            { id: 'u301', floor: '5th Floor', unitCode: '501', sqft: 3500, bedrooms: 0, bathrooms: 4, facing: 'Gulshan Avenue Frontage', priceBdt: 750, status: 'Available' },
            { id: 'u302', floor: '12th Floor Full Floor', unitCode: '1200', sqft: 8500, bedrooms: 0, bathrooms: 8, facing: 'Panoramic Avenue View', priceBdt: 1850, status: 'Available' }
        ]
    },
    {
        id: 'matrix-green-uttara',
        titleBn: 'ম্যাট্রিক্স গ্রীন পেভিলিয়ন (Matrix Green Pavilion)',
        titleEn: 'Matrix Green Pavilion',
        taglineBn: 'উত্তরা সেক্টর ১১-এ শান্তিময় সবুজ ও সুস্থ জীবনের মেলবন্ধন',
        taglineEn: 'Serene Green Family Living in Uttara Sector 11',
        type: 'Residential',
        status: 'Upcoming',
        locationBn: 'উত্তরা, ঢাকা',
        locationEn: 'Uttara, Dhaka',
        address: 'Sector 11, Road 18, Uttara, Dhaka 1230',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
        ],
        priceRangeBn: '৳ ১.৮ কোটি - ৳ ২.৯ কোটি',
        priceRangeEn: 'BDT 1.8 Cr - BDT 2.9 Cr',
        startingPriceBdtLac: 180,
        sizeRangeSqft: '1,850 - 2,400 sqft',
        bedroomsRange: '3-4 Beds',
        handoverDate: 'September 2028',
        landArea: '15 Katha',
        totalFloors: 10,
        unitsPerFloor: 3,
        rajukApprovalNo: 'RAJUK/BP/UTT-2024/0521',
        descriptionBn: 'উত্তরা প্রাকৃতির সান্নিধ্যে তৈরি সবুজময় মেগা প্রকল্প। পরিবারের প্রতিটি সদস্যের জন্য রুফটপ গার্ডেন, প্লে জোন এবং ইনডোর গেমস কর্নার।',
        descriptionEn: 'A tranquil sanctuary located in Sector 11 Uttara. Designed with spacious balconies, children playground, and solar rainwater harvesting.',
        featuresBn: [
            'শিশুদের নিরাপদ খেলার মাঠ ও কিডস প্লেইং জোন',
            'বৃষ্টির পানি সংরক্ষণ ও সোলার মেকানিজম',
            'যোগ ব্যায়াম ও মেডিটেশন ডেকে সুবিশাল জায়গা',
            'প্রশস্ত ড্রাইভওয়ে ও সবুজ বাগান'
        ],
        featuresEn: [
            'Dedicated Children Safe Play Zone & Indoor Activity Area',
            'Rainwater Harvesting & Rooftop Solar System',
            'Yoga Deck & Landscaping Walkway',
            'Spacious Driveway & Entry Lobby'
        ],
        floorPlan2DImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
        floorPlan3DImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        featured: false,
        units: [
            { id: 'u401', floor: '2nd Floor', unitCode: '2B', sqft: 1850, bedrooms: 3, bathrooms: 3, facing: 'South', priceBdt: 180, status: 'Available' },
            { id: 'u402', floor: '5th Floor', unitCode: '5A', sqft: 2400, bedrooms: 4, bathrooms: 4, facing: 'South-East Corner', priceBdt: 250, status: 'Available' }
        ]
    },
    {
        id: 'matrix-regency-dhanmondi',
        titleBn: 'ম্যাট্রিক্স রিজেন্সি (Matrix Regency)',
        titleEn: 'Matrix Regency',
        taglineBn: 'ধানমন্ডি লেক সংলগ্ন ঐতিহ্যের সাথে আধুনিকতার অপূর্ব মেলবন্ধন',
        taglineEn: 'Lakeside Prestige & Heritage in Dhanmondi',
        type: 'Residential',
        status: 'Completed',
        locationBn: 'ধানমন্ডি, ঢাকা',
        locationEn: 'Dhanmondi, Dhaka',
        address: 'Road 8/A, Dhanmondi, Dhaka 1209',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
        ],
        priceRangeBn: '৳ ৩.২ কোটি - ৳ ৪.৮ কোটি',
        priceRangeEn: 'BDT 3.2 Cr - BDT 4.8 Cr',
        startingPriceBdtLac: 320,
        sizeRangeSqft: '2,600 - 3,400 sqft',
        bedroomsRange: '4 Beds',
        handoverDate: 'Ready (Handed Over 2025)',
        landArea: '14 Katha',
        totalFloors: 12,
        unitsPerFloor: 2,
        rajukApprovalNo: 'RAJUK/BP/DHN-2022/0441',
        descriptionBn: 'ধানমন্ডি লেকের একেবারে কাছেই সফলভাবে হস্তান্তরিত প্রিমিয়াম এপার্টমেন্ট কমপ্লেক্স। কয়েকধাপ নিরাপত্তা ও সুসজ্জিত কমিউনিটি লাউঞ্জ।',
        descriptionEn: 'Fully completed and successfully handed over premium complex near Dhanmondi lake. Features refined marble finishes and rooftop gazebo.',
        featuresBn: [
            'সম্পূর্ণ প্রস্তুত ও হস্তান্তরিত (Ready to Move)',
            'ধানমন্ডি লেকের হাঁটা দূরত্বের সুবিধাজনক অবস্থান',
            'মার্বেল ফিটিং ও ইম্পোর্টেড কিচেন কেবিনেট',
            '২৪ ঘন্টা নিজস্ব সিকিউরিটি টিম'
        ],
        featuresEn: [
            'Ready to Move (100% Handed Over with Registration)',
            'Walking Distance to Dhanmondi Lake & Schools',
            'Premium Italian Marble Flooring & Kitchen Accessories',
            'Dedicated Facilities Management Team'
        ],
        floorPlan2DImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
        floorPlan3DImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        featured: false,
        units: [
            { id: 'u501', floor: '7th Floor (Resale)', unitCode: '7A', sqft: 2800, bedrooms: 4, bathrooms: 4, facing: 'Lake View South', priceBdt: 360, status: 'Available' }
        ]
    }
];
export const TESTIMONIALS = [
    {
        id: 't1',
        name: 'ডা. এ কে এম শামসুল আলম',
        roleBn: 'জ্যেষ্ঠ হৃদরোগ বিশেষজ্ঞ, স্কয়ার হাসপাতাল',
        roleEn: 'Senior Cardiologist, Square Hospital',
        projectBn: 'ম্যাট্রিক্স স্কাইলাইন, গুলশান ২',
        projectEn: 'Matrix Skyline, Gulshan 2',
        commentBn: 'মেট্রিক্স রিয়েলটির প্রতিশ্রুতি রক্ষা করার মানসিকতা সত্যিই অতুলনীয়। নির্দিষ্ট সময়ের আগেই আমার ফ্ল্যাটের চাবি পেয়েছি এবং ফিনিশিং কোয়ালিটি স্বপ্নের চেয়েও চমৎকার!',
        commentEn: 'Matrix Realty delivered ahead of our promised handover deadline. The build quality, acoustic soundproofing, and structural elegance surpassed my expectations.',
        rating: 5,
       // avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80'
    },
    {
        id: 't2',
        name: 'সামিয়া হক',
        roleBn: 'ম্যানেজিং ডিরেক্টর, টেকক্রাফট বাংলাদেশ',
        roleEn: 'Managing Director, TechCraft BD',
        projectBn: 'ম্যাট্রিক্স ক্রাউন হাইটস, বনানী',
        projectEn: 'Matrix Crown Heights, Banani',
        commentBn: 'সন্তানদের সুরক্ষার জন্য থ্রি-টিয়ার অটোমেশন ও গ্রিন ব্যালকনি পরিবেশ আমাদের সবচেয়ে আনন্দ দিয়েছে। ম্যাট্রিক্সে বিনিয়োগ করে আমরা নিশ্চিত নিশ্চিন্ত অনুভব করি।',
        commentEn: 'Investing with Matrix Realty gave us ultimate peace of mind. The triple-tier automation and dedicated green play zones make it a dream sanctuary for our family.',
        rating: 5,
        //avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    {
        id: 't3',
        name: 'ইঞ্জিনিয়ার রফিকুল ইসলাম',
        roleBn: 'জমিদাতা (Landowner Partner)',
        roleEn: 'Landowner Partner',
        projectBn: 'ম্যাট্রিক্স গ্রীন পেভিলিয়ন, উত্তরা',
        projectEn: 'Matrix Green Pavilion, Uttara',
        commentBn: 'আমার ১৫ কাঠার প্লট ডেভেলপমেন্টের জন্য একাধিক কোম্পানি দেখে অবশেষে ম্যাট্রিক্সকে বেছে নেই। তাদের স্বচ্ছতা, রাজউক এপ্রুভাল স্পিড ও জমিদাতার প্রতি সম্মান প্রশংসনীয়।',
        commentEn: 'Selecting Matrix Realty for our joint venture development was the best decision. Their architectural transparency and legal integrity are unmatched.',
        rating: 5,
        //avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
];
