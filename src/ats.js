import {
  about,
  arc,
  certifications,
  careerPath,
  earlierRoles,
  education,
  expertise,
  metrics,
  principles,
  profile,
  programmePhases,
  projectFeatures,
  resourceDemand,
  workingKnowledge,
} from "./data";

const CANDIDATE_YEARS = 18;
const CANDIDATE_SENIORITY = 5;
const CANDIDATE_LANGUAGES = {
  english: 5,
  tamil: 6,
  german: 1,
};
const CANDIDATE_DOMAINS = new Set([
  "telecom",
  "networking",
  "cisco",
  "offshore",
  "enterprise",
  "ai",
  "cloud",
  "engineering",
]);

const LANGUAGE_LABELS = {
  english: "English",
  german: "German",
  tamil: "Tamil",
  french: "French",
  dutch: "Dutch",
  spanish: "Spanish",
  italian: "Italian",
  polish: "Polish",
  portuguese: "Portuguese",
  hindi: "Hindi",
};

const LEVEL_VALUES = {
  a1: 1,
  a2: 2,
  b1: 3,
  b2: 4,
  c1: 5,
  c2: 6,
  native: 6,
};

const SENIORITY_LABELS = {
  1: "Intern / entry level",
  2: "Junior / graduate",
  3: "Mid-level engineer",
  4: "Senior individual contributor",
  5: "Lead / manager",
  6: "Director / head of",
  7: "VP / C-level",
};

const SKILLS = [
  {
    label: "AI transformation",
    aliases: ["ai transformation", "ai-led transformation", "digital transformation"],
    weight: 4,
  },
  {
    label: "Generative AI",
    aliases: ["generative ai", "genai", "gen ai", "large language model", "llm", "llms"],
    weight: 4,
  },
  {
    label: "AI governance",
    aliases: ["ai governance", "responsible ai", "ai ethics", "ai risk"],
    weight: 4,
  },
  { label: "EU AI Act", aliases: ["eu ai act", "eu artificial intelligence act"], weight: 3 },
  {
    label: "ISO/IEC 42001",
    aliases: ["iso/iec 42001", "iso 42001", "iso iec 42001"],
    weight: 3,
  },
  {
    label: "AI adoption and enablement",
    aliases: ["ai adoption", "ai enablement", "ai tooling", "ai tools", "ai in engineering"],
    weight: 3,
  },
  {
    label: "Machine learning",
    aliases: ["machine learning", "deep learning", "ml engineering"],
    weight: 2,
  },
  {
    label: "Data and analytics",
    aliases: ["data analytics", "data analysis", "analytics", "kpis", "metrics"],
    weight: 2,
  },
  { label: "Prompt engineering", aliases: ["prompt engineering", "prompt design"], weight: 1 },
  { label: "Linux", aliases: ["linux", "unix"], weight: 2 },
  {
    label: "Networking / TCP-IP",
    aliases: ["networking", "tcp/ip", "tcp-ip", "network engineering"],
    weight: 3,
  },
  { label: "C / C++", aliases: ["c/c++", "c++", "embedded c"], weight: 3 },
  { label: "Python", aliases: ["python"], weight: 3 },
  { label: "Jenkins", aliases: ["jenkins"], weight: 2 },
  { label: "Docker", aliases: ["docker", "containerisation", "containerization"], weight: 2 },
  { label: "Kubernetes", aliases: ["kubernetes", "k8s"], weight: 2 },
  {
    label: "CI/CD",
    aliases: ["ci/cd", "cicd", "continuous integration", "continuous delivery"],
    weight: 3,
  },
  { label: "DevOps", aliases: ["devops"], weight: 2 },
  {
    label: "Multi-architecture builds",
    aliases: ["multi-architecture", "multi architecture", "cross-platform builds"],
    weight: 1,
  },
  { label: "Release engineering", aliases: ["release engineering", "release management"], weight: 2 },
  {
    label: "Software development lifecycle",
    aliases: ["sdlc", "software development life cycle"],
    weight: 2,
  },
  { label: "Agile / Scrum (working level)", aliases: ["agile", "scrum", "kanban", "safe framework"], weight: 2 },
  { label: "Jira", aliases: ["jira"], weight: 1 },
  { label: "Git", aliases: ["git", "github", "gitlab"], weight: 1 },
  {
    label: "Cloud platforms",
    aliases: ["cloud", "aws", "azure", "gcp", "google cloud"],
    weight: 3,
  },
  {
    label: "Software and solution architecture",
    aliases: [
      "software architecture",
      "solution architecture",
      "system architecture",
      "technical architecture",
    ],
    weight: 3,
  },
  { label: "Microservices", aliases: ["microservices", "micro-services"], weight: 2 },
  { label: "APIs", aliases: ["api", "apis", "rest", "restful"], weight: 1 },
  {
    label: "Embedded systems",
    aliases: ["embedded systems", "embedded c", "firmware", "microcontroller", "microcontrollers"],
    weight: 2,
  },
  {
    label: "IoT",
    aliases: ["iot", "internet of things", "sensor drivers", "sensors"],
    weight: 2,
  },
  {
    label: "PCB and hardware design",
    aliases: ["pcb", "pcb design", "hardware design", "board design"],
    weight: 2,
  },
  {
    label: "Energy metering",
    aliases: ["energy meter", "energy meters", "smart metering", "metering"],
    weight: 1,
  },
  { label: "Automation", aliases: ["automation", "automated"], weight: 2 },
  { label: "System design", aliases: ["system design", "systems design"], weight: 2 },
  {
    label: "Telecommunications",
    aliases: ["telecom", "telecommunications", "network equipment", "service provider"],
    weight: 2,
  },
  {
    label: "Enterprise delivery",
    aliases: ["enterprise", "large-scale", "large scale"],
    weight: 1,
  },
  {
    label: "Test automation",
    aliases: ["test automation", "automated testing", "qa automation"],
    weight: 2,
  },
  {
    label: "Security",
    aliases: ["cybersecurity", "cyber security", "iso 27001", "security engineering"],
    weight: 2,
  },
];

