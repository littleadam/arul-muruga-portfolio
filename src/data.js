export const CV_URL = `${import.meta.env.BASE_URL}Arul_Muruga_EU_CV.pdf`;
export const CV_DOCX_URL = `${import.meta.env.BASE_URL}Arul_Muruga_EU_CV.docx`;

const CV_BASE = import.meta.env.BASE_URL;

export const CV_FORMATS = [
  {
    code: "eu",
    label: "EU CV",
    lang: "English",
    note: "EU-format, 2 pages",
    pdf: CV_URL,
    docx: CV_DOCX_URL,
  },
  {
    code: "de",
    label: "Lebenslauf",
    lang: "Deutsch",
    note: "Tabellarischer Lebenslauf",
    pdf: `${CV_BASE}Arul_Muruga_Lebenslauf_DE.pdf`,
    docx: `${CV_BASE}Arul_Muruga_Lebenslauf_DE.docx`,
  },
  {
    code: "fr",
    label: "CV Français",
    lang: "Français",
    note: "Format UE, 2 pages",
    pdf: `${CV_BASE}Arul_Muruga_EU_CV_FR.pdf`,
    docx: `${CV_BASE}Arul_Muruga_EU_CV_FR.docx`,
  },
  {
    code: "europass",
    label: "Europass",
    lang: "English",
    note: "Europass standard",
    pdf: `${CV_BASE}Arul_Muruga_Europass_CV.pdf`,
    docx: `${CV_BASE}Arul_Muruga_Europass_CV.docx`,
  },
];

export const CV_LOCALES = [
  {
    code: "en",
    label: "English",
    note: "EU-format CV",
    pdf: CV_URL,
    docx: CV_DOCX_URL,
  },
  {
    code: "de",
    label: "German",
    note: "Deutsch · Tabellarischer Lebenslauf",
    pdf: `${CV_BASE}Arul_Muruga_Lebenslauf_DE.pdf`,
    docx: `${CV_BASE}Arul_Muruga_Lebenslauf_DE.docx`,
  },
  {
    code: "fr",
    label: "French",
    note: "Français · CV au format UE",
    pdf: `${CV_BASE}Arul_Muruga_EU_CV_FR.pdf`,
    docx: `${CV_BASE}Arul_Muruga_EU_CV_FR.docx`,
  },
  {
    code: "europass",
    label: "Europass",
    note: "English · Europass standard",
    pdf: `${CV_BASE}Arul_Muruga_Europass_CV.pdf`,
    docx: `${CV_BASE}Arul_Muruga_Europass_CV.docx`,
  },
];

export const availability = {
  base: "Chennai, India",
  relocation: "Open to relocation to the job location",
};

export const profile = {
  name: "Arul Muruga",
  role: "Technical Project Manager | Group Technical Architect | AI Transformation and Governance Leader",
  location: "Chennai, India",
  website: "https://littleadam.github.io/arul-muruga-portfolio/",
  websiteDisplay: "littleadam.github.io/arul-muruga-portfolio",
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
  { id: "programme", label: "Program" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "expertise", label: "Expertise" },
  { id: "ats", label: "ATS check" },
  { id: "contact", label: "Contact" },
];

export const metrics = [
  {
    value: 2,
    suffix: "×",
    label: "Client billing growth",
    note: "Doubled on Cisco Secured Linux within a year of taking over the engagement.",
  },
  {
    value: 7,
    suffix: "/7",
    label: "Customer satisfaction",
    note: "Four years on Cisco Secured Linux; 7/7 every quarter for a year on 24x7 support.",
  },
  {
    value: 664,
    suffix: "+",
    label: "FTE-hours returned",
    note: "Saved through the AI transformation program in Year 1.",
  },
  {
    value: 93,
    suffix: "%",
    label: "Build-time reduction",
    note: "Delivered for the wider engineering organization.",
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
    "Day-to-day Agile and Jira use comes from hands-on engineering; Agile program management at scale is in progress (PSM I).",
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
      "Engineered IoT-based solutions, including sensor drivers and interfaces, optimizing system performance and reliability.",
      "Improved PCB designs, enhancing energy efficiency and sensitivity for IoT applications.",
      "Conducted product demonstrations, showcasing technical capabilities to support business development.",
    ],
  },
];

