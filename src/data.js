export const CV_URL = `${import.meta.env.BASE_URL}Arul_Muruga_EU_CV.pdf`;
export const CV_DOCX_URL = `${import.meta.env.BASE_URL}Arul_Muruga_EU_CV.docx`;

const CV_BASE = import.meta.env.BASE_URL;

export const CV_LOCALES = [
  {
    code: "en",
    label: "English",
    pdf: CV_URL,
    docx: CV_DOCX_URL,
  },
  {
    code: "de",
    label: "Deutsch",
    pdf: `${CV_BASE}Arul_Muruga_EU_CV_DE.pdf`,
    docx: `${CV_BASE}Arul_Muruga_EU_CV_DE.docx`,
  },
  {
    code: "fr",
    label: "Français",
    pdf: `${CV_BASE}Arul_Muruga_EU_CV_FR.pdf`,
    docx: `${CV_BASE}Arul_Muruga_EU_CV_FR.docx`,
  },
];

export const profile = {
  name: "Arul Muruga",
  role: "Technical Project Manager | Group Technical Architect | AI Transformation and Governance Leader",
  location: "Chennai, India",
  github: "https://github.com/littleadam",
  linkedin: "https://www.linkedin.com/in/aruldswamy",
  email: "arulmuruga.ad@gmail.com",
  phone: "+917845023186",
  phoneDisplay: "+91 78450 23186",
  whatsapp: "https://wa.me/917845023186",
};

export const about =
  "I help enterprises turn AI from strategy into measurable business outcomes — driving engineering transformation, adoption at scale, and responsible AI governance with full P&L and delivery accountability.";

export const navLinks = [
  { id: "impact", label: "Impact" },
  { id: "profile", label: "Profile" },
  { id: "programme", label: "Programme" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "ats", label: "ATS check" },
  { id: "contact", label: "Contact" },
];

export const metrics = [
  {
    value: 664,
    suffix: "+",
    label: "FTE-hours returned",
    note: "Saved through the AI transformation programme in Year 1.",
  },
  {
    value: 93,
    suffix: "%",
    label: "Build-time reduction",
    note: "Delivered for the wider engineering organisation.",
  },
  {
    value: 6,
    suffix: "",
    label: "AI tools in production",
    note: "2 deployed in Year 1, 6 in Year 2, against a 12-tool target for Year 3.",
  },
  {
    value: 100,
    suffix: "%",
    label: "SLA compliance",
    note: "Sustained across 13+ consecutive weeks.",
  },
];

export const certifications = [
  { name: "Project Management Professional (PMP)", expiry: "Dec 2027" },
  { name: "Generative AI Leader (Google Cloud)", expiry: "Sep 2028" },
  { name: "AWS Certified AI Practitioner", expiry: "Sep 2029" },
];

export const workingKnowledge = {
  label: "Working knowledge",
  items: [
    "Agile / Scrum — hands-on at engineer level",
    "Jira",
    "PSM I — in progress",
  ],
  note:
    "Day-to-day Agile and Jira use comes from hands-on engineering; Agile programme management at scale is in progress (PSM I).",
};

export const resourceDemand = {
  title: "Engineer resource demand",
  intro:
    "I head the resource-filling process for my delivery unit — from open position to interview outcome.",
  steps: [
    {
      label: "Demand",
      copy: "Collect open engineer positions from the delivery teams.",
    },
    {
      label: "Sourcing",
      copy: "Engage HR teams to bring forward suitable candidates.",
    },
    {
      label: "Panels",
      copy: "Select interview panelists for each candidate.",
    },
    {
      label: "Reviews",
      copy: "Gather panel feedback and interview outcomes.",
    },
    {
      label: "Update",
      copy: "Keep HR teams updated through the process.",
    },
  ],
};

export const careerPath = [
  "Member Technical Staff",
  "Lead Engineer",
  "Technical Lead",
  "Senior Technical Lead",
  "Technical Project Manager",
];

export const earlierRoles = [
  {
    title: "C Programmer",
    company: "Digitech Systems and Engineering",
    meta: "Aug 2009 – Jun 2010 · 11 months · Chennai",
    bullets: [
      "Developed software solutions for energy meters, integrating internet-based data handling to enhance efficiency and reduce costs.",
      "Designed and deployed an HTTP server for embedded systems, streamlining data transmission processes.",
      "Documented technical solutions, fostering knowledge sharing and improving team collaboration.",
    ],
  },
  {
    title: "C Programmer",
    company: "Iwiz Hitec Solutions",
    meta: "Jul 2008 – Jul 2009 · 1 yr 1 mo · Chennai",
    bullets: [
      "Engineered IoT-based solutions, including sensor drivers and interfaces, optimising system performance and reliability.",
      "Improved PCB designs, enhancing energy efficiency and sensitivity for IoT applications.",
      "Conducted product demonstrations, showcasing technical capabilities to support business development.",
    ],
  },
];

