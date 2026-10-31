/**
 * ===================================================================
 * PROJECT UPLIFT - Core Application Logic
 * Student Opportunities, Scam Defense, Focus System & Safe Portals
 * Focused on Verified Opportunities in India & Worldwide
 * CSE, AI & ISE Free Certified Courses + Top Tech Internships
 * Accessible, Responsive, LocalStorage-backed Vanilla JavaScript
 * ===================================================================
 */

'use strict';

// ===================================================================
// 1. DATA REPOSITORY: 39 CURATED STUDENT OPPORTUNITIES (INDIA & GLOBAL)
// ===================================================================
const OPPORTUNITIES_DATA = [
  // =================================================================
  // SCHOLARSHIPS (INDIA & GLOBAL)
  // =================================================================
  {
    id: 'opp-1',
    title: 'National Scholarship Portal (Central Sector & AICTE Schemes)',
    org: 'Ministry of Education & MeitY, Govt of India',
    category: 'scholarship',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-11-30',
    deadlineText: 'Nov 30, 2026 (Annual)',
    value: '₹12,000 - ₹50,000/yr (Direct Bank DBT)',
    location: 'All India (Central & State Sponsored)',
    type: 'verified',
    skills: ['Technical Writing', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'high_school', 'self_taught', 'data_tech'],
    description: 'India\'s official single-window electronic platform for Central Sector, AICTE Pragati (girls in tech), Saksham (differently-abled), and post-matric collegiate scholarships.',
    eligibility: 'Enrolled in an accredited Indian college/university (recognized by AICTE/UGC) with 80th percentile in Class 12 or approved category quota. Family income criteria applies.',
    benefits: 'Direct Benefit Transfer (DBT) deposited directly into student\'s Aadhaar-linked bank account. Non-repayable government financial grant.',
    applicationLink: 'https://scholarships.gov.in'
  },
  {
    id: 'opp-2',
    title: 'Reliance Foundation Undergraduate Scholarship',
    org: 'Reliance Foundation',
    category: 'scholarship',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-11-15',
    deadlineText: 'Nov 15, 2026',
    value: 'Up to ₹2,00,000 Total Grant',
    location: 'Pan-India (Merit-cum-Means)',
    type: 'verified',
    skills: ['Problem Solving', 'Technical Writing'],
    recommendedProfiles: ['cs_student', 'high_school', 'data_tech'],
    description: 'Empowers 5,000 meritorious Indian undergraduate students each year across all degree programs with up to ₹2 Lakh financial grant and leadership immersion retreats.',
    eligibility: 'First-year undergraduate students in regular full-time degree programs at recognized Indian institutions. Minimum 60% in Class 12, household income up to ₹15 Lakhs (priority under ₹2.5 Lakhs).',
    benefits: 'Financial award of up to ₹2,00,000 over the course of degree study, alumni network, and leadership development workshops.',
    applicationLink: 'https://www.reliancefoundation.org/scholarships'
  },
  {
    id: 'opp-3',
    title: 'Vidyasaarathi & Tata Trusts CSR Scholarships',
    org: 'NSDL e-Governance & Tata Trusts',
    category: 'scholarship',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-12-15',
    deadlineText: 'Dec 15, 2026',
    value: '₹30,000 - ₹1,00,000 Tuition Support',
    location: 'India (Accredited Colleges)',
    type: 'verified',
    skills: ['Technical Writing', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'self_taught', 'data_tech'],
    description: 'A verified corporate CSR scholarship management portal backed by NSDL e-Gov offering tuition grants from Tata, JSW, ACC, and other leading Indian corporations.',
    eligibility: 'Indian students pursuing BE/B.Tech, Diploma, BCA, Medical, or general degrees in recognized colleges with family income under ₹5 Lakhs.',
    benefits: 'Direct tuition reimbursement paid towards college fee vouchers. Safe, verified corporate CSR disbursement with zero middleman charges.',
    applicationLink: 'https://www.vidyasaarathi.co.in'
  },
  {
    id: 'opp-4',
    title: 'HDFC Bank Parivartan ECSS (via Buddy4Study)',
    org: 'HDFC Bank & Buddy4Study Portal',
    category: 'scholarship',
    region: 'india',
    level: 'All Levels',
    deadline: '2026-12-31',
    deadlineText: 'Dec 31, 2026',
    value: 'Up to ₹75,000 Tuition Aid',
    location: 'Pan-India (School & College)',
    type: 'verified',
    skills: ['Technical Writing', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'high_school', 'self_taught'],
    description: 'Educational Crisis Support Scholarship (ECSS) designed to support school and collegiate students across India who are facing financial hardship or loss of earning parents.',
    eligibility: 'Students from Class 1 to Postgraduate level in recognized Indian institutions. Family annual income must be equal to or less than ₹2.5 Lakhs.',
    benefits: 'One-time scholarship grant directly credited to student/parent bank account to prevent dropouts.',
    applicationLink: 'https://www.buddy4study.com'
  },
  {
    id: 'opp-5',
    title: 'Generation Google Scholarship (APAC / India Focus)',
    org: 'Google Student Programs',
    category: 'scholarship',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-11-20',
    deadlineText: 'Nov 20, 2026',
    value: '$2,500 USD (Approx ₹2,00,000)',
    location: 'India & Asia Pacific (Virtual)',
    type: 'verified',
    skills: ['Python', 'Data Structures & Algorithms', 'Technical Writing', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'self_taught'],
    description: 'Awarded to aspiring women and underrepresented students in computer science across India and APAC who demonstrate academic excellence and leadership in tech equity.',
    eligibility: 'Must be currently enrolled as a full-time undergraduate student in Computer Science, Computer Engineering, or closely related technical field in India/APAC.',
    benefits: '$2,500 grant applied towards tuition and study supplies, invite to the Google Scholar Virtual Summit, and senior Google engineering mentorship.',
    applicationLink: 'https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-apac'
  },
  {
    id: 'opp-6',
    title: 'GitHub Campus Experts Leadership Fellowship',
    org: 'GitHub Education',
    category: 'scholarship',
    region: 'global',
    level: 'Undergraduate',
    deadline: '2026-12-10',
    deadlineText: 'Dec 10, 2026',
    value: 'Community Grant + Swag Pack',
    location: 'Global & India Campuses',
    type: 'verified',
    skills: ['Git & GitHub', 'Technical Writing', 'Public Speaking & Presentation', 'JavaScript'],
    recommendedProfiles: ['cs_student', 'self_taught'],
    description: 'Technical community leadership training program that equips student developers to enrich tech clubs and hackathons across Indian and global campuses.',
    eligibility: 'Enrolled college students with an active GitHub portfolio who organize or participate in campus coding clubs, hackathons, or open-source initiatives.',
    benefits: 'Full funding for on-campus student workshops, exclusive GitHub Expert swag, leadership coaching, and community event sponsorships.',
    applicationLink: 'https://education.github.com/experts'
  },

  // =================================================================
  // INTERNSHIPS (INDIA & GLOBAL - EXPANDED CSE / AI / ISE FOCUS)
  // =================================================================
  {
    id: 'opp-7',
    title: 'AICTE Official National Government Internship Portal',
    org: 'All India Council for Technical Education (Govt of India)',
    category: 'internship',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-11-28',
    deadlineText: 'Rolling Monthly Admissions',
    value: '₹5,000 - ₹25,000/mo + Gov Cert',
    location: 'India (Remote, Smart Cities & PSUs)',
    type: 'verified',
    skills: ['Python', 'JavaScript', 'Git & GitHub', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'self_taught', 'data_tech'],
    description: 'India\'s official national government portal offering 1 Crore+ verified student internships across smart cities, municipal corporations, national research labs, and top tech partners.',
    eligibility: 'Open to all students enrolled in AICTE/UGC approved engineering, polytechnic, management, and technical institutions across India.',
    benefits: 'Official Government of India internship completion credential, stipend, and academic credit recognition mandatory under AICTE norms.',
    applicationLink: 'https://internship.aicte-india.org'
  },
  {
    id: 'opp-8',
    title: 'Amazon WOW India Student Mentorship & SDE Internship',
    org: 'Amazon Development Centre India',
    category: 'internship',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-12-05',
    deadlineText: 'Dec 05, 2026',
    value: 'Stipend ₹80,000+/mo + PPO Path',
    location: 'Bengaluru / Hyderabad / Chennai / Delhi (Hybrid)',
    type: 'verified',
    skills: ['Data Structures & Algorithms', 'Problem Solving', 'Python', 'Git & GitHub'],
    recommendedProfiles: ['cs_student', 'data_tech'],
    description: 'A dedicated initiative for women engineering students in India, offering structured DSA coding prep, technical masterclasses, and direct fast-track interviews for summer SDE internships.',
    eligibility: 'Women engineering students pursuing B.Tech/BE/MCA/M.Tech degrees at accredited institutions in India.',
    benefits: 'Paid summer internship with competitive monthly stipend, relocation support, senior Amazon SDE mentorship, and Pre-Placement Offer (PPO) potential.',
    applicationLink: 'https://amazon.jobs/content/programs/amazon-wow'
  },
  {
    id: 'opp-9',
    title: 'Microsoft India Student Engineering Internship (IDC)',
    org: 'Microsoft India R&D (IDC)',
    category: 'internship',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-11-25',
    deadlineText: 'Nov 25, 2026',
    value: 'Industry Top Stipend + Housing',
    location: 'Bengaluru / Hyderabad / Noida',
    type: 'verified',
    skills: ['Data Structures & Algorithms', 'Problem Solving', 'React & Frontend', 'Git & GitHub'],
    recommendedProfiles: ['cs_student', 'data_tech'],
    description: 'Software Engineering interns solve real-world scale problems in Azure Cloud, Microsoft Teams, AI models, and Developer Platforms at Microsoft India Development Centers.',
    eligibility: 'Pre-final year undergraduate students in Computer Science, Electrical Engineering, or related technical disciplines at recognized Indian universities.',
    benefits: 'Competitive monthly compensation, return flight tickets, accommodation allowance, hardware setup, and fast-track full-time offer conversion.',
    applicationLink: 'https://careers.microsoft.com/v2/global/en/students-and-graduates.html'
  },
  {
    id: 'opp-10',
    title: 'ISRO Technical Student Apprenticeship & Research Projects',
    org: 'Indian Space Research Organisation (ISRO)',
    category: 'internship',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-12-15',
    deadlineText: 'Dec 15, 2026 (Winter Batch)',
    value: 'Govt Research Certificate + Credits',
    location: 'ISRO Centres (URSC Bengaluru, SAC Ahmedabad, VSSC)',
    type: 'verified',
    skills: ['Linux & Bash', 'Python', 'Problem Solving', 'Data Structures & Algorithms'],
    recommendedProfiles: ['cs_student', 'data_tech'],
    description: 'Allows Indian engineering undergraduates to complete practical projects and research work in satellite software, embedded firmware, and orbital telemetry under space scientists.',
    eligibility: 'Undergraduate engineering students with minimum 65% aggregate (or 6.84 CGPA) enrolled in recognized Indian colleges. Formal college NOC required.',
    benefits: 'Direct hands-on experience on live aerospace mission components, mentorship by ISRO scientists, and official research credential.',
    applicationLink: 'https://www.isro.gov.in/Careers.html'
  },
  {
    id: 'opp-11',
    title: 'DRDO Student Apprenticeship & Research Training',
    org: 'Defence Research and Development Organisation (Govt of India)',
    category: 'internship',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-12-20',
    deadlineText: 'Dec 20, 2026',
    value: 'Govt Research Stipend + Security Clearance',
    location: 'DRDO Labs (CAIR Bengaluru, ADE, DLRL Hyderabad)',
    type: 'verified',
    skills: ['Linux & Bash', 'Python', 'Machine Learning & AI', 'Data Structures & Algorithms'],
    recommendedProfiles: ['cs_student', 'data_tech'],
    description: 'High-impact technical internships at DRDO labs like the Centre for Artificial Intelligence and Robotics (CAIR) in Bangalore focusing on defense AI, robotics, and cyber defense.',
    eligibility: 'Indian citizens enrolled in BE/B.Tech in CSE, ISE, ECE, or Robotics with first class marks and college endorsement.',
    benefits: 'Monthly government apprenticeship stipend, hands-on experience in national defense computing architectures, and prestigious research credentials.',
    applicationLink: 'https://www.drdo.gov.in'
  },
  {
    id: 'opp-12',
    title: 'IIT Madras Summer Fellowship Programme (SRFP)',
    org: 'Indian Institute of Technology Madras',
    category: 'internship',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-12-30',
    deadlineText: 'Dec 30, 2026 (Summer 2027 Cohort)',
    value: 'Stipend ₹6,000/mo + Free IIT Campus Stay',
    location: 'IIT Madras Campus, Chennai',
    type: 'verified',
    skills: ['Python', 'Data Structures & Algorithms', 'Machine Learning & AI', 'Technical Writing'],
    recommendedProfiles: ['cs_student', 'data_tech'],
    description: 'A prestigious two-month summer research fellowship allowing outstanding non-IIT engineering students to execute mini-research projects under IIT Madras computer science professors.',
    eligibility: 'Pre-final year students of BE/B.Tech/BCA with strong academic record (typically top 10% of class) in computer science, data science, or related branches.',
    benefits: 'Stipend of ₹6,000/month, free accommodation on IIT Madras campus, access to high-performance compute clusters, and formal IIT fellowship certificate.',
    applicationLink: 'https://srfp.iitm.ac.in'
  },
  {
    id: 'opp-13',
    title: 'NITI Aayog Student Internship Scheme',
    org: 'NITI Aayog, Government of India',
    category: 'internship',
    region: 'india',
    level: 'All Levels',
    deadline: '2026-11-10',
    deadlineText: 'Open 1st to 10th of Every Month',
    value: 'Official Government of India Certificate',
    location: 'New Delhi (Hybrid/Onsite)',
    type: 'verified',
    skills: ['Python', 'SQL & Databases', 'Technical Writing', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'data_tech'],
    description: 'Interns work with the premier policy think tank of the Government of India on national AI strategy, digital public infrastructure (India Stack), data analytics, and tech governance.',
    eligibility: 'Undergraduate students who have completed 2nd year with minimum 70% marks, or postgraduate students in computational, engineering, or policy streams.',
    benefits: 'Direct exposure to national government policy implementation, data-driven governance, and official Certificate of Internship signed by Adviser, NITI Aayog.',
    applicationLink: 'https://www.niti.gov.in/internship'
  },
  {
    id: 'opp-14',
    title: 'Infosys InStep Global Flagship Internship',
    org: 'Infosys Technologies (Bangalore)',
    category: 'internship',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-12-15',
    deadlineText: 'Rolling Admissions Year-Round',
    value: 'Competitive Monthly Stipend + Campus Stay',
    location: 'Infosys Global HQ, Bengaluru (Electronic City)',
    type: 'verified',
    skills: ['Machine Learning & AI', 'Python', 'React & Frontend', 'Git & GitHub'],
    recommendedProfiles: ['cs_student', 'data_tech', 'self_taught'],
    description: 'Consistently voted the World\'s #1 Internship Program by Vault. Interns work on cutting-edge generative AI, cloud transformation, and autonomous systems with international peers.',
    eligibility: 'Pre-final and final year students enrolled in top technical universities across India and globally.',
    benefits: 'Full accommodation at Infosys world-class Bangalore campus, competitive monthly stipend, leadership sessions with top executives, and fast-track PPO hiring.',
    applicationLink: 'https://www.infosys.com/instep.html'
  },
  {
    id: 'opp-15',
    title: 'TCS Research Student Internship Program',
    org: 'Tata Consultancy Services Research & Innovation',
    category: 'internship',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-12-05',
    deadlineText: 'Rolling Quarterly Reviews',
    value: 'Research Stipend + Patent Authorship',
    location: 'Bengaluru / Pune / Hyderabad / Kolkata',
    type: 'verified',
    skills: ['Machine Learning & AI', 'Data Structures & Algorithms', 'Python', 'Technical Writing'],
    recommendedProfiles: ['cs_student', 'data_tech'],
    description: 'Work alongside world-class scientists at TCS Research Labs exploring Foundation AI Models, Cyber-Physical Systems, Software Architecture, and Quantum Computing.',
    eligibility: 'Pre-final year B.Tech, M.Tech, or MS students with deep algorithmic intuition and research flair.',
    benefits: 'Competitive stipend, opportunity to co-author scientific papers at top conferences (NeurIPS, ICSE, KDD), and direct research scientist career tracks.',
    applicationLink: 'https://www.tcs.com/careers/india/internships'
  },
  {
    id: 'opp-16',
    title: 'Google Summer of Code (GSoC 2026)',
    org: 'Google Open Source Programs Office',
    category: 'internship',
    region: 'global',
    level: 'All Levels',
    deadline: '2026-12-01',
    deadlineText: 'Dec 01, 2026 (Organization List)',
    value: '$1,500 - $3,000 Stipend (India Adjusted)',
    location: '100% Remote (Global & India Active)',
    type: 'verified',
    skills: ['Git & GitHub', 'Python', 'Linux & Bash', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'self_taught', 'data_tech'],
    description: 'An internationally celebrated open source fellowship program where students contribute to organizations like Apache, Python, Blender, and Linux. Indian students comprise one of the largest contributor bases worldwide.',
    eligibility: 'Open to all post-secondary students and open source beginners aged 18+ around the globe, with massive active engagement across Indian colleges.',
    benefits: 'Competitive regional stipend, verified global contributor credential, mentorship from senior maintainers, and massive boost on technical resumes.',
    applicationLink: 'https://summerofcode.withgoogle.com'
  },
  {
    id: 'opp-17',
    title: 'Outreachy Diversity Remote Open Source Internship',
    org: 'Outreachy Open Source Collective',
    category: 'internship',
    region: 'global',
    level: 'All Levels',
    deadline: '2026-11-20',
    deadlineText: 'Nov 20, 2026 (Initial App Deadline)',
    value: '$7,000 USD Total Stipend (Approx ₹5,80,000)',
    location: '100% Remote (Global & India Eligible)',
    type: 'verified',
    skills: ['Git & GitHub', 'Python', 'JavaScript', 'Technical Writing'],
    recommendedProfiles: ['cs_student', 'self_taught'],
    description: 'A 3-month paid remote internship supporting people subject to systemic bias or underrepresented in tech. Interns work with mentors on open source tech like Mozilla, Wikimedia, and Linux.',
    eligibility: 'Open to applicants globally (including India) who face systemic underrepresentation in the tech industry of their country. Must be available 30-40 hrs/week.',
    benefits: '$7,000 USD total stipend, $500 travel grant, 1-on-1 mentorship, and zero relocation requirements.',
    applicationLink: 'https://www.outreachy.org'
  },
  {
    id: 'opp-18',
    title: 'CERN Summer Student Programme (Geneva, Switzerland)',
    org: 'European Organization for Nuclear Research (CERN)',
    category: 'internship',
    region: 'global',
    level: 'Undergraduate',
    deadline: '2026-12-15',
    deadlineText: 'Dec 15, 2026',
    value: 'CHF 90/day Allowance + Travel Covered',
    location: 'Geneva, Switzerland (Fully Funded)',
    type: 'verified',
    skills: ['Linux & Bash', 'Python', 'Data Structures & Algorithms', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'data_tech'],
    description: 'Spend 8 to 13 weeks at the world\'s largest particle physics laboratory in Geneva participating in cutting-edge computing, distributed grids, and data analysis. Indian students eligible via Associate Member State status.',
    eligibility: 'Undergraduate or Master\'s students in physics, computing, or engineering who have completed at least 3 years of full-time collegiate study.',
    benefits: 'Daily living allowance of ~90 CHF/day, round-trip travel airfare to Geneva covered, comprehensive health insurance, and lectures from Nobel laureates.',
    applicationLink: 'https://careers.cern/summer'
  },
  {
    id: 'opp-19',
    title: 'Linux Foundation Open Source Mentorship (LFX)',
    org: 'The Linux Foundation',
    category: 'internship',
    region: 'global',
    level: 'All Levels',
    deadline: '2026-12-20',
    deadlineText: 'Dec 20, 2026',
    value: '$3,000 - $6,000 Stipend',
    location: 'Worldwide (100% Remote)',
    type: 'verified',
    skills: ['Linux & Bash', 'Git & GitHub', 'Python', 'Data Structures & Algorithms'],
    recommendedProfiles: ['cs_student', 'self_taught', 'data_tech'],
    description: 'Direct paid mentorships with maintainers of Linux kernel, Kubernetes, Hyperledger, and Cloud Native Computing Foundation open source repositories.',
    eligibility: 'Enthusiastic software students and developers worldwide with solid fundamental knowledge of version control and system tools.',
    benefits: 'Generous graduated living stipend, published code contributions in global production infrastructure, and direct career referrals.',
    applicationLink: 'https://lfx.linuxfoundation.org/tools/mentorship/'
  },
  {
    id: 'opp-20',
    title: 'Qualcomm India Student Engineering Internship',
    org: 'Qualcomm India Private Limited',
    category: 'internship',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-11-28',
    deadlineText: 'Nov 28, 2026',
    value: 'Industry Benchmark Stipend + Perks',
    location: 'Bengaluru / Hyderabad / Chennai',
    type: 'verified',
    skills: ['Linux & Bash', 'Data Structures & Algorithms', 'Python', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'data_tech'],
    description: 'Interns build systems for 5G modems, embedded Linux, edge AI processing, and mobile GPUs at Qualcomm\'s premier semiconductor design centers in India.',
    eligibility: 'B.Tech/BE/M.Tech students in Computer Science, Information Science (ISE), or Electronics Engineering with strong C/C++ or Python skills.',
    benefits: 'High monthly stipend, direct mentor pairing, full hardware development kits, and return PPO offers for final year graduates.',
    applicationLink: 'https://www.qualcomm.com/company/careers/students'
  },

  // =================================================================
  // HACKATHONS (INDIA & GLOBAL)
  // =================================================================
  {
    id: 'opp-21',
    title: 'Smart India Hackathon (SIH 2026) - Software Edition',
    org: 'Ministry of Education Innovation Cell & AICTE',
    category: 'hackathon',
    region: 'india',
    level: 'Undergraduate',
    deadline: '2026-11-10',
    deadlineText: 'Nov 10, 2026 (Internal College Rounds)',
    value: '₹1,00,000 Cash Prize per Problem Statement',
    location: 'Pan-India Nodal Centres (Grand Finale)',
    type: 'verified',
    skills: ['React & Frontend', 'Python', 'UI/UX Design', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'self_taught', 'data_tech'],
    description: 'The world\'s biggest open innovation competition by the Government of India. Student teams solve real-life problem statements posed by Central Ministries, State Governments, and PSUs.',
    eligibility: 'Regular full-time students of AICTE, UGC, or State Council recognized colleges in India. Teams of 6 with mandatory female member representation.',
    benefits: '₹1,00,000 cash prize per winning problem statement, direct government recognition, pre-incubation grants, and travel reimbursements for grand finale.',
    applicationLink: 'https://www.sih.gov.in'
  },
  {
    id: 'opp-22',
    title: 'Devfolio Hackathons (ETHIndia & Collegiate Circuit)',
    org: 'Devfolio Community (India\'s Premier Hackathon Host)',
    category: 'hackathon',
    region: 'india',
    level: 'All Levels',
    deadline: '2026-11-22',
    deadlineText: 'Weekly Campus Hackathons',
    value: '₹10,00,000+ Total Prize Pools & Grants',
    location: 'Bengaluru / Delhi / Mumbai & Online (India)',
    type: 'verified',
    skills: ['React & Frontend', 'JavaScript', 'Git & GitHub', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'self_taught'],
    description: 'India\'s premier builder application platform hosting ETHIndia (Asia\'s largest Web3 hackathon in Bangalore), collegiate hackathons like HackCBS, and micro-grants for student projects.',
    eligibility: 'Open to all student builders, developers, and designers across India. Free to enter with vetted project applications.',
    benefits: 'Cash bounties, sponsor track prizes (Polygon, Filecoin, Arbitrum), travel grants, free meals, and community builder badges.',
    applicationLink: 'https://devfolio.co/hackathons'
  },
  {
    id: 'opp-23',
    title: 'Unstop Student Tech & Product Hackathons',
    org: 'Unstop (Formerly Dare2Compete - India)',
    category: 'hackathon',
    region: 'india',
    level: 'All Levels',
    deadline: '2026-12-08',
    deadlineText: 'Rolling Competitions Year-Round',
    value: 'Cash Prizes up to ₹25 Lakhs + PPO Offers',
    location: 'India (Online & Campus Finals at IITs/IIMs)',
    type: 'verified',
    skills: ['React & Frontend', 'UI/UX Design', 'Python', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'high_school', 'self_taught'],
    description: 'India\'s largest collegiate competition network hosting national hackathons for Flipkart GRiD, Walmart Sparkathon, Tata Crucible, and premier Indian technical festivals.',
    eligibility: 'Undergraduate and postgraduate students enrolled in Indian colleges and institutes across all academic years.',
    benefits: 'Direct fast-tracked recruitment interviews with top consumer tech firms, cash prize pools, and all-India certificates.',
    applicationLink: 'https://unstop.com/hackathons'
  },
  {
    id: 'opp-24',
    title: 'HackerEarth Innovation Challenges & Hiring Hackathons',
    org: 'HackerEarth India',
    category: 'hackathon',
    region: 'india',
    level: 'All Levels',
    deadline: '2026-11-18',
    deadlineText: 'Nov 18, 2026',
    value: 'Cash Prizes + Fast-Track Interviews',
    location: 'Online (Pan-India & Global)',
    type: 'verified',
    skills: ['Data Structures & Algorithms', 'Python', 'Problem Solving', 'React & Frontend'],
    recommendedProfiles: ['cs_student', 'self_taught', 'data_tech'],
    description: 'Coding hackathons and algorithmic competitions organized by multinational tech employers in India (Accenture, Cisco, Wipro, Infosys) for campus hiring.',
    eligibility: 'Open to college students and early-career developers looking for technical evaluation and job opportunities across India.',
    benefits: 'Cash prize bounties, ranking on global leaderboards, and direct interview calls skipping standard resume screens.',
    applicationLink: 'https://www.hackerearth.com/challenges/'
  },
  {
    id: 'opp-25',
    title: 'Major League Hacking (MLH) Global Season 2026',
    org: 'Major League Hacking (Official Student League)',
    category: 'hackathon',
    region: 'global',
    level: 'All Levels',
    deadline: '2026-11-05',
    deadlineText: 'Weekend Sprints (Weekly)',
    value: '$50,000 Seasonal Prize Pools + Swag',
    location: 'Virtual & Worldwide (India Teams Active)',
    type: 'verified',
    skills: ['React & Frontend', 'JavaScript', 'Git & GitHub', 'UI/UX Design'],
    recommendedProfiles: ['cs_student', 'high_school', 'self_taught'],
    description: 'The official global student hackathon league hosting 36-hour weekend innovation sprints. Indian collegiate developers participate virtually, access sponsor cloud credits, and earn swag.',
    eligibility: 'Any registered student (High School through Graduate School) or recent graduates up to 6 months post-graduation.',
    benefits: 'Free cloud credits (AWS, GitHub, Twilio), mentorship from industry software engineers, and trophy hardware prizes mailed to winners in India.',
    applicationLink: 'https://mlh.io/seasons/2026/events'
  },
  {
    id: 'opp-26',
    title: 'Neo Quantum AI Innovation Sprint (Simulation)',
    org: 'Neo Frontier Labs (Hackathon Simulation)',
    category: 'hackathon',
    region: 'global',
    level: 'Undergraduate',
    deadline: '2026-11-25',
    deadlineText: 'Nov 25, 2026',
    value: '$15,000 Innovation Seed',
    location: 'Virtual / Silicon Valley',
    type: 'simulation',
    skills: ['Machine Learning & AI', 'Python', 'SQL & Databases', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'data_tech'],
    description: '[Educational Simulation] A prototype competitive hackathon designed to test students\' ability to train lightweight edge-AI models for sustainability.',
    eligibility: 'Student teams of 1 to 4 members with active collegiate standing in computational, physical, or mathematical sciences.',
    benefits: 'Simulated $15,000 project seed grant, GPU cluster access credits, and industry review from venture partners.',
    applicationLink: '#simulation-notice'
  },

  // =================================================================
  // FREE COURSES & CERTIFICATIONS (CSE, AI & ISE SPECIALIZED)
  // =================================================================
  {
    id: 'opp-27',
    title: 'SWAYAM & NPTEL Certified IIT/IISc Computer Science Tracks',
    org: 'Ministry of Education, Govt of India & IIT Madras',
    category: 'course',
    region: 'india',
    level: 'All Levels',
    deadline: '2026-12-31',
    deadlineText: 'Jan 2027 Semester Enrollment Open',
    value: 'Free IIT Learning + UGC Academic Credit Transfer',
    location: 'Online (Exam Centres in 150+ Indian Cities)',
    type: 'verified',
    skills: ['Data Structures & Algorithms', 'Python', 'SQL & Databases', 'Machine Learning & AI'],
    recommendedProfiles: ['cs_student', 'high_school', 'self_taught', 'data_tech'],
    description: 'India\'s national online education portal offering complete CSE/ISE core curriculum taught by professors of IITs (IIT Madras, IIT Bombay, IIT Kharagpur): Algorithms, Operating Systems, Compilers, and AI.',
    eligibility: 'Free and accessible to all students across India and globally. Nominal fee only if opting for optional in-person proctored IIT exam certificate.',
    benefits: 'High-caliber curriculum directly from IIT faculty, recognized by AICTE/UGC for college degree credits, and free digital video lectures.',
    applicationLink: 'https://swayam.gov.in'
  },
  {
    id: 'opp-28',
    title: 'DeepLearning.AI: Machine Learning & GenAI Specialization',
    org: 'DeepLearning.AI & Stanford Online (Prof. Andrew Ng)',
    category: 'course',
    region: 'global',
    level: 'All Levels',
    deadline: '2026-12-31',
    deadlineText: 'Self-Paced (Open Year-Round)',
    value: 'World\'s #1 AI Course (Free Audit & Financial Aid)',
    location: 'Online (Accessible Across India)',
    type: 'verified',
    skills: ['Machine Learning & AI', 'Python', 'Data Structures & Algorithms', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'data_tech', 'self_taught'],
    description: 'The gold standard in machine learning education created by AI pioneer Andrew Ng. Covers Supervised Learning, Neural Networks, Reinforcement Learning, and practical PyTorch/TensorFlow.',
    eligibility: 'Open to anyone worldwide with basic math and Python proficiency. Complete course content is 100% free to audit.',
    benefits: 'Practical Jupyter notebook labs, mathematical intuition for loss functions & gradient descent, and verified certificate recognized by all tech employers.',
    applicationLink: 'https://www.deeplearning.ai/courses/'
  },
  {
    id: 'opp-29',
    title: 'Kaggle Learn: 100% Free Certified Practical AI & Python',
    org: 'Kaggle (Google LLC)',
    category: 'course',
    region: 'global',
    level: 'All Levels',
    deadline: '2026-12-31',
    deadlineText: 'Self-Paced Bite-Sized Modules',
    value: '100% Free Verified Certificates',
    location: 'Online (Interactive In-Browser GPUs)',
    type: 'verified',
    skills: ['Python', 'Machine Learning & AI', 'SQL & Databases', 'Data Structures & Algorithms'],
    recommendedProfiles: ['cs_student', 'data_tech', 'self_taught', 'high_school'],
    description: 'Fast, interactive micro-courses with zero setup required. Free GPU-enabled notebooks teaching Python, Pandas, Machine Learning, Deep Learning, Computer Vision, and AI Ethics.',
    eligibility: 'Completely free for anyone with a Google/Kaggle account. No installation or credit card required.',
    benefits: 'Earn free verifiable digital certificates on your Kaggle profile upon completing each track. Instant hands-on coding exercises.',
    applicationLink: 'https://www.kaggle.com/learn'
  },
  {
    id: 'opp-30',
    title: 'freeCodeCamp: Certified Full-Stack & Python Scientific Computing',
    org: 'freeCodeCamp.org Non-Profit',
    category: 'course',
    region: 'global',
    level: 'All Levels',
    deadline: '2026-12-31',
    deadlineText: '100% Free Self-Paced',
    value: '300-Hour Industry Accredited Certificates',
    location: 'Online (Browser-Based Projects)',
    type: 'verified',
    skills: ['JavaScript', 'React & Frontend', 'Python', 'SQL & Databases'],
    recommendedProfiles: ['cs_student', 'self_taught', 'high_school'],
    description: 'Over 10,000 interactive coding challenges and 10 full 300-hour verified certifications: Responsive Web Design, Front End Libraries (React), Relational Databases (SQL), and Machine Learning with Python.',
    eligibility: '100% free forever for all learners globally. Used by millions of Indian software engineering students.',
    benefits: 'Requires building 5 real projects per certification. Widely recognized in technical hiring and portfolio evaluations.',
    applicationLink: 'https://www.freecodecamp.org/learn'
  },
  {
    id: 'opp-31',
    title: 'Fast.ai: Practical Deep Learning for Coders',
    org: 'Fast.ai Research Lab (Jeremy Howard)',
    category: 'course',
    region: 'global',
    level: 'Undergraduate',
    deadline: '2026-12-31',
    deadlineText: 'Free Open Access',
    value: 'Top-Tier Applied Deep Learning & LLMs',
    location: 'Online (PyTorch Based)',
    type: 'verified',
    skills: ['Machine Learning & AI', 'Python', 'Linux & Bash', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'data_tech', 'self_taught'],
    description: 'A world-renowned top-down deep learning course for programmers. Teaches state-of-the-art computer vision, natural language processing, tabular analysis, and generative diffusion models using PyTorch.',
    eligibility: 'Free and open to all with at least 1 year of programming experience in Python.',
    benefits: 'Focuses on creating real-world production models without needing advanced PhD mathematics. Acclaimed by top AI engineers.',
    applicationLink: 'https://course.fast.ai'
  },
  {
    id: 'opp-32',
    title: 'Hugging Face Open Deep Reinforcement Learning & NLP',
    org: 'Hugging Face',
    category: 'course',
    region: 'global',
    level: 'All Levels',
    deadline: '2026-12-31',
    deadlineText: 'Open Cohorts & Self-Paced',
    value: 'Free Verified Digital Certification Badge',
    location: 'Online (Colab & Hub)',
    type: 'verified',
    skills: ['Machine Learning & AI', 'Python', 'Git & GitHub', 'Data Structures & Algorithms'],
    recommendedProfiles: ['cs_student', 'data_tech'],
    description: 'Comprehensive, free hands-on courses in Deep Reinforcement Learning, Transformers, Audio AI, and Open Source AI Agents directly on Hugging Face infrastructure.',
    eligibility: 'Free for everyone. Requires basic Python and machine learning knowledge.',
    benefits: 'Publish your trained models to the Hugging Face Model Hub, compete in environment leaderboards, and earn verified certification badges.',
    applicationLink: 'https://huggingface.co/learn'
  },
  {
    id: 'opp-33',
    title: 'ISRO IIRS Geospatial Technology & AI Free Certification',
    org: 'Indian Institute of Remote Sensing (ISRO EDUSAT)',
    category: 'course',
    region: 'india',
    level: 'All Levels',
    deadline: '2026-11-25',
    deadlineText: 'Nov 25, 2026 (Next Cohort)',
    value: '100% Free Official ISRO Certificate',
    location: 'Online E-Class Platform',
    type: 'verified',
    skills: ['Python', 'Machine Learning & AI', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'data_tech'],
    description: 'Free online short-term training courses on satellite remote sensing, Python for spatial data analysis, and Machine Learning applications directly delivered by ISRO scientists.',
    eligibility: 'Undergraduate and postgraduate students, researchers, and tech enthusiasts interested in earth observation and remote sensing.',
    benefits: '100% free official ISRO IIRS certificate upon scoring 70%+ in online assessment. Zero fees at any stage.',
    applicationLink: 'https://www.iirs.gov.in/edusat-program'
  },
  {
    id: 'opp-34',
    title: 'Cisco Networking Academy: Cybersecurity & Python Certification',
    org: 'Cisco Systems (NetAcad)',
    category: 'course',
    region: 'global',
    level: 'All Levels',
    deadline: '2026-12-31',
    deadlineText: 'Free Self-Paced Courses',
    value: 'Official Cisco Digital Badges & Certs',
    location: 'Online (Accessible Across India)',
    type: 'verified',
    skills: ['Linux & Bash', 'Python', 'Problem Solving', 'Data Structures & Algorithms'],
    recommendedProfiles: ['cs_student', 'high_school', 'self_taught'],
    description: 'Free comprehensive online foundation tracks in Cybersecurity Essentials, Operating Systems (Linux), Python Programming, and Computer Networking from Cisco.',
    eligibility: 'Completely free for students worldwide. Partnered with AICTE and Indian colleges.',
    benefits: 'Earn industry-recognized Cisco NetAcad digital credential badges for LinkedIn and college resume portfolios.',
    applicationLink: 'https://www.netacad.com/courses/all-courses'
  },
  {
    id: 'opp-35',
    title: 'IIT Bombay Spoken Tutorial Project (FOSS Certifications)',
    org: 'IIT Bombay (National Mission on Education via ICT, MoE)',
    category: 'course',
    region: 'india',
    level: 'All Levels',
    deadline: '2026-12-31',
    deadlineText: 'Year-Round College Access',
    value: 'Free IIT Bombay Verified Certificate',
    location: 'Online & Indian Campus Labs',
    type: 'verified',
    skills: ['Linux & Bash', 'Python', 'JavaScript', 'Data Structures & Algorithms'],
    recommendedProfiles: ['cs_student', 'high_school', 'self_taught'],
    description: 'An initiative by IIT Bombay funded by the Ministry of Education, Govt of India. Self-learning audio-video tutorials in C, C++, Java, Python, Linux, Blender, and Android.',
    eligibility: 'Open to all Indian collegiate and school students. Offered in multiple Indian regional languages.',
    benefits: 'Official IIT Bombay online test and verified digital certificate upon completion, recognized across Indian industries.',
    applicationLink: 'https://spoken-tutorial.org'
  },
  {
    id: 'opp-36',
    title: 'Google Cloud Arcade & Skills Boost Program',
    org: 'Google Cloud India',
    category: 'course',
    region: 'india',
    level: 'All Levels',
    deadline: '2026-12-15',
    deadlineText: 'Rolling Monthly Quests',
    value: 'Free Cloud Lab Credits + Official Cert Badges & Swag',
    location: 'Virtual (Pan-India Cohorts)',
    type: 'verified',
    skills: ['Linux & Bash', 'Python', 'SQL & Databases', 'Machine Learning & AI'],
    recommendedProfiles: ['cs_student', 'self_taught', 'data_tech'],
    description: 'Gamified cloud learning quests where Indian college students gain free hands-on access to Google Cloud sandbox environments, Kubernetes, and GenAI labs.',
    eligibility: 'Students in India with a Google account. Free access tokens provided monthly via official student arcade links.',
    benefits: 'Hands-on experience with live GCP infrastructure without needing personal credit cards, verifiable Google skill badges, and official swag.',
    applicationLink: 'https://www.cloudskillsboost.google'
  },
  {
    id: 'opp-37',
    title: 'Harvard CS50x Open Learning Pathway',
    org: 'Harvard University / edX',
    category: 'course',
    region: 'global',
    level: 'All Levels',
    deadline: '2026-12-31',
    deadlineText: 'Self-Paced (Open Year-Round)',
    value: 'Free Verified Knowledge',
    location: 'Online (Accessible Across India)',
    type: 'verified',
    skills: ['Python', 'Data Structures & Algorithms', 'SQL & Databases', 'Problem Solving'],
    recommendedProfiles: ['high_school', 'self_taught', 'cs_student'],
    description: 'Harvard University\'s legendary introduction to the intellectual enterprises of computer science and the art of programming for beginners and CS majors.',
    eligibility: 'Completely free and open to anyone worldwide with an internet connection. Extremely popular study cohorts among Indian college developers.',
    benefits: 'Free problem sets, automated grading test suites, comprehensive lectures by Prof. David J. Malan, and free digital certificate.',
    applicationLink: 'https://cs50.harvard.edu/x'
  },
  {
    id: 'opp-38',
    title: 'Microsoft Learn Student Ambassadors & AI Career Essentials',
    org: 'Microsoft Education',
    category: 'course',
    region: 'global',
    level: 'All Levels',
    deadline: '2026-12-01',
    deadlineText: 'Quarterly Cohort Reviews',
    value: 'Free Azure Credits + Global Community',
    location: 'Global & India Campuses',
    type: 'verified',
    skills: ['Public Speaking & Presentation', 'Git & GitHub', 'JavaScript', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'high_school', 'self_taught', 'data_tech'],
    description: 'A global network of campus leaders who host technical workshops, master Microsoft Cloud technologies, and foster local peer learning communities across Indian colleges.',
    eligibility: 'College and university students aged 16+ enrolled in an accredited post-secondary institution.',
    benefits: 'Free monthly Azure cloud credits, free exam certification vouchers, LinkedIn Learning access, and direct mentorship from Microsoft engineers.',
    applicationLink: 'https://studentambassadors.microsoft.com'
  },
  {
    id: 'opp-39',
    title: 'Intel Digital Readiness: Student AI Fundamentals Certification',
    org: 'Intel Corporation (AI for Youth & Higher Ed)',
    category: 'course',
    region: 'global',
    level: 'All Levels',
    deadline: '2026-12-31',
    deadlineText: 'Free Online Student Access',
    value: 'Official Intel Student AI Certificate',
    location: 'Online (India & Worldwide)',
    type: 'verified',
    skills: ['Machine Learning & AI', 'Python', 'Linux & Bash', 'Problem Solving'],
    recommendedProfiles: ['cs_student', 'data_tech'],
    description: 'Learn modern edge-AI computer vision, OpenVINO toolkit optimization, and deep learning architectures with free hands-on sandbox labs by Intel.',
    eligibility: 'Free for student learners interested in AI hardware acceleration and embedded machine learning.',
    benefits: 'Free Intel oneAPI developer toolkit access and official Intel Student AI Completion Certificate.',
    applicationLink: 'https://www.intel.com/content/www/us/en/developer/topic-technology/artificial-intelligence/overview.html'
  }
];

