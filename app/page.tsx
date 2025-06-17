// app/page.tsx

import Link from 'next/link'; // Import Link for better navigation

export default function Home() {
  // Define your key projects here
  const projects = [
    {
      title: "Ohio Weather Sucks",
      description: "A full-stack weather app built with React and Node.js, integrating external APIs to provide real-time weather updates.",
      link: "https://github.com/Andon-LaFreniere/Ohio-Weather-Sucks",
      // Optional: Add an imageUrl if you have a screenshot or icon for the project
      // imageUrl: "/images/ohio-weather-sucks.png",
    },
    {
      title: "AI Pong Trainer",
      description: "An exciting project demonstrating a reinforcement learning model trained to master the game of Pong using policy gradients.",
      link: "#", // Replace with a link if you have a demo or more info
      // imageUrl: "/images/ai-pong-trainer.png",
    },
    {
      title: "Athlete Recovery RAG Model",
      description: "A research project leveraging Retrieval Augmented Generation (RAG) with Azure AI to personalize athlete recovery protocols.",
      link: "#", // Replace with a link if you have a paper or more info
      // imageUrl: "/images/athlete-recovery-rag.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <header className="p-8 bg-white shadow-md">
        <h1 className="text-4xl font-bold">Andon Lafreniere</h1>
        <p className="text-lg text-gray-600">Lifelong Learner</p>
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

      {/* --- Projects Section --- */}
      <section className="p-8 bg-white shadow-md mx-auto max-w-4xl rounded-lg"> {/* Added max-width and rounded corners */}
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"> {/* Centering with justify-items-center */}
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 w-full max-w-sm"> {/* Added hover effects and max-width */}
              {/* You can uncomment and use an image if you have one for each project */}
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
      {/* --- End Projects Section --- */}

      <section className="p-8">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
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