const BUSINESS_SKILLS = [
  {
    label: "Marketing and brand",
    aliases: ["marketing", "brand", "branding", "brand management"],
    weight: 3,
  },
  {
    label: "SEO / SEM",
    aliases: ["seo", "sem", "search engine optimisation", "search engine optimization"],
    weight: 3,
  },
  {
    label: "Content and social media",
    aliases: ["content marketing", "social media", "copywriting", "content strategy"],
    weight: 3,
  },
  {
    label: "Campaign management",
    aliases: ["campaign management", "campaigns", "lead generation"],
    weight: 2,
  },
  {
    label: "CRM and marketing automation",
    aliases: ["crm", "salesforce", "hubspot", "marketo"],
    weight: 2,
  },
  {
    label: "Web analytics",
    aliases: ["google analytics", "web analytics", "adobe analytics"],
    weight: 2,
  },
  {
    label: "Market research",
    aliases: ["market research", "customer research", "competitive analysis"],
    weight: 2,
  },
  {
    label: "Product management",
    aliases: ["product management", "product manager", "product owner", "roadmap", "product roadmap"],
    weight: 3,
  },
  {
    label: "Backlog and user stories",
    aliases: ["backlog", "user stories", "user story", "requirements gathering"],
    weight: 2,
  },
  { label: "A/B testing", aliases: ["a/b testing", "ab testing", "experimentation"], weight: 1 },
  {
    label: "UX / UI design",
    aliases: [
      "ux",
      "ui",
      "user experience",
      "user interface",
      "figma",
      "prototyping",
      "user research",
    ],
    weight: 3,
  },
  {
    label: "SQL and databases",
    aliases: ["sql", "mysql", "postgresql", "database", "databases"],
    weight: 2,
  },
  {
    label: "BI and visualisation",
    aliases: [
      "tableau",
      "power bi",
      "powerbi",
      "looker",
      "data visualisation",
      "data visualization",
    ],
    weight: 2,
  },
  {
    label: "Data engineering",
    aliases: ["etl", "data warehouse", "data pipeline", "data pipelines", "spark", "hadoop"],
    weight: 2,
  },
  {
    label: "Statistics",
    aliases: ["statistics", "statistical analysis", "regression"],
    weight: 2,
  },
  {
    label: "Finance and accounting",
    aliases: [
      "accounting",
      "financial reporting",
      "forecasting",
      "ifrs",
      "gaap",
      "audit",
      "tax",
      "treasury",
    ],
    weight: 3,
  },
  { label: "ERP systems", aliases: ["sap", "oracle erp", "erp"], weight: 2 },
  {
    label: "Excel / spreadsheets",
    aliases: ["excel", "spreadsheets", "vlookup", "pivot tables"],
    weight: 1,
  },
  {
    label: "HR operations",
    aliases: ["onboarding", "payroll", "hris", "employee relations", "performance management"],
    weight: 2,
  },
  {
    label: "Legal and regulatory compliance",
    aliases: ["gdpr", "contracts", "legal", "regulatory compliance"],
    weight: 2,
  },
  {
    label: "Customer success",
    aliases: ["customer success", "account management", "customer support", "zendesk"],
    weight: 2,
  },
  {
    label: "Supply chain",
    aliases: ["supply chain", "logistics", "inventory", "procurement"],
    weight: 2,
  },
  {
    label: "Healthcare",
    aliases: ["clinical", "patient care", "hipaa"],
    weight: 3,
  },
  {
    label: "Education and training",
    aliases: ["curriculum", "teaching", "classroom", "learning and development"],
    weight: 2,
  },
];

