export type Language = "bn" | "en";

export interface ServiceItem {
  title: string;
  desc: string;
  details: string[];
}

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    services: string;
    whyUs: string;
    umrah: string;
    offices: string;
    contact: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleHighlight: string;
    titleLast: string;
    tagline: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    successBadge: string;
  };
  about: {
    title: string;
    subtitle: string;
    intro: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    valuesTitle: string;
    values: {
      integrity: { title: string; desc: string };
      excellence: { title: string; desc: string };
      transparency: { title: string; desc: string };
      commitment: { title: string; desc: string };
    };
  };
  services: {
    title: string;
    subtitle: string;
    cta: string;
    items: {
      umrah: ServiceItem;
      studentVisa: ServiceItem;
      workPermit: ServiceItem;
      immigration: ServiceItem;
      ticketing: ServiceItem;
      otherVisa: ServiceItem;
    };
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    advantages: {
      title: string;
      desc: string;
    }[];
    timeline: {
      year: string;
      title: string;
      desc: string;
    }[];
  };
  umrahSuccess: {
    title: string;
    subtitle: string;
    desc1: string;
    desc2: string;
    highlightCard: {
      title: string;
      groupSize: string;
      destination: string;
      duration: string;
      serviceLevel: string;
    };
    galleryTitle: string;
  };
  offices: {
    title: string;
    subtitle: string;
    headOffice: {
      title: string;
      addressLabel: string;
      address: string;
      phoneLabel: string;
      phones: string[];
    };
    dhakaOffice: {
      title: string;
      addressLabel: string;
      address: string;
      phoneLabel: string;
      phones: string[];
    };
    mapButton: string;
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    successMsg: string;
    infoTitle: string;
    emailLabel: string;
    fbLabel: string;
    callButton: string;
  };
  footer: {
    quickLinks: string;
    services: string;
    contact: string;
    rights: string;
    logoSubtitle: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  bn: {
    nav: {
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      services: "সেবাসমূহ",
      whyUs: "কেন আমরা",
      umrah: "সফল ওমরাহ",
      offices: "অফিসসমূহ",
      contact: "যোগাযোগ",
    },
    hero: {
      badge: "আপনার বিশ্বস্ত আন্তর্জাতিক ভ্রমণ সহযোগী",
      titleFirst: "জাহাঙ্গীরনগর এয়ার ইন্টারন্যাশনাল",
      titleHighlight: "(জেএআই)",
      titleLast: "এর সাথে বিশ্ব আপনার হাতের মুঠোয়",
      tagline: "আপনার বৈশ্বিক সম্ভাবনার প্রবেশদ্বার",
      desc: "বিশ্বস্ততা, সততা এবং শতভাগ স্বচ্ছতার সাথে হজ ও ওমরাহ সেবা, স্টুডেন্ট ভিসা, ওয়ার্ক পারমিট গাইডলাইন, ইমিগ্রেশন ও এয়ার টিকিট বুকিংয়ের প্রিমিয়ার ওয়ান-স্টপ সল্যুশন।",
      ctaPrimary: "যোগাযোগ করুন",
      ctaSecondary: "আমাদের সেবাসমূহ",
      successBadge: "প্রথম ওমরাহ গ্রুপ সফলভাবে সম্পন্ন",
    },
    about: {
      title: "জেএআই সম্পর্কে",
      subtitle: "একটি প্রগতিশীল আন্তর্জাতিক কর্পোরেট ট্রাভেল ও ভিসা কনসালটেন্সি এজেন্সি",
      intro: "জাহাঙ্গীরনগর এয়ার ইন্টারন্যাশনাল (জেএআই) একটি বিশ্বমানের এবং প্রিমিয়াম ভ্রমণ ও ভিসা কনসালটেন্সি এজেন্সি। আমরা অত্যন্ত সততা, নিষ্ঠা ও স্বচ্ছতার সাথে ক্লায়েন্টদের আন্তর্জাতিক ক্যারিয়ার ও ভ্রমণের স্বপ্ন পূরণে নিরলস কাজ করে যাচ্ছি। আমাদের সুদক্ষ টিম প্রতিটি পদক্ষেপে আপনাকে সঠিক এবং আইনি গাইডলাইন প্রদান করতে প্রতিশ্রুতিবদ্ধ।",
      missionTitle: "আমাদের মিশন",
      missionDesc: "প্রিমিয়াম কোয়ালিটি, বিশ্বমানের আতিথেয়তা এবং নির্ভুল আইনি পরামর্শের মাধ্যমে ক্লায়েন্টদের হজ ও ওমরাহ পালন, আন্তর্জাতিক উচ্চশিক্ষা এবং পেশাদার ক্যারিয়ার গড়ার যাত্রাকে সহজ, নিরাপদ ও সাফল্যমণ্ডিত করা।",
      visionTitle: "আমাদের ভিশন",
      visionDesc: "স্বচ্ছতা ও বিশ্বস্ততার মূর্ত প্রতীক হিসেবে বাংলাদেশে আন্তর্জাতিক মবিলিটি এবং ট্রাভেল সেক্টরে শীর্ষস্থানীয় এবং সবচেয়ে মর্যাদাপূর্ণ ব্র্যান্ড হিসেবে প্রতিষ্ঠিত হওয়া।",
      valuesTitle: "আমাদের মূল চালিকাশক্তি",
      values: {
        integrity: {
          title: "নিখাদ সততা",
          desc: "কোনো গোপন খরচ বা বিভ্রান্তিকর তথ্য ছাড়া শতভাগ স্বচ্ছতার সাথে আমরা প্রতিটি আইনি প্রক্রিয়া সম্পন্ন করি।"
        },
        excellence: {
          title: "প্রিমিয়াম মান",
          desc: "আমাদের সেবার মান আন্তর্জাতিক পর্যায়ের, যা আপনার মর্যাদা ও আরামদায়ক অভিজ্ঞতার নিশ্চয়তা দেয়।"
        },
        transparency: {
          title: "সম্পূর্ণ স্বচ্ছতা",
          desc: "আবেদন প্রক্রিয়া থেকে শুরু করে ভিসা প্রাপ্তি পর্যন্ত প্রতিটি ধাপে গ্রাহককে লাইভ আপডেট প্রদান করা হয়।"
        },
        commitment: {
          title: "গ্রাহক সন্তুষ্টি",
          desc: "ক্লায়েন্টদের স্বপ্ন ও সফলতাই আমাদের সর্বোচ্চ অগ্রাধিকার। আমরা তাদের প্রতিটি আস্থার মর্যাদা দিতে বদ্ধপরিকর।"
        }
      }
    },
    services: {
      title: "আমাদের প্রিমিয়ার সেবাসমূহ",
      subtitle: "সুনির্দিষ্ট ও লক্ষ্যভিত্তিক আন্তর্জাতিক ভিসা এবং ট্রাভেল কনসালটেন্সি সেবা",
      cta: "বিস্তারিত জানতে যোগাযোগ করুন",
      items: {
        umrah: {
          title: "হজ ও ওমরাহ সেবাসমূহ",
          desc: "পবিত্র মক্কা ও মদিনায় আপনার ইবাদতের যাত্রাকে আরামদায়ক ও আধ্যাত্মিকভাবে সফল করতে আমাদের প্রিমিয়াম প্যাকেজসমূহ।",
          details: [
            "পবিত্র মক্কা ও মদিনার কাছে ফাইভ স্টার ও ফোর স্টার হোটেল বুকিং",
            "সম্পূর্ণ আইনি ও শরীয়াহ সম্মত গাইডলাইন ও অভিজ্ঞ মোয়াল্লিম সুবিধা",
            "আরামদায়ক ট্রান্সপোর্টেশন এবং কাস্টমাইজড ফ্যামিলি প্যাকেজ"
          ]
        },
        studentVisa: {
          title: "স্টুডেন্ট ভিসা",
          desc: "বিশ্বের শীর্ষস্থানীয় বিশ্ববিদ্যালয়গুলোতে আপনার উচ্চশিক্ষার স্বপ্ন বাস্তবায়নে সম্পূর্ণ গাইডলাইন এবং অ্যাপ্লিকেশন প্রসেসিং।",
          details: [
            "সঠিক বিশ্ববিদ্যালয় ও সাবজেক্ট সিলেকশন গাইডেন্স",
            "স্কলারশিপ আবেদন এবং আইএলটিএস (IELTS) প্রস্তুতি গাইড",
            "ভিসা ইন্টারভিউ প্রস্তুতি এবং স্পন্সরশিপ ডকুমেন্টেশন সাপোর্ট"
          ]
        },
        workPermit: {
          title: "ওয়ার্ক পারমিট গাইডলাইন",
          desc: "বৈধভাবে বিদেশে পেশাদার ক্যারিয়ার গড়ার লক্ষ্যে সঠিক ওয়ার্ক পারমিট আবেদন এবং আইনি প্রক্রিয়ার নির্ভরযোগ্য গাইডলাইন।",
          details: [
            "বিভিন্ন দেশের সরকারি ও আইনি নিয়োগ নির্দেশিকা বিশ্লেষণ",
            "ডকুমেন্ট ভেরিফিকেশন এবং সিভি অপ্টিমাইজেশন",
            "নিয়োগকর্তার সাথে যোগাযোগ এবং ইন্টারভিউ ব্রিফিং"
          ]
        },
        immigration: {
          title: "ইমিগ্রেশন সেবাসমূহ",
          desc: "স্থায়ীভাবে বিদেশে বসবাসের জন্য নির্ভরযোগ্য এবং অভিজ্ঞ আইনজীবীদের তত্ত্বাবধানে আইনি ইমিগ্রেশন প্রসেসিং।",
          details: [
            "কানাডা, অস্ট্রেলিয়া ও ইউরোপের এক্সপ্রেস এন্ট্রি ও পিআর প্রসেসিং",
            "যোগ্যতা মূল্যায়ন ও নিখুঁত পয়েন্ট ক্যালকুলেশন",
            "আইনি জটিলতামুক্ত ও দ্রুততম সময়ে ফাইল সাবমিশন"
          ]
        },
        ticketing: {
          title: "আন্তর্জাতিক বিমান টিকিট বুকিং",
          desc: "বিশ্বের যেকোনো প্রান্তে সুলভ মূল্যে এবং দ্রুততম সময়ে টিকিট বুকিং ও তাৎক্ষণিক ফ্লাইট পরিবর্তন সুবিধা।",
          details: [
            "সকল শীর্ষস্থানীয় এয়ারলাইন্সের টিকিট বুকিং সুবিধা",
            "গ্রুপ বুকিং এবং কর্পোরেট ট্রাভেল ডিসকাউন্ট",
            "২৪/৭ জরুরি কাস্টমার কেয়ার ও টিকিট রিইস্যু সাপোর্ট"
          ]
        },
        otherVisa: {
          title: "অন্যান্য আন্তর্জাতিক ভ্রমণ ও ভিসা সেবাসমূহ",
          desc: "বিশ্বের বিভিন্ন দেশের ট্যুরিস্ট ভিসা, ফ্যামিলি রিইউনিয়ন ভিসা এবং ট্রাভেল ইন্স্যুরেন্স সংক্রান্ত সার্বিক সমাধান।",
          details: [
            "ট্যুরিস্ট এবং বিজনেস ভিসা ইনভাইটেশন ও ডকুমেন্ট প্রিপারেশন",
            "মেডিকেল ও ফ্যামিলি পারমিট ভিসা প্রসেসিং",
            "ট্রাভেল প্ল্যানিং, হোটেল বুকিং এবং ট্রাভেল ইন্স্যুরেন্স"
          ]
        }
      }
    },
    whyChooseUs: {
      title: "কেন জেএআই বেছে নেবেন?",
      subtitle: "সততা, স্বচ্ছতা এবং আভিজাত্যের নিখুঁত সমন্বয়",
      advantages: [
        {
          title: "শতভাগ আইনি ও স্বচ্ছ প্রক্রিয়া",
          desc: "আমরা প্রতিটি ফাইল অত্যন্ত সততার সাথে মূল্যায়ন করি এবং কোনো প্রকার গোপন বা অতিরিক্ত খরচ রাখি না।"
        },
        {
          title: "প্রিমিয়াম ওয়ান-স্টপ ট্রাভেল সল্যুশন",
          desc: "টিকিট, ভিসা, গাইডলাইন থেকে শুরু করে থাকার জায়গা - সব একটি প্ল্যাটফর্মেই প্রিমিয়াম মানের সাথে সুনিশ্চিত করা হয়।"
        },
        {
          title: "ব্যক্তিগতকৃত কনসালটেন্সি",
          desc: "আমাদের বিশেষজ্ঞ টিম প্রতিটি ক্লায়েন্টকে তাদের যোগ্যতা ও চাহিদা অনুযায়ী ডেডিকেটেড সময় ও পরামর্শ দিয়ে থাকে।"
        }
      ],
      timeline: [
        {
          year: "১ম ওমরাহ",
          title: "প্রথম সফল ওমরাহ গ্রুপ পরিচালনা",
          desc: "অত্যন্ত সুনামের সাথে আমাদের প্রথম বড় ওমরাহ কাফেলা পবিত্র মক্কা ও মদিনায় তাদের পবিত্র ইবাদত সম্পন্ন করেন।"
        },
        {
          year: "শতভাগ",
          title: "গ্রাহক সন্তুষ্টি ও বিশ্বস্ততা অর্জন",
          desc: "আমাদের সততা এবং স্বচ্ছতার কারণে স্বল্প সময়েই আমরা গ্রাহকদের আস্থার শীর্ষে পৌঁছাতে সক্ষম হয়েছি।"
        }
      ]
    },
    umrahSuccess: {
      title: "সফল ওমরাহ যাত্রা",
      subtitle: "আমাদের প্রথম সফল ওমরাহ গ্রুপের আলোকচিত্র ও অভিজ্ঞতা",
      desc1: "পরম করুণাময় আল্লাহর অশেষ রহমতে জাহাঙ্গীরনগর এয়ার ইন্টারন্যাশনাল (জেএআই) অত্যন্ত সুনামের সাথে প্রথম ওমরাহ কাফেলা সম্পন্ন করেছে। আমাদের সকল সম্মানিত হাজী সাহেবান পবিত্র মক্কা ও মদিনায় সম্পূর্ণ ঝামেলাহীনভাবে তাদের হজ ও ইবাদত পালন করেছেন।",
      desc2: "গ্রাহকদের চমৎকার সেবা, ফাইভ স্টার হোটেল সুবিধা, এবং আন্তরিক মোয়াল্লিম গাইডের মাধ্যমে আমরা প্রতিটি হাজীর আরামদায়ক ও আধ্যাত্মিক অভিজ্ঞতা নিশ্চিত করেছি। এই অবিস্মরণীয় মুহূর্তটি আমাদের অনুপ্রেরণা যোগায় সামনের দিকে এগিয়ে যাওয়ার।",
      highlightCard: {
        title: "১ম ওমরাহ গ্রুপ হাইলাইট",
        groupSize: "সফল কাফেলা",
        destination: "মক্কা ও মদিনা শরীফ",
        duration: "প্রিমিয়াম প্যাকেজ",
        serviceLevel: "৫-স্টার হোটেল ও গাইডেন্স"
      },
      galleryTitle: "গ্রুপের স্মৃতিমধুর মুহূর্তসমূহ"
    },
    offices: {
      title: "আমাদের অফিসসমূহ",
      subtitle: "সরাসরি যোগাযোগ করতে এবং সুপরামর্শ নিতে আমাদের অফিসে স্বাগতম",
      headOffice: {
        title: "প্রধান কার্যালয় (Head Office)",
        addressLabel: "ঠিকানা",
        address: "গাজীর খামার বাজার, কৃষি ব্যাংকের নিচ তলা, তোফাজ্জল ইলেকট্রনিক-এর নিচে।",
        phoneLabel: "ফোন নম্বর",
        phones: ["01971941428", "01711941428"]
      },
      dhakaOffice: {
        title: "ঢাকা অফিস (Dhaka Office)",
        addressLabel: "ঠিকানা",
        address: "ন্যাশনাল স্ট্যান্ডার্ড স্কুল অ্যান্ড কলেজ, বাড়ি # ১৪, রোড # ৪, ডি ব্লক, বনশ্রী, রামপুরা, ঢাকা।",
        phoneLabel: "ফোন নম্বর",
        phones: ["01835922789"]
      },
      mapButton: "গুগল ম্যাপে দেখুন"
    },
    contact: {
      title: "যোগাযোগ করুন",
      subtitle: "আপনার যেকোনো জিজ্ঞাসা বা পরামর্শে আমরা সর্বদা আপনার পাশে আছি",
      formTitle: "আমাদের বার্তা পাঠান",
      name: "আপনার নাম",
      email: "ইমেইল ঠিকানা",
      phone: "মোবাইল নম্বর",
      subject: "বিষয়",
      message: "আপনার বার্তা",
      send: "বার্তা পাঠান",
      sending: "পাঠানো হচ্ছে...",
      successMsg: "আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে! আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।",
      infoTitle: "জরুরি যোগাযোগের তথ্য",
      emailLabel: "ইমেইল করুন",
      fbLabel: "ফেসবুক পেজ",
      callButton: "কল করুন"
    },
    footer: {
      quickLinks: "কুইক লিংক",
      services: "সেবাসমূহ",
      contact: "যোগাযোগ",
      rights: "সর্বস্বত্ব সংরক্ষিত। জাহাঙ্গীরনগর এয়ার ইন্টারন্যাশনাল (জেএআই)",
      logoSubtitle: "আপনার বৈশ্বিক সম্ভাবনার প্রবেশদ্বার"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      whyUs: "Why Choose Us",
      umrah: "Umrah Success",
      offices: "Offices",
      contact: "Contact",
    },
    hero: {
      badge: "Your Trusted Global Travel Partner",
      titleFirst: "Jahangirnagar Air International",
      titleHighlight: "(JAI)",
      titleLast: "Opens the World to You",
      tagline: "Your Gateway to Global Opportunities",
      desc: "Your premium, elite one-stop solution for Hajj & Umrah services, Student Visa consultation, Work Permit guidance, Immigration processing, and International Ticket booking with absolute transparency and integrity.",
      ctaPrimary: "Contact Us Now",
      ctaSecondary: "Our Services",
      successBadge: "First Umrah Group Successfully Completed",
    },
    about: {
      title: "About JAI",
      subtitle: "A Premium International Corporate Travel & Visa Consultancy Agency",
      intro: "Jahangirnagar Air International (JAI) is a high-end corporate travel and elite visa consultancy firm. Committed to the highest standards of professional integrity and client-centric excellence, we guide aspirants, students, and travelers in fulfilling their dreams of global mobility with 100% legal compliance and transparency.",
      missionTitle: "Our Mission",
      missionDesc: "To deliver premium-quality hospitality, ethical consulting, and seamless processing that empowers clients to perform Hajj & Umrah peacefully, pursue prestigious global education, and build rewarding international careers.",
      visionTitle: "Our Vision",
      visionDesc: "To set the industry benchmark for transparency, trust, and luxury service in international mobility, becoming Bangladesh's most premium and respected travel brand.",
      valuesTitle: "Our Core Pillars",
      values: {
        integrity: {
          title: "Absolute Integrity",
          desc: "We stand for complete transparency with no hidden charges, realistic timelines, and strictly legal procedures."
        },
        excellence: {
          title: "Elite Quality",
          desc: "We deliver luxury hospitality and executive-class services, ensuring a prestigious and comfortable journey."
        },
        transparency: {
          title: "Full Transparency",
          desc: "From the initial consultation to final visa issuance, clients are provided with live updates at every stage of their case."
        },
        commitment: {
          title: "Client Success",
          desc: "Your aspirations are our guiding mission. We commit our extensive resources and dedication to ensuring positive outcomes."
        }
      }
    },
    services: {
      title: "Our Premier Services",
      subtitle: "Exclusive travel, visas, and consulting solutions crafted for excellence",
      cta: "Contact Us to Learn More",
      items: {
        umrah: {
          title: "Hajj & Umrah Services",
          desc: "Embark on a sacred journey of a lifetime with our premium Hajj and Umrah custom packages.",
          details: [
            "Luxury 4-star and 5-star hotel bookings in close proximity to Haram Sharif",
            "Shariah-compliant guidance led by deeply experienced Islamic guides (Muallims)",
            "Comfortable, high-end private transportation and custom family packages"
          ]
        },
        studentVisa: {
          title: "Student Visa",
          desc: "Fulfill your higher education aspirations at top-tier universities across the globe with expert application consulting.",
          details: [
            "Comprehensive university match and subject selection guidance",
            "Expert assistance on global scholarship applications and IELTS preparation",
            "Thorough visa interview prep and premium sponsorship documentation support"
          ]
        },
        workPermit: {
          title: "Work Permit Guideline",
          desc: "Ethical and legally compliant guidelines for pursuing successful professional careers in prestigious international markets.",
          details: [
            "Analysis of legal employment paths and international government standards",
            "Professional resume restructuring, profile optimization, and document verification",
            "Employer liaison guidance and rigorous mock interview preparations"
          ]
        },
        immigration: {
          title: "Immigration Services",
          desc: "Resettle globally and secure permanent residency in world-class countries through highly skilled professional legal routes.",
          details: [
            "Express Entry, Skilled Worker, and Permanent Residency (PR) processing",
            "Accurate profile assessment and point calculation by legal experts",
            "Impeccable legal compilation and timely file submission to authorities"
          ]
        },
        ticketing: {
          title: "International Air Ticket Booking",
          desc: "Instant international flight booking, ticket modifications, and corporate discounts to anywhere in the world.",
          details: [
            "Affordable and optimized ticket bookings with all major global airlines",
            "Special group booking privileges and custom corporate discount models",
            "24/7 dedicated support for emergency flight changes, cancellations, and reissues"
          ]
        },
        otherVisa: {
          title: "Other International Travel & Visa Services",
          desc: "Comprehensive visa processing support for tourist, business, family reunion visits, and robust travel insurance.",
          details: [
            "Polished documentation check and official invitation assistance",
            "Tourist, Medical, and Family Reunion visa applications worldwide",
            "Custom itinerary creation, hotel bookings, and international travel insurance"
          ]
        }
      }
    },
    whyChooseUs: {
      title: "Why Choose JAI?",
      subtitle: "The Perfect Harmony of Integrity, Luxury, and Elite Success",
      advantages: [
        {
          title: "100% Legal & Transparent Process",
          desc: "We evaluate files strictly on merit. We stand against hidden charges, false promises, or misleading guidelines."
        },
        {
          title: "Premium One-Stop Solution",
          desc: "From flight tickets to premium hotel accommodation, visas, and travel insurance, everything is managed flawlessly."
        },
        {
          title: "Expert Executive Consultation",
          desc: "Our highly trained consultants provide individualized attention, ensuring maximum chance of approval."
        }
      ],
      timeline: [
        {
          year: "1st Group",
          title: "First Successful Umrah Group",
          desc: "Our inaugural group of pilgrims successfully performed their holy Umrah with our direct, high-end guidance and care."
        },
        {
          year: "100%",
          title: "Absolute Transparency and Client Trust",
          desc: "We quickly earned a prestigious reputation for being one of the most reliable and transparent travel agencies."
        }
      ]
    },
    umrahSuccess: {
      title: "Successful Umrah Journey",
      subtitle: "Moments from our inaugural successful Umrah group",
      desc1: "By the grace of Almighty Allah, Jahangirnagar Air International (JAI) has successfully conducted our first Umrah group voyage. Our respected pilgrims experienced a seamless, spiritually uplifting, and deeply comforting journey to the Holy land.",
      desc2: "We secured close-proximity 5-star accommodations, direct and comfortable private transfers, and scholarly guides to accompany them at every stage of their rituals. This milestone stands as a testament to our promise of quality and devotion.",
      highlightCard: {
        title: "1st Umrah Group Highlights",
        groupSize: "Successful Group",
        destination: "Makkah & Madinah Sharif",
        duration: "Premium Package",
        serviceLevel: "5-Star Hotels & Private Guiding"
      },
      galleryTitle: "Memories from the Sacred Journey"
    },
    offices: {
      title: "Our Offices",
      subtitle: "Visit our executive branches for high-end professional consultation",
      headOffice: {
        title: "Head Office",
        addressLabel: "Address",
        address: "Gazir Khamar Bazar, Ground Floor of Krishi Bank, Under Tofazzal Electronics.",
        phoneLabel: "Phone",
        phones: ["01971941428", "01711941428"]
      },
      dhakaOffice: {
        title: "Dhaka Office",
        addressLabel: "Address",
        address: "National Standard School & College, House # 14, Road # 4, D Block, Banasree, Rampura, Dhaka.",
        phoneLabel: "Phone",
        phones: ["01835922789"]
      },
      mapButton: "View on Google Maps"
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are at your disposal to unlock global opportunities",
      formTitle: "Send Us a Message",
      name: "Your Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      successMsg: "Thank you! Your message has been sent successfully. Our team will reach out to you shortly.",
      infoTitle: "Urgent Contacts",
      emailLabel: "Email Us",
      fbLabel: "Facebook Page",
      callButton: "Call Now"
    },
    footer: {
      quickLinks: "Quick Links",
      services: "Our Services",
      contact: "Contact",
      rights: "All Rights Reserved. Jahangirnagar Air International (JAI)",
      logoSubtitle: "Your Gateway to Global Opportunities"
    }
  }
};
