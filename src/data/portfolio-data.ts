import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { BeehiivIcon } from '@/components/beehiiv-icon';

export const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/YOUR_USERNAME/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/YOUR_USERNAME", label: "Github" },
  { icon: BeehiivIcon, href: "https://your-newsletter.beehiiv.com/", label: "Newsletter" },
  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  { icon: Phone, href: "tel:+1234567890", label: "Phone" },
];

export const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

export const skillsData = {
  "Leadership & Strategy": [
    "Team Leadership", "Technical Strategy", "Project Management",
    "Agile/Scrum", "Stakeholder Management", "Roadmap Planning",
    "Budget Management"
  ],
  "AI & Machine Learning": [
    "Machine Learning", "Deep Learning", "Natural Language Processing",
    "Computer Vision", "MLOps", "Large Language Models",
    "Prompt Engineering"
  ],
  "Architecture & Cloud": [
    "Distributed Systems", "Microservices", "Event-Driven Architecture",
    "AWS / GCP / Azure", "Docker / Kubernetes",
    "CI/CD Pipelines", "High-Scale System Design"
  ],
  "Programming & Frameworks": [
    "Python", "JavaScript", "TypeScript", "Go", "Java",
    "Node.js", "React.js / Next.js", "FastAPI / Flask"
  ],
  "Data & Storage": [
    "PostgreSQL", "MongoDB", "Redis", "Elasticsearch",
    "Apache Kafka", "Data Pipelines", "Vector Databases"
  ]
};

export const experienceData = [
  {
    company: "Current Company Inc.",
    companyUrl: "https://www.currentcompany.com/",
    role: "Senior Software Engineer",
    period: "Jan 2023 - Present",
    desc: "Leading development of core platform features. Architecting scalable solutions and mentoring junior developers."
  },
  {
    company: "Previous Tech Corp",
    companyUrl: "https://www.previoustechcorp.com/",
    role: "Software Engineer",
    period: "Jun 2020 - Dec 2022",
    desc: "Built and maintained microservices handling millions of requests. Improved system performance by 40%."
  },
  {
    company: "Startup Labs",
    companyUrl: "https://www.startuplabs.com/",
    role: "Full Stack Developer",
    period: "Mar 2018 - May 2020",
    desc: "Developed full-stack applications using React and Node.js. Contributed to product roadmap and feature planning."
  },
  {
    company: "First Job Co.",
    companyUrl: "https://www.firstjobco.com/",
    role: "Junior Developer",
    period: "Jan 2016 - Feb 2018",
    desc: "Started career building web applications. Learned best practices in code review and agile development."
  }
];

export const leadershipPhilosophy = [
  { title: "Continuous Learning", desc: "Embracing new technologies and methodologies to stay ahead in the rapidly evolving tech landscape." },
  { title: "Collaborative Culture", desc: "Building environments where team members feel empowered to share ideas and take ownership." },
  { title: "User-Centric Design", desc: "Keeping end-user needs at the forefront of all technical decisions and implementations." },
  { title: "Technical Excellence", desc: "Maintaining high standards for code quality, testing, and documentation." },
  { title: "Data-Driven Decisions", desc: "Using metrics and analytics to guide strategic choices and measure success." },
  { title: "Scalable Solutions", desc: "Designing systems that grow gracefully with business needs without compromising performance." },
  { title: "Open Communication", desc: "Fostering transparent dialogue across teams and stakeholders." },
  { title: "Work-Life Balance", desc: "Promoting sustainable practices that prevent burnout and maintain productivity." },
  { title: "Innovation Mindset", desc: "Encouraging experimentation and calculated risk-taking to drive breakthrough solutions." }
];