// ===================================================================
// 2. AUTHORIZED & SAFE PORTALS DIRECTORY
// ===================================================================
const AUTHORIZED_PORTALS_DATA = [
  {
    id: 'portal-1',
    name: 'National Scholarship Portal (NSP)',
    agency: 'Ministry of Electronics & IT / Ministry of Education, Govt of India',
    domain: 'scholarships.gov.in',
    url: 'https://scholarships.gov.in',
    category: 'govt_india',
    securityBadge: 'GOVERNMENT OF INDIA (.GOV.IN)',
    isGov: true,
    description: 'The premier national electronic clearinghouse for all Government of India Central Sector Schemes, UGC, AICTE, and State Government post-matric scholarships.',
    offerings: [
      'Central Sector Scheme for College and University Students',
      'AICTE Pragati Scholarship for Girls in Technical Education',
      'AICTE Saksham Scholarship for Specially-Abled Students',
      'Direct Benefit Transfer (DBT) directly into Aadhaar-linked bank accounts'
    ],
    safetyAdvice: 'Official portal ALWAYS ends in .gov.in. Zero application fees. Never share OTP or banking passwords with anyone.'
  },
  {
    id: 'portal-2',
    name: 'AICTE National Internship Portal',
    agency: 'All India Council for Technical Education, Govt of India',
    domain: 'internship.aicte-india.org',
    url: 'https://internship.aicte-india.org',
    category: 'govt_india',
    securityBadge: 'GOVERNMENT OF INDIA (.ORG)',
    isGov: true,
    description: 'India\'s unified national portal connecting engineering, polytechnic, and technical students with certified internships across government ministries, smart cities, and MNCs.',
    offerings: [
      'Over 1 Crore verified technical and research internships',
      'Smart Cities Council & Urban Local Bodies student fellowships',
      'PSU and government department digital transformation projects',
      'Direct compliance with AICTE mandatory internship activity points'
    ],
    safetyAdvice: 'Legitimate internships on AICTE never charge fees. Report any employer asking for "training charges" or "certificate deposits".'
  },
  {
    id: 'portal-3',
    name: 'SWAYAM & NPTEL Portal',
    agency: 'Ministry of Education, Govt of India & IIT Madras',
    domain: 'swayam.gov.in',
    url: 'https://swayam.gov.in',
    category: 'learning',
    securityBadge: 'GOVERNMENT OF INDIA (.GOV.IN)',
    isGov: true,
    description: 'India\'s national Massive Open Online Courses (MOOCs) platform providing high-quality courses from IITs, IISc, IIMs, and NCERT with formal university credit transfer.',
    offerings: [
      '2,000+ free online courses across engineering, science, and humanities',
      'Curriculum prepared by top IIT and central university professors',
      'UGC approved academic credit transfer to college grade sheets',
      'Optional in-person proctored certification exam in 150+ Indian cities'
    ],
    safetyAdvice: 'All lecture material and problem sets are 100% free. Verified official Government portal.'
  },
  {
    id: 'portal-4',
    name: 'Smart India Hackathon (SIH)',
    agency: 'Ministry of Education Innovation Cell & AICTE',
    domain: 'sih.gov.in',
    url: 'https://www.sih.gov.in',
    category: 'hackathons',
    securityBadge: 'GOVERNMENT OF INDIA (.GOV.IN)',
    isGov: true,
    description: 'The world\'s largest open innovation initiative by the Government of India, engaging student minds to solve critical national challenges.',
    offerings: [
      'Direct problem statements from Central Ministries, State Govts, and PSUs',
      'Grand Finale held at premier technical institutes across India',
      '₹1,00,000 cash prize per winning team in each category',
      'Direct pathway for student startup incubation and national recognition'
    ],
    safetyAdvice: 'Registration is strictly through college SPOC (Single Point of Contact). No individual fees charged.'
  },
  {
    id: 'portal-5',
    name: 'Vidyasaarathi Portal (NSDL e-Gov)',
    agency: 'Protean eGov Technologies (Formerly NSDL e-Gov)',
    domain: 'vidyasaarathi.co.in',
    url: 'https://www.vidyasaarathi.co.in',
    category: 'scholarships_india',
    securityBadge: 'OFFICIAL CORPORATE CSR GATEWAY',
    isGov: false,
    description: 'A dedicated platform by Protean (NSDL) bridging students with corporate CSR scholarship foundations including Tata, JSW, ACC, and Reliance.',
    offerings: [
      'Verified corporate scholarships for engineering, medical, and general degrees',
      'Transparent eligibility criteria and automated tracking system',
      'Direct scholarship disbursement straight to educational institutions'
    ],
    safetyAdvice: 'Zero registration charges. Never apply through third-party agents or unverified WhatsApp forms.'
  },
  {
    id: 'portal-6',
    name: 'Buddy4Study Platform',
    agency: 'India\'s Largest Verified Scholarship Discovery Gateway',
    domain: 'buddy4study.com',
    url: 'https://www.buddy4study.com',
    category: 'scholarships_india',
    securityBadge: 'VERIFIED SCHOLARSHIP PLATFORM',
    isGov: false,
    description: 'Trusted by over 5 million Indian students to discover and apply for verified corporate CSR scholarships, foundation grants, and emergency educational aid.',
    offerings: [
      'Aggregated verified scholarships from HDFC, Rolls-Royce, L\'Oréal, Colgate, etc.',
      'Custom alerts based on academic percentage and family income level',
      'End-to-end application guidance and document verification assistance'
    ],
    safetyAdvice: 'Applying is 100% free. Beware of fake clone domains imitating Buddy4Study or asking for payment via UPI.'
  },
  {
    id: 'portal-7',
    name: 'Devfolio Hackathons Network',
    agency: 'Devfolio Community (India\'s #1 Hackathon Platform)',
    domain: 'devfolio.co',
    url: 'https://devfolio.co/hackathons',
    category: 'hackathons',
    securityBadge: 'PREMIER HACKATHON DIRECTORY',
    isGov: false,
    description: 'India\'s largest hackathon community platform, powering Asia\'s biggest collegiate coding sprints including ETHIndia, InOut, and campus hackathons.',
    offerings: [
      'One-click verified profile application across hundreds of Indian hackathons',
      'Access to developer grants, sponsor bounties, and travel assistance',
      'Vibrant community Discord and student developer networks'
    ],
    safetyAdvice: 'All legitimate Devfolio hackathons provide free entry, meals, and mentorship. Never pay registration fees.'
  },
  {
    id: 'portal-8',
    name: 'Unstop (Formerly Dare2Compete)',
    agency: 'Premier Early Career Engagement & Competition Platform',
    domain: 'unstop.com',
    url: 'https://unstop.com/hackathons',
    category: 'hackathons',
    securityBadge: 'VERIFIED COLLEGIATE PLATFORM',
    isGov: false,
    description: 'India\'s major engagement hub for engineering, coding, and case competitions conducted by top tech companies and Indian Institute of Technologies (IITs/IIMs).',
    offerings: [
      'Direct hiring hackathons (Flipkart GRiD, Walmart Sparkathon, Tata Imagination)',
      'Campus competition directory for tech fest hackathons across India',
      'Quizzes, mock coding assessments, and verified achievement badges'
    ],
    safetyAdvice: 'Participate through verified company or college-sponsored competition pages.'
  },
  {
    id: 'portal-9',
    name: 'ISRO Student Careers & IIRS Edusat',
    agency: 'Indian Space Research Organisation (ISRO)',
    domain: 'isro.gov.in',
    url: 'https://www.isro.gov.in/Careers.html',
    category: 'learning',
    securityBadge: 'GOVERNMENT OF INDIA (.GOV.IN)',
    isGov: true,
    description: 'The official portal for student apprenticeships, academic project training, and distance geospatial learning programs conducted by ISRO centres.',
    offerings: [
      'Technical student project internships at URSC, SAC, and VSSC centres',
      'IIRS free remote sensing and GIS online certifications for college students',
      'Official scientific publications, satellite telemetry, and open datasets'
    ],
    safetyAdvice: 'ISRO never charges fees for student apprenticeships or training projects. Verify official .gov.in domain.'
  },
  {
    id: 'portal-10',
    name: 'Major League Hacking (MLH)',
    agency: 'Major League Hacking (Official Student Hackathon League)',
    domain: 'mlh.io',
    url: 'https://mlh.io',
    category: 'hackathons',
    securityBadge: 'GLOBAL AUTHORIZED LEAGUE',
    isGov: false,
    description: 'The official student hackathon league hosting over 300 weekend hackathons every year globally with active virtual participation for Indian collegiate teams.',
    offerings: [
      'Weekly weekend virtual hackathons accessible worldwide',
      'Free developer tools, cloud credits, and domain names for hackers',
      'Global community points, digital badges, and physical swag shipped to winners'
    ],
    safetyAdvice: 'All official MLH hackathons are free for students. Strictly adheres to MLH Code of Conduct.'
  }
];

