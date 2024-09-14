import portfolioImg01 from "../images/project9.png";
import portfolioImg02 from "../images/project2.png";
import portfolioImg03 from "../images/project3.png";
import portfolioImg04 from "../images/project4.jpg";
import portfolioImg05 from "../images/project8.png";
import portfolioImg06 from "../images/project6.png";
import portfolioImg07 from "../images/project1.png";
import portfolioimg08 from '../images/project10.png';
import portfolioimg09 from '../images/project13.png';
import payment from '../images/payment.png';
import poultry from  '../images/poultrycare.jpeg';
import exam from  '../images/examsystem.png'
import sacco from '../images/uws.jpg';
import oryx from '../images/oryx.jpg';

const portfolios = [
  {
    id:"11",
    imgUrl: sacco,
    category: "Frontend",
    style: "shadow-green-300",
    title: "Sacco Member Portal",
    description:'UWS Sacco Member portal, sophisticated platform providing online banking services and E-Loans',
    
    technologies: ["React", "Bootstrap","CSS"],
    
    siteUrl: "https://app.uws.co.ke/",
    },
    {
      id:"11",
      imgUrl: oryx,
      category: "Frontend",
      title: "Visa Application Portal",
      description:'A streamlined online platform for visa applications.',
      
      technologies: ["React", "Bootstrap","CSS"],
      siteUrl: "https://oryxvisacentre.com",
      style: "shadow-orange-600",
      },

{
id:"10",
imgUrl: exam,
category: "Full-stack",
title: "Online Examination System",
description:'Online examination system offers a user-friendly platform for creating, scheduling, and administering secure exams remotely.',

technologies: ["Laravel", "MySQL"],
style: "shadow-red-600",
siteUrl: "#",
},

  {
    id: "06",
    imgUrl: poultry,
    style: "shadow-green-600",
    category: "Full-stack",
    title: "Poultry Care System",
    description:
      "Poultry farming system ,very good functionalities like eggs production management,hatchery management,orders ,sales and expenses management. ",
    technologies: ["Laravel", "MySQL"],
    siteUrl: "#",
  },

  {
    id: "03",
    imgUrl: payment,
    style: "shadow-gray-600",
    category: "Full-stack",
    title: "Payment integration",
    description:
      "Collaborated with team building visa application portal ,where i did payment integration and other functionalities",
    technologies: ["React", "Codeigniter", "MySQL"],
    siteUrl: "https://oryxvisacentre.com",
  },
  {
    id: "04",
    imgUrl: portfolioImg05,
    style: "shadow-blue-600",
    category: "Frontend",
    title: "Ngao chemist page",
    description:
      " A company website meant for  business's online presence, serving various purposes that contribute to its overall success.",
    technologies: ["React", "Tailwind css", "HTML"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg02,
    style: "shadow-gray-600",
    category: "Full-stack",
    title: "Online DM and Hypertension web app",
    description:
      "its a web based application for diabetes and hypertension patients to book apponitments for physicians and also get medical advice on the platform.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },

 

  {
    id: "01",
    imgUrl: portfolioImg01,
    style: "shadow-yellow-600",
    category: "Full-stack",
    title: " Kilifi Bodaboda riders booking system",
    description:
      "web application aims to provide a convenient and efficient platform for customers to book bodaboda rides while enabling riders to register their stations and expand their reach.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },

  {
    id: "08",
    imgUrl: portfolioimg08,
    style: "shadow-gray-600",
    category: "Full-stack",
    title: "Almedina hardware online store(UI)",
    description:
      "Its e-commerce application meant for  customers to access their favorite commodities over internet rather than physical appearance at shop also serving various purposes that contribute to its overall success.",
    technologies: ["React", "Bootstrap", "HTML"],
    siteUrl: "#",
  },
  {
    id: "06",
    imgUrl: portfolioImg06,
    style: "shadow-green-600",
    category: "Frontend",
    title: "Weathet app",
    description:
      "Friendly weather application which serves different purposes thats Real-time weather updates,daily forecast and global monitoring",
    technologies: ["React", "CSS", "HTML"],
    siteUrl: "https://mutukuweather.netlify.app/",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    style: "shadow-green-600",
    category: "Frontend",
    title: "Blog Website",
    description:
      "My blog app dive into a diverse collection of articles covering everything from lifestyle and technology to travel and personal reflections.",
    technologies: ["React", "Tailwind css", "HTML"],
    siteUrl: "#",
  },
  
];

export default portfolios;