const LEADERSHIP = [
  {
    label: "Technical programme management",
    aliases: [
      "technical programme management",
      "technical program management",
      "programme management",
      "program management",
      "project management",
      "project manager",
      "programme manager",
      "program manager",
      "programme director",
    ],
    weight: 4,
  },
  {
    label: "Technical architecture leadership",
    aliases: [
      "group technical architect",
      "technical architect",
      "enterprise architect",
      "architecture leadership",
    ],
    weight: 3,
  },
  {
    label: "Delivery governance",
    aliases: ["delivery governance", "delivery management", "programme governance", "program governance"],
    weight: 3,
  },
  {
    label: "Stakeholder management",
    aliases: [
      "stakeholder management",
      "stakeholder engagement",
      "senior stakeholders",
      "executive stakeholders",
    ],
    weight: 3,
  },
  {
    label: "Team leadership",
    aliases: [
      "team leadership",
      "people management",
      "line management",
      "team management",
      "leading teams",
      "managed teams",
    ],
    weight: 4,
  },
  {
    label: "Mentoring and coaching",
    aliases: ["mentoring", "coaching", "talent development", "developing engineers"],
    weight: 2,
  },
  {
    label: "Budget and P&L",
    aliases: ["budget", "p&l", "profit and loss", "commercial accountability", "cost management"],
    weight: 3,
  },
  {
    label: "Resource demand management",
    aliases: [
      "resource demand",
      "resource management",
      "resource planning",
      "workforce planning",
      "capacity planning",
    ],
    weight: 3,
  },
  {
    label: "Hiring and interview panels",
    aliases: [
      "hiring",
      "recruitment",
      "talent acquisition",
      "interview panels",
      "interviewing",
      "candidate selection",
    ],
    weight: 2,
  },
  {
    label: "Cross-functional collaboration",
    aliases: ["cross-functional", "cross functional", "matrix organisation", "matrix organization"],
    weight: 2,
  },
  {
    label: "Vendor and partner management",
    aliases: ["vendor management", "partner management", "supplier management"],
    weight: 2,
  },
  {
    label: "Change management",
    aliases: ["change management", "organisational change", "organizational change"],
    weight: 2,
  },
  {
    label: "Transformation leadership",
    aliases: ["transformation leadership", "leading transformation", "change leadership"],
    weight: 3,
  },
];