// Complete Skill Taxonomy used for Opportunity Gap Analysis
const ALL_SKILLS_LIST = [
  'Python',
  'JavaScript',
  'React & Frontend',
  'Git & GitHub',
  'Data Structures & Algorithms',
  'Machine Learning & AI',
  'Technical Writing',
  'SQL & Databases',
  'UI/UX Design',
  'Public Speaking & Presentation',
  'Linux & Bash',
  'Problem Solving'
];

// Profile Defaults for Checkbox Presets
const PROFILE_SKILL_PRESETS = {
  cs_student: ['Python', 'Data Structures & Algorithms', 'Git & GitHub', 'JavaScript'],
  high_school: ['Problem Solving', 'Technical Writing'],
  self_taught: ['JavaScript', 'React & Frontend', 'Git & GitHub', 'UI/UX Design'],
  data_tech: ['Python', 'SQL & Databases', 'Machine Learning & AI']
};

const PROFILE_NAMES = {
  cs_student: 'Undergraduate - CS (India/Global)',
  high_school: 'High School Senior',
  self_taught: 'Self-Taught Dev',
  data_tech: 'Data Science & AI'
};

// ===================================================================
// 3. APPLICATION STATE MANAGEMENT
// ===================================================================
class UpliftStore {
  constructor() {
    this.storagePrefix = 'project_uplift_';
    this.loadState();
  }

