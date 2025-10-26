"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function CurrentlyBuilding() {
  const projects = [
    {
      title: "Loop",
      description: "Carpooling for Remote Colleges",
      role: "Founder & Lead Developer",
      link: "https://looprides.dev",
      github: "https://github.com/wahab-cide",
      techStack: [
        { name: "React Native", color: "blue" },
        { name: "Expo", color: "blue" },
        { name: "Next.js", color: "cyan" },
        { name: "TypeScript", color: "blue" },
        { name: "PostgreSQL", color: "indigo" },
        { name: "Stripe", color: "purple" },
        { name: "Clerk", color: "violet" },
      ],
      features: [
        "Real-time ride matching and booking",
        "Secure payment processing with Stripe Connect",
        "Chat messaging between drivers and riders",
        "Location tracking and route optimization",
      ],
    },
    {
      title: "African Language LLM",
      description: "Training multilingual language models for underrepresented African languages",
      role: "ML Engineer & Researcher",
      link: null,
      github: "https://github.com/wahab-cide/african_llm_project",
      techStack: [
        { name: "Python", color: "yellow" },
        { name: "PyTorch", color: "orange" },
        { name: "Transformers", color: "amber" },
        { name: "DVC", color: "emerald" },
        { name: "W&B", color: "yellow" },
        { name: "SentencePiece", color: "lime" },
      ],
      features: [
        "Supports 6 African languages (Amharic, Fulani, Hausa, Somali, Swahili, Yoruba)",
        "GPT-2 architecture with 768-dimensional embeddings",
        "16K+ shared vocabulary using BPE tokenization",
        "Comprehensive training pipeline with W&B monitoring",
      ],
    },
    {
      title: "Real-Time Fraud Detection",
      description: "Sub-200ms fraud detection pipeline using stream processing and pattern matching",
      role: "Software Engineer",
      link: null,
      github: "https://github.com/wahab-cide/fraud-detection",
      techStack: [
        { name: "Java 11", color: "red" },
        { name: "Apache Flink", color: "pink" },
        { name: "Kafka", color: "neutral" },
        { name: "DynamoDB", color: "blue" },
        { name: "Docker", color: "cyan" },
        { name: "AWS Lambda", color: "amber" },
      ],
      features: [
        "Complex Event Processing (CEP) for fraud pattern detection",
        "Handles 1M+ events/sec with <200ms P99 latency",
        "Stateful stream processing with RocksDB checkpoints",
        "Serverless alerting via Lambda and SNS",
      ],
    },
    {
      title: "Graph Theory Visualizer",
      description: "Interactive web application for visualizing and manipulating graph theory concepts",
      role: "Full-Stack Developer",
      link: "https://graph-viz.wahabcide.xyz",
      github: "https://github.com/wahab-cide/graph-theory",
      techStack: [
        { name: "Next.js 15", color: "neutral" },
        { name: "React 19", color: "cyan" },
        { name: "TypeScript", color: "blue" },
        { name: "Cytoscape.js", color: "emerald" },
        { name: "Tailwind CSS", color: "sky" },
        { name: "Motion", color: "purple" },
      ],
      features: [
        "Interactive graph creation and manipulation",
        "Pre-built templates for common graph structures",
        "Undo/redo functionality with keyboard shortcuts",
        "Real-time visualization with smooth animations",
      ],
    },
    {
      title: "Aquion",
      description: "Hydropanels harvesting clean water from air for African rural villages",
      role: "Project Lead",
      link: "https://aquion-website.vercel.app",
      github: null,
      techStack: [
        { name: "Next.js", color: "neutral" },
        { name: "React", color: "cyan" },
        { name: "Tailwind CSS", color: "sky" },
      ],
      features: [
        "Clean water harvesting from atmospheric moisture",
        "Sustainable solution for rural African communities",
        "Educational platform for water conservation",
      ],
    },
  ];

  const getTagColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      lime: "bg-lime-500/10 text-lime-400 border-lime-500/20",
      red: "bg-red-500/10 text-red-400 border-red-500/20",
      pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
      neutral: "bg-neutral-500/10 text-neutral-300 border-neutral-500/20",
      sky: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    };
    return colors[color] || colors.neutral;
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-light text-neutral-300 mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-neutral-800 rounded-lg p-6 md:p-8 hover:border-neutral-700 transition-all duration-300 bg-neutral-950/50"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-3">{project.role}</p>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                      title="View live demo"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                      title="View on GitHub"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-neutral-500 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`text-xs px-3 py-1 rounded-full border ${getTagColor(tech.color)}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-medium text-neutral-500 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-neutral-400">
                      <span className="text-neutral-600 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}