const EDUCATION_AND_CERTS = [
  {
    label: "Bachelor's degree",
    aliases: [
      "bachelor",
      "bachelors",
      "bachelor's",
      "b.tech",
      "btech",
      "b.e.",
      "engineering degree",
      "degree in engineering",
    ],
    weight: 3,
  },
  {
    label: "Master's degree or MBA",
    aliases: ["master", "masters", "master's", "mba", "m.tech", "msc"],
    weight: 3,
  },
  {
    label: "PMP",
    aliases: ["pmp", "project management professional"],
    weight: 3,
  },
  { label: "PRINCE2", aliases: ["prince2", "prince 2"], weight: 2 },
  {
    label: "Agile certification",
    aliases: ["csm", "scrum master certification", "safe certification", "agile certification"],
    weight: 2,
  },
  {
    label: "AWS certification",
    aliases: ["aws certified", "aws certification", "aws solutions architect"],
    weight: 2,
  },
  {
    label: "Google Cloud / AI certification",
    aliases: ["google cloud certified", "google certified", "generative ai leader"],
    weight: 2,
  },
  {
    label: "ISO 27001",
    aliases: ["iso 27001", "iso/iec 27001"],
    weight: 2,
  },
  { label: "ITIL", aliases: ["itil"], weight: 1 },
  { label: "TOGAF", aliases: ["togaf"], weight: 2 },
  {
    label: "Azure certification",
    aliases: ["azure certified", "azure certification"],
    weight: 2,
  },
  {
    label: "AI certification",
    aliases: ["ai certification", "artificial intelligence certification"],
    weight: 2,
  },
];

const DOMAINS = [
  {
    key: "telecom",
    label: "Telecommunications",
    aliases: ["telecom", "telecommunications", "network equipment", "service provider"],
  },
  {
    key: "networking",
    label: "Networking",
    aliases: ["networking", "tcp/ip", "network engineering"],
  },
  {
    key: "cisco",
    label: "Cisco",
    aliases: ["cisco"],
  },
  {
    key: "offshore",
    label: "Offshore delivery",
    aliases: ["offshore", "global delivery", "captive centre", "captive center"],
  },
  {
    key: "enterprise",
    label: "Enterprise environments",
    aliases: ["enterprise", "large-scale", "large scale"],
  },
  {
    key: "ai",
    label: "AI and data",
    aliases: ["artificial intelligence", " ai ", "machine learning", "data science"],
  },
  {
    key: "cloud",
    label: "Cloud",
    aliases: ["cloud", "aws", "azure", "gcp"],
  },
  {
    key: "engineering",
    label: "Engineering organisations",
    aliases: ["engineering organisation", "engineering organization", "engineering teams"],
  },
];

const STOP_WORDS = new Set(
  (
    "a an and are as at be been being by for from has have had he her his i if in into is it its " +
    "may me more most my we will with you your this that these those they them their there their " +
    "or of on to can could should would do does did not no yes about across after all also any " +
    "because before between both but during each few further here how other over same so some such " +
    "than then under until up very what when where which while who why work working role job " +
    "position candidate candidates team teams company companies business new within using use " +
    "used strong good excellent ability able experience experienced years year plus etc via per " +
    "including include includes required requirement requirements responsibilities responsibility " +
    "skills skill knowledge understanding environment environments ideal successful apply application"
  ).split(/\s+/)
);

const candidateCorpus = normalize(
  [
    profile.name,
    profile.role,
    about,
    ...metrics.flatMap((metric) => [metric.label, metric.note]),
    ...certifications.map((certification) => certification.name),
    ...careerPath,
    ...earlierRoles.flatMap((role) => [
      role.title,
      role.company,
      role.meta,
      ...(role.bullets ?? []),
    ]),
    education.institution,
    education.degree,
    ...programmePhases.flatMap((phase) => [phase.title, phase.copy, ...phase.tags]),
    ...arc.flatMap((step) => [step.title, step.copy]),
    ...expertise.flatMap((item) => [item.title, item.copy, ...item.tags]),
    ...principles.flatMap((item) => [item.title, item.copy]),
    ...projectFeatures.flatMap((item) => [item.title, item.copy]),
    resourceDemand.title,
    resourceDemand.intro,
    ...resourceDemand.steps.flatMap((step) => [step.label, step.copy]),
    workingKnowledge.label,
    ...workingKnowledge.items,
    workingKnowledge.note,
    "c c++ tcp/ip ci/cd aws cloud pmp ai genai telecom telecommunications cisco offshore enterprise automation metrics",
    "bachelor of engineering b.e. hiring recruitment interview panels interviewing candidate selection resource planning workforce planning training compliance",
    "english c1 tamil native german a1",
  ].join(" ")
);

