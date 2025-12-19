/**
 * Portfolio Data Template
 * 
 * Copy this file to: src/data/portfolio-data.ts
 * Replace all placeholder values with your actual information.
 */

import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { BeehiivIcon } from '@/components/beehiiv-icon';

// =============================================================================
// SOCIAL LINKS
// Update with your actual profile URLs
// =============================================================================
export const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/YOUR_USERNAME/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/YOUR_USERNAME", label: "Github" },
  { icon: BeehiivIcon, href: "https://YOUR_NEWSLETTER.beehiiv.com/", label: "Newsletter" },
  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  { icon: Phone, href: "tel:+1234567890", label: "Phone" },
];

// =============================================================================
// NAVIGATION LINKS
// These correspond to section IDs on the main page
// =============================================================================
export const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

// =============================================================================
// SKILLS DATA
// Organize your skills by category
// =============================================================================
export const skillsData = {
  "Leadership & Strategy": [
    "Team Leadership", "Technical Strategy", "Project Management",
    "Agile/Scrum", "Stakeholder Management", "Roadmap Planning",
    "Budget Management"
  ],
  "AI & Machine Learning": [
    "Machine Learning", "Deep Learning", "NLP",
    "Computer Vision", "MLOps", "LLMs",
    "Prompt Engineering"
  ],
  "Architecture & Cloud": [
    "Distributed Systems", "Microservices", "Event-Driven Architecture",
    "AWS", "GCP", "Azure", "Kubernetes",
    "Docker", "CI/CD"
  ],
  "Programming Languages": [
    "Python", "JavaScript", "TypeScript", "Go", "Java",
    "Node.js", "React", "Next.js"
  ],
  "Data & Databases": [
    "PostgreSQL", "MongoDB", "Redis", "Elasticsearch",
    "Kafka", "Data Pipelines", "ETL"
  ]
};

// =============================================================================
// EXPERIENCE DATA
// Add your work history in reverse chronological order
// =============================================================================
export const experienceData = [
  {
    company: "Current Company",
    companyUrl: "https://www.currentcompany.com/",
    role: "Senior Software Engineer",
    period: "Jan 2023 - Present",
    desc: "Leading development of core platform features. Architecting scalable solutions and mentoring junior developers."
  },
  {
    company: "Previous Company",
    companyUrl: "https://www.previouscompany.com/",
    role: "Software Engineer",
    period: "Jun 2020 - Dec 2022",
    desc: "Built and maintained microservices handling millions of requests. Improved system performance by 40%."
  },
  {
    company: "First Company",
    companyUrl: "https://www.firstcompany.com/",
    role: "Junior Developer",
    period: "Jan 2018 - May 2020",
    desc: "Developed frontend applications and APIs. Contributed to team's agile processes and code reviews."
  },
  // Add more experience entries as needed...
];

// =============================================================================
// LEADERSHIP PHILOSOPHY
// Your core principles and values as a leader/professional
// =============================================================================
export const leadershipPhilosophy = [
  { 
    title: "Continuous Learning", 
    desc: "Embracing new technologies and methodologies to stay ahead in the rapidly evolving tech landscape." 
  },
  { 
    title: "Collaborative Culture", 
    desc: "Building environments where team members feel empowered to share ideas and take ownership." 
  },
  { 
    title: "User-Centric Design", 
    desc: "Keeping end-user needs at the forefront of all technical decisions and implementations." 
  },
  { 
    title: "Technical Excellence", 
    desc: "Maintaining high standards for code quality, testing, and documentation." 
  },
  { 
    title: "Data-Driven Decisions", 
    desc: "Using metrics and analytics to guide strategic choices and measure success." 
  },
  { 
    title: "Scalable Solutions", 
    desc: "Designing systems that grow gracefully with business needs without compromising performance." 
  },
  { 
    title: "Open Communication", 
    desc: "Fostering transparent dialogue across teams and stakeholders." 
  },
  { 
    title: "Work-Life Balance", 
    desc: "Promoting sustainable practices that prevent burnout and maintain productivity." 
  },
  { 
    title: "Innovation Mindset", 
    desc: "Encouraging experimentation and calculated risk-taking to drive breakthrough solutions." 
  }
];
