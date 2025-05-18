import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import ICPimg from "@/public/ICP2.png";
import fps from "@/public/fps.png";
import avengers from "@/public/avengers.png";
import vision from "@/public/vision.png";
import fit from "@/public/fit.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
      "Successfully completed the 12-week NPTEL Cloud Computing course by IIT Kharagpur demonstrating proficiency in cloud technologies and concepts.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan-Apr 2024",
    link: "/Certificates/CC.pdf",
  },
  {
    title: "Databases and Python (Coursera & Linkedin)",
    description:
      "Earned certifications in database fundamentals, SQL, and advanced Python techniques for data science, covering topics such as database design, querying, data analysis, and visualization using industry-standard tools and platforms from Meta, IBM, Coursera, and LinkedIn Learning",
    icon: React.createElement(LuGraduationCap),
    date: "Jan-Mar 2024",
    link: "/Certificates/1.1.pdf",
  },
  {
    title: "B.E in Computer Science",
    location: "Chandigarh University, Punjab, India",
    description:
      "Currently pursuing Computer Science Engineering at Chandigarh University, with hands-on project experience in data analysis and visualization using Python, SQL, Excel, Power BI, Tableau, and related tools and libraries.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2026",
  },
  {
    title: "Diploma in Electronics & Communication Engineering",
    location: "RBS Polytechnic College, Agra, India",
    description:
      "Completed a Diploma in Electronics and Communication Engineering, gaining strong theoretical and practical knowledge in electronic circuits, communication systems, and embedded technologies, along with hands-on industry experience through an internship during the course",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2023",
  },
] ;

export const projectsData = [
  {
    title: "🔍 ChurnVision: Telecom Customer Churn Prediction",
    description:
      "A ML project to analyze and predict customer churn using classification algorithms. ",
    tags: ["Jupyter Notebook","Python 3", "Pandas & NumPy", "Matplotlib & Seaborn"],
    imageUrl: ICPimg,
    githubUrl: "https://github.com/Shrxth/Customer-Churn-Prediction.git",
  },
  {
    title: "📊Superstore Sales Dashboard",
    description:
      "A Power BI Dashboard analyzing Superstore sales.",
    tags: ["KPIs", "Power BI", "Excel", "DAX", "Kaggle"],
    imageUrl: fps,
    githubUrl: "https://github.com/Shrxth/Superstore-Sales-Intelligence-Dashboard.git",
  },
  {
    title: "📄AI Driven ID CARD",
    description:
      "An AI-powered ID card generator with dynamic QR code integration using Streamlit and Python.", 
    tags: [ "Python","Streamlit", "User Authentication", "Interactive Dashboard"],
    imageUrl: avengers,
    githubUrl: ""
  },
  {
    title: "🧾NFT Minter",
    description:
      "A simple JavaScript-based NFT minting app that lets users create, list, and track digital assets with custom metadata in real-time.", 
    tags: ["HTML", "JavaScript", "Web3", "Frontend",],
    imageUrl: fit,
    githubUrl: "https://github.com/Shrxth/Node.js-project.git",
  },

] as const;

export const skillsData = [
  "Python",
  "SQL",
  "Java",
  "C++",
  "Excel",
  "Power BI",
  "Tableau",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Jupyter Notebook",
  "Google Sheets",
  "Git",
  "VS Code",
  "Microsoft Office Suite",

] as const;

