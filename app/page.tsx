// app/page.tsx


import Link from 'next/link';

export default function Home() {
  // Define your key projects here
  const projects = [
    {
      title: "Ohio Weather Sucks",
      description: "A full-stack weather app built with React and Node.js, integrating external APIs to provide real-time weather updates. Demonstrated skills in MERN stack development and API integration.",
      link: "https://github.com/Andon-LaFreniere/Ohio-Weather-Sucks",
      // Optional: Add an imageUrl if you have a screenshot or icon for the project
      // imageUrl: "/images/ohio-weather-sucks.png",
    },
    {
      title: "AI Pong Trainer",
      description: "An exciting project demonstrating a reinforcement learning model trained to master the game of Pong using policy gradients. Explored deep learning and game AI concepts.",
      link: "#", // Replace with a link if you have a demo or more info
      // imageUrl: "/images/ai-pong-trainer.png",
    },
    {
      title: "Athlete Recovery RAG Model",
      description: "A research project leveraging Retrieval Augmented Generation (RAG) with Azure AI to personalize athlete recovery protocols. Focused on natural language processing and cloud AI services.",
      link: "#", // Replace with a link if you have a paper or more info
      // imageUrl: "/images/athlete-recovery-rag.png",
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

  // Define your certifications
  const certifications = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "January 2025", // Example date, replace with actual
      ver: "HZ91MHXS6F4E1T3P", // Link to your certification badge/verification if available
    },
    // Add more certifications here
  ];


  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <header className="p-8 bg-white shadow-md">
        <h1 className="text-4xl font-bold">Andon Lafreniere</h1>
        <p className="text-lg text-gray-600">Lifelong Learner | Computer Science & Engineering Student</p>
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
        <div className="relative pl-8"> {/* Container for the timeline effect */}
          {/* Vertical line for the timeline */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-300 rounded-full"></div>

          {experience.map((exp, index) => (
            <div key={index} className="mb-8 relative">
              {/* Circle for the timeline point */}
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
              {/* {project.imageUrl && (
                <img src={project.imageUrl} alt={project.title} className="w-full h-32 object-cover rounded-md mb-4" />
              )} */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Grid for certifications */}
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