import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Writing - Abdul Wahab Cide Ali",
  description: "Technical blog posts on software engineering, algorithms, system design, and AI.",
  openGraph: {
    title: "Technical Writing - Abdul Wahab Cide Ali",
    description: "Technical blog posts on software engineering, algorithms, system design, and AI.",
  },
};

const articles = [
  {
    title: "Programming a Chess Engine: Understanding Chess Differently",
    description:
      "How building a chess engine taught me to understand chess in ways playing never could. A deep dive into evaluation functions, positional factors, and the art of teaching computers to think.",
    date: "Dec 2025",
    readTime: "20 min read",
    slug: "programmming-a-chess-engine",
    tags: ["C++", "Chess", "Algorithms", "Game Theory", "AI"],
  },
  {
    title: "Building Interactive Graph Visualizations with Cytoscape.js",
    description:
      "A comprehensive guide to creating interactive graph theory visualizations for education and research. Learn how to build algorithmic graph generators and implement smooth animations.",
    date: "Aug 2025",
    readTime: "12 min read",
    slug: "graph-visualization-cytoscape",
    tags: ["Cytoscape.js", "TypeScript", "React", "Graph Theory"],
  },
  {
    title: "Building Production APIs with Next.js: A Real-World Case Study",
    description:
      "How I built the backend for Loop, a campus rideshare platform serving 500+ students. Learn about API architecture, database design, payment processing, and production deployment.",
    date: "Jan 2025",
    readTime: "15 min read",
    slug: "building-production-apis-nextjs",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "System Design"],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-300">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-32 pb-16">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="text-neutral-400 hover:text-white transition-colors text-sm mb-8 inline-block"
          >
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Writing
          </h1>
          <p className="text-lg text-neutral-400">
            Thoughts on software engineering, algorithms, and building things that work.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="space-y-12">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={`/blog/${article.slug}`}
              className="block group"
            >
              <article className="py-6">
                {/* Date and Read Time */}
                <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                  <time>{article.date}</time>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="text-neutral-400 mb-4 leading-relaxed">
                  {article.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Indicator */}
                <div className="mt-4 text-blue-400 group-hover:text-blue-300 text-sm font-medium">
                  Read article →
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <p className="text-neutral-500 text-sm">
            More articles coming soon. Follow me on{" "}
            <a
              href="https://github.com/wahab-cide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              GitHub
            </a>{" "}
            for updates on new projects and writing.
          </p>
        </div>
      </div>
    </div>
  );
}
