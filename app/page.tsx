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
          I’m a passionate software developer with experience in AI, full-stack development, and distributed systems. 
          I love building things that solve real problems and constantly learning new technologies.
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
          Feel free to reach out via email at{" "}
          <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">your.email@example.com</a>
        </p>
      </section>

      <footer className="p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Andon Lafreniere
      </footer>
    </main>
  );
}
