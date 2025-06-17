import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <header className="p-8 bg-white shadow-md">
        <h1 className="text-4xl font-bold">Andon Lafreniere</h1>
        <p className="text-lg text-gray-600">Software Engineer | Innovator | Problem Solver</p>
      </header>

      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="mb-6">
         Hi, I'm a second-year Honors Computer Science and Engineering student at The Ohio State University. My work lies in building practical real-world solutions through software. I am especially interested about systems design and product development. I enjoy turning technical ideas into practical tools that make life better.

         I seek hands-on experience through personal projects, research, and collaboration. I am actively exploring opportunities for internship programs for Summer 2026.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Ohio Weather Sucks</strong> — Full-stack weather app using React, Node.js, and external APIs.{" "}
            <a href="https://github.com/Andon-LaFreniere/Ohio-Weather-Sucks" className="text-blue-500 hover:underline">GitHub Repo</a>
          </li>
          <li>
            <strong>AI Pong Trainer</strong> — Reinforcement learning model trained to master Pong using policy gradients.
          </li>
          <li>
            <strong>Athlete Recovery RAG Model</strong> — Research project using RAG + Azure AI to personalize athlete recovery.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
        <p>
          If you would like to connect to discuss how working together might be mutually beneficial, please contact me at {""}.
          <a href="mailto:andonlafreniere2706@gmail.com" className="text-blue-500 hover:underline">andonlafreniere2706@gmail.com</a>
        </p>
      </section>

      <footer className="p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Andon Lafreniere
      </footer>
    </main>
  );
}
