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

  // Define your education details
  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering (Honors)",
      institution: "The Ohio State University",
      period: "Expected May 2028",
      details: [
        "Second-year student in the Honors program.",
        "Relevant Coursework: Software I, Linear Algebra",
        "GPA: 3.8/4.0",
        "Activities: Kappa Theta Pi, AI Club",
      ],
    },
    // Add more education entries if applicable
  ];

  // Define your experience details with templates and an optional logo field
  const experience = [
    {
      title: "Software Engineering Intern",
      company: "[Company Name 1]",
      period: "Summer 2026", // Adjust based on your internship
      description: "This is a placeholder for your first internship experience. Detail your responsibilities, key achievements, and technologies used here.",
      logo: "/images/placeholder-logo.png", // Replace with actual logo path
      details: [
        "Developed and maintained [specific features/projects].",
        "Contributed to [team/product] by [specific actions/achievements].",
        "Used technologies such as [Tech 1, Tech 2, Tech 3].",
      ],
    },
    {
      title: "Research Assistant",
      company: "[Company Name 2 (e.g., OSU AI Lab)]",
      period: "Sept 2024 - Present", // Adjust period as needed
      description: "This is a placeholder for your second experience, perhaps a research role or another internship. Describe your contributions and the impact of your work.",
      logo: "/images/placeholder-logo.png", // Replace with actual logo path
      details: [
        "Assisted in the development of [project type] using [technologies].",
        "Analyzed [data/results] and presented findings to [team/professor].",
      ],
    },
    {
      title: "Project Lead / Developer",
      company: "[Company Name 3 (e.g., Personal Project/Volunteer)]",
      period: "Jan 2024 - May 2024", // Adjust period as needed
      description: "This is a template for a third experience, which could be a significant personal project, a volunteer role, or another relevant work experience. Highlight your leadership and technical skills.",
      logo: "/images/placeholder-logo.png", // Replace with actual logo path
      details: [
        "Led the development of [project name] from conception to deployment.",
        "Implemented [specific features] resulting in [quantifiable outcome].",
        "Collaborated with [team members/stakeholders] on [aspect].",
      ],
    },
  ];

  // Define your certifications
  const certifications = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "January 2025", // Example date, replace with actual
      ver: "#", // Link to your certification badge/verification if available
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
                <p className="text-gray-800">{exp.description}</p>
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