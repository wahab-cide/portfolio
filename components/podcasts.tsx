"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Podcasts() {
  const guests = [
    {
      name: "Brij Howard Sarin",
      role: "Strategy & Product Intern, Jane Street",
      image: "/guests/Brij_Howard_Sarin.jpg",
    },
    {
      name: "Milton Vento",
      role: "Amazon SDE Intern", 
      image: "/guests/Milton_Vento.JPG",
    },
    {
      name: "Tashrique Ahmed",
      role: "Meta SWE Intern",
      image: "/guests/Tashrique_Ahmed.JPG",
    },
  ];

  return (
    <section id="podcasts" className="pt-8 pb-12 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-light text-neutral-300 mb-3">
            Studio 275
          </h2>
          <p className="text-neutral-500 max-w-2xl">
            Conversations about student career journeys, tech, and building in public
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="relative aspect-video bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden group hover:border-neutral-700 transition-all duration-500">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1-sKq-V0UZ0?autoplay=1&mute=1&loop=1&playlist=1-sKq-V0UZ0&controls=1"
              title="Studio 275 - Featured Episode"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Guest Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guests.map((guest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
                <Image
                  src={guest.image}
                  alt={guest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl font-light text-white mb-2 uppercase tracking-wide">
                    {guest.name.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>
                  <p className="text-sm text-neutral-400">{guest.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="https://youtube.com/@studio_275?si=pcJzAAX_0iAOzS8S"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors px-6 py-3 border border-neutral-800 rounded-lg hover:border-neutral-600"
          >
            View all episodes on YouTube
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
