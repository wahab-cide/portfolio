import { GraphData } from '@/types/graph';

export const graphData: GraphData = {
  nodes: [
    // Central nodes
    {
      id: 'williams',
      label: 'Williams College',
      type: 'central',
      category: 'education',
      color: '#fb923c',
      size: 16,
      description: 'Computer Science, Number Theory, Creative Writing, Filmmaking'
    },
    {
      id: 'loop',
      label: 'Loop',
      type: 'central',
      category: 'work',
      color: '#fb923c',
      size: 16,
      url: 'https://looprides.dev',
      description: 'Loop is a rideshare marketplace for college students in remote locations, connecting riders and drivers to make campus travel more accessible and affordable. Built with React Native, Next.js, and powered by real-time matching algorithms.'
    },
    {
      id: 'studio275',
      label: 'Studio 275',
      type: 'central',
      category: 'media',
      color: '#fb923c',
      size: 16,
      url: 'https://youtube.com/@studio_275',
      description: 'A podcast series documenting student career journeys in tech, featuring conversations with interns and new grads from companies like Jane Street, Meta, and Amazon. Sharing real stories about breaking into the industry.'
    },
    {
      id: 'research',
      label: 'Research',
      type: 'central',
      category: 'research',
      color: '#fb923c',
      size: 16,
      description: 'Research interests in explainable AI for chess engines, multilingual language models for African languages, and topological graph theory. Exploring the intersection of theoretical foundations and practical applications.'
    },

    // Williams College satellites
    {
      id: 'cs',
      label: 'Computer Science',
      type: 'satellite',
      category: 'education',
      color: '#ffffff',
      size: 9
    },
    {
      id: 'number-theory',
      label: 'Number Theory',
      type: 'satellite',
      category: 'education',
      color: '#ffffff',
      size: 9
    },
    {
      id: 'creative-writing',
      label: 'Creative Writing',
      type: 'satellite',
      category: 'education',
      color: '#ffffff',
      size: 9
    },
    {
      id: 'filmmaking',
      label: 'Filmmaking',
      type: 'satellite',
      category: 'education',
      color: '#ffffff',
      size: 9
    },

    // Loop satellites
    {
      id: 'rideshare',
      label: 'Rideshare Platform',
      type: 'satellite',
      category: 'project',
      color: '#ffffff',
      size: 9
    },
    {
      id: 'carpooling',
      label: 'College Carpooling',
      type: 'satellite',
      category: 'project',
      color: '#ffffff',
      size: 9
    },
    {
      id: 'react-native',
      label: 'React Native',
      type: 'satellite',
      category: 'skill',
      color: '#ffffff',
      size: 7
    },
    {
      id: 'expo',
      label: 'Expo',
      type: 'satellite',
      category: 'skill',
      color: '#ffffff',
      size: 7
    },
    {
      id: 'nextjs',
      label: 'Next.js',
      type: 'satellite',
      category: 'skill',
      color: '#ffffff',
      size: 7
    },
    {
      id: 'typescript',
      label: 'TypeScript',
      type: 'satellite',
      category: 'skill',
      color: '#ffffff',
      size: 7
    },
    {
      id: 'postgresql',
      label: 'PostgreSQL',
      type: 'satellite',
      category: 'skill',
      color: '#ffffff',
      size: 7
    },
    {
      id: 'stripe',
      label: 'Stripe',
      type: 'satellite',
      category: 'skill',
      color: '#ffffff',
      size: 7
    },

    // Studio 275 satellites
    {
      id: 'podcast',
      label: 'Podcast',
      type: 'satellite',
      category: 'media',
      color: '#ffffff',
      size: 9
    },
    {
      id: 'career-journeys',
      label: 'Career Journeys',
      type: 'satellite',
      category: 'media',
      color: '#ffffff',
      size: 9
    },
    {
      id: 'youtube',
      label: 'YouTube',
      type: 'satellite',
      category: 'media',
      color: '#ffffff',
      size: 9
    },
    {
      id: 'student-stories',
      label: 'Student Stories',
      type: 'satellite',
      category: 'media',
      color: '#ffffff',
      size: 9
    },

    // Research satellites
    {
      id: 'chess-ai',
      label: 'Chess AI',
      type: 'satellite',
      category: 'research',
      color: '#ffffff',
      size: 9
    },
    {
      id: 'african-llm',
      label: 'African LLM',
      type: 'satellite',
      category: 'research',
      color: '#ffffff',
      size: 9
    },
    {
      id: 'graph-theory',
      label: 'Graph Theory',
      type: 'satellite',
      category: 'research',
      color: '#ffffff',
      size: 9
    },
    {
      id: 'topological',
      label: 'Topological Analysis',
      type: 'satellite',
      category: 'research',
      color: '#ffffff',
      size: 9
    },
    {
      id: 'ml-research',
      label: 'Machine Learning',
      type: 'satellite',
      category: 'research',
      color: '#ffffff',
      size: 9
    },
    {
      id: 'explainable-ai',
      label: 'Explainable AI',
      type: 'satellite',
      category: 'research',
      color: '#ffffff',
      size: 9
    },
  ],
  links: [
    // Williams College connections
    { source: 'williams', target: 'cs', strength: 0.9 },
    { source: 'williams', target: 'number-theory', strength: 0.9 },
    { source: 'williams', target: 'creative-writing', strength: 0.9 },
    { source: 'williams', target: 'filmmaking', strength: 0.9 },

    // Loop connections
    { source: 'loop', target: 'rideshare', strength: 0.9 },
    { source: 'loop', target: 'carpooling', strength: 0.9 },
    { source: 'loop', target: 'react-native', strength: 0.8 },
    { source: 'loop', target: 'expo', strength: 0.8 },
    { source: 'loop', target: 'nextjs', strength: 0.8 },
    { source: 'loop', target: 'typescript', strength: 0.8 },
    { source: 'loop', target: 'postgresql', strength: 0.8 },
    { source: 'loop', target: 'stripe', strength: 0.8 },

    // Studio 275 connections
    { source: 'studio275', target: 'podcast', strength: 0.9 },
    { source: 'studio275', target: 'career-journeys', strength: 0.9 },
    { source: 'studio275', target: 'youtube', strength: 0.9 },
    { source: 'studio275', target: 'student-stories', strength: 0.9 },

    // Research connections
    { source: 'research', target: 'chess-ai', strength: 0.9 },
    { source: 'research', target: 'african-llm', strength: 0.9 },
    { source: 'research', target: 'graph-theory', strength: 0.9 },
    { source: 'research', target: 'topological', strength: 0.9 },
    { source: 'research', target: 'ml-research', strength: 0.9 },
    { source: 'research', target: 'explainable-ai', strength: 0.9 },

    // Cross connections (CS -> Research)
    { source: 'cs', target: 'chess-ai', strength: 0.3 },
    { source: 'cs', target: 'african-llm', strength: 0.3 },
    { source: 'cs', target: 'ml-research', strength: 0.3 },
  ]
};
