// Content for the downloadable EU-format CVs (English, German, French).
// Keep the PDF and DOCX generators in sync by editing this file only.

export const cv = {
  code: "en",
  fileBase: "Arul_Muruga_EU_CV",
  docTitle: "Arul Muruga - EU CV",
  docDescription:
    "EU-format curriculum vitae for Arul Muruga, Technical Project Manager and Group Technical Architect.",
  labels: {
    summary: "Professional summary",
    achievements: "Key achievements",
    experience: "Work experience",
    projects: "Selected delivery projects",
    education: "Education and training",
    languages: "Language skills",
    digital: "Digital skills",
    certifications: "Certifications",
    additional: "Additional information",
    footer: "Arul Muruga - EU CV",
    page: "Page",
    of: "of",
  },
  name: "ARUL MURUGA",
  role: "Technical Project Manager | Group Technical Architect | AI Transformation & Governance Leader",
  contact: [
    ["Chennai, Tamil Nadu, India", "arulmuruga.ad@gmail.com", "+91 78450 23186"],
    ["linkedin.com/in/aruldswamy", "github.com/littleadam", "littleadam.github.io/arul-muruga-portfolio"],
  ],
  summary:
    "Technical Project Manager and Group Technical Architect with 18 years of engineering experience, built on a deep foundation in Linux, networking (TCP/IP), C/C++ and Python, and a long tenure at HCL Technologies on a Cisco Offshore Development Center. Has progressed from hands-on systems engineering to leading an AI transformation program across 65 engineers in 8 teams, with 15+ engineers and 7 Technical Leads under direct management. Client-facing delivery lead in the ODC: aligns priorities with Cisco stakeholders and works directly with Cisco's end customers to debug and resolve issues on the client's behalf. PMP certified, Generative AI Leader (Google Cloud) and AWS Certified AI Practitioner. Working knowledge of Agile/Scrum and Jira from hands-on engineering, currently studying Agile program management at scale (PSM I in progress). Focused on AI-native engineering delivery, AI governance and measurable business outcomes.",
  achievements: [
    "664+ FTE-hours saved through the AI transformation program in Year 1.",
    "93% build-time reduction delivered for the wider engineering organization.",
    "2 AI tools deployed in Year 1 and 6 in Year 2, against a 12-tool target for Year 3.",
    "100% SLA compliance sustained across 13+ consecutive weeks.",
  ],
  experience: [
    {
      title: "Technical Project Manager & Group Technical Architect",
      org: "HCL Technologies - Cisco Offshore Development Center (ODC)",
      location: "Chennai, India",
      dates: "2010 - Present",
      intro:
        "Career progression: Member Technical Staff > Lead Engineer > Technical Lead > Senior Technical Lead > Technical Project Manager.",
      bullets: [
        "Lead an AI transformation program across the Cisco ODC, driving adoption of AI tooling across engineering teams.",
        "Manage and mentor a leadership bench of 7 Technical Leads and 15+ engineers directly, within a wider organization of 65 engineers across 8 teams.",
        "Serve as the client-facing delivery interface in the Cisco ODC: align priorities with Cisco stakeholders and work directly with Cisco's end customers to debug and resolve issues on the client's behalf.",
        "Own technical architecture and delivery governance, applying Linux, networking, C/C++, Python, Jenkins, Docker and multi-architecture build expertise built over 18 years.",
        "Head resource demand management for the delivery unit: gather open positions from teams, coordinate candidate sourcing with HR, select interview panelists, collect panel reviews and update HR teams.",
        "Align AI adoption with the EU AI Act and ISO/IEC 42001, treating governance as a design input rather than retrofitted documentation.",
        "Handle on-site, remote and 24x7 support teams, monthly process compliance audits (PCA) and SoW renewals, backed by 18 years of interviewing and training engineers.",
      ],
    },
    {
      title: "C Programmer",
      org: "Digitech Systems and Engineering",
      location: "Chennai, India",
      dates: "Aug 2009 - Jun 2010",
      bullets: [
        "Developed software solutions for energy meters, integrating internet-based data handling to enhance efficiency and reduce costs.",
        "Designed and deployed an HTTP server for embedded systems, streamlining data transmission processes.",
      ],
    },
    {
      title: "C Programmer",
      org: "Iwiz Hitec Solutions",
      location: "Chennai, India",
      dates: "Jul 2008 - Jul 2009",
      bullets: [
        "Engineered IoT-based solutions, including sensor drivers and interfaces, optimizing system performance and reliability.",
        "Improved PCB designs, enhancing energy efficiency and sensitivity for IoT applications.",
      ],
    },
  ],
  projects: [
    {
      name: "Cisco Secured Linux",
      meta: "Team Lead (12) · Cisco Systems",
      tech: "Linux, runtime defense (RTD), OSC, SafeC, containerization, Jenkins",
      detail:
        "Implemented core modules for secure runtime application protection on Cisco Linux platforms; integrated security instrumentation into Jenkins CI/CD for pre-release threat modeling and joined customer debugging sessions on runtime behavior.",
    },
    {
      name: "Access control list over Cisco IOS",
      meta: "Team Lead (11) · RJIL, Google, Facebook",
      tech: "C, Python, Cisco IOS-XR, YANG/NETCONF",
      detail:
        "Designed Layer 3 IPv4/IPv6 ACL modules for ingress and egress traffic, with protocol handlers, packet-match engines and control-plane integration; resolved production escalations with Cisco TAC and product owners.",
    },
    {
      name: "QoS / Policy Manager over Cisco IOS",
      meta: "Team Lead (11) · RJIL, Google, Facebook",
      tech: "C, Python, Cisco IOS-XR, YANG/NETCONF",
      detail:
        "Developed MQC classification, policing and scheduling for enterprise and service-provider routers; led data-path performance optimization, fixed field defects across geographies and supported regression automation.",
    },
    {
      name: "Ethernet Connectivity Fault Management",
      meta: "Team Lead (8) · Wells Fargo, NASA, Visa",
      tech: "C, Python, Cisco NX-OS, AAA, Ethernet, ACME, GDB",
      detail:
        "Built Layer 2 OAM components for Cisco NX-OS with MEPs, MEGs and CFM message handling; led customer fault-isolation debugging with GDB and custom traces, and produced support documentation and knowledge-sharing sessions.",
    },
    {
      name: "Broadband Network Gateway",
      meta: "Senior Engineer · Cygate",
      tech: "C, Python, Cisco OS, AAA, ACME, VPN, L2TP, GDB",
      detail:
        "Implemented PPPoE, IPoE and L2TP stacks with a subscriber session manager and policy provisioning; drove RCA on session drops and authentication failures and added debug CLI and trace utilities.",
    },
    {
      name: "LTE Gateway Router",
      meta: "Senior Engineer · Cisco Systems, AT&T",
      tech: "C, Cisco OS, L2TP, GRE, ACME, 3GPP, GDB",
      detail:
        "Developed GRE/L2TP data and control plane for the LTE packet gateway, with QoS and lawful intercept aligned to 3GPP; simulated high-throughput mobile core workloads and fixed packet-loss defects.",
    },
    {
      name: "GGSN Gateway Router",
      meta: "Software Engineer · Cisco, AT&T, Belgacom, Eircom, Turkcell, Truemove",
      tech: "C, Cisco OS, L2TP, GRE, ACME, GDB",
      detail:
        "Implemented PDP context setup, billing integration and data-path optimization; reworked memory management for large subscriber bases and resolved GRE/L2TP field failures.",
    },
    {
      name: "IP Modem for Metering",
      meta: "Software Engineer · NPDC Ltd., Thailand Electricity Board",
      tech: "C, GPRS, RTC, EEPROM, 8-bit microprocessors",
      detail:
        "Developed low-footprint GPRS remote metering on 8-bit processors, handled EEPROM/RTC firmware interfaces and supported pilot rollout and field debugging with electric-utility vendors.",
    },
  ],
  education: {
    degree:
      "Bachelor of Engineering (BE), Electrical, Electronics and Communications Engineering",
    institution: "Anna University - SSN College of Engineering, Chennai, India",
    dates: "Aug 2003 - Jul 2007",
  },
  languages: [
    { name: "English", level: "C1", note: "Full professional proficiency" },
    { name: "Tamil", level: "Native", note: "Mother tongue" },
    {
      name: "German",
      level: "A1",
      note: "Basic; certification in progress",
    },
  ],
  digitalSkills: [
    {
      label: "Engineering & systems",
      value: "Linux OS, TCP/IP networking, C/C++, Python",
    },
    {
      label: "Build & delivery",
      value:
        "Jenkins, Docker, multi-architecture builds, release engineering, CI/CD",
    },
    {
      label: "AI & governance",
      value:
        "AI transformation, AI adoption measurement, EU AI Act, ISO/IEC 42001",
    },
    {
      label: "Leadership & delivery",
      value:
        "Technical program management, technical architecture, delivery governance, client and end-customer management, resource demand management, team leadership",
    },
    {
      label: "Agile & tooling",
      value:
        "Agile/Scrum (working knowledge, engineer level), Jira, Agile program management at scale (PSM I in progress)",
    },
  ],
  certifications: [
    "Project Management Professional (PMP) - Project Management Institute (valid to Dec 2027)",
    "Generative AI Leader - Google Cloud (valid to Sep 2028)",
    "AWS Certified AI Practitioner - Amazon Web Services (valid to Sep 2029)",
  ],
  additional: [
    "Independent project: algorithmic options trading system in Python, with RSI-based signals, GTT stop-loss management, trailing stops and daily loss-cap controls.",
    "Open to technical program management, architecture and AI transformation leadership roles in engineering delivery and responsible AI governance.",
    "Willing to relocate to the job location.",
  ],
};

