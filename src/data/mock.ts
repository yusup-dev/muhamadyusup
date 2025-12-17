// Mock data for the personal website
// This file centralizes all content for easy backend integration later

import type { PersonalInfo, TechStack, Education, Experience, Service, Portfolio, TeamMember, Translations } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Muhamad Yusup",
  role: {
    en: "Web Developer & IT Consultant",
    id: "Web Developer & Konsultan IT"
  },
  tagline: {
    en: "Helping SMEs build professional and scalable websites",
    id: "Membantu UMKM membangun website profesional dan skalabel"
  },
  bio: {
    en: "Passionate web developer with expertise in full-stack development. I specialize in creating modern, scalable web applications for small and medium enterprises. With a strong foundation in Java Spring Boot and modern frontend frameworks, I deliver solutions that drive business growth.",
    id: "Web developer berpengalaman dengan keahlian dalam pengembangan full-stack. Saya mengkhususkan diri dalam membuat aplikasi web modern dan skalabel untuk usaha kecil dan menengah. Dengan fondasi kuat dalam Java Spring Boot dan framework frontend modern, saya memberikan solusi yang mendorong pertumbuhan bisnis."
  },
  email: "muhamadyusup@example.com",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  location: {
    en: "Jakarta, Indonesia",
    id: "Jakarta, Indonesia"
  },
  social: {
    github: "https://github.com/muhamadyusup",
    linkedin: "https://linkedin.com/in/muhamadyusup",
    instagram: "https://instagram.com/muhamadyusup"
  }
};

export const techStack: TechStack[] = [
  { name: "Java", icon: "☕", category: "Backend" },
  { name: "Spring Boot", icon: "🍃", category: "Backend" },
  { name: "Vue.js", icon: "💚", category: "Frontend" },
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "TypeScript", icon: "📘", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
  { name: "Docker", icon: "🐳", category: "DevOps" }
];

export const education: Education[] = [
  {
    id: 1,
    degree: {
      en: "Bachelor of Computer Science",
      id: "Sarjana Ilmu Komputer"
    },
    institution: "Universitas Indonesia",
    period: "2015 - 2019",
    description: {
      en: "Focused on software engineering and web development",
      id: "Fokus pada rekayasa perangkat lunak dan pengembangan web"
    }
  }
];

export const experience: Experience[] = [
  {
    id: 1,
    title: {
      en: "Freelance Web Developer",
      id: "Web Developer Freelance"
    },
    company: {
      en: "Self-Employed",
      id: "Wiraswasta"
    },
    period: "2020 - Present",
    description: {
      en: "Developing custom web solutions for SMEs, including e-commerce platforms, company profiles, and business management systems.",
      id: "Mengembangkan solusi web kustom untuk UMKM, termasuk platform e-commerce, profil perusahaan, dan sistem manajemen bisnis."
    }
  },
  {
    id: 2,
    title: {
      en: "Full Stack Developer",
      id: "Full Stack Developer"
    },
    company: {
      en: "PT Tech Solutions Indonesia",
      id: "PT Tech Solutions Indonesia"
    },
    period: "2019 - 2020",
    description: {
      en: "Built and maintained enterprise web applications using Java Spring Boot and React. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      id: "Membangun dan memelihara aplikasi web enterprise menggunakan Java Spring Boot dan React. Berkolaborasi dengan tim lintas fungsi untuk memberikan solusi perangkat lunak berkualitas tinggi."
    }
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: {
      en: "SME Websites",
      id: "Website UMKM"
    },
    description: {
      en: "Professional websites tailored for small and medium enterprises with modern design and user-friendly interfaces.",
      id: "Website profesional yang disesuaikan untuk usaha kecil dan menengah dengan desain modern dan antarmuka yang mudah digunakan."
    },
    icon: "Store"
  },
  {
    id: 2,
    title: {
      en: "Company Profile",
      id: "Company Profile"
    },
    description: {
      en: "Elegant corporate websites that showcase your brand identity and establish credibility in the digital space.",
      id: "Website korporat elegan yang menampilkan identitas merek Anda dan membangun kredibilitas di ruang digital."
    },
    icon: "Building2"
  },
  {
    id: 3,
    title: {
      en: "Custom Web Application",
      id: "Aplikasi Web Kustom"
    },
    description: {
      en: "Scalable web applications built with modern technologies to solve your specific business challenges.",
      id: "Aplikasi web skalabel yang dibangun dengan teknologi modern untuk menyelesaikan tantangan bisnis spesifik Anda."
    },
    icon: "Code2"
  },
  {
    id: 4,
    title: {
      en: "Website Maintenance & Support",
      id: "Pemeliharaan & Dukungan Website"
    },
    description: {
      en: "Ongoing maintenance, updates, and technical support to keep your website running smoothly and securely.",
      id: "Pemeliharaan berkelanjutan, pembaruan, dan dukungan teknis untuk menjaga website Anda berjalan lancar dan aman."
    },
    icon: "Settings"
  }
];

