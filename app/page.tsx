// app/page.tsx

import Link from "next/link";

const projects = [
  {
    title: "Historical Portfolio Risk Assessment and Backtesting Dashboard",
    description:
      "End-to-end platform for advanced portfolio risk assessment and dynamic hedging recommendations.",
    link: "https://github.com/Andon-LaFreniere/Portfolio-Risk-Assessment",
  },
  {
    title: "Global Skateboarding Spot Community Platform",
    description: "Community supported map of skateboarding spots all across the world.",
    link: "https://github.com/Andon-LaFreniere/land-wrld",
  },
];

const education = [
  {
    degree: "B.S. Computer Science and Engineering (Honors)",
    institution: "The Ohio State University",
    minor: "Minor: Mathematics",
    period: "Expected May 2028",
    location: "Columbus, OH",
    details: [
      "GPA: 3.914/4.0",
      "Relevant Coursework: Software I & II, Foundations I & II, Systems I, Linear Algebra",
      "Activities: Kappa Theta Pi (VP Membership), Honors Program, AI Club, Big Data Analytics Association",
    ],
  },
];

const experience = [
    {
    role: "Honors Undergraduate Teaching Assistant",
    company: "Ohio State College of Engineering",
    period: "August 2025 – Present",
    details: [
      "Led weekly lab sessions for 30+ honors students on programming and engineering concepts.",
      "Translated technical concepts into intuitive explanations and graded lab reports.",
      "Supported student success through one-on-one mentoring and structured feedback.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "American Electric Power",
    period: "May 2026 – August 2026",
    details: [
      "Built responsive frontend components and scalable backend services to improve data visibility and operational efficiency.",
      "Designed and optimized relational database schemas for efficient enterprise-level reporting.",
      "Collaborated in Agile sprint planning and technical design reviews to deliver high-quality features.",
    ],
  },
  {
    role: "Technology Intern",
    company: "Sabel Systems",
    period: "May 2025 – August 2025",
    details: [
      "Assisted in IT infrastructure operations and system support for enterprise customers.",
      "Contributed to CMMC L2 compliance analysis and security documentation.",
      "Monitored security logs to identify and address potential vulnerabilities.",
    ],
  },
  {
    role: "Student Researcher",
    company: "Discovery Lab Global",
    period: "May 2024 – August 2024",
    details: [
      "Optimized a deep learning model in OpenAI Gym using NumPy and advanced reward shaping.",
      "Reduced training time by 20% through custom network and optimization techniques.",
      "Produced technical documentation and performance analysis for research stakeholders.",
    ],
  },
];

const research = [
  {
    title: "Multimodal Athlete Recovery Planning Utilizing Large Language Models",
    description:
      "Researching advanced multimodal architectures and LLM prompt optimization to synthesize athletic performance metrics and recovery plans.",
    paper: "https://drive.google.com/file/d/1Jxh1pFUP1fc-zLPv506PmysFPjmcxr3R/view?usp=sharing",
    code: "https://github.com/Andon-LaFreniere/HPCGPT_Free",
  },
  {
    title: "Deep Learning Model Optimization in OpenAI Gym",
    description:
      "Implemented custom reward shaping techniques and neural network optimizations to accelerate training efficiency in simulated environments.",
    paper: "https://docs.google.com/document/d/1ZvJdAi-tUjM41qnIcMFQi2ZDz7EmGb-i/edit?usp=sharing&ouid=111033901561188725683&rtpof=true&sd=true",
    code: "https://github.com/Andon-LaFreniere/DQN-Pong",
  },
];

const miscItems = [
  "Items on my public profiles like my website and LinkedIn are kept intentionally consise, please reach out to me directly for my resume.",
  "Hobbies: skateboarding, hiking, and spending time with friends+family.",
];

export default function Home() {
  return (
    <main className="min-h-screen text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
              Andon Lafreniere
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-slate-300">
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#education" className="hover:text-white transition-colors">
              Education
            </Link>
            <Link href="#experience" className="hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#research" className="hover:text-white transition-colors">
              Research
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section id="hero" className="border-b border-white/10 bg-slate-950/50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[320px_1fr] items-center">
          <div className="mx-auto w-72 rounded-full border border-white/10 bg-slate-900/80 p-2 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.7)]">
            <img
              src="/profile.png"
              alt="Andon Lafreniere"
              className="h-72 w-72 rounded-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                Hi, I'm
              </p>
              <h1 className="text-5xl font-semibold tracking-tight text-white">
                Andon Lafreniere
              </h1>
              <p className="max-w-2xl text-xl italic leading-9 text-slate-300">
                Honors Computer Science & Engineering student at The Ohio State University
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <span></span>Columbus, OH
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <span></span>Honors CSE
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:andonlafreniere2706@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:border-slate-200 hover:text-white"
              >
                 Email
              </a>
              <a
                href="https://github.com/Andon-LaFreniere"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:border-slate-200 hover:text-white"
              >
                 GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/andonlaf/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:border-slate-200 hover:text-white"
              >
                 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="border-t border-white/10 pt-10">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">About</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Academic engineering focus with a practical systems mindset.
          </h2>
          <div className="mt-8 space-y-5 text-slate-300 max-w-3xl leading-8">
            <p>
              I'm an undergradute at The Ohio State University (Go Bucks!), majoring in Computer Science & Engineering and minoring in Mathematics.
            </p>
            <p>
              My work spans enterprise software engineering and IT, research in machine learning, and various open-source projects.
            </p>
            <p>
             I am broadly interested in leadership, machine learning, high perfomance applications, and cybersecurity. 
            </p>
            <p>
              I am currently exploring opportunities for Summer 2027. Feel free to reach out to me via email. 
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 py-16">
        <div className="border-t border-white/10 pt-10">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Education</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">University timeline</h2>

          <div className="mt-10 space-y-8 text-slate-300">
            {education.map((edu, index) => (
              <div key={index} className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{edu.institution}</p>
                    <p className="text-sm text-slate-400">{edu.degree} · {edu.minor}</p>
                  </div>
                  <div className="text-sm text-slate-400">{edu.period}</div>
                </div>
                <div className="text-sm text-slate-400">{edu.location}</div>
                <details className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 group">
                  <summary className="cursor-pointer list-none text-base font-medium text-slate-100 transition hover:text-white">
                    Show Details
                  </summary>
                  <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
                    {edu.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <div className="border-t border-white/10 pt-10">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Professional contributions</h2>

          <div className="mt-10 space-y-6">
            {experience.map((item, index) => (
              <div key={index} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{item.role}</p>
                    <p className="text-sm text-slate-400">{item.company}</p>
                  </div>
                  <p className="text-sm text-slate-400">{item.period}</p>
                </div>
                <details className="mt-5 rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                  <summary className="cursor-pointer text-sm font-medium text-slate-100 transition hover:text-white">
                    View achievements
                  </summary>
                  <ul className="mt-4 space-y-3 text-slate-300 list-disc list-inside">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <div className="border-t border-white/10 pt-10">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Selected technical work</h2>

          <div className="mt-10 space-y-6 text-slate-300">
            {projects.map((project, index) => (
              <div key={index} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{project.title}</p>
                    <p className="mt-2 max-w-2xl text-slate-300">{project.description}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-200 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>

          <details className="mt-10 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <summary className="cursor-pointer text-sm font-medium text-slate-100 transition hover:text-white">
              + More Projects
            </summary>
            <div className="mt-4 text-slate-300">
              Explore additional repositories and in-progress work on my GitHub.
            </div>
          </details>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-6xl px-6 py-16">
        <div className="border-t border-white/10 pt-10">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Research</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Technical research highlights</h2>

          <div className="mt-10 space-y-6 text-slate-300">
            {research.map((item, index) => (
              <div key={index} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                    <a href={item.paper} className="transition hover:text-white">
                       Paper
                    </a>
                    <a href={item.code} className="transition hover:text-white">
                       Code
                    </a>
                  </div>
                </div>
                <p className="mt-4 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="miscellaneous" className="mx-auto max-w-6xl px-6 py-16">
        <div className="border-t border-white/10 pt-10">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Miscellaneous</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Notes & personal interests</h2>
          <ul className="mt-8 space-y-3 text-slate-300 list-disc list-inside">
            {miscItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="border-t border-white/10 pt-10">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Get in touch</h2>
          <p className="mt-6 max-w-3xl text-slate-300 leading-8">
            I am currently exploring opportunities for Summer 2027. Feel free to reach out to me via email at{' '}
            <a
              href="mailto:andonlafreniere2706@gmail.com"
              className="text-slate-100 underline decoration-slate-500 underline-offset-4 hover:text-white"
            >
              andonlafreniere2706@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Andon Lafreniere. All rights reserved.
      </footer>
    </main>
  );
}
