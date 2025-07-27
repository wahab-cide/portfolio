"use client";
import React from "react";
import { motion } from "framer-motion";

export function Research() {
  const research = [
    {
      title: "Multilingual African Language Model (MALM)",
      period: "Ongoing",
      location: "Williamstown, MA",
      points: [
        "Developing a comprehensive language model supporting 6 major African languages (Amharic, Fulani, Hausa, Somali, Swahili, and Yoruba) with a unified 16K token vocabulary",
        "Engineering robust data pipelines that process and clean multilingual corpora from OSCAR and CC-100 datasets, implementing advanced filtering mechanisms to ensure high-quality training data",
        "Optimizing model training across diverse hardware architectures, from NVIDIA GPUs to Apple Silicon, to democratize access to AI technologies for underrepresented African language communities",
      ],
    },
    {
      title: "Topological Graph Theory",
      period: "Ongoing",
      points: [
        "Investigating graph embeddings on non-planar surfaces, with focus on minimizing crossing numbers and understanding structural properties of graph minors",
        "Exploring algorithmic applications of Robertson-Seymour theory and its implications for computational complexity in graph algorithms",
        "Connecting spatial graph theory with knot theory to develop new geometric insights and visualization techniques for complex graph structures",
      ],
    },
  ];

  return (
    <section id="research" className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-light text-neutral-300 mb-12"
        >
          Research
        </motion.h2>
        
        <div className="space-y-16">
          {research.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-neutral-800 pl-6 hover:border-neutral-600 transition-colors duration-300"
            >
              <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-500 mb-4">
                {item.period} {item.location && `• ${item.location}`}
              </p>
              <ul className="space-y-3">
                {item.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="text-neutral-400 text-sm md:text-base leading-relaxed"
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}