export const deliveryProjects = [
  {
    company: "HCL Technologies · Cisco ODC",
    era: "2010 – present",
    note: "Current focus: AI transformation, Cisco Secured Linux and 24x7 support; earlier platform engineering and field support for Cisco and its end customers.",
    projects: [
      {
        name: "Cisco Secured Linux",
        role: "Team Lead",
        team: "12 engineers",
        customers: "Cisco Systems",
        tech: ["Linux", "Runtime Defense (RTD)", "OSC", "SafeC", "Containerization", "Jenkins"],
        summary:
          "Secure runtime application protection for Cisco Linux-based platforms, with security checks moved into the delivery pipeline.",
        contributions: [
          "Implemented core modules for runtime application protection on Cisco's Linux-based platforms.",
          "Joined customer debugging sessions to analyze how protected applications behaved at runtime and resolve integration issues.",
          "Integrated security instrumentation with Jenkins CI/CD pipelines, enabling threat modeling before release rather than after deployment.",
          "Took over the engagement and doubled client billing within a year, backed by a 7/7 customer satisfaction score sustained for four years.",
        ],
      },
      {
        name: "24x7 infrastructure and application support",
        role: "Technical Project Manager",
        team: "6 engineers · 3 rotating shifts",
        customers: "Cisco Systems",
        tech: [
          "24x7 operations",
          "Incident management",
          "SLA governance",
          "Escalation management",
          "Root-cause analysis",
          "Automation",
          "AI-assisted support",
        ],
        summary:
          "One of three active engagements, alongside Cisco Secured Linux and the AI transformation program: round-the-clock infrastructure and application support for Cisco Systems, with SLA-backed incident response and operational governance.",
        contributions: [
          "Managed end-to-end 24x7 support across three rotating shifts of six engineers, maintaining uninterrupted coverage, incident resolution and SLA compliance.",
          "Established operational governance for shift handovers, incident ownership, escalation management, daily health checks and service performance reviews.",
          "Partnered with Cisco stakeholders on service reviews, critical escalations, operational risks and alignment of support priorities with business needs.",
          "Built standardized SOPs, troubleshooting guides and incident documentation, with structured knowledge transfer and cross-training that reduced single-person dependency.",
          "Drove proactive problem management through recurring incident analysis, root-cause reviews and preventive actions that improved service stability.",
          "Identified automation for health checks, log analysis, incident reporting and operational monitoring, and championed AI-assisted troubleshooting and knowledge retrieval.",
          "Tracked operational KPIs, SLA trends and incident patterns, driving corrective and preventive actions that sustained 7/7 customer satisfaction every quarter for a year.",
        ],
      },
      {
        name: "Access control list over Cisco IOS",
        role: "Team Lead",
        team: "11 engineers",
        customers: "RJIL · Google · Facebook",
        tech: ["C", "Python", "Cisco IOS-XR", "YANG / NETCONF"],
        summary:
          "Layer 3 access control for service-provider and hyperscale data-center networks, backed by hands-on escalation support.",
        contributions: [
          "Designed and developed Layer 3 ACL modules supporting IPv4 and IPv6 filters for ingress and egress traffic.",
          "Implemented protocol handlers and packet-match engines, integrating them with IOS-XR control-plane components through YANG/NETCONF.",
          "Supported production escalations involving ACL misbehavior: analyzed packet traces, reproduced issues and delivered fast fixes.",
          "Worked with Cisco TAC and product owners to triage and resolve field issues affecting data-center customers.",
        ],
      },
      {
        name: "QoS / Policy Manager over Cisco IOS",
        role: "Team Lead",
        team: "11 engineers",
        customers: "RJIL · Google · Facebook",
        tech: ["C", "Python", "Cisco IOS-XR", "YANG / NETCONF"],
        summary:
          "Quality-of-service policy handling for enterprise and service-provider routers, tuned for data-path performance and field reliability.",
        contributions: [
          "Developed QoS classification, policing and scheduling modules in the MQC framework for enterprise and service-provider routers.",
          "Led performance optimization of data-path traffic handling through policy maps and queuing logic.",
          "Diagnosed and fixed field defects across multiple geographies, keeping customer downtime to a minimum.",
          "Collaborated with global Cisco teams on traffic-shaping strategy and regression automation.",
        ],
      },
      {
        name: "Ethernet Connectivity Fault Management",
        role: "Team Lead",
        team: "8 engineers",
        customers: "Wells Fargo · NASA · Visa",
        tech: ["C", "Python", "Cisco NX-OS", "AAA", "Ethernet", "ACME", "GDB"],
        summary:
          "Layer 2 operations, administration and maintenance for Cisco NX-OS, giving enterprise and metro Ethernet customers proactive fault detection.",
        contributions: [
          "Developed key components of the Ethernet CFM module for Cisco NX-OS, enabling Layer 2 OAM across enterprise and metro Ethernet networks.",
          "Implemented maintenance end points (MEPs), maintenance entity groups (MEGs) and CFM message handling to monitor end-to-end Ethernet service health.",
          "Led debugging and resolution of customer-reported issues in proactive fault detection and real-time fault isolation with Cisco TAC and field engineers.",
          "Used GDB and custom trace utilities to analyze memory, packet flow and state transitions in complex failure scenarios.",
          "Ran knowledge-sharing sessions and wrote documentation so internal teams could support the deployed features.",
        ],
      },
      {
        name: "Broadband Network Gateway",
        role: "Senior Engineer",
        team: null,
        customers: "Cygate",
        tech: ["C", "Python", "Cisco OS", "AAA", "ACME", "VPN", "L2TP", "GDB"],
        summary:
          "Subscriber session management and policy provisioning for a broadband network gateway, with live escalation support.",
        contributions: [
          "Implemented PPPoE, IPoE and L2TP protocol stacks as part of the BNG feature set.",
          "Developed the session manager handling subscriber sessions and policy provisioning.",
          "Handled escalations on session drops and authentication failures, driving root-cause analysis with support and test teams.",
          "Added debug CLI commands and trace utilities for live issue replication.",
        ],
      },
      {
        name: "LTE Gateway Router",
        role: "Senior Engineer",
        team: null,
        customers: "Cisco Systems · AT&T",
        tech: ["C", "Cisco OS", "L2TP", "GRE", "ACME", "3GPP", "GDB"],
        summary:
          "Packet gateway data and control plane for mobile core networks, validated against high-throughput operator workloads.",
        contributions: [
          "Developed data- and control-plane components of the LTE packet gateway, including GRE and L2TP tunneling.",
          "Implemented QoS and lawful intercept modules aligned with 3GPP standards.",
          "Collaborated with system test teams to simulate high-throughput mobile core workloads.",
          "Fixed customer-reported defects in packet loss and interface-statistics mismatches.",
        ],
      },
      {
        name: "GGSN Gateway Router",
        role: "Software Engineer",
        team: null,
        customers: "Cisco · AT&T · Belgacom · Eircom · Turkcell · Truemove",
        tech: ["C", "Cisco OS", "L2TP", "GRE", "ACME", "GDB"],
        summary:
          "Mobile gateway functionality for multiple operators, reworked to scale to large subscriber bases.",
        contributions: [
          "Implemented GGSN functionality including PDP context setup, billing integration and data-path optimization.",
          "Reworked memory management code to handle scalability for a large subscriber base.",
          "Resolved field issues involving GRE tunnel failures and L2TP session teardown.",
          "Built tools and scripts for debugging session tables and control messages on live systems.",
        ],
      },
    ],
  },
  {
    company: "Digitech Systems and Engineering",
    era: "2009 – 2010",
    note: "Embedded software for remote utility metering.",
    projects: [
      {
        name: "IP Modem for Metering",
        role: "Software Engineer",
        team: "Embedded systems",
        customers: "NPDC Ltd. (Andhra Pradesh) · Thailand Electricity Board",
        tech: ["C", "GPRS", "RTC", "EEPROM", "8-bit microprocessors"],
        summary:
          "Low-footprint remote metering over GPRS, delivered on 8-bit processors and proven in utility field trials.",
        contributions: [
          "Developed low-footprint embedded software supporting remote metering via GPRS on 8-bit processors.",
          "Handled circuit-level debugging and firmware interface logic for EEPROM and RTC modules.",
          "Supported pilot rollout and live debugging in field trials with electric-utility vendors.",
        ],
      },
    ],
  },
  {
    company: "Iwiz Hitec Solutions",
    era: "2008 – 2009",
    note: "Earlier IoT and embedded hardware work.",
    projects: [
      {
        name: "IoT sensor interfaces and PCB design",
        role: "C Programmer",
        team: "Embedded systems",
        customers: "Product engineering",
        tech: ["C", "Sensor drivers", "PCB design"],
        summary:
          "Sensor interfaces and board-level improvements for IoT products, supported by hands-on demonstrations.",
        contributions: [
          "Engineered IoT solutions including sensor drivers and interfaces, optimizing system performance and reliability.",
          "Improved PCB designs to increase energy efficiency and sensitivity for IoT applications.",
          "Conducted product demonstrations to showcase technical capabilities and support business development.",
        ],
      },
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
      "Put tooling in the hands of teams, with seven Technical Leads acting as multipliers across eight teams. Adoption is built team by team, not announced organization-wide.",
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
    title: "Program leadership",
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
    copy: "Program direction, architecture ownership and a leadership bench that can carry scale.",
    tags: [
      "Technical program management",
      "Technical architecture",
      "AI transformation program leadership",
      "Delivery governance",
      "Team leadership",
    ],
  },
  {
    icon: "handshake",
    title: "Client & stakeholder management",
    copy: "Client-facing delivery inside the Cisco ODC: translating client priorities into plans, and resolving issues with the end customer on the client's behalf.",
    tags: [
      "Client management",
      "End-customer liaison",
      "Stakeholder engagement",
      "Escalation & issue resolution",
      "ODC delivery",
    ],
  },
  {
    icon: "scale",
    title: "AI governance",
    copy: "Adoption that can be defended: aligned to recognized frameworks and measured in outcomes.",
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
      "Tool counts are activity. FTE hours returned, build time saved and SLA held are outcomes. A program scorecard should make that distinction impossible to miss.",
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