export const portfolio: Portfolio[] = [
  {
    id: 1,
    name: {
      en: "E-Commerce Platform for Fashion Store",
      id: "Platform E-Commerce untuk Toko Fashion"
    },
    description: {
      en: "Full-featured online store with product catalog, shopping cart, and payment integration.",
      id: "Toko online lengkap dengan katalog produk, keranjang belanja, dan integrasi pembayaran."
    },
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "E-Commerce"
  },
  {
    id: 2,
    name: {
      en: "Restaurant Management System",
      id: "Sistem Manajemen Restoran"
    },
    description: {
      en: "Comprehensive system for order management, inventory tracking, and sales reporting.",
      id: "Sistem komprehensif untuk manajemen pesanan, pelacakan inventori, dan pelaporan penjualan."
    },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    techStack: ["Vue.js", "Spring Boot", "MySQL"],
    category: "Business"
  },
  {
    id: 3,
    name: {
      en: "Corporate Website for Consulting Firm",
      id: "Website Korporat untuk Firma Konsultan"
    },
    description: {
      en: "Professional corporate website with portfolio showcase and client testimonials.",
      id: "Website korporat profesional dengan showcase portfolio dan testimoni klien."
    },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    category: "Company Profile"
  },
  {
    id: 4,
    name: {
      en: "Real Estate Listing Platform",
      id: "Platform Listing Properti"
    },
    description: {
      en: "Property listing website with advanced search filters and virtual tour integration.",
      id: "Website listing properti dengan filter pencarian lanjutan dan integrasi tur virtual."
    },
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    techStack: ["React", "Spring Boot", "PostgreSQL", "AWS"],
    category: "Business"
  },
  {
    id: 5,
    name: {
      en: "Education Platform for Online Courses",
      id: "Platform Edukasi untuk Kursus Online"
    },
    description: {
      en: "Learning management system with video hosting, quizzes, and progress tracking.",
      id: "Sistem manajemen pembelajaran dengan hosting video, kuis, dan pelacakan progres."
    },
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    category: "Education"
  },
  {
    id: 6,
    name: {
      en: "Healthcare Appointment System",
      id: "Sistem Janji Temu Kesehatan"
    },
    description: {
      en: "Patient appointment booking system with doctor scheduling and medical records.",
      id: "Sistem pemesanan janji temu pasien dengan penjadwalan dokter dan rekam medis."
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    techStack: ["React", "Spring Boot", "PostgreSQL"],
    category: "Healthcare"
  },
  {
    id: 7,
    name: {
      en: "Inventory Management Dashboard",
      id: "Dashboard Manajemen Inventori"
    },
    description: {
      en: "Real-time inventory tracking system with analytics and automated reorder alerts.",
      id: "Sistem pelacakan inventori real-time dengan analitik dan peringatan pemesanan ulang otomatis."
    },
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    techStack: ["React", "TypeScript", "Spring Boot", "Redis"],
    category: "Business"
  },
  {
    id: 8,
    name: {
      en: "Social Media Management Tool",
      id: "Tool Manajemen Media Sosial"
    },
    description: {
      en: "Multi-platform social media scheduler with analytics and content management.",
      id: "Penjadwal media sosial multi-platform dengan analitik dan manajemen konten."
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Redis"],
    category: "Marketing"
  }
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Muhamad Yusup",
    role: {
      en: "Founder & Lead Developer",
      id: "Founder & Lead Developer"
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: {
      en: "Full-stack developer with 5+ years of experience in building scalable web applications.",
      id: "Full-stack developer dengan pengalaman 5+ tahun dalam membangun aplikasi web skalabel."
    },
    social: {
      linkedin: "https://linkedin.com/in/muhamadyusup",
      github: "https://github.com/muhamadyusup"
    }
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    role: {
      en: "UI/UX Designer",
      id: "UI/UX Designer"
    },
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: {
      en: "Creative designer passionate about creating intuitive and beautiful user experiences.",
      id: "Designer kreatif yang bersemangat dalam menciptakan pengalaman pengguna yang intuitif dan indah."
    },
    social: {
      linkedin: "https://linkedin.com/in/sarahwijaya",
      instagram: "https://instagram.com/sarahwijaya"
    }
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    role: {
      en: "Backend Developer",
      id: "Backend Developer"
    },
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: {
      en: "Backend specialist focused on building robust and secure server-side applications.",
      id: "Spesialis backend yang fokus pada membangun aplikasi server-side yang robust dan aman."
    },
    social: {
      linkedin: "https://linkedin.com/in/ahmadrizki",
      github: "https://github.com/ahmadrizki"
    }
  }
];

export const translations: Translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      team: "Team",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      cta1: "View Portfolio",
      cta2: "Contact Me"
    },
    about: {
      title: "About Me",
      subtitle: "Passionate Developer",
      techTitle: "Tech Stack"
    },
    education: {
      title: "Education & Experience",
      educationTab: "Education",
      experienceTab: "Experience"
    },
    services: {
      title: "Services",
      subtitle: "What I Offer"
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Recent Projects",
      viewAll: "View All Projects",
      filter: {
        all: "All",
        ecommerce: "E-Commerce",
        business: "Business",
        companyProfile: "Company Profile",
        education: "Education",
        healthcare: "Healthcare",
        marketing: "Marketing"
      }
    },
    team: {
      title: "Our Team",
      subtitle: "Meet the People Behind the Work"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's Build Something Amazing Together",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sending: "Sending..."
      },
      info: {
        email: "Email",
        phone: "Phone",
        location: "Location"
      },
      success: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      error: "Please fill in all required fields correctly."
    },
    footer: {
      copyright: "© 2024 Muhamad Yusup. All rights reserved.",
      builtWith: "Built with React & TypeScript"
    }
  },
  id: {
    nav: {
      about: "Tentang",
      services: "Layanan",
      portfolio: "Portfolio",
      team: "Tim",
      contact: "Kontak"
    },
    hero: {
      greeting: "Halo, Saya",
      cta1: "Lihat Portfolio",
      cta2: "Hubungi Saya"
    },
    about: {
      title: "Tentang Saya",
      subtitle: "Developer Berpengalaman",
      techTitle: "Teknologi yang Dikuasai"
    },
    education: {
      title: "Pendidikan & Pengalaman",
      educationTab: "Pendidikan",
      experienceTab: "Pengalaman"
    },
    services: {
      title: "Layanan",
      subtitle: "Apa yang Saya Tawarkan"
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Proyek Terbaru",
      viewAll: "Lihat Semua Proyek",
      filter: {
        all: "Semua",
        ecommerce: "E-Commerce",
        business: "Bisnis",
        companyProfile: "Company Profile",
        education: "Pendidikan",
        healthcare: "Kesehatan",
        marketing: "Pemasaran"
      }
    },
    team: {
      title: "Tim Kami",
      subtitle: "Orang-Orang di Balik Karya"
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Mari Bangun Sesuatu yang Luar Biasa Bersama",
      form: {
        name: "Nama Anda",
        email: "Email Anda",
        subject: "Subjek",
        message: "Pesan",
        send: "Kirim Pesan",
        sending: "Mengirim..."
      },
      info: {
        email: "Email",
        phone: "Telepon",
        location: "Lokasi"
      },
      success: "Terima kasih! Pesan Anda telah berhasil dikirim. Saya akan segera menghubungi Anda.",
      error: "Mohon isi semua kolom yang diperlukan dengan benar."
    },
    footer: {
      copyright: "© 2024 Muhamad Yusup. Hak cipta dilindungi.",
      builtWith: "Dibuat dengan React & TypeScript"
    }
  }
};