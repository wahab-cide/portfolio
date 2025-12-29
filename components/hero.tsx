"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative flex min-h-[70vh] flex-col justify-center px-4 md:px-8 bg-black pt-20 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-left w-full"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white mb-16 leading-tight"
        >
          <span className="font-light text-neutral-400 block text-3xl md:text-4xl lg:text-5xl mb-2">hi, I&apos;m</span>
          <span className="font-bold tracking-tight">Abdul Wahab</span>
        </motion.h1>

        <div className="border-l-4 border-neutral-700 pl-8 hover:border-neutral-500 transition-colors duration-300 space-y-6">
        <p className="text-neutral-200 text-xl md:text-2xl lg:text-3xl leading-relaxed">
          Studying Computer Science & Mathematics at{" "}
          <Link
            href="https://www.williams.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors font-medium decoration-purple-500/30 hover:decoration-purple-400"
          >
            Williams College
          </Link>
        </p>
        <p className="text-neutral-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
          Building{" "}
          <Link
            href="https://looprides.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium decoration-blue-500/30 hover:decoration-blue-400"
          >
            Loop
          </Link>
          , a rideshare platform connecting students in remote locations
        </p>
        <p className="text-neutral-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
          Documenting student career journeys on{" "}
          <Link
            href="https://youtube.com/@studio_275?si=pcJzAAX_0iAOzS8S"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-rose-300 transition-colors font-medium decoration-rose-500/30 hover:decoration-rose-400"
          >
            Studio 275
          </Link>
        </p>
        </div>
      </motion.div>
    </div>
  );
}