"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative flex min-h-[70vh] flex-col justify-center px-4 md:px-8 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-left w-full"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-light text-neutral-300 mb-12"
        >
          Wahab Cide
        </motion.h2>
        
        <div className="border-l-2 border-neutral-800 pl-6 hover:border-neutral-600 transition-colors duration-300">
        <p className="text-neutral-400 text-lg md:text-xl font-light">
          cs & maths @{" "}
          <Link
            href="https://www.williams.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Williams College
          </Link>
        </p>
        <p className="text-neutral-500 text-base md:text-lg mt-2">
          Building mobility solutions for remote locations @{" "}
          <Link
            href="https://looprides.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            looprides.dev
          </Link>
        </p>
        <p className="text-neutral-500 text-base md:text-lg mt-2">
          Creating content on student career journeys @{" "}
          <Link
            href="https://youtube.com/@studio_275?si=pcJzAAX_0iAOzS8S"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Studio 275
          </Link>
        </p>
        </div>
      </motion.div>
    </div>
  );
}