  loadState() {
    try {
      this.currentProfile = localStorage.getItem(`${this.storagePrefix}profile`) || 'cs_student';
      this.currentTask = localStorage.getItem(`${this.storagePrefix}current_task`) || 'Master DSA & AI Prep';
      this.savedOpps = JSON.parse(localStorage.getItem(`${this.storagePrefix}saved_opps`) || '[]');
      this.focusHistory = JSON.parse(localStorage.getItem(`${this.storagePrefix}focus_history`) || '[]');
      this.activeTab = 'dashboard';
    } catch (err) {
      console.warn('LocalStorage error fallback initialized:', err);
      this.currentProfile = 'cs_student';
      this.currentTask = 'Master DSA & AI Prep';
      this.savedOpps = [];
      this.focusHistory = [];
      this.activeTab = 'dashboard';
    }
  }

  setProfile(profileKey) {
    this.currentProfile = profileKey;
    localStorage.setItem(`${this.storagePrefix}profile`, profileKey);
  }

  setCurrentTask(taskName) {
    this.currentTask = taskName;
    localStorage.setItem(`${this.storagePrefix}current_task`, taskName);
  }

  toggleSaveOpportunity(oppId) {
    const idx = this.savedOpps.indexOf(oppId);
    let isSaved = false;
    if (idx > -1) {
      this.savedOpps.splice(idx, 1);
      isSaved = false;
    } else {
      this.savedOpps.push(oppId);
      isSaved = true;
    }
    localStorage.setItem(`${this.storagePrefix}saved_opps`, JSON.stringify(this.savedOpps));
    return isSaved;
  }