export const cvDe = {
  code: "de",
  fileBase: "Arul_Muruga_Lebenslauf_DE",
  docTitle: "Arul Muruga - Tabellarischer Lebenslauf",
  docDescription:
    "Tabellarischer Lebenslauf von Arul Muruga, Technischer Projektmanager und Gruppen-Technikarchitekt.",
  labels: {
    summary: "Berufliches Profil",
    achievements: "Wichtigste Erfolge",
    experience: "Berufserfahrung",
    projects: "Ausgewählte Projekte",
    education: "Ausbildung",
    languages: "Sprachkenntnisse",
    digital: "Digitale Kompetenzen",
    certifications: "Zertifizierungen",
    additional: "Zusätzliche Informationen",
    footer: "Arul Muruga - EU-Lebenslauf",
    page: "Seite",
    of: "von",
  },
  name: "ARUL MURUGA",
  role: "Technischer Projektmanager | Gruppen-Technikarchitekt | Leiter KI-Transformation & KI-Governance",
  contact: [
    ["Chennai, Tamil Nadu, Indien", "arulmuruga.ad@gmail.com", "+91 78450 23186"],
    ["linkedin.com/in/aruldswamy", "github.com/littleadam", "littleadam.github.io/arul-muruga-portfolio"],
  ],
  summary:
    "Technischer Projektmanager und Gruppen-Technikarchitekt mit 18 Jahren Erfahrung im Engineering und einem fundierten Fundament in Linux, Netzwerktechnik (TCP/IP), C/C++ und Python sowie einer langen Tätigkeit bei HCL Technologies in einem Cisco Offshore Development Centre. Vom operativen Systemtechniker zum Leiter eines KI-Transformationsprogramms mit 65 Ingenieuren in 8 Teams, davon 15+ Ingenieure und 7 Technical Leads in direkter Führungsverantwortung. Kundenseitige Delivery-Schnittstelle im ODC: richtet Prioritäten mit Cisco-Stakeholdern aus und arbeitet direkt mit den Endkunden von Cisco zusammen, um Probleme im Auftrag des Kunden zu debuggen und zu beheben. PMP-zertifiziert, Generative AI Leader (Google Cloud) und AWS Certified AI Practitioner. Praktische Kenntnisse in Agile/Scrum und Jira auf Ingenieursebene; derzeit Weiterbildung im agilen Programmmanagement im Unternehmensmaßstab (PSM I in Vorbereitung). Schwerpunkt auf KI-nativer Engineering-Delivery, KI-Governance und messbaren Geschäftsergebnissen.",
  achievements: [
    "664+ FTE-Stunden durch das KI-Transformationsprogramm im ersten Jahr eingespart.",
    "93 % kürzere Build-Zeiten für die gesamte Engineering-Organisation.",
    "2 KI-Tools im ersten Jahr und 6 im zweiten Jahr produktiv eingeführt, bei einem Ziel von 12 Tools für Jahr 3.",
    "100 % SLA-Erfüllung über 13+ aufeinanderfolgende Wochen.",
  ],
  experience: [
    {
      title: "Technischer Projektmanager & Gruppen-Technikarchitekt",
      org: "HCL Technologies - Cisco Offshore Development Centre (ODC)",
      location: "Chennai, Indien",
      dates: "2010 - heute",
      intro:
        "Karriereverlauf: Member Technical Staff > Lead Engineer > Technical Lead > Senior Technical Lead > Technical Project Manager.",
      bullets: [
        "Leitung eines KI-Transformationsprogramms im Cisco ODC und Förderung der Einführung von KI-Tools in den Engineering-Teams.",
        "Führung und Mentoring eines Führungskräfte-Pools aus 7 Technical Leads und 15+ Ingenieuren direkt, innerhalb einer Organisation von 65 Ingenieuren in 8 Teams; zusätzlich kundenseitige Delivery-Schnittstelle zu Cisco und dessen Endkunden.",
        "Verantwortung für technische Architektur und Delivery-Governance auf Basis von Linux, Netzwerktechnik, C/C++, Python, Jenkins, Docker und Multi-Architektur-Builds aus 18 Jahren Praxis.",
        "Leitung des Ressourcenbedarfsmanagements für die Delivery-Unit: Erfassung offener Stellen aus den Teams, Koordination der Kandidatensuche mit HR, Auswahl von Interview-Panels, Sammlung der Panel-Bewertungen und Aktualisierung der HR-Teams.",
        "Ausrichtung der KI-Einführung an EU AI Act und ISO/IEC 42001 - Governance als Designvorgabe statt nachträglicher Dokumentation.",
        "Verantwortung für Onsite-, Remote- und 24x7-Support-Teams, monatliche Process-Compliance-Audits (PCA) und SoW-Verlängerungen, gestützt auf 18 Jahre Erfahrung in Bewerbungsgesprächen und Ingenieurausbildung.",
      ],
    },
    {
      title: "C-Programmierer",
      org: "Digitech Systems and Engineering",
      location: "Chennai, Indien",
      dates: "Aug 2009 - Juni 2010",
      bullets: [
        "Entwicklung von Softwarelösungen für Energiezähler mit internetbasierter Datenverarbeitung sowie Konzeption eines HTTP-Servers für eingebettete Systeme.",
      ],
    },
    {
      title: "C-Programmierer",
      org: "Iwiz Hitec Solutions",
      location: "Chennai, Indien",
      dates: "Juli 2008 - Juli 2009",
      bullets: [
        "Entwicklung IoT-basierter Lösungen mit Sensortreibern und Schnittstellen sowie Verbesserung von PCB-Designs für Energieeffizienz und Empfindlichkeit.",
      ],
    },
  ],
  projects: [
    {
      name: "Cisco Secured Linux",
      meta: "Teamleiter (12) · Cisco Systems",
      tech: "Linux, Runtime Defense (RTD), OSC, SafeC, Containerisierung, Jenkins",
      detail:
        "Implementierung von Kernmodulen für den sicheren Laufzeitschutz von Cisco Linux-Plattformen; Integration von Sicherheitsinstrumentierung in Jenkins-CI/CD für Bedrohungsmodellierung vor dem Release sowie Kundendebugging zum Laufzeitverhalten.",
    },
    {
      name: "Access Control List über Cisco IOS",
      meta: "Teamleiter (11) · RJIL, Google, Facebook",
      tech: "C, Python, Cisco IOS-XR, YANG/NETCONF",
      detail:
        "Entwicklung von Layer-3-ACL-Modulen für IPv4/IPv6-Filter in Ein- und Ausgangsrichtung, Protokoll- und Packet-Match-Engines sowie Control-Plane-Integration; Bearbeitung von Produktionseskalationen mit Cisco TAC und Product Owners.",
    },
    {
      name: "QoS-/Policy-Manager über Cisco IOS",
      meta: "Teamleiter (11) · RJIL, Google, Facebook",
      tech: "C, Python, Cisco IOS-XR, YANG/NETCONF",
      detail:
        "Entwicklung von MQC-Klassifizierung, Policing und Scheduling für Enterprise- und Service-Provider-Router; Leistungsoptimierung der Datenpfad-Verarbeitung, Behebung von Feldfehlern und Regressionstests.",
    },
    {
      name: "Ethernet Connectivity Fault Management",
      meta: "Teamleiter (8) · Wells Fargo, NASA, Visa",
      tech: "C, Python, Cisco NX-OS, AAA, Ethernet, ACME, GDB",
      detail:
        "Entwicklung von Layer-2-OAM-Komponenten für Cisco NX-OS mit MEPs, MEGs und CFM-Nachrichtenverarbeitung; Fehlerisolierung mit GDB und Trace-Tools sowie Dokumentation und Wissensvermittlung für Supportteams.",
    },
    {
      name: "Broadband Network Gateway",
      meta: "Senior Engineer · Cygate",
      tech: "C, Python, Cisco OS, AAA, ACME, VPN, L2TP, GDB",
      detail:
        "Implementierung von PPPoE-, IPoE- und L2TP-Stacks mit Session-Manager und Richtlinienbereitstellung; Ursachenanalyse bei Session-Abbrüchen und Authentifizierungsfehlern sowie Debug-CLI und Trace-Tools.",
    },
    {
      name: "LTE Gateway Router",
      meta: "Senior Engineer · Cisco Systems, AT&T",
      tech: "C, Cisco OS, L2TP, GRE, ACME, 3GPP, GDB",
      detail:
        "Entwicklung des GRE-/L2TP-Daten- und Control-Planes für das LTE-Packet-Gateway, QoS und Lawful Intercept nach 3GPP; Simulation mobiler Core-Last und Behebung von Paketverlustfehlern.",
    },
    {
      name: "GGSN Gateway Router",
      meta: "Software Engineer · Cisco, AT&T, Belgacom, Eircom, Turkcell, Truemove",
      tech: "C, Cisco OS, L2TP, GRE, ACME, GDB",
      detail:
        "Implementierung von PDP-Kontextaufbau, Abrechnungsintegration und Datenpfad-Optimierung; Überarbeitung der Speicherverwaltung für große Teilnehmerzahlen und Behebung von GRE-/L2TP-Feldfehlern.",
    },
    {
      name: "IP-Modem für Energiemessung",
      meta: "Software Engineer · NPDC Ltd., Thailand Electricity Board",
      tech: "C, GPRS, RTC, EEPROM, 8-Bit-Mikroprozessoren",
      detail:
        "Entwicklung kompakter Embedded-Software für GPRS-Fernauslesung auf 8-Bit-Prozessoren, Firmware-Schnittstellen zu EEPROM und RTC sowie Unterstützung bei Pilotrollout und Feldtests mit Energieversorgern.",
    },
  ],
  education: {
    degree:
      "Bachelor of Engineering (BE), Elektrotechnik, Elektronik- und Kommunikationstechnik",
    institution: "Anna University - SSN College of Engineering, Chennai, Indien",
    dates: "Aug 2003 - Juli 2007",
  },
  languages: [
    {
      name: "Englisch",
      level: "C1",
      note: "Verhandlungssichere Berufssprache",
    },
    { name: "Tamil", level: "Muttersprache", note: "Muttersprache" },
    {
      name: "Deutsch",
      level: "A1",
      note: "Grundkenntnisse; Zertifizierung in Vorbereitung",
    },
  ],
  digitalSkills: [
    {
      label: "Engineering & Systeme",
      value: "Linux OS, TCP/IP-Netzwerktechnik, C/C++, Python",
    },
    {
      label: "Build & Delivery",
      value:
        "Jenkins, Docker, Multi-Architektur-Builds, Release Engineering, CI/CD",
    },
    {
      label: "KI & Governance",
      value:
        "KI-Transformation, Messung der KI-Adoption, EU AI Act, ISO/IEC 42001",
    },
    {
      label: "Führung & Delivery",
      value:
        "Technisches Programmmanagement, technische Architektur, Delivery-Governance, Kunden- und Endkundenmanagement, Ressourcenbedarfsmanagement, Teamführung",
    },
    {
      label: "Agile & Tools",
      value:
        "Agile/Scrum (Grundkenntnisse, Ingenieursebene), Jira, agiles Programmmanagement im Unternehmensmaßstab (PSM I in Vorbereitung)",
    },
  ],
  certifications: [
    "Project Management Professional (PMP) - Project Management Institute (gültig bis Dez 2027)",
    "Generative AI Leader - Google Cloud (gültig bis Sep 2028)",
    "AWS Certified AI Practitioner - Amazon Web Services (gültig bis Sep 2029)",
  ],
  additional: [
    "Unabhängiges Projekt: algorithmisches Optionshandelssystem in Python mit RSI-basierten Signalen, GTT-Stop-Loss-Verwaltung, Trailing Stops und täglichen Verlustobergrenzen. Offen für technisches Programmmanagement, Architektur und Führungsrollen in KI-Transformation, Engineering-Delivery und verantwortungsvoller KI-Governance; bereit, an den Arbeitsort umzuziehen.",
  ],
};