export function normalize(text) {
  return String(text ?? "")
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function hasTerm(text, term) {
  const normalizedTerm = normalize(term);
  if (!normalizedTerm) return false;
  if (/^[a-z0-9+#./&' -]+$/.test(normalizedTerm)) {
    const escaped = normalizedTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i").test(text);
  }
  return text.includes(normalizedTerm);
}

function scoreTerms(terms, jobText) {
  const required = terms.filter((term) =>
    term.aliases.some((alias) => hasTerm(jobText, alias))
  );
  const matched = required.filter((term) =>
    term.aliases.some((alias) => hasTerm(candidateCorpus, alias))
  );
  const missing = required.filter((term) => !matched.includes(term));
  const requiredWeight = required.reduce((total, term) => total + term.weight, 0);
  const matchedWeight = matched.reduce((total, term) => total + term.weight, 0);
  return {
    required,
    matched,
    missing,
    percentage: requiredWeight ? matchedWeight / requiredWeight : null,
  };
}

function extractYears(jobText) {
  const matches = [];
  const rangePattern = /(\d{1,2})\s*(?:-|to)\s*(\d{1,2})\s*(?:\+)?\s*(?:years|yrs)/gi;
  let rangeMatch;
  while ((rangeMatch = rangePattern.exec(jobText))) {
    matches.push(Number(rangeMatch[2]));
  }
  const singlePattern = /(\d{1,2})\s*(?:\+|plus)?\s*(?:years|yrs)/gi;
  let singleMatch;
  while ((singleMatch = singlePattern.exec(jobText))) {
    matches.push(Number(singleMatch[1]));
  }
  const plausible = matches.filter((value) => value > 0 && value <= 40);
  return plausible.length ? Math.max(...plausible) : null;
}

function detectSeniority(jobText) {
  const checks = [
    [7, /\b(chief|c-level|c level|cto|cio|vice president|vp)\b/],
    [6, /\b(director|head of|group head|head of engineering)\b/],
    [
      5,
      /\b(senior manager|programme manager|program manager|project manager|engineering manager|delivery manager|technical lead|lead engineer|architect)\b/,
    ],
    [4, /\b(senior|lead)\b/],
    [3, /\b(mid-level|mid level|engineer|specialist)\b/],
    [2, /\b(junior|graduate|entry level|entry-level)\b/],
    [1, /\b(intern|internship|trainee)\b/],
  ];
  for (const [level, pattern] of checks) {
    if (pattern.test(jobText)) return level;
  }
  return null;
}

function detectLanguageLevel(jobText, language) {
  const patterns = [
    new RegExp(`${language}[^.\\n;]{0,70}\\b(a1|a2|b1|b2|c1|c2)\\b`, "i"),
    new RegExp(`\\b(a1|a2|b1|b2|c1|c2)\\b[^.\\n;]{0,70}${language}`, "i"),
  ];
  for (const pattern of patterns) {
    const match = jobText.match(pattern);
    if (match) return { value: LEVEL_VALUES[match[1].toLowerCase()], label: match[1].toUpperCase() };
  }

  const windowPattern = new RegExp(`(?:.{0,70})${language}(?:.{0,70})`, "i");
  const windowMatch = jobText.match(windowPattern);
  const context = windowMatch ? windowMatch[0] : "";
  const descriptors = [
    [6, /\b(native|mother tongue)\b/],
    [5, /\b(fluent|full professional|business fluent)\b/],
    [4, /\b(professional working|professional proficiency)\b/],
    [3, /\b(conversational|intermediate)\b/],
    [1, /\b(basic|beginner|elementary)\b/],
  ];
  for (const [value, pattern] of descriptors) {
    if (pattern.test(context)) {
      return {
        value,
        label:
          value === 6
            ? "Native"
            : value === 5
              ? "Fluent"
              : value === 4
                ? "Professional"
                : value === 3
                  ? "Conversational"
                  : "Basic",
      };
    }
  }
  return null;
}

function analyzeExperience(jobText) {
  const requiredYears = extractYears(jobText);
  const requiredSeniority = detectSeniority(jobText);
  const mentionedDomains = DOMAINS.filter((domain) =>
    domain.aliases.some((alias) => hasTerm(jobText, alias))
  );
  const matchedDomains = mentionedDomains.filter((domain) =>
    CANDIDATE_DOMAINS.has(domain.key)
  );

  const parts = [];
  let earned = 0;
  let possible = 0;

  if (requiredYears) {
    possible += 8;
    earned += 8 * Math.min(1, CANDIDATE_YEARS / requiredYears);
    parts.push(
      CANDIDATE_YEARS >= requiredYears
        ? `18 years of experience meets the ${requiredYears}+ years requested.`
        : `The role asks for ${requiredYears}+ years; the profile states 18.`
    );
  }

  if (requiredSeniority) {
    possible += 5;
    let ratio = 0;
    if (CANDIDATE_SENIORITY >= requiredSeniority) {
      ratio = 1;
    } else {
      ratio = Math.max(0, 1 - (requiredSeniority - CANDIDATE_SENIORITY) / 3);
    }
    earned += 5 * ratio;
    parts.push(
      CANDIDATE_SENIORITY >= requiredSeniority
        ? `Seniority language (${SENIORITY_LABELS[requiredSeniority]}) is covered by the current profile.`
        : `The role reads as ${SENIORITY_LABELS[requiredSeniority]}; the profile is positioned at lead / manager level.`
    );
  }

  if (mentionedDomains.length) {
    possible += 3;
    earned += 3 * (matchedDomains.length / mentionedDomains.length);
    parts.push(
      matchedDomains.length
        ? `Domain overlap: ${matchedDomains.map((domain) => domain.label).join(", ")}.`
        : "No clear domain overlap detected between the job text and the profile."
    );
  }

  return {
    percentage: possible ? earned / possible : null,
    requiredYears,
    requiredSeniority,
    mentionedDomains,
    matchedDomains,
    details: parts,
  };
}

function analyzeLanguages(jobText) {
  const required = [];
  const matched = [];
  const missing = [];

  Object.entries(LANGUAGE_LABELS).forEach(([key, label]) => {
    if (!hasTerm(jobText, label)) return;
    const requirement = detectLanguageLevel(jobText, label.toLowerCase());
    const candidateLevel = CANDIDATE_LANGUAGES[key] ?? 0;
    const requiredLevel = requirement?.value ?? 1;
    const ratio = candidateLevel
      ? Math.min(1, candidateLevel / Math.max(1, requiredLevel))
      : 0;
    const item = {
      label,
      requiredLevel: requirement?.label ?? "mentioned",
      candidateLevel: candidateLevel || null,
      ratio,
    };
    required.push(item);
    if (ratio >= 1) {
      matched.push(item);
    } else {
      missing.push(item);
    }
  });

  const possible = required.reduce(
    (total, item) => total + (item.candidateLevel ? 2 : 3),
    0
  );
  const earned = required.reduce(
    (total, item) =>
      total + (item.candidateLevel ? 2 * item.ratio : 0),
    0
  );

  const details = required.map((item) => {
    if (!item.candidateLevel) {
      return `${item.label} is requested; it is not listed on the profile.`;
    }
    if (item.ratio >= 1) {
      return `${item.label}: profile level covers the role requirement${item.requiredLevel !== "mentioned" ? ` (${item.requiredLevel})` : ""}.`;
    }
    return `${item.label}: profile level is below the ${item.requiredLevel} requested.`;
  });

  return {
    percentage: possible ? earned / possible : null,
    required,
    matched,
    missing,
    details,
  };
}

function buildJustification({ skills, leadership, experience, educationCerts, languages }) {
  const items = [];
  if (skills.percentage !== null) {
    items.push(
      `${skills.matched.length} of ${skills.required.length} technical requirements detected in the job text are evidenced in the profile.`
    );
  }
  if (leadership.percentage !== null) {
    items.push(
      `${leadership.matched.length} of ${leadership.required.length} leadership and delivery requirements are evidenced.`
    );
  }
  items.push(...experience.details);
  if (educationCerts.percentage !== null) {
    items.push(
      `${educationCerts.matched.length} of ${educationCerts.required.length} education or certification requirements are met.`
    );
  } else {
    items.push("No specific degree or certification requirement was detected.");
  }
  items.push(...languages.details);
  return items;
}

function buildRecommendations({
  score,
  skills,
  leadership,
  experience,
  educationCerts,
  languages,
}) {
  const recommendations = [];
  const missing = [...skills.missing, ...leadership.missing, ...educationCerts.missing]
    .filter((term) => term.weight >= 2)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 5);

  missing.forEach((term) => {
    recommendations.push(
      `Add evidence of "${term.label}" if it is genuinely part of your experience - a project, metric, tool or certification. If it is not, treat it as a potential screen-out.`
    );
  });

  languages.missing.forEach((language) => {
    if (language.label === "German") {
      recommendations.push(
        `The role asks for German${language.requiredLevel !== "mentioned" ? ` at ${language.requiredLevel}` : ""}; your profile states A1 with certification in progress. Be transparent and give a realistic target date.`
      );
    } else {
      recommendations.push(
        `The role asks for ${language.label}${language.requiredLevel !== "mentioned" ? ` at ${language.requiredLevel}` : ""}; add it only if you can evidence the level.`
      );
    }
  });

  if (
    experience.requiredYears &&
    experience.requiredYears > CANDIDATE_YEARS
  ) {
    recommendations.push(
      `The role asks for ${experience.requiredYears}+ years; the profile states 18. Lead with scope and outcomes rather than tenure alone.`
    );
  }

  if (score >= 85) {
    recommendations.push(
      "Strong alignment. Mirror the job title where it is accurate and lead with the two or three outcomes that map most directly to the role."
    );
  } else if (score >= 70) {
    recommendations.push(
      "Good alignment. Tailor the summary and EU CV to the role's top five requirements before applying."
    );
  } else {
    recommendations.push(
      "Stretch alignment. Tailor the summary and EU CV carefully, and do not add skills you cannot evidence in an interview."
    );
  }

  return [...new Set(recommendations)].slice(0, 6);
}

function scoreLabel(score) {
  if (score >= 85) {
    return {
      label: "Strong alignment",
      tone: "strong",
      summary:
        "The role's core requirements are largely visible in the published profile.",
    };
  }
  if (score >= 70) {
    return {
      label: "Good alignment",
      tone: "good",
      summary:
        "Most requirements are covered, with a few gaps worth addressing before applying.",
    };
  }
  if (score >= 55) {
    return {
      label: "Moderate alignment",
      tone: "moderate",
      summary:
        "Part of the role is covered, but several named requirements are not visible.",
    };
  }
  return {
    label: "Stretch alignment",
    tone: "low",
    summary:
      "The role names requirements that are not strongly evidenced in the published profile.",
  };
}

function analyseGenericKeywords(jobText) {
  const tokens = jobText
    .replace(/[^a-z0-9+#./ -]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length >= 4 && !STOP_WORDS.has(token));
  const frequency = new Map();
  tokens.forEach((token) => {
    frequency.set(token, (frequency.get(token) ?? 0) + 1);
  });
  const top = [...frequency.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 18)
    .map(([token]) => token);
  const matched = top.filter((token) => hasTerm(candidateCorpus, token));
  return {
    top,
    matched,
    missing: top.filter((token) => !matched.includes(token)),
    percentage: top.length ? matched.length / top.length : null,
  };
}

export function analyzeJob(jobDescription) {
  const jobText = normalize(jobDescription);
  const wordCount = jobText ? jobText.split(/\s+/).length : 0;

  const skills = scoreTerms([...SKILLS, ...BUSINESS_SKILLS], jobText);
  const leadership = scoreTerms(LEADERSHIP, jobText);
  const educationCerts = scoreTerms(EDUCATION_AND_CERTS, jobText);
  const experience = analyzeExperience(jobText);
  const languages = analyzeLanguages(jobText);

  const fallback =
    skills.required.length === 0 &&
    leadership.required.length === 0 &&
    educationCerts.required.length === 0 &&
    !experience.requiredYears &&
    !experience.requiredSeniority &&
    languages.required.length === 0
      ? analyseGenericKeywords(jobText)
      : null;

  const categories = [
    {
      key: "skills",
      label: "Technical & domain skills",
      weight: 40,
      percentage: fallback ? fallback.percentage : skills.percentage,
      required: skills.required.length,
      matched: fallback ? fallback.matched.length : skills.matched.length,
    },
    {
      key: "leadership",
      label: "Leadership & delivery",
      weight: 15,
      percentage: leadership.percentage,
      required: leadership.required.length,
      matched: leadership.matched.length,
    },
    {
      key: "experience",
      label: "Experience & seniority",
      weight: 15,
      percentage: experience.percentage,
    },
    {
      key: "education",
      label: "Education & certifications",
      weight: 10,
      percentage: educationCerts.percentage,
      required: educationCerts.required.length,
      matched: educationCerts.matched.length,
    },
    {
      key: "languages",
      label: "Languages",
      weight: 20,
      percentage: languages.percentage,
      required: languages.required.length,
      matched: languages.matched.length,
    },
  ];

  const active = categories.filter((category) => category.percentage !== null);
  const totalWeight = active.reduce(
    (total, category) => total + category.weight,
    0
  );
  const score = totalWeight
    ? Math.round(
        active.reduce(
          (total, category) => total + category.percentage * category.weight,
          0
        ) / totalWeight * 100
      )
    : 0;

  const band = scoreLabel(score);

  const matchedKeywords = [
    ...skills.matched,
    ...leadership.matched,
    ...educationCerts.matched,
  ]
    .sort((a, b) => b.weight - a.weight)
    .map((term) => term.label);

  const missingKeywords = [
    ...skills.missing,
    ...leadership.missing,
    ...educationCerts.missing,
  ]
    .sort((a, b) => b.weight - a.weight)
    .map((term) => term.label);

  if (languages.matched.length) {
    languages.matched.forEach((language) =>
      matchedKeywords.push(`${language.label} (${language.requiredLevel})`)
    );
  }
  if (languages.missing.length) {
    languages.missing.forEach((language) =>
      missingKeywords.push(`${language.label} (${language.requiredLevel})`)
    );
  }

  if (fallback) {
    fallback.missing.forEach((keyword) => missingKeywords.push(keyword));
  }

  return {
    score,
    ...band,
    wordCount,
    categories,
    matchedKeywords: [...new Set(matchedKeywords)].slice(0, 18),
    missingKeywords: [...new Set(missingKeywords)].slice(0, 12),
    justification: fallback
      ? [
          "No structured role requirements were detected, so the score falls back to general keyword overlap.",
          `${fallback.matched.length} of the ${fallback.top.length} most frequent job-description terms appear in the published profile.`,
        ]
      : buildJustification({
          skills,
          leadership,
          experience,
          educationCerts,
          languages,
        }),
    recommendations: buildRecommendations({
      score,
      skills,
      leadership,
      experience,
      educationCerts,
      languages,
    }),
    detected: {
      skills: skills.required.length,
      leadership: leadership.required.length,
      certifications: educationCerts.required.length,
      languages: languages.required.length,
      years: experience.requiredYears,
      seniority: experience.requiredSeniority,
    },
  };
}