  isOppSaved(oppId) {
    return this.savedOpps.includes(oppId);
  }

  logCompletedSession(session) {
    this.focusHistory.unshift(session);
    localStorage.setItem(`${this.storagePrefix}focus_history`, JSON.stringify(this.focusHistory));
  }

  clearFocusHistory() {
    this.focusHistory = [];
    localStorage.setItem(`${this.storagePrefix}focus_history`, JSON.stringify([]));
  }

  getTotalMinutesLogged() {
    return this.focusHistory.reduce((sum, s) => sum + (s.durationMinutes || 0), 0);
  }

  getTotalSprintsDone() {
    return this.focusHistory.length;
  }

  getStreakDays() {
    if (this.focusHistory.length === 0) return 1;
    const dates = new Set(this.focusHistory.map(s => s.dateStr));
    return Math.max(1, dates.size);
  }
}

const store = new UpliftStore();

// ===================================================================
// 4. AUDIO FEEDBACK UTILITY (WEB AUDIO API SYNTHESIZER)
// ===================================================================
class SoundSynthesizer {
  constructor() {
    this.ctx = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playSuccessChime() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5
      osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.35); // D6

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.6);
    } catch {
      // Audio not permitted or unsupported, fails gracefully
    }
  }

  playAlertTone() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.setValueAtTime(240, now + 0.12);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch {
      // Silent fail
    }
  }
}

const soundFx = new SoundSynthesizer();

// ===================================================================
// 5. TOAST NOTIFICATION SYSTEM
// ===================================================================
function showToast(message, type = 'info', iconEmoji = '✨') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');

  toast.innerHTML = `
    <span class="toast-icon">${iconEmoji}</span>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-exit');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 280);
  }, 3600);
}

// ===================================================================
// 6. VIEW & TAB NAVIGATION CONTROLLER
// ===================================================================
function switchTab(targetTabId) {
  const validTabs = ['dashboard', 'discover', 'portals', 'gap-finder', 'protect', 'focus'];
  if (!validTabs.includes(targetTabId)) targetTabId = 'dashboard';

  store.activeTab = targetTabId;

  document.querySelectorAll('.nav-tab').forEach(btn => {
    const isTarget = btn.getAttribute('data-tab') === targetTabId;
    btn.classList.toggle('active', isTarget);
    btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
  });

  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  const activePanel = document.getElementById(`view-${targetTabId}`);
  if (activePanel) {
    activePanel.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (targetTabId === 'discover') {
    renderOpportunities();
  } else if (targetTabId === 'portals') {
    renderPortals();
  } else if (targetTabId === 'dashboard') {
    updateDashboardStats();
    renderDashboardRecommendations();
  } else if (targetTabId === 'focus') {
    updateFocusDisplay();
  }
}

// ===================================================================
// 7. DYNAMIC FILTER COUNTER UPDATE
// ===================================================================
function updateFilterCounts() {
  const counts = {
    all: OPPORTUNITIES_DATA.length,
    scholarship: 0,
    internship: 0,
    hackathon: 0,
    course: 0
  };

  OPPORTUNITIES_DATA.forEach(opp => {
    if (counts[opp.category] !== undefined) {
      counts[opp.category]++;
    }
  });

  const btnAll = document.getElementById('pill-cat-all');
  const btnSch = document.getElementById('pill-cat-scholarship');
  const btnInt = document.getElementById('pill-cat-internship');
  const btnHck = document.getElementById('pill-cat-hackathon');
  const btnCrs = document.getElementById('pill-cat-course');

  if (btnAll) btnAll.textContent = `All (${counts.all})`;
  if (btnSch) btnSch.textContent = `Scholarships (${counts.scholarship})`;
  if (btnInt) btnInt.textContent = `Internships (${counts.internship})`;
  if (btnHck) btnHck.textContent = `Hackathons (${counts.hackathon})`;
  if (btnCrs) btnCrs.textContent = `Free Courses CSE/AI (${counts.course})`;

  const btnViewAll = document.getElementById('btn-view-all-discover');
  if (btnViewAll) {
    btnViewAll.textContent = `View All ${counts.all} Programs →`;
  }
}

// ===================================================================
// 8. DASHBOARD & RECOMMENDATION ENGINE
// ===================================================================
function updateDashboardStats() {
  const elMinutes = document.getElementById('dash-stat-minutes');
  const elSessions = document.getElementById('dash-stat-sessions');
  const elSaved = document.getElementById('dash-stat-saved');
  const elCurrentTask = document.getElementById('dash-current-task');
  const elNavProfile = document.getElementById('nav-profile-name');
  const elDashProfileEcho = document.getElementById('dash-profile-echo');

  if (elMinutes) elMinutes.textContent = store.getTotalMinutesLogged();
  if (elSessions) elSessions.textContent = store.getTotalSprintsDone();
  if (elSaved) elSaved.textContent = store.savedOpps.length;
  if (elCurrentTask) elCurrentTask.textContent = store.currentTask;

  const profileName = PROFILE_NAMES[store.currentProfile] || 'CS Student (India)';
  if (elNavProfile) elNavProfile.textContent = profileName;
  if (elDashProfileEcho) elDashProfileEcho.textContent = profileName;
}

function renderDashboardRecommendations() {
  const container = document.getElementById('dashboard-recommendations-grid');
  if (!container) return;

  const currentProf = store.currentProfile;

  let matchingOpps = OPPORTUNITIES_DATA.filter(opp =>
    opp.recommendedProfiles && opp.recommendedProfiles.includes(currentProf)
  );

  if (matchingOpps.length < 3) {
    const remainder = OPPORTUNITIES_DATA.filter(o => !matchingOpps.includes(o));
    matchingOpps = matchingOpps.concat(remainder.slice(0, 3 - matchingOpps.length));
  } else {
    matchingOpps = matchingOpps.slice(0, 3);
  }

  container.innerHTML = matchingOpps.map(opp => createOpportunityCardHtml(opp, true)).join('');
  attachOpportunityCardListeners(container);
}

// ===================================================================
// 9. OPPORTUNITY FINDER (DISCOVER VIEW WITH REGION & SEARCH)
// ===================================================================
let currentCategoryFilter = 'all';
let currentLevelFilter = 'all';
let currentRegionFilter = 'all';
let currentSortOrder = 'recommended';
let currentSearchQuery = '';

function renderOpportunities() {
  const container = document.getElementById('opportunities-list-container');
  const counter = document.getElementById('opp-results-count');
  if (!container) return;

  let filtered = OPPORTUNITIES_DATA.filter(opp => {
    // Category Filter
    if (currentCategoryFilter !== 'all' && opp.category !== currentCategoryFilter) {
      return false;
    }

    // Region Filter (India vs Global)
    if (currentRegionFilter !== 'all' && opp.region !== currentRegionFilter) {
      return false;
    }

    // Level Filter
    if (currentLevelFilter !== 'all' && opp.level !== currentLevelFilter) {
      return false;
    }

    // Search Query (title, org, skills, description, location)
    if (currentSearchQuery.trim()) {
      const q = currentSearchQuery.toLowerCase();
      const matchTitle = opp.title.toLowerCase().includes(q);
      const matchOrg = opp.org.toLowerCase().includes(q);
      const matchDesc = opp.description.toLowerCase().includes(q);
      const matchLoc = opp.location.toLowerCase().includes(q);
      const matchSkills = opp.skills.some(s => s.toLowerCase().includes(q));
      if (!matchTitle && !matchOrg && !matchDesc && !matchLoc && !matchSkills) {
        return false;
      }
    }

    return true;
  });

  // Sorting
  if (currentSortOrder === 'title') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSortOrder === 'deadline') {
    filtered.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  } else {
    // Recommended profile match & Indian priority
    const prof = store.currentProfile;
    filtered.sort((a, b) => {
      const aMatch = (a.recommendedProfiles && a.recommendedProfiles.includes(prof) ? 2 : 0) + (a.region === 'india' ? 1 : 0);
      const bMatch = (b.recommendedProfiles && b.recommendedProfiles.includes(prof) ? 2 : 0) + (b.region === 'india' ? 1 : 0);
      return bMatch - aMatch;
    });
  }

  if (counter) {
    counter.textContent = `Showing ${filtered.length} of ${OPPORTUNITIES_DATA.length} opportunities`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state-card glass-panel" style="grid-column: 1 / -1; padding: 4rem 2rem;">
        <div class="empty-icon">🔎</div>
        <h3>No matching opportunities found</h3>
        <p>Try clearing your search query "${escapeHtml(currentSearchQuery)}" or resetting your region/category filter.</p>
        <button class="btn btn-secondary btn-sm" id="btn-reset-filters" style="margin-top: 1rem;">Reset All Filters</button>
      </div>
    `;
    const btnReset = document.getElementById('btn-reset-filters');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        currentCategoryFilter = 'all';
        currentLevelFilter = 'all';
        currentRegionFilter = 'all';
        currentSearchQuery = '';
        const searchInput = document.getElementById('opp-search-input');
        if (searchInput) searchInput.value = '';
        const regionSelect = document.getElementById('opp-filter-region');
        if (regionSelect) regionSelect.value = 'all';
        const levelSelect = document.getElementById('opp-filter-level');
        if (levelSelect) levelSelect.value = 'all';
        document.querySelectorAll('#category-filter-pills .pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-category') === 'all');
        });
        renderOpportunities();
      });
    }
    return;
  }

  container.innerHTML = filtered.map(opp => createOpportunityCardHtml(opp)).join('');
  attachOpportunityCardListeners(container);
}

function createOpportunityCardHtml(opp, isCompact = false) {
  const isSaved = store.isOppSaved(opp.id);
  const badgeTypeClass = opp.type === 'verified' ? 'badge-verified' : 'badge-simulation';
  const badgeTypeLabel = opp.type === 'verified' ? '🛡️ Verified' : '🧪 Simulation';
  const regionBadge = opp.region === 'india' ? '<span class="badge badge-india">🇮🇳 India Focus</span>' : '<span class="badge badge-global">🌍 Global</span>';

  return `
    <article class="opportunity-card glass-panel ${opp.type === 'verified' ? 'featured' : ''}" data-id="${opp.id}">
      <div class="opp-card-header">
        <div class="opp-badges-wrap">
          ${regionBadge}
          <span class="badge ${badgeTypeClass}">${badgeTypeLabel}</span>
          <span class="badge badge-category">${opp.category}</span>
          <span class="badge" style="background: rgba(255,255,255,0.06); color: #cbd5e1;">${opp.level}</span>
        </div>
        <button class="btn-bookmark ${isSaved ? 'saved' : ''}" data-opp-id="${opp.id}" title="${isSaved ? 'Remove Bookmark' : 'Save Opportunity'}" aria-label="Save Opportunity">
          ${isSaved ? '★' : '☆'}
        </button>
      </div>

      <h3 class="opp-title">${escapeHtml(opp.title)}</h3>
      <div class="opp-org">${escapeHtml(opp.org)} &bull; <span style="color: var(--text-muted); font-size: 0.8rem;">${escapeHtml(opp.location)}</span></div>

      <p class="opp-description">${escapeHtml(opp.description)}</p>

      <div class="opp-details-grid">
        <div class="opp-detail-row">
          <span class="opp-detail-label">Funding / Value:</span>
          <span class="opp-detail-val gradient-text">${escapeHtml(opp.value)}</span>
        </div>
        <div class="opp-detail-row">
          <span class="opp-detail-label">Deadline:</span>
          <span class="opp-detail-val text-cyan">${escapeHtml(opp.deadlineText)}</span>
        </div>
      </div>

      <div class="opp-skills-list">
        ${opp.skills.map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('')}
      </div>

      <div class="opp-card-actions">
        <button class="btn btn-outline btn-sm btn-opp-details" data-opp-id="${opp.id}">
          Details
        </button>
        <button class="btn btn-secondary btn-sm btn-opp-gap" data-opp-id="${opp.id}" title="Compare your skills against this opportunity">
          Benchmark Gap
        </button>
        <button class="btn btn-primary btn-sm btn-opp-prep" data-opp-id="${opp.id}" title="Send requirement to Focus Timer">
          ⚡ Prep Sprint
        </button>
        ${opp.applicationLink && !opp.applicationLink.startsWith('#') ? `
          <a href="${escapeHtml(opp.applicationLink)}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" title="Visit verified official website" style="padding: 0.35rem 0.5rem; color: var(--cyan-400);">
            ↗
          </a>
        ` : ''}
      </div>
    </article>
  `;
}

function attachOpportunityCardListeners(parentElement) {
  parentElement.querySelectorAll('.btn-bookmark').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const oppId = btn.getAttribute('data-opp-id');
      const opp = OPPORTUNITIES_DATA.find(o => o.id === oppId);
      const isSaved = store.toggleSaveOpportunity(oppId);

      btn.classList.toggle('saved', isSaved);
      btn.innerHTML = isSaved ? '★' : '☆';
      btn.title = isSaved ? 'Remove Bookmark' : 'Save Opportunity';

      updateDashboardStats();
      showToast(
        isSaved ? `Saved "${opp ? opp.title : 'Program'}" to bookmarks!` : `Removed from bookmarks`,
        isSaved ? 'success' : 'info',
        isSaved ? '⭐' : '🗑️'
      );
    });
  });

  parentElement.querySelectorAll('.btn-opp-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const oppId = btn.getAttribute('data-opp-id');
      openOpportunityModal(oppId);
    });
  });

  parentElement.querySelectorAll('.btn-opp-gap').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const oppId = btn.getAttribute('data-opp-id');
      jumpToGapAnalysis(oppId);
    });
  });

  parentElement.querySelectorAll('.btn-opp-prep').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const oppId = btn.getAttribute('data-opp-id');
      const opp = OPPORTUNITIES_DATA.find(o => o.id === oppId);
      if (opp) {
        const task = `Prep for ${opp.title.slice(0, 32)}...`;
        store.setCurrentTask(task);
        updateDashboardStats();
        switchTab('focus');
        setTimerTask(task);
        showToast(`Focus sprint goal updated to: ${task}`, 'success', '⚡');
      }
    });
  });
}

