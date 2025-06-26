// app/page.tsx

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Interactive Skills Component
function InteractiveSkills() {
  const [selectedCategory, setSelectedCategory] = useState('technical');
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const skillCategories = {
    technical: [
      { name: 'Python', level: 90, color: 'bg-blue-500' },
      { name: 'JavaScript/TypeScript', level: 85, color: 'bg-yellow-500' },
      { name: 'React/Next.js', level: 80, color: 'bg-cyan-500' },
      { name: 'Machine Learning', level: 75, color: 'bg-green-500' },
      { name: 'System Design', level: 70, color: 'bg-purple-500' },
      { name: 'Cloud (AWS)', level: 65, color: 'bg-orange-500' }
    ],
    tools: [
      { name: 'Git/GitHub', level: 90, color: 'bg-gray-700' },
      { name: 'Docker', level: 75, color: 'bg-blue-600' },
      { name: 'Linux/Unix', level: 80, color: 'bg-yellow-600' },
      { name: 'SQL Databases', level: 70, color: 'bg-indigo-500' },
      { name: 'NumPy/Pandas', level: 85, color: 'bg-red-500' },
      { name: 'Matplotlib', level: 80, color: 'bg-pink-500' }
    ],
    soft: [
      { name: 'Problem Solving', level: 95, color: 'bg-green-600' },
      { name: 'Team Leadership', level: 85, color: 'bg-blue-400' },
      { name: 'Communication', level: 90, color: 'bg-purple-400' },
      { name: 'Project Management', level: 75, color: 'bg-orange-400' },
      { name: 'Research & Analysis', level: 88, color: 'bg-teal-500' },
      { name: 'Adaptability', level: 92, color: 'bg-rose-500' }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimationTriggered(true), 500);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const SkillBar = ({ skill, index }) => (
    <div key={skill.name} className="mb-4" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
          style={{
            width: animationTriggered ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-center mb-6">Interactive Skills Showcase</h3>
      
      {/* Category Buttons */}
      <div className="flex justify-center mb-8 space-x-4">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setAnimationTriggered(false);
              setTimeout(() => setAnimationTriggered(true), 100);
            }}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} Skills
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="max-w-2xl mx-auto">
        <h4 className="text-lg font-semibold mb-4 text-center capitalize">
          {selectedCategory} Skills
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories[selectedCategory].map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const projects = [
  {
    title: "Predictive Maintenance Dashboard",
    description: "A full-stack web application built with React, Flask, and scikit-learn, leveraging machine learning to predict equipment failures from sensor data. Demonstrates expertise in ML model integration, REST API development, and AWS cloud deployment.",
    link: "https://github.com/YourUsername/Predictive-Maintenance-Dashboard",
    imageUrl: "/p1.jpg",
  },
  {
    title: "Distributed Task Scheduler",
    description: "A scalable task scheduling system using Node.js, Docker, and Redis to manage and optimize job execution across multiple nodes. Showcases skills in distributed systems, containerization, and fault-tolerant design.",
    link: "https://github.com/YourUsername/Distributed-Task-Scheduler",
    imageUrl: "/p2.jpg"
  },
  {
    title: "Secure Sync File-Sharing Platform",
    description: "A secure file-sharing app developed with Angular, Node.js, and AWS S3, featuring end-to-end encryption and JWT-based authentication. Highlights proficiency in secure web development and cloud-based storage solutions.",
    link: "https://github.com/YourUsername/SecureSync-File-Sharing",
    imageUrl: "/p3.jpg"
  },
];

  const education = [
    {
      degree: "B.S. Computer Science and Engineering (Honors) | Minor: Mathematics",
      institution: "The Ohio State University",
      period: "Expected May 2028",
      details: [
        "Second-year student in the Honors program.",
        "Relevant Coursework: Software I+II, Foundations I+II, Systems I,  Linear Algebra",
        "GPA: 3.83/4.0",
        "Activities: Kappa Theta Pi(Pledge Chair), AI Club, SIAM, BSLI, COF Scholar",
      ],
    },
  ];

  const experience = [
    {
      title: "Technology Intern",
      company: "Sabel Systems",
      period: "Summer 2025", 
      logo: "/SSlogo.jpg", 
      details: [
        "Assisted with IT infrastructure support and maintenance, gaining exposure to system operations and problem-solving within a professional environment. ",
        "Contributed to CMMC L2 compliance efforts, involving analysis of security protocols and documentation.",
        "Supported cybersecurity initiatives by monitoring system logs and identifying potential vulnerabilities, strengthening my understanding of network security.",
        "Gained practical experience with enterprise-level IT systems and tools (Microsoft GCC)",
      ],
    },
    {
      title: "Student Researcher",
      company: "Discovery Lab Global",
      period: "Summer 2024", 
      logo: "/DLG.jpg", 
      details: [
        "Developed and optimized a deep learning AI model using only NumPy and a pre-built Open AI Gym environment, reducing training time by 20% through advanced reward shaping techniques.",
        "Designated to lead team to serve as an example for fellow researchers.",
        "Performed analysis on the efficiency of the model through statistical modeling with Matplotlib",
        "Authored 300+ pages of technical documentation detailing the development and performance of the model",
      ],
    },
    {
      title: "Knowledge Graph Research Assistant",
      company: "Kastle Lab",
      period: "Summer 2023", 
      logo: "/KL.png", 
      details: [
        "Rapidly learned and applied knowledge graph concepts to contribute effectively to projects.",
        "Crafted Python scripts and used pywordnet to parse Wikidata for semantic information.",
        "Finalized a data structure project which could solve the New York Times game Connections.",
        "Collaborated weekly over in-person meetings with a team of six graduate-level researchers and a professor.",
      ],
    },
  ];

  const certifications = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "January 2025", 
      ver: "HZ91MHXS6F4E1T3P", 
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Enhanced Header with Profile Image */}
      <header className="p-8 bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* Profile Image - You'll need to add your headshot as /profile.jpg */}
            <div className="relative group">
              <img 
                src="/profile.jpg" 
                alt="Andon Lafreniere" 
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Andon Lafreniere</h1>
              <p className="text-lg text-gray-600">Lifelong Learner | Computer Science & Engineering Student</p>
              <div className="flex items-center mt-2 space-x-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Ohio State University
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Available Summer 2026
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Contact Buttons */}
          <div className="hidden md:flex space-x-3">
            <a 
              href="mailto:andonlafreniere2706@gmail.com"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
            >
              Contact Me
            </a>
            <a 
              href="https://github.com/Andon-LaFreniere"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="mb-6">
          Hi, I'm a second-year Honors Computer Science and Engineering student at The Ohio State University. My work lies in building practical real-world solutions through software. I am especially interested in systems design and product development. I enjoy turning technical ideas into practical tools that make life better.
        </p>
        <p className="mb-6">
          I seek hands-on experience through personal projects, research, and collaboration. I am actively exploring opportunities for internship programs for Summer 2026.
        </p>
      </section>

      {/* Interactive Skills Section */}
      <section className="p-8 mx-auto max-w-4xl mb-8">
        <InteractiveSkills />
      </section>

      {/* --- Education Section --- */}
      <section className="p-8 bg-white shadow-md mx-auto max-w-4xl rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-lg text-gray-700">{edu.institution}</p>
            <p className="text-md text-gray-600 mb-2">{edu.period}</p>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* --- Experience Section --- */}
      <section className="p-8 bg-white shadow-md mx-auto max-w-4xl rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="relative pl-8">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-300 rounded-full"></div>

          {experience.map((exp, index) => (
            <div key={index} className="mb-8 relative">
              <div className="absolute left-1 -top-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                {index + 1}
              </div>
              <div className="ml-8 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-2">
                  {exp.logo && (
                    <img src={exp.logo} alt={`${exp.company} Logo`} className="w-10 h-10 mr-3 rounded-full object-contain" />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-lg text-gray-700">{exp.company}</p>
                  </div>
                </div>
                <p className="text-md text-gray-600 mb-2">{exp.period}</p>
                {exp.details && (
                  <ul className="list-disc list-inside text-gray-800 space-y-1 mt-2">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section className="p-8 bg-white shadow-md mx-auto max-w-4xl rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-1000 transform hover:-translate-y-1 w-full max-w-sm">
            
    {project.imageUrl && (
    <img src={project.imageUrl} alt={project.title} className="w-full h-32 object-cover rounded-md mb-4" />
    )}
    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
              {project.link && (
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  Learn More
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="https://github.com/Andon-LaFreniere" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg">
            View More Projects on GitHub
          </Link>
        </div>
      </section>

      {/* --- Certifications Section --- */}
      <section className="p-8 bg-white shadow-md mx-auto max-w-4xl rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">{cert.name}</h3>
              <p className="text-gray-700">Issued by: {cert.issuer}</p>
              <p className="text-gray-600 text-sm mb-2">Date: {cert.date}</p>
              <p className="text-gray-600 text-sm mb-2">Verification Code: {cert.ver}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          If you would like to connect to discuss how working together might be mutually beneficial, please contact me at{" "}
          <a href="mailto:andonlafreniere2706@gmail.com" className="text-blue-500 hover:underline">andonlafreniere2706@gmail.com</a>
        </p>
      </section>

      <footer className="p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Andon Lafreniere
      </footer>
    </main>
  );
}