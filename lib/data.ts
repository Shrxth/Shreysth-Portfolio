import React from "react";
import { LuGraduationCap } from "react-icons/lu";

import fps from "@/public/fps.png";
import orchestAgentImg from "@/public/orchestagent.png";
import datapulseImg from "@/public/datapulse.png";
import churnvisionImg from "@/public/churnvision.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

type CertificationItem = {
  title: string;
  description: string;
  date: string;
  icon: React.ReactElement;
  location?: string;
  link?: string;
};

export const CertificationsData: CertificationItem[] = [
  {
    title: "Foundation of Cloud IoT Edge ML (NPTEL)",
    description:
      "Explored the integration of cloud computing, IoT, and edge machine learning to build intelligent, distributed systems.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb-Apr 2025",
    link: "/Certificates/iot-ml.pdf",
  },
  {
    title: "Internet of Things: Design Concepts and Use Cases (SWAYAM)",
    description:
      "Completed the SWAYAM certification course Internet of Things: Design Concepts and Use Cases, focusing on IoT architecture, protocols, and practical applications.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul-Dec 2024",
    link: "/Certificates/IOT.pdf",
  },
  {
    title: "Cloud Computing (NPTEL)",
    description:
      "Successfully completed the 12-week NPTEL Cloud Computing course by IIT Kharagpur, demonstrating proficiency in cloud technologies and concepts.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan-Apr 2024",
    link: "/Certificates/CC.pdf",
  },
  {
    title: "Databases and Python (Coursera & LinkedIn)",
    description:
      "Earned certifications covering database fundamentals, SQL, Python, data analysis, and visualization using industry-standard tools and platforms.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan-Mar 2024",
    link: "/Certificates/1.1.pdf",
  },
  {
    title: "B.E. in Computer Science",
    location: "Chandigarh University, Punjab, India",
    description:
      "Computer Science education with hands-on work across data analytics, machine learning, software development, and AI-focused projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2026",
  },
  {
    title: "Diploma in Electronics & Communication Engineering",
    location: "RBS Polytechnic College, Agra, India",
    description:
      "Completed a Diploma in Electronics and Communication Engineering with practical exposure to electronic circuits, communication systems, embedded technologies, and industry experience through an internship.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
];

export const projectsData = [
  {
    title: "OrchestAgent",
    description:
      "Local-first AI agent orchestration system for routing tasks, executing browser workflows, and evaluating agent behavior with bounded execution.",
    tags: [
      "Python",
      "AI Agents",
      "Ollama",
      "Browser Use",
      "Evaluation",
    ],
    imageUrl: orchestAgentImg,
    githubUrl: "https://github.com/Shrxth/OrchestAgent",
  },
  {
    title: "DataPulse",
    description:
      "Automated data intelligence pipeline that ingests API data, calculates KPIs, detects anomalies, generates reports, and publishes insights.",
    tags: [
      "Python",
      "SQL",
      "REST APIs",
      "Pandas",
      "Analytics",
      "Streamlit",
      "GitHub Actions",
    ],
    imageUrl: datapulseImg,
    githubUrl: "https://github.com/Shrxth/DataPulse",
  },
  {
    title: "ChurnVision",
    description:
      "Machine-learning solution for identifying customers at risk of churn through data analysis, classification models, and model evaluation.",
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "TensorFlow",
      "Machine Learning",
    ],
    imageUrl:churnvisionImg,
    githubUrl: "https://github.com/Shrxth/Customer-Churn-Prediction",
  },
  {
    title: "Superstore Sales Intelligence",
    description:
      "Business intelligence dashboard for analyzing sales, profitability, customer segments, regional performance, and trends.",
    tags: [
      "Power BI",
      "DAX",
      "Excel",
      "KPIs",
      "Data Visualization",
    ],
    imageUrl: fps,
    githubUrl:
      "https://github.com/Shrxth/Superstore-Sales-Intelligence-Dashboard",
  },
] as const;

export const skillsData = [
  {
    category: "AI & Intelligent Systems",
    skills: [
      "LLMs",
      "AI Agents",
      "Agent Orchestration",
      "AI Evaluation",
      "Local LLMs",
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Statistical Analysis",
      "Power BI",
      "DAX",
    ],
  },
  {
    category: "Integration & Automation",
    skills: [
      "REST APIs",
      "API Integration",
      "Browser Automation",
      "Streamlit",
    ],
  },
  {
    category: "Engineering & Delivery",
    skills: [
      "Git",
      "GitHub Actions",
      "Automated Testing",
      "CI/CD",
    ],
  },
] as const;