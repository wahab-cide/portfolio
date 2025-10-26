"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Writing() {
  const articles = [
    {
      title: "Building Interactive Graph Visualizations with Cytoscape.js",
      description: "A comprehensive guide to creating interactive graph theory visualizations using Cytoscape.js in Next.js, featuring algorithmic graph generation and real-time user interactions.",
      date: "January 2025",
      readTime: "12 min read",
      link: "/blog/graph-visualization-cytoscape",
      tags: ["Cytoscape.js", "TypeScript", "React", "Graph Theory", "Visualization"],
    },
    {
      title: "Building Production APIs with Next.js: A Real-World Case Study",
      description: "A deep dive into building production-grade APIs using Next.js App Router, featuring real-world examples from a rideshare platform handling authentication, payments, and real-time features.",
      date: "January 2025",
      readTime: "15 min read",
      link: "/blog/building-production-apis-nextjs",
      tags: ["Next.js", "TypeScript", "API Design", "PostgreSQL", "Stripe"],
    },
  ];

  return (
    <section id="writing" className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-light text-neutral-300 mb-12"
        >
          Technical Writing
        </motion.h2>

        <div className="space-y-12">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-neutral-800 pl-6 hover:border-neutral-600 transition-colors duration-300"
            >
              <Link href={article.link}>
                <div className="cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-light text-white hover:text-neutral-300 transition-colors">
                      {article.title}
                    </h3>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-neutral-400 hover:text-white transition-colors ml-4 flex-shrink-0"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                  <p className="text-neutral-400 mb-3 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-neutral-500 bg-neutral-900 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