// ===================================================================
// 10. AUTHORIZED & SAFE PORTALS DIRECTORY CONTROLLER
// ===================================================================
let currentPortalCategoryFilter = 'all';

function renderPortals() {
  const container = document.getElementById('portals-list-container');
  if (!container) return;

  const filtered = AUTHORIZED_PORTALS_DATA.filter(portal => {
    if (currentPortalCategoryFilter !== 'all' && portal.category !== currentPortalCategoryFilter) {
      return false;
    }
    return true;
  });

  container.innerHTML = filtered.map(portal => `
    <article class="portal-card">
      <div class="portal-header">
        <div class="portal-badges-row">
          <span class="badge ${portal.isGov ? 'badge-gov' : 'badge-india'}">${escapeHtml(portal.securityBadge)}</span>
        </div>
        <span class="portal-domain-badge">${escapeHtml(portal.domain)}</span>
      </div>

      <h3 class="portal-title">${escapeHtml(portal.name)}</h3>
      <div class="portal-agency">${escapeHtml(portal.agency)}</div>
      <p class="portal-desc">${escapeHtml(portal.description)}</p>

      <div class="portal-offerings-box">
        <div class="portal-offerings-title">Key Offerings & Benefits:</div>
        <ul class="portal-offerings-list">
          ${portal.offerings.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
        </ul>
      </div>

      <div class="portal-safety-tag">
        <span>🛡️</span>
        <span>${escapeHtml(portal.safetyAdvice)}</span>
      </div>

      <div class="portal-actions">
        <a href="${escapeHtml(portal.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block btn-visit-portal">
          <span>Visit Official Portal</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    </article>
  `).join('');
}