export const cvFr = {
  code: "fr",
  fileBase: "Arul_Muruga_EU_CV_FR",
  docTitle: "Arul Muruga - CV UE",
  docDescription:
    "Curriculum vitae au format UE d'Arul Muruga, chef de projet technique et architecte technique de groupe.",
  labels: {
    summary: "Profil professionnel",
    achievements: "Réalisations clés",
    experience: "Expérience professionnelle",
    projects: "Projets sélectionnés",
    education: "Formation",
    languages: "Compétences linguistiques",
    digital: "Compétences numériques",
    certifications: "Certifications",
    additional: "Informations complémentaires",
    footer: "Arul Muruga - CV UE",
    page: "Page",
    of: "sur",
  },
  name: "ARUL MURUGA",
  role: "Chef de projet technique | Architecte technique de groupe | Responsable transformation et gouvernance IA",
  contact: [
    ["Chennai, Tamil Nadu, Inde", "arulmuruga.ad@gmail.com", "+91 78450 23186"],
    ["linkedin.com/in/aruldswamy", "github.com/littleadam", "littleadam.github.io/arul-muruga-portfolio"],
  ],
  summary:
    "Chef de projet technique et architecte technique de groupe avec 18 ans d'expérience en ingénierie, appuyé sur une solide maîtrise de Linux, des réseaux (TCP/IP), du C/C++ et de Python, ainsi qu'une longue carrière chez HCL Technologies au sein d'un Cisco Offshore Development Centre. Évolution du poste d'ingénieur système opérationnel vers la direction d'un programme de transformation IA réunissant 65 ingénieurs répartis en 8 équipes, dont 15+ ingénieurs et 7 Technical Leads en management direct. Interface de livraison côté client au sein de l'ODC : aligne les priorités avec les parties prenantes de Cisco et travaille directement avec les clients finaux de Cisco pour déboguer et résoudre les incidents pour le compte du client. Certifié PMP, Generative AI Leader (Google Cloud) et AWS Certified AI Practitioner. Connaissances pratiques d'Agile/Scrum et de Jira au niveau ingénieur ; formation en cours en gestion de programmes Agile à l'échelle (PSM I en cours). Focus sur la livraison d'ingénierie native IA, la gouvernance de l'IA et des résultats commerciaux mesurables.",
  achievements: [
    "664+ heures ETP économisées grâce au programme de transformation IA dès la première année.",
    "Réduction de 93 % des temps de build pour l'ensemble de l'organisation d'ingénierie.",
    "2 outils d'IA déployés en première année et 6 en deuxième année, pour un objectif de 12 outils en année 3.",
    "100 % de conformité SLA maintenue pendant 13+ semaines consécutives.",
  ],
  experience: [
    {
      title: "Chef de projet technique & architecte technique de groupe",
      org: "HCL Technologies - Cisco Offshore Development Centre (ODC)",
      location: "Chennai, Inde",
      dates: "2010 - aujourd'hui",
      intro:
        "Parcours : Member Technical Staff > Lead Engineer > Technical Lead > Senior Technical Lead > Technical Project Manager.",
      bullets: [
        "Diriger un programme de transformation IA au sein du Cisco ODC et favoriser l'adoption des outils d'IA par les équipes d'ingénierie.",
        "Manager et accompagner un vivier de direction composé de 7 Technical Leads et de 15+ ingénieurs en direct, au sein d'une organisation de 65 ingénieurs répartis en 8 équipes.",
        "Servir d'interface de livraison côté client au sein du Cisco ODC : aligner les priorités avec les parties prenantes de Cisco et travailler directement avec les clients finaux de Cisco pour déboguer et résoudre les incidents pour le compte du client.",
        "Piloter l'architecture technique et la gouvernance de la livraison en mobilisant Linux, les réseaux, le C/C++, Python, Jenkins, Docker et les builds multi-architectures acquis en 18 ans.",
        "Diriger la gestion de la demande de ressources pour l'unité de livraison : recueil des postes ouverts auprès des équipes, coordination du sourcing avec les RH, sélection des jurys d'entretien, collecte des évaluations et mise à jour des équipes RH.",
        "Aligner l'adoption de l'IA sur l'EU AI Act et l'ISO/IEC 42001, en traitant la gouvernance comme une contrainte de conception plutôt qu'une documentation ajoutée après coup.",
        "Superviser les équipes de support sur site, à distance et 24x7, les audits mensuels de conformité des processus (PCA) et les renouvellements de SoW, avec 18 ans d'expérience en conduite d'entretiens et formation d'ingénieurs.",
      ],
    },
    {
      title: "Programmeur C",
      org: "Digitech Systems and Engineering",
      location: "Chennai, Inde",
      dates: "Août 2009 - Juin 2010",
      bullets: [
        "Développement de solutions logicielles pour compteurs d'énergie, avec intégration du traitement de données par internet pour améliorer l'efficacité et réduire les coûts.",
        "Conception et déploiement d'un serveur HTTP pour systèmes embarqués, simplifiant les processus de transmission de données.",
      ],
    },
    {
      title: "Programmeur C",
      org: "Iwiz Hitec Solutions",
      location: "Chennai, Inde",
      dates: "Juillet 2008 - Juillet 2009",
      bullets: [
        "Développement de solutions basées sur l'IoT, notamment des pilotes de capteurs et des interfaces, optimisant les performances et la fiabilité du système.",
        "Amélioration des conceptions de PCB, renforçant l'efficacité énergétique et la sensibilité des applications IoT.",
      ],
    },
  ],
  projects: [
    {
      name: "Cisco Secured Linux",
      meta: "Team Lead (12) · Cisco Systems",
      tech: "Linux, runtime defense (RTD), OSC, SafeC, conteneurisation, Jenkins",
      detail:
        "Implémentation des modules centraux de protection des applications à l'exécution sur les plateformes Linux de Cisco ; instrumentation de sécurité intégrée à Jenkins CI/CD pour la modélisation des menaces avant livraison et participation aux sessions de débogage client.",
    },
    {
      name: "Access control list sur Cisco IOS",
      meta: "Team Lead (11) · RJIL, Google, Facebook",
      tech: "C, Python, Cisco IOS-XR, YANG/NETCONF",
      detail:
        "Conception de modules ACL de couche 3 avec filtres IPv4/IPv6 entrants et sortants, gestionnaires de protocoles et moteurs de correspondance de paquets intégrés au plan de contrôle ; résolution des escalations de production avec Cisco TAC.",
    },
    {
      name: "QoS / Policy Manager sur Cisco IOS",
      meta: "Team Lead (11) · RJIL, Google, Facebook",
      tech: "C, Python, Cisco IOS-XR, YANG/NETCONF",
      detail:
        "Développement de la classification, du policing et de l'ordonnancement MQC pour les routeurs d'entreprise et opérateurs ; optimisation des performances du plan de données, correction de défauts terrain et automatisation des régressions.",
    },
    {
      name: "Ethernet Connectivity Fault Management",
      meta: "Team Lead (8) · Wells Fargo, NASA, Visa",
      tech: "C, Python, Cisco NX-OS, AAA, Ethernet, ACME, GDB",
      detail:
        "Développement de composants OAM de couche 2 pour Cisco NX-OS avec MEP, MEG et traitement des messages CFM ; isolation des défauts avec GDB et traces personnalisées, documentation et partage de connaissances.",
    },
    {
      name: "Broadband Network Gateway",
      meta: "Senior Engineer · Cygate",
      tech: "C, Python, Cisco OS, AAA, ACME, VPN, L2TP, GDB",
      detail:
        "Mise en œuvre des piles PPPoE, IPoE et L2TP avec gestionnaire de sessions et provisionnement des politiques ; analyse des causes de coupures de session et d'échecs d'authentification, outils de debug et de trace.",
    },
    {
      name: "LTE Gateway Router",
      meta: "Senior Engineer · Cisco Systems, AT&T",
      tech: "C, Cisco OS, L2TP, GRE, ACME, 3GPP, GDB",
      detail:
        "Développement des plans de données et de contrôle du packet gateway LTE avec GRE et L2TP, QoS et interception légale conformes 3GPP ; simulation de charges mobiles élevées et correction des pertes de paquets.",
    },
    {
      name: "GGSN Gateway Router",
      meta: "Software Engineer · Cisco, AT&T, Belgacom, Eircom, Turkcell, Truemove",
      tech: "C, Cisco OS, L2TP, GRE, ACME, GDB",
      detail:
        "Mise en œuvre du contexte PDP, de la facturation et de l'optimisation du plan de données ; refonte de la gestion mémoire pour de grands parcs d'abonnés et résolution d'incidents GRE/L2TP.",
    },
    {
      name: "IP Modem for Metering",
      meta: "Software Engineer · NPDC Ltd., Thailand Electricity Board",
      tech: "C, GPRS, RTC, EEPROM, microprocesseurs 8 bits",
      detail:
        "Développement d'un logiciel embarqué compact pour la télérelève GPRS sur processeurs 8 bits, interfaces firmware EEPROM/RTC et support du déploiement pilote et du débogage terrain avec les opérateurs.",
    },
  ],
  education: {
    degree:
      "Bachelor of Engineering (BE), génie électrique, électronique et télécommunications",
    institution: "Anna University - SSN College of Engineering, Chennai, Inde",
    dates: "Août 2003 - Juillet 2007",
  },
  languages: [
    { name: "Anglais", level: "C1", note: "Courant professionnel" },
    { name: "Tamoul", level: "Langue maternelle", note: "Langue maternelle" },
    {
      name: "Allemand",
      level: "A1",
      note: "Notions de base ; certification en cours",
    },
  ],
  digitalSkills: [
    {
      label: "Ingénierie & systèmes",
      value: "Linux OS, réseaux TCP/IP, C/C++, Python",
    },
    {
      label: "Build & delivery",
      value:
        "Jenkins, Docker, builds multi-architectures, release engineering, CI/CD",
    },
    {
      label: "IA & gouvernance",
      value:
        "Transformation IA, mesure de l'adoption de l'IA, EU AI Act, ISO/IEC 42001",
    },
    {
      label: "Direction & delivery",
      value:
        "Gestion de programmes techniques, architecture technique, gouvernance de la livraison, gestion des clients et des clients finaux, gestion de la demande de ressources, encadrement d'équipes",
    },
    {
      label: "Agile & outils",
      value:
        "Agile/Scrum (connaissances pratiques, niveau ingénieur), Jira, gestion de programmes Agile à l'échelle (PSM I en cours)",
    },
  ],
  certifications: [
    "Project Management Professional (PMP) - Project Management Institute (valide jusqu'à déc 2027)",
    "Generative AI Leader - Google Cloud (valide jusqu'à sep 2028)",
    "AWS Certified AI Practitioner - Amazon Web Services (valide jusqu'à sep 2029)",
  ],
  additional: [
    "Projet personnel : système de trading algorithmique d'options en Python, avec signaux basés sur le RSI, gestion des stop-loss GTT, stops suiveurs et plafonds de perte quotidienne.",
    "Ouvert aux postes de gestion de programmes techniques, d'architecture et de leadership en transformation IA, delivery d'ingénierie et gouvernance responsable de l'IA ; disposé à déménager près du lieu de travail.",
  ],
};

export const cvLocales = {
  en: cv,
  fr: cvFr,
};
