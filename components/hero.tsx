"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ForceDirectedGraph } from "./force-directed-graph";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Abdul Wahab";

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextChar = () => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
        // Vary speed for more natural typing (50-80ms)
        const delay = 50 + Math.random() * 30;
        timeoutId = setTimeout(typeNextChar, delay);
      }
    };

    // Start typing after a brief delay
    const startDelay = setTimeout(typeNextChar, 300);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative flex min-h-[70vh] flex-col justify-center px-4 md:px-8 bg-black pt-32 md:pt-40">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white leading-tight"
          >
            <span className="font-light text-neutral-400 block text-3xl md:text-4xl lg:text-5xl mb-2">hi, I&apos;m</span>
            <span className="font-bold tracking-tight">{typedText}</span>
          </motion.h1>
        </motion.div>

        {/* Graph */}
        <div>
          <ForceDirectedGraph />
        </div>
      </div>
    </div>
  );
}