// ===================================================================
// 11. OPPORTUNITY DETAILS MODAL (WITH VERIFIED APPLICATION LAUNCH)
// ===================================================================
function openOpportunityModal(oppId) {
  const opp = OPPORTUNITIES_DATA.find(o => o.id === oppId);
  if (!opp) return;

  const modal = document.getElementById('opp-modal');
  const content = document.getElementById('modal-opp-content');
  if (!modal || !content) return;

  const isIndia = opp.region === 'india';

  content.innerHTML = `
    <div class="modal-content-wrap">
      <div class="opp-badges-wrap">
        <span class="badge ${isIndia ? 'badge-india' : 'badge-global'}">${isIndia ? '🇮🇳 India Focus' : '🌍 Global Program'}</span>
        <span class="badge ${opp.type === 'verified' ? 'badge-verified' : 'badge-simulation'}">
          ${opp.type === 'verified' ? '🛡️ Verified Educational Program' : '🧪 Simulation Prototype'}
        </span>
        <span class="badge badge-category">${opp.category}</span>
        <span class="badge" style="background: rgba(255,255,255,0.06); color: #cbd5e1;">${opp.level}</span>
      </div>

      <h2 class="modal-title" id="modal-opp-title">${escapeHtml(opp.title)}</h2>
      <div class="modal-org">${escapeHtml(opp.org)} &bull; ${escapeHtml(opp.location)}</div>

      <div class="modal-info-grid">
        <div class="modal-info-item">
          <span class="modal-info-lbl">Total Value:</span>
          <span class="modal-info-val gradient-text">${escapeHtml(opp.value)}</span>
        </div>
        <div class="modal-info-item">
          <span class="modal-info-lbl">Application Deadline:</span>
          <span class="modal-info-val text-cyan">${escapeHtml(opp.deadlineText)}</span>
        </div>
        <div class="modal-info-item">
          <span class="modal-info-lbl">Eligible Levels:</span>
          <span class="modal-info-val">${escapeHtml(opp.level)}</span>
        </div>
      </div>

      <div>
        <h4 class="modal-section-title">Program Overview</h4>
        <p class="modal-body-text">${escapeHtml(opp.description)}</p>
      </div>

      <div>
        <h4 class="modal-section-title">Eligibility Criteria</h4>
        <p class="modal-body-text">${escapeHtml(opp.eligibility)}</p>
      </div>

      <div>
        <h4 class="modal-section-title">Award Benefits & Perks</h4>
        <p class="modal-body-text">${escapeHtml(opp.benefits)}</p>
      </div>

      <div>
        <h4 class="modal-section-title">Core Competencies & Skills Required</h4>
        <div class="opp-skills-list" style="margin-top: 0.5rem;">
          ${opp.skills.map(s => `<span class="skill-tag" style="font-size: 0.8rem; padding: 0.3rem 0.75rem;">${escapeHtml(s)}</span>`).join('')}
        </div>
      </div>

      <div class="modal-actions">
        ${opp.applicationLink && !opp.applicationLink.startsWith('#') ? `
          <a href="${escapeHtml(opp.applicationLink)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="text-decoration: none;">
            <span>Visit Official Application Portal</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        ` : ''}
        <button class="btn btn-secondary" id="btn-modal-benchmark">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          Benchmark Skill Gap
        </button>
        <button class="btn btn-outline" id="btn-modal-focus">
          ⚡ 25-Min Prep Sprint
        </button>
      </div>
    </div>
  `;

  document.getElementById('btn-modal-benchmark')?.addEventListener('click', () => {
    closeOpportunityModal();
    jumpToGapAnalysis(opp.id);
  });

  document.getElementById('btn-modal-focus')?.addEventListener('click', () => {
    closeOpportunityModal();
    const task = `Application Prep: ${opp.title.slice(0, 32)}...`;
    store.setCurrentTask(task);
    updateDashboardStats();
    switchTab('focus');
    setTimerTask(task);
    showToast(`Timer target set to: ${task}`, 'success', '🎯');
  });

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeOpportunityModal() {
  const modal = document.getElementById('opp-modal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// ===================================================================
// 12. OPPORTUNITY GAP FINDER MODULE
// ===================================================================
function initGapFinderView() {
  const oppSelect = document.getElementById('gap-target-opportunity');
  const skillsPool = document.getElementById('gap-user-skills-pool');
  if (!oppSelect || !skillsPool) return;

  oppSelect.innerHTML = OPPORTUNITIES_DATA.map(opp => `
    <option value="${opp.id}">${opp.region === 'india' ? '[🇮🇳 India]' : '[🌍 Global]'} ${escapeHtml(opp.title)}</option>
  `).join('');

  const defaultChecked = PROFILE_SKILL_PRESETS[store.currentProfile] || ['Python', 'Problem Solving'];

  skillsPool.innerHTML = ALL_SKILLS_LIST.map((skill, idx) => {
    const isChecked = defaultChecked.includes(skill);
    const inputId = `gap-skill-check-${idx}`;
    return `
      <label class="skill-checkbox-label" for="${inputId}">
        <input type="checkbox" id="${inputId}" value="${escapeHtml(skill)}" ${isChecked ? 'checked' : ''}>
        <span>${escapeHtml(skill)}</span>
      </label>
    `;
  }).join('');
}

function jumpToGapAnalysis(oppId) {
  switchTab('gap-finder');
  const oppSelect = document.getElementById('gap-target-opportunity');
  if (oppSelect) {
    oppSelect.value = oppId;
  }
  runGapAnalysis();
}

function runGapAnalysis() {
  const oppSelect = document.getElementById('gap-target-opportunity');
  if (!oppSelect) return;

  const targetOppId = oppSelect.value;
  const opp = OPPORTUNITIES_DATA.find(o => o.id === targetOppId);
  if (!opp) return;

  const userSkills = [];
  document.querySelectorAll('#gap-user-skills-pool input[type="checkbox"]:checked').forEach(cb => {
    userSkills.push(cb.value);
  });

  const required = opp.skills;
  const matched = required.filter(s => userSkills.includes(s));
  const missing = required.filter(s => !userSkills.includes(s));

  const totalRequired = required.length;
  const matchPercent = totalRequired > 0 ? Math.round((matched.length / totalRequired) * 100) : 100;

  const placeholder = document.getElementById('gap-results-placeholder');
  const content = document.getElementById('gap-results-content');
  if (placeholder) placeholder.classList.add('hidden');
  if (!content) return;

  content.classList.remove('hidden');

  const topMissing = missing[0] || 'Technical Writing';

  content.innerHTML = `
    <div class="gap-analysis-header">
      <div class="opp-badges-wrap">
        <span class="badge ${opp.region === 'india' ? 'badge-india' : 'badge-global'}">${opp.region === 'india' ? '🇮🇳 India Focus' : '🌍 Global'}</span>
        <span class="badge ${opp.type === 'verified' ? 'badge-verified' : 'badge-simulation'}">${opp.type === 'verified' ? 'Verified' : 'Simulation'}</span>
        <span class="badge badge-category">${opp.category}</span>
      </div>
      <h3 style="font-size: 1.4rem; margin: 0.5rem 0 0.2rem;">${escapeHtml(opp.title)}</h3>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">${escapeHtml(opp.org)} &bull; ${escapeHtml(opp.value)}</p>

      <div class="gap-match-overview">
        <div class="match-gauge-circle" style="--match-score: ${matchPercent}">
          <div class="match-gauge-inner">
            <span class="match-gauge-percent">${matchPercent}%</span>
            <span class="match-gauge-label">Match</span>
          </div>
        </div>
        <div class="match-summary-text">
          <h4>${matchPercent >= 75 ? '🔥 High Readiness Candidate' : matchPercent >= 50 ? '📈 Strong Potential with Growth' : '🌱 Foundational Gap - Clear Roadmap Ahead'}</h4>
          <p>
            ${matchPercent === 100
              ? 'You meet 100% of the listed competencies! Review application guidelines and submit early.'
              : `You have ${matched.length} of ${totalRequired} core requirements. Bridge the remaining ${missing.length} skill(s) with our 3-week sprint plan.`}
          </p>
        </div>
      </div>
    </div>

    <div class="skills-comparison-row">
      <div class="skill-category-box">
        <h5 class="text-emerald">✔ Strong Matches (${matched.length}):</h5>
        <div>
          ${matched.length > 0
            ? matched.map(s => `<span class="skill-badge-pill skill-badge-matched">${escapeHtml(s)}</span>`).join('')
            : '<span style="font-size: 0.8rem; color: var(--text-muted);">No current skills match yet.</span>'
          }
        </div>
      </div>

      <div class="skill-category-box">
        <h5 class="text-orange">⚠️ Skills to Acquire / Polish (${missing.length}):</h5>
        <div>
          ${missing.length > 0
            ? missing.map(s => `<span class="skill-badge-pill skill-badge-missing">${escapeHtml(s)}</span>`).join('')
            : '<span class="skill-badge-pill skill-badge-matched">All Core Skills Present!</span>'
          }
        </div>
      </div>
    </div>

    <div class="roadmap-timeline-section">
      <h4>🚀 3-Phase Action Roadmap to Qualify</h4>
      <div class="roadmap-timeline">
        <div class="roadmap-milestone">
          <div class="milestone-step">WEEK 1</div>
          <div class="milestone-body">
            <h5>Foundational Mastery: ${escapeHtml(topMissing)}</h5>
            <p>Spend 5 daily 25-minute focus sprints completing interactive tutorials and reading documentation for <strong>${escapeHtml(topMissing)}</strong>.</p>
          </div>
        </div>

        <div class="roadmap-milestone">
          <div class="milestone-step">WEEK 2</div>
          <div class="milestone-body">
            <h5>Proof Project / Portfolio Artifact</h5>
            <p>Build a minimal, public GitHub repository demonstrating hands-on ability in ${escapeHtml(topMissing)}.</p>
          </div>
        </div>

        <div class="roadmap-milestone">
          <div class="milestone-step">WEEK 3</div>
          <div class="milestone-body">
            <h5>Application Review & Peer Feedback</h5>
            <p>Synthesize essays, request an advisor or peer review, and finalize submission before ${escapeHtml(opp.deadlineText)}.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="gap-cta-actions">
      <button class="btn btn-primary" id="btn-send-gap-to-focus">
        ⚡ Launch 25-Min Sprint for "${escapeHtml(topMissing)}"
      </button>
      <button class="btn btn-outline" id="btn-view-opp-full">
        Inspect Full Program Details
      </button>
      ${opp.applicationLink && !opp.applicationLink.startsWith('#') ? `
        <a href="${escapeHtml(opp.applicationLink)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="text-decoration: none;">
          Official Site ↗
        </a>
      ` : ''}
    </div>
  `;

  document.getElementById('btn-send-gap-to-focus')?.addEventListener('click', () => {
    const task = `Master Skill: ${topMissing} for ${opp.title.slice(0, 24)}...`;
    store.setCurrentTask(task);
    updateDashboardStats();
    switchTab('focus');
    setTimerTask(task);
    showToast(`Focus task updated to learn ${topMissing}!`, 'success', '🚀');
  });

  document.getElementById('btn-view-opp-full')?.addEventListener('click', () => {
    openOpportunityModal(opp.id);
  });

  soundFx.playSuccessChime();
  showToast(`Gap roadmap generated for ${opp.title}!`, 'info', '📊');
}

// ===================================================================
// 13. SCAM DEFENSE & WARNING ENGINE (WITH INDIAN STUDENT SCAMS)
// ===================================================================
const SCAM_DEMO_SAMPLES = {
  indiaIntern: {
    sender: 'recruitment.techcorp.hr@gmail.com',
    message: `Dear Student,

Congratulations! We reviewed your LinkedIn profile and selected you for the Remote Web Development Internship (Stipend: ₹25,000/month, Flexible hours). No technical interview is needed!

To issue your official Offer Letter and courier your company ID badge & training kit, you must pay a mandatory one-time registration and security deposit of ₹2,500 via GooglePay/PhonePe to UPI ID: hr.verify99@okaxis.

This amount is 100% refundable with your first stipend. Please share the payment screenshot within 2 hours on Telegram @HR_Recruitment_Team to confirm your seat.`
  },
  indiaSms: {
    sender: 'VK-GOVIND',
    message: `Urgent Alert from National Scholarship Portal: Your pending DBT scholarship installment of ₹25,000 for academic year 2026 has been approved.

Due to pending Aadhaar KYC, transfer is halted. Click here to download and install official verification app: http://nsp-gov-india.xyz/claim-kyc.apk

If not updated within 24 hours, your sanctioned scholarship will be cancelled and returned.`
  },
  sample1: {
    sender: 'recruiter-talent@fast-hiring-portal.site',
    message: `Congratulations! You have been selected for the Remote Student Data Assistant Internship without any interview required. The pay is $45.00/hour.

We will send you a verified cashier's check of $2,450 to purchase your specialized office workstation. You must deposit the check into your bank immediately and wire back $1,900 to our approved equipment vendor via Apple Gift Cards, Zelle or Bitcoin.

Please reply urgently within 24 hours to secure your placement, or your position will be forfeited.`
  },
  sample2: {
    sender: 'award-admin@guaranteed-foundation.net',
    message: `URGENT NOTIFICATION: You have been chosen as a guaranteed recipient of the 2026 National Merit Student Excellence Grant ($7,500). No essay or academic transcript required!

To release your grant funds into our escrow disbursement portal, please submit a one-time refundable application processing fee of $75 via wire transfer.

Act now! Deadline expires tonight at midnight.`
  },
  sample3: {
    sender: 'google.recruiting.team77@gmail.com',
    message: `Dear Student, We came across your profile and would like to offer you immediate employment as a Junior Software Intern ($55/hr, flexible hours).

To initiate formal onboarding and direct deposit payroll today, please reply directly with your full legal name, date of birth, copy of your passport or Social Security Number, and bank account routing number. We look forward to working with you.`
  },
  legit: {
    sender: 'fellowships@mit.edu',
    message: `Dear Candidate,

Thank you for applying for the MIT Open Learning Summer Research Fellowship. Your application materials have been reviewed by the faculty admissions committee.

We would like to invite you to an initial 30-minute virtual technical discussion with the lab directors next Tuesday. Please access the secure university portal at https://mit.edu/fellowships/portal using your official application candidate ID to confirm your available time slot.

Please note: Legitimate academic institutions will never ask for fees, money transfers, or sensitive identity documents via email. Best regards, MIT Admissions.`
  }
};

function analyzeScamMessage() {
  const senderInput = document.getElementById('scam-sender-input');
  const messageInput = document.getElementById('scam-message-input');
  if (!messageInput) return;

  const sender = (senderInput ? senderInput.value : '').trim().toLowerCase();
  const body = messageInput.value.trim().toLowerCase();

  if (!body) {
    showToast('Please paste a message or click a demo sample above first.', 'warning', '⚠️');
    return;
  }

  const detectedFlags = [];
  let riskScore = 5;

  const freeWebmailRegex = /@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|proton\.me|aol\.com)$/i;
  const suspiciousTldRegex = /\.(site|xyz|top|tk|click|buzz|rest|work|stream|info|apk)$/i;

  if (sender) {
    if (freeWebmailRegex.test(sender)) {
      detectedFlags.push({
        severity: 'high',
        icon: '📧',
        title: 'Free Webmail Address for Official Hiring',
        explanation: `Sender uses a personal public domain (${sender}). Legitimate companies and universities never recruit through personal Gmail/Yahoo accounts.`
      });
      riskScore += 25;
    } else if (suspiciousTldRegex.test(sender)) {
      detectedFlags.push({
        severity: 'high',
        icon: '🌐',
        title: 'Suspicious Domain Extension',
        explanation: 'The sender domain ends in an unusual top-level domain frequently used in phishing attacks.'
      });
      riskScore += 20;
    }
  }

  const upiFeeKeywords = [
    'upi', 'googlepay', 'phonepe', 'paytm', 'security deposit', 'registration fee',
    'training fee', 'refundable fee', 'processing fee', 'wire transfer', 'gift card',
    'bitcoin', 'crypto', 'cashier check', 'deposit check', 'wire back', 'purchase equipment'
  ];
  const matchedPaymentTerms = upiFeeKeywords.filter(term => body.includes(term));
  if (matchedPaymentTerms.length > 0) {
    detectedFlags.push({
      severity: 'high',
      icon: '💳',
      title: 'Upfront Payment, UPI Transfer or Fee Demand',
      explanation: `Detected payment terms: "${matchedPaymentTerms.join(', ')}". Legitimate employers, Indian Govt schemes, and official scholarships NEVER ask you to send money via UPI, PhonePe, or wire transfer.`
    });
    riskScore += 45;
  }

  if (body.includes('.apk') || body.includes('download app') || body.includes('install official app')) {
    detectedFlags.push({
      severity: 'high',
      icon: '📱',
      title: 'Malicious Android APK App Download',
      explanation: 'Detected link prompting APK installation. Cybercriminals use fake APKs mimicking Indian Government apps to steal banking SMS and OTPs.'
    });
    riskScore += 50;
  }

  const urgencyKeywords = [
    'within 24 hours', 'within 2 hours', 'urgently', 'expires tonight', 'act now',
    'immediate response', 'last chance', 'forfeited', 'cancelled', 'hurry'
  ];
  const matchedUrgency = urgencyKeywords.filter(term => body.includes(term));
  if (matchedUrgency.length > 0) {
    detectedFlags.push({
      severity: 'med',
      icon: '⏳',
      title: 'Manufactured Artificial Urgency',
      explanation: `Detected pressure phrases: "${matchedUrgency.join(', ')}". Scammers deliberately create tight deadlines to prevent you from consulting advisors or parents.`
    });
    riskScore += 20;
  }

  if (body.includes('telegram') || body.includes('whatsapp') || body.includes('qr code')) {
    detectedFlags.push({
      severity: 'med',
      icon: '💬',
      title: 'Redirection to Private Messaging Channels',
      explanation: 'Scammers frequently route communication through Telegram or unofficial WhatsApp numbers to avoid corporate accountability and formal audit trails.'
    });
    riskScore += 25;
  }

  const guaranteedKeywords = [
    'without interview', 'without any interview', 'no technical interview', 'guaranteed recipient',
    'guaranteed winner', 'no essay required', 'selected for the job', 'hired immediately'
  ];
  const matchedGuaranteed = guaranteedKeywords.filter(term => body.includes(term));
  if (matchedGuaranteed.length > 0) {
    detectedFlags.push({
      severity: 'high',
      icon: '⭐',
      title: 'Unsolicited Selection Without Rigorous Screening',
      explanation: `Detected: "${matchedGuaranteed.join(', ')}". Real internships and grants evaluate candidates through documented tests and interviews before issuing offers.`
    });
    riskScore += 30;
  }

  riskScore = Math.min(100, riskScore);

  if (detectedFlags.length === 0) {
    riskScore = 8;
    detectedFlags.push({
      severity: 'safe',
      icon: '✅',
      title: 'Standard Educational Communication Patterns',
      explanation: 'No upfront fee demands, free webmail indicators, or aggressive urgency tactics were detected in this message body.'
    });
  }

  renderScamResults(riskScore, detectedFlags);
}

function renderScamResults(score, flags) {
  const placeholder = document.getElementById('scam-empty-placeholder');
  const resultsContainer = document.getElementById('scam-active-results');
  if (placeholder) placeholder.classList.add('hidden');
  if (!resultsContainer) return;

  resultsContainer.classList.remove('hidden');

  let riskCategory = 'safe';
  let badgeClass = 'scam-score-safe';
  let riskTitle = 'Low Risk Observed';
  let riskAdvice = 'Message appears standard, but always verify sender identity through official university or company directories.';

  if (score >= 60) {
    riskCategory = 'high';
    badgeClass = 'scam-score-high';
    riskTitle = '🚨 PREDATORY SCAM / HIGH RISK';
    riskAdvice = 'DO NOT transfer funds via UPI, DO NOT install APK files, and DO NOT disclose OTPs or banking credentials. Block the sender immediately.';
  } else if (score >= 30) {
    riskCategory = 'med';
    badgeClass = 'scam-score-med';
    riskTitle = '⚠️ SUSPICIOUS / PROCEED WITH CAUTION';
    riskAdvice = 'Warning signs detected. Request formal confirmation through official corporate headquarters before responding.';
  }

  resultsContainer.innerHTML = `
    <div class="scam-score-badge-card ${badgeClass}">
      <div style="font-size: 2.25rem;">${riskCategory === 'high' ? '🛑' : riskCategory === 'med' ? '⚠️' : '🛡️'}</div>
      <div class="risk-level-display">
        <span class="risk-tag ${riskCategory === 'high' ? 'text-red' : riskCategory === 'med' ? 'text-orange' : 'text-emerald'}">
          Engine Evaluation: ${score} / 100 Risk Index
        </span>
        <h4 class="risk-title ${riskCategory === 'high' ? 'text-red' : riskCategory === 'med' ? 'text-orange' : 'text-emerald'}">
          ${riskTitle}
        </h4>
      </div>
    </div>

    <div class="flags-detected-list">
      <h5 style="font-size: 0.9rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.04em;">
        Rule Engine Findings (${flags.length}):
      </h5>
      ${flags.map(f => `
        <div class="flag-alert-item flag-severity-${f.severity}">
          <div class="flag-title-row">
            <span>${f.icon} ${escapeHtml(f.title)}</span>
            <span style="font-size: 0.72rem; text-transform: uppercase;">${f.severity} severity</span>
          </div>
          <div class="flag-explanation">${escapeHtml(f.explanation)}</div>
        </div>
      `).join('')}
    </div>

    <div class="scam-advice-card">
      <h5>🛡️ Recommended Student Action Protocol:</h5>
      <ul>
        <li><strong>${riskAdvice}</strong></li>
        <li>Remember: Official Government of India portals strictly end in <code>.gov.in</code> or <code>.nic.in</code>.</li>
        <li>Legitimate internships never demand "training fees" or "security deposits" via UPI.</li>
        <li>Report cyber fraud in India to the National Cyber Crime Reporting Portal at <strong>cybercrime.gov.in</strong> or helpline <strong>1930</strong>.</li>
      </ul>
    </div>
  `;

  if (riskCategory === 'high') {
    soundFx.playAlertTone();
    showToast('High risk red flags detected! Review findings.', 'danger', '🚨');
  } else {
    soundFx.playSuccessChime();
    showToast('Message scan complete.', 'info', '🛡️');
  }
}

// ===================================================================
// 14. FOCUS SYSTEM (POMODORO TIMER & LOGGING)
// ===================================================================
class PomodoroFocusTimer {
  constructor() {
    this.totalSeconds = 1500;
    this.remainingSeconds = 1500;
    this.timerInterval = null;
    this.isRunning = false;
    this.circumference = 2 * Math.PI * 120;
    this.currentPresetMinutes = 25;
  }

  setDuration(minutes) {
    this.pause();
    this.currentPresetMinutes = minutes;
    this.totalSeconds = minutes * 60;
    this.remainingSeconds = this.totalSeconds;
    this.updateDisplay();
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.updateControlsUI();

    this.timerInterval = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.updateDisplay();
      } else {
        this.completeSession();
      }
    }, 1000);
  }

  pause() {
    if (!this.isRunning) return;
    this.isRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.updateControlsUI();
  }

  toggleStartPause() {
    if (this.isRunning) {
      this.pause();
    } else {
      this.start();
    }
  }

  reset() {
    this.pause();
    this.remainingSeconds = this.totalSeconds;
    this.updateDisplay();
  }

  completeSession() {
    this.pause();
    soundFx.playSuccessChime();

    const loggedMinutes = Math.max(1, Math.round((this.totalSeconds - this.remainingSeconds) / 60) || this.currentPresetMinutes);
    const sessionRecord = {
      id: 'session-' + Date.now(),
      task: store.currentTask || 'General Prep Sprint',
      durationMinutes: loggedMinutes,
      dateStr: new Date().toISOString().slice(0, 10),
      timeStr: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    store.logCompletedSession(sessionRecord);
    this.remainingSeconds = this.totalSeconds;

    this.updateDisplay();
    updateFocusDisplay();
    updateDashboardStats();

    showToast(`Sprint complete! Logged ${loggedMinutes} minutes towards: ${sessionRecord.task}`, 'success', '🎉');
  }

  updateDisplay() {
    const elDigits = document.getElementById('timer-display-digits');
    const elRing = document.getElementById('timer-progress-circle');

    const m = Math.floor(this.remainingSeconds / 60);
    const s = this.remainingSeconds % 60;
    const timeFormatted = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    if (elDigits) elDigits.textContent = timeFormatted;

    if (elRing && this.totalSeconds > 0) {
      const progressFraction = (this.totalSeconds - this.remainingSeconds) / this.totalSeconds;
      const offset = this.circumference * (1 - progressFraction);
      elRing.style.strokeDashoffset = offset;
    }
  }

  updateControlsUI() {
    const playIcon = document.getElementById('icon-timer-play');
    const pauseIcon = document.getElementById('icon-timer-pause');
    const btnLabel = document.getElementById('label-timer-start-pause');

    if (this.isRunning) {
      if (playIcon) playIcon.classList.add('hidden');
      if (pauseIcon) pauseIcon.classList.remove('hidden');
      if (btnLabel) btnLabel.textContent = 'Pause Sprint';
    } else {
      if (playIcon) playIcon.classList.remove('hidden');
      if (pauseIcon) pauseIcon.classList.add('hidden');
      if (btnLabel) {
        btnLabel.textContent = this.remainingSeconds < this.totalSeconds ? 'Resume Sprint' : `Start ${this.currentPresetMinutes}-Min Sprint`;
      }
    }
  }
}

