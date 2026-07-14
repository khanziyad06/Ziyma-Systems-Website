export const site = {
  name: "Ziyma Systems",
  tagline: "Websites, data systems and AI automation for growing businesses.",
  phoneDisplay: "+91 81042 05598",
  telUrl: "tel:+918104205598",
  whatsappUrl: "https://wa.me/918104205598",
  email: "contact@ziymasystems.in",
  mailtoUrl: "mailto:contact@ziymasystems.in",
};

export const navLinks = [
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    num: "01",
    title: "Website Systems",
    description: "Fast, conversion-minded websites with clean architecture and room to grow.",
    points: ["Clear offer in seconds", "Lead capture built in", "SEO & performance first"],
  },
  {
    num: "02",
    title: "Data Auditing",
    description: "Clean, connected business data so you can trust every number you see.",
    points: ["One source of truth", "Dashboards that decide", "Fewer manual checks"],
  },
  {
    num: "03",
    title: "AI Automation",
    description: "Practical automation for repetitive admin, customer and reporting work.",
    points: ["Faster follow-ups", "No copy-paste between tools", "Workflows your team understands"],
  },
];

// Add new portfolio pieces here as you complete client work.
export const portfolio = [
  {
    slug: "little-ummah-dashboard",
    title: "Little Ummah Dashboard",
    industry: "Management",
    description: "Created for a content creator to operate insights, automate comment replies, and generate content ideas. Contact us for more information.",
    link: "https://little-ummah-dashboard-99dc.vercel.app/",
    image: "/little-ummah.png",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "ziyma-billing-product",
    title: "Ziyma Systems Billing",
    industry: "Finance",
    description: "A streamlined billing and invoicing system designed for accurate reporting and clear financial tracking.",
    link: "https://ziyma-systems-billing-product.vercel.app/",
    image: "/ziyma-billing.png",
    aspect: "aspect-square",
  },
  {
    slug: "boojee-cafe",
    title: "Boojee Cafe Dashboard",
    industry: "Hospitality",
    description: "A full cafe management system with an AI chatbot for customers to book tables and plan events, plus a real-time admin dashboard to manage reservations, enquiries, customers and menu.",
    link: "https://boojee-cafe-sample.vercel.app",
    images: [
      "/boojee-5.jpg",
      "/boojee-1.jpg",
      "/boojee-2.jpg",
      "/boojee-3.jpg",
      "/boojee-4.jpg",
    ],
    aspect: "aspect-[4/3]",
  }
];

export const processSteps = [
  { title: "Audit", description: "Understand the business, tools and gaps." },
  { title: "Build", description: "Ship the website, data layer or workflow." },
  { title: "Automate", description: "Connect the repeated tasks, add AI where it helps." },
  { title: "Manage", description: "Document, monitor and keep it running." },
];

export const industries = ["Clinics", "Cafes", "Restaurants", "Decor Studios", "Startups", "Agencies"];