export const education = {
  institution: "Anna University · SSN College of Engineering",
  degree: "BE Electrical, Electronics and Communications Engineering",
  dates: "Aug 2003 – Jul 2007",
};

export const programmePhases = [
  {
    number: "01",
    title: "Frame & govern",
    copy:
      "Baseline the engineering workflow, select tools against real bottlenecks, and set the guardrails before scale. Governance is treated as a design input, not an afterthought.",
    tags: ["Use-case assessment", "Baseline metrics", "EU AI Act / ISO 42001"],
  },
  {
    number: "02",
    title: "Embed & enable",
    copy:
      "Put tooling in the hands of teams, with seven Technical Leads acting as multipliers across eight teams. Adoption is built team by team, not announced organisation-wide.",
    tags: ["Champion model", "Hands-on enablement", "8 teams"],
  },
  {
    number: "03",
    title: "Measure & scale",
    copy:
      "Track FTE hours returned and build-time saved, then scale only what proves out. Two tools in Year 1, six in Year 2; Year 3 targets twelve.",
    tags: ["664+ hours saved", "93% build reduction", "2 → 6 → 12 tools"],
  },
];

export const arc = [
  {
    number: "01",
    title: "Systems foundation",
    copy: "Linux OS, TCP/IP networking, C/C++ and Python — the layer everything else is built on.",
  },
  {
    number: "02",
    title: "Build & release",
    copy: "Jenkins, Docker and multi-architecture builds, delivered at engineering scale.",
  },
  {
    number: "03",
    title: "Technical architecture",
    copy: "Owning technical design and delivery governance across engineering teams.",
  },
  {
    number: "04",
    title: "Programme leadership",
    copy: "65 engineers, 8 teams, and a leadership bench of 7 Technical Leads and 15+ engineers.",
  },
  {
    number: "05",
    title: "AI transformation",
    copy: "Adoption, measurement and governance — turning AI tooling into everyday engineering practice.",
  },
];

export const expertise = [
  {
    icon: "terminal",
    title: "Engineering foundation",
    copy: "Hands-on depth that keeps architecture and delivery decisions grounded.",
    tags: ["Linux OS", "Networking / TCP-IP", "C / C++", "Python"],
  },
  {
    icon: "boxes",
    title: "Build & delivery",
    copy: "Release engineering built for repeatability, speed and multiple architectures.",
    tags: ["Jenkins", "Docker", "Multi-architecture builds", "Release engineering"],
  },
  {
    icon: "compass",
    title: "Technical leadership",
    copy: "Programme direction, architecture ownership and a leadership bench that can carry scale.",
    tags: [
      "Technical programme management",
      "Technical architecture",
      "AI transformation programme leadership",
      "Delivery governance",
      "Team leadership",
    ],
  },
  {
    icon: "scale",
    title: "AI governance",
    copy: "Adoption that can be defended: aligned to recognised frameworks and measured in outcomes.",
    tags: ["AI transformation", "EU AI Act", "ISO/IEC 42001", "Adoption measurement"],
  },
];

export const principles = [
  {
    number: "01",
    title: "Governance before scale",
    copy:
      "Guardrails set early are what let adoption move quickly later. I treat the EU AI Act and ISO/IEC 42001 as design inputs — not paperwork to retrofit.",
  },
  {
    number: "02",
    title: "Outcomes over activity",
    copy:
      "Tool counts are activity. FTE hours returned, build time saved and SLA held are outcomes. A programme scorecard should make that distinction impossible to miss.",
  },
  {
    number: "03",
    title: "Stay close to the craft",
    copy:
      "Eighteen years of hands-on engineering means I can interrogate the architecture, not just the status report — and keep technical conversations honest.",
  },
];

export const projectFeatures = [
  {
    title: "RSI-based entry signals",
    copy: "Momentum-driven entry logic for Nifty weekly options.",
  },
  {
    title: "GTT stop-loss management",
    copy: "Automated stop-loss placement through the broker API.",
  },
  {
    title: "Trailing stop mechanics",
    copy: "Stops that move with the trade to protect accrued gains.",
  },
  {
    title: "Daily loss-cap controls",
    copy: "A hard risk ceiling that stops trading before losses compound.",
  },
];

export const projectBlueprint = [
  ["INSTRUMENT", "NIFTY weekly options"],
  ["VENUE", "mStock Type-B API"],
  ["SIGNAL", "RSI"],
  ["RISK", "GTT stop-loss · trailing stop · daily loss cap"],
  ["RUNTIME", "Python"],
  ["STATUS", "In development"],
];