const pomodoroTimer = new PomodoroFocusTimer();

function setTimerTask(taskName) {
  const input = document.getElementById('focus-task-input');
  const label = document.getElementById('active-task-label');
  if (input) input.value = taskName;
  if (label) label.textContent = taskName;
}

function updateFocusDisplay() {
  const elTotalMin = document.getElementById('history-total-minutes');
  const elTotalSprints = document.getElementById('history-total-sprints');
  const elStreak = document.getElementById('history-streak-count');
  const elHistoryList = document.getElementById('session-history-items');
  const elCurrentTaskBadge = document.getElementById('active-task-label');

  if (elTotalMin) elTotalMin.textContent = `${store.getTotalMinutesLogged()} min`;
  if (elTotalSprints) elTotalSprints.textContent = store.getTotalSprintsDone();
  if (elStreak) elStreak.textContent = `${store.getStreakDays()} Day${store.getStreakDays() > 1 ? 's' : ''}`;
  if (elCurrentTaskBadge) elCurrentTaskBadge.textContent = store.currentTask;

  if (elHistoryList) {
    if (store.focusHistory.length === 0) {
      elHistoryList.innerHTML = `<li class="history-empty">No sessions completed yet today. Hit start to log your first sprint!</li>`;
    } else {
      elHistoryList.innerHTML = store.focusHistory.map(item => `
        <li class="history-item">
          <div class="history-item-task">${escapeHtml(item.task)}</div>
          <div class="history-item-meta">${item.durationMinutes}m &bull; ${item.timeStr}</div>
        </li>
      `).join('');
    }
  }
}

// ===================================================================
// 15. GUIDED DEMO FLOW (4-STEP CONNECTED WALKTHROUGH)
// ===================================================================
class GuidedDemoController {
  constructor() {
    this.currentStep = 1;
    this.banner = document.getElementById('demo-guide-banner');
    this.badge = document.getElementById('demo-step-indicator');
    this.title = document.getElementById('demo-step-title');
    this.desc = document.getElementById('demo-step-desc');
    this.btnNext = document.getElementById('btn-next-demo-step');
    this.btnClose = document.getElementById('btn-close-demo');

    this.steps = [
      {
        step: 1,
        title: 'Step 1 of 4: Discovering Verified Opportunities',
        desc: 'Explore 39 verified scholarships, internships, and accredited CSE/AI courses across India and worldwide.',
        action: () => {
          switchTab('discover');
          showToast('Step 1: Explore verified student opportunities', 'info', '🎯');
        }
      },
      {
        step: 2,
        title: 'Step 2 of 4: Safe Government & Official Portals',
        desc: 'Review verified official portals like National Scholarship Portal (.gov.in) and AICTE Internship Portal.',
        action: () => {
          switchTab('portals');
          showToast('Step 2: Inspecting authorized government portals', 'info', '🏛️');
        }
      },
      {
        step: 3,
        title: 'Step 3 of 4: Spotting UPI & Phishing Scams',
        desc: 'Analyzing a realistic ₹2,500 fake internship registration fee scam on WhatsApp/Telegram.',
        action: () => {
          switchTab('protect');
          const sample = SCAM_DEMO_SAMPLES.indiaIntern;
          const senderEl = document.getElementById('scam-sender-input');
          const msgEl = document.getElementById('scam-message-input');
          if (senderEl) senderEl.value = sample.sender;
          if (msgEl) msgEl.value = sample.message;
          analyzeScamMessage();
        }
      },
      {
        step: 4,
        title: 'Step 4 of 4: Pomodoro Preparation Sprint',
        desc: 'Locking into a 25-minute focused preparation sprint to qualify for your target opportunity.',
        action: () => {
          const task = 'Smart India Hackathon: Brainstorm Problem Statement Solution';
          store.setCurrentTask(task);
          updateDashboardStats();
          switchTab('focus');
          setTimerTask(task);
          pomodoroTimer.start();
          showToast('Step 4: Pomodoro sprint active!', 'success', '⏱️');
        }
      }
    ];

    this.initEvents();
  }

  initEvents() {
    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => this.nextStep());
    }
    if (this.btnClose) {
      this.btnClose.addEventListener('click', () => this.hide());
    }
  }

  start() {
    this.currentStep = 1;
    if (this.banner) this.banner.classList.remove('hidden');
    this.renderCurrentStep();
  }

  hide() {
    if (this.banner) this.banner.classList.add('hidden');
  }

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
      this.renderCurrentStep();
    } else {
      this.hide();
      soundFx.playSuccessChime();
      showToast('🎉 Guided Demo completed! You are ready to explore Project Uplift.', 'success', '🏆');
    }
  }

  renderCurrentStep() {
    const config = this.steps[this.currentStep - 1];
    if (!config) return;

    if (this.badge) this.badge.textContent = `Step ${config.step} of ${this.steps.length}`;
    if (this.title) this.title.textContent = config.title;
    if (this.desc) this.desc.textContent = config.desc;
    if (this.btnNext) {
      this.btnNext.textContent = this.currentStep === this.steps.length ? 'Finish Tour ✓' : 'Continue Tour →';
    }

    config.action();
  }
}

let guidedDemo = null;

// ===================================================================
// 16. DOM INITIALIZATION & EVENT WIRING
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  guidedDemo = new GuidedDemoController();
  pomodoroTimer.updateDisplay();
  pomodoroTimer.updateControlsUI();

  updateDashboardStats();
  updateFilterCounts();
  renderDashboardRecommendations();
  renderOpportunities();
  renderPortals();
  initGapFinderView();
  updateFocusDisplay();

  // Navigation Bar Events
  document.querySelectorAll('.nav-tab').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      const target = tabBtn.getAttribute('data-tab');
      switchTab(target);
    });
  });

  document.getElementById('brand-logo')?.addEventListener('click', () => switchTab('dashboard'));
  document.getElementById('btn-demo-tour')?.addEventListener('click', () => guidedDemo.start());

  // Student Profile Selector
  const profileSelect = document.getElementById('student-profile-select');
  if (profileSelect) {
    profileSelect.value = store.currentProfile;
    profileSelect.addEventListener('change', (e) => {
      store.setProfile(e.target.value);
      initGapFinderView();
      updateDashboardStats();
      renderDashboardRecommendations();
      renderOpportunities();
      showToast(`Switched profile to: ${PROFILE_NAMES[store.currentProfile]}`, 'info', '👤');
    });
  }

  // Dashboard Hero & Pillar Buttons
  document.getElementById('btn-hero-explore')?.addEventListener('click', () => switchTab('discover'));
  document.getElementById('btn-hero-scam-check')?.addEventListener('click', () => switchTab('protect'));
  document.getElementById('btn-dash-jump-timer')?.addEventListener('click', () => switchTab('focus'));
  document.getElementById('btn-view-all-discover')?.addEventListener('click', () => switchTab('discover'));

  document.getElementById('pillar-card-discover')?.addEventListener('click', () => switchTab('discover'));
  document.getElementById('pillar-card-gap')?.addEventListener('click', () => switchTab('gap-finder'));
  document.getElementById('pillar-card-protect')?.addEventListener('click', () => switchTab('protect'));
  document.getElementById('pillar-card-focus')?.addEventListener('click', () => switchTab('focus'));

  // Discover View Filters & Search
  const searchInput = document.getElementById('opp-search-input');
  const searchClear = document.getElementById('opp-search-clear');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      if (searchClear) searchClear.classList.toggle('hidden', !currentSearchQuery);
      renderOpportunities();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      searchClear.classList.add('hidden');
      renderOpportunities();
    });
  }

  // Category Pills
  document.querySelectorAll('#category-filter-pills .pill-btn').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#category-filter-pills .pill-btn').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategoryFilter = pill.getAttribute('data-category');
      renderOpportunities();
    });
  });

  // Region Filter
  document.getElementById('opp-filter-region')?.addEventListener('change', (e) => {
    currentRegionFilter = e.target.value;
    renderOpportunities();
  });

  // Level & Sort Dropdowns
  document.getElementById('opp-filter-level')?.addEventListener('change', (e) => {
    currentLevelFilter = e.target.value;
    renderOpportunities();
  });

  document.getElementById('opp-filter-sort')?.addEventListener('change', (e) => {
    currentSortOrder = e.target.value;
    renderOpportunities();
  });

  // Portals Directory Category Filter Pills
  document.querySelectorAll('#portals-category-pills .pill-btn').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#portals-category-pills .pill-btn').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentPortalCategoryFilter = pill.getAttribute('data-portal-cat');
      renderPortals();
    });
  });

  // Gap Finder View Controls
  document.getElementById('btn-run-gap-analysis')?.addEventListener('click', runGapAnalysis);

  // Scam Defense Engine Controls & Indian Samples
  document.getElementById('btn-analyze-scam')?.addEventListener('click', analyzeScamMessage);

  document.getElementById('btn-clear-scam')?.addEventListener('click', () => {
    const sInput = document.getElementById('scam-sender-input');
    const mInput = document.getElementById('scam-message-input');
    if (sInput) sInput.value = '';
    if (mInput) mInput.value = '';
    const placeholder = document.getElementById('scam-empty-placeholder');
    const resultsContainer = document.getElementById('scam-active-results');
    if (placeholder) placeholder.classList.remove('hidden');
    if (resultsContainer) resultsContainer.classList.add('hidden');
  });

  document.getElementById('btn-sample-scam-india-intern')?.addEventListener('click', () => {
    const s = SCAM_DEMO_SAMPLES.indiaIntern;
    document.getElementById('scam-sender-input').value = s.sender;
    document.getElementById('scam-message-input').value = s.message;
    analyzeScamMessage();
  });

  document.getElementById('btn-sample-scam-india-sms')?.addEventListener('click', () => {
    const s = SCAM_DEMO_SAMPLES.indiaSms;
    document.getElementById('scam-sender-input').value = s.sender;
    document.getElementById('scam-message-input').value = s.message;
    analyzeScamMessage();
  });

  document.getElementById('btn-sample-scam-1')?.addEventListener('click', () => {
    const s = SCAM_DEMO_SAMPLES.sample1;
    document.getElementById('scam-sender-input').value = s.sender;
    document.getElementById('scam-message-input').value = s.message;
    analyzeScamMessage();
  });

  document.getElementById('btn-sample-scam-2')?.addEventListener('click', () => {
    const s = SCAM_DEMO_SAMPLES.sample2;
    document.getElementById('scam-sender-input').value = s.sender;
    document.getElementById('scam-message-input').value = s.message;
    analyzeScamMessage();
  });

  document.getElementById('btn-sample-scam-3')?.addEventListener('click', () => {
    const s = SCAM_DEMO_SAMPLES.sample3;
    document.getElementById('scam-sender-input').value = s.sender;
    document.getElementById('scam-message-input').value = s.message;
    analyzeScamMessage();
  });

  document.getElementById('btn-sample-legit')?.addEventListener('click', () => {
    const s = SCAM_DEMO_SAMPLES.legit;
    document.getElementById('scam-sender-input').value = s.sender;
    document.getElementById('scam-message-input').value = s.message;
    analyzeScamMessage();
  });

  // Focus Timer Controls
  document.getElementById('btn-timer-start-pause')?.addEventListener('click', () => {
    pomodoroTimer.toggleStartPause();
  });

  document.getElementById('btn-timer-reset')?.addEventListener('click', () => {
    pomodoroTimer.reset();
  });

  document.getElementById('btn-timer-quick-done')?.addEventListener('click', () => {
    pomodoroTimer.completeSession();
  });

  document.querySelectorAll('.timer-presets .preset-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.timer-presets .preset-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const duration = parseInt(pill.getAttribute('data-duration'), 10) || 25;
      pomodoroTimer.setDuration(duration);
    });
  });

  document.getElementById('btn-save-task')?.addEventListener('click', () => {
    const input = document.getElementById('focus-task-input');
    if (input && input.value.trim()) {
      store.setCurrentTask(input.value.trim());
      updateDashboardStats();
      setTimerTask(input.value.trim());
      showToast(`Active goal set to: ${input.value.trim()}`, 'success', '🎯');
    }
  });

  document.getElementById('btn-clear-history')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your sprint session history?')) {
      store.clearFocusHistory();
      updateFocusDisplay();
      updateDashboardStats();
      showToast('Sprint history cleared.', 'info', '🗑️');
    }
  });

  // Modal Close
  document.getElementById('btn-close-opp-modal')?.addEventListener('click', closeOpportunityModal);
  document.getElementById('opp-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'opp-modal') closeOpportunityModal();
  });

  // Footer Tab Link Delegation
  document.querySelectorAll('.footer-link-item').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = link.getAttribute('data-tab');
      if (tab) switchTab(tab);
    });
  });
});

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
