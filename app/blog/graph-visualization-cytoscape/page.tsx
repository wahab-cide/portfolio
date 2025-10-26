/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CodeBlock } from '@/components/code-block';

export const metadata: Metadata = {
  title: 'Building Interactive Graph Visualizations with Cytoscape.js | Wahab Cide',
  description: 'A comprehensive guide to creating interactive graph theory visualizations using Cytoscape.js in Next.js, featuring algorithmic graph generation and real-time user interactions.',
  openGraph: {
    title: 'Building Interactive Graph Visualizations with Cytoscape.js',
    description: 'Learn how to build an interactive graph theory visualizer with React and Cytoscape.js',
  },
};

export default function Article() {
  return (
    <article className="min-h-screen bg-black text-neutral-300">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-32 pb-16">
        {/* Header */}
        <Link
          href="/"
          className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm mb-8 inline-flex items-center gap-2 group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to home
        </Link>

        <header className="mb-16 border-l-2 border-emerald-500/50 pl-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug">
            Building Interactive Graph Visualizations with <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Cytoscape.js</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full ring-2 ring-neutral-800 overflow-hidden flex-shrink-0">
              <Image
                src="/DSC03533.jpg"
                alt="Wahab Cide"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-neutral-500 text-sm">
              <p className="text-neutral-300 font-medium">Wahab Cide</p>
              <time className="text-neutral-500">October 2025 · 12 min read</time>
            </div>
          </div>
          <p className="text-neutral-400 mt-6 text-lg leading-relaxed">
            How I built an interactive graph theory visualizer using Cytoscape.js and Next.js, featuring
            algorithmic graph generation, real-time manipulation, and smooth animations—perfect for students
            studying graph theory concepts.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-16 border border-neutral-800 rounded-lg p-6 bg-neutral-950/50">
          <h2 className="text-lg font-medium text-white mb-4">Contents</h2>
          <ol className="space-y-2 text-sm text-neutral-400">
            <li><a href="#introduction" className="hover:text-white transition-colors">1. Introduction</a></li>
            <li><a href="#why-cytoscape" className="hover:text-white transition-colors">2. Why Cytoscape.js?</a></li>
            <li><a href="#setup" className="hover:text-white transition-colors">3. Project Setup</a></li>
            <li><a href="#data-structures" className="hover:text-white transition-colors">4. Graph Data Structures</a></li>
            <li><a href="#generators" className="hover:text-white transition-colors">5. Algorithmic Graph Generation</a></li>
            <li><a href="#interactions" className="hover:text-white transition-colors">6. Interactive Features</a></li>
            <li><a href="#styling" className="hover:text-white transition-colors">7. Styling & Animations</a></li>
            <li><a href="#performance" className="hover:text-white transition-colors">8. Performance Optimizations</a></li>
            <li><a href="#conclusion" className="hover:text-white transition-colors">9. Conclusion</a></li>
          </ol>
        </nav>

        {/* Article Content */}
        <div className="prose prose-invert prose-neutral max-w-none">

          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-emerald-500/50 pl-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Introduction</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Graph theory is fundamental to computer science, with applications ranging from social network analysis
                to route optimization and dependency resolution. However, visualizing graphs and understanding their
                properties can be challenging for students and researchers working with abstract mathematical concepts.
              </p>
              <p>
                I built an <strong className="text-neutral-300">interactive graph theory visualizer</strong> to make learning these concepts more
                intuitive. The tool allows users to create, manipulate, and study various graph structures in real-time—from
                simple complete graphs to complex structures like the Petersen graph—all through an intuitive web interface.
              </p>
              <p>
                This article explores the technical implementation: how Cytoscape.js powers the visualization, algorithmic
                generation of classic graph structures, and handling user interactions while maintaining smooth performance.
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-8">
                <h3 className="text-lg font-medium text-white mb-3">Tech Stack</h3>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-neutral-500">Framework:</span> Next.js 15 with React 19</li>
                  <li><span className="text-neutral-500">Visualization:</span> Cytoscape.js</li>
                  <li><span className="text-neutral-500">Styling:</span> Tailwind CSS</li>
                  <li><span className="text-neutral-500">Animations:</span> Motion (Framer Motion)</li>
                  <li><span className="text-neutral-500">Language:</span> TypeScript</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Cytoscape */}
          <section id="why-cytoscape" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-teal-500/50 pl-6">
              <span className="text-teal-400">Why Cytoscape.js?</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Several JavaScript graph visualization libraries exist—D3.js, vis.js, sigma.js—each with different
                strengths. I chose <strong className="text-neutral-300">Cytoscape.js</strong> for several reasons:
              </p>

              <div className="space-y-6 my-6">
                <div className="border-l-2 border-teal-500/30 pl-4">
                  <h4 className="text-lg font-medium text-neutral-300 mb-2">1. Graph-First Design</h4>
                  <p>
                    Unlike D3.js which is a general-purpose visualization library, Cytoscape.js is specifically designed
                    for graph visualization. It provides native support for nodes, edges, and graph algorithms without
                    requiring custom implementations.
                  </p>
                </div>

                <div className="border-l-2 border-teal-500/30 pl-4">
                  <h4 className="text-lg font-medium text-neutral-300 mb-2">2. Built-in Layout Algorithms</h4>
                  <p>
                    Cytoscape ships with multiple layout algorithms (circle, grid, breadthfirst, cose) and supports
                    extensions for advanced layouts. For educational purposes, preset layouts allow precise positioning
                    of mathematically-defined graphs.
                  </p>
                </div>

                <div className="border-l-2 border-teal-500/30 pl-4">
                  <h4 className="text-lg font-medium text-neutral-300 mb-2">3. Interactive by Default</h4>
                  <p>
                    Panning, zooming, node dragging, and selection work out of the box. The library handles touch events,
                    making it mobile-friendly without additional configuration.
                  </p>
                </div>

                <div className="border-l-2 border-teal-500/30 pl-4">
                  <h4 className="text-lg font-medium text-neutral-300 mb-2">4. Performance</h4>
                  <p>
                    Cytoscape uses canvas rendering (with optional WebGL for large graphs), providing smooth performance
                    even with hundreds of nodes. The library efficiently handles graph updates without full re-renders.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Setup */}
          <section id="setup" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-cyan-500/50 pl-6">
              <span className="text-cyan-400">Project Setup</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Setting up Cytoscape.js in a Next.js 15 project requires handling client-side rendering, as Cytoscape
                manipulates the DOM directly and cannot be server-rendered.
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Installation</h3>

              <CodeBlock filename="Terminal">
{`npm install cytoscape
npm install @types/cytoscape --save-dev
npm install react-cytoscapejs  # Optional React wrapper`}
              </CodeBlock>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Component Structure</h3>

              <p>
                The core architecture consists of three main components:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-neutral-300">GraphCanvas:</strong> The Cytoscape rendering container with interaction handlers</li>
                <li><strong className="text-neutral-300">Sidebar:</strong> UI controls for graph templates and custom input</li>
                <li><strong className="text-neutral-300">Graph Generators:</strong> Pure functions that create graph structures algorithmically</li>
              </ul>
            </div>
          </section>

          {/* Data Structures */}
          <section id="data-structures" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-blue-500/50 pl-6">
              <span className="text-blue-400">Graph Data Structures</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Cytoscape.js represents graphs as collections of elements—nodes and edges—each with associated data
                and optional styling. Here's the TypeScript interface:
              </p>

              <CodeBlock filename="lib/graphGenerators.ts" language="typescript">
{`export interface GraphElement {
  data: {
    id: string;           // Unique identifier
    label?: string;       // Display label
    source?: string;      // For edges: source node ID
    target?: string;      // For edges: target node ID
  };
  position?: {            // For nodes: x,y coordinates
    x: number;
    y: number;
  };
}

// Example: Triangle graph (3 nodes, 3 edges)
const triangle: GraphElement[] = [
  { data: { id: '1', label: '1' }, position: { x: 0, y: -100 } },
  { data: { id: '2', label: '2' }, position: { x: -87, y: 50 } },
  { data: { id: '3', label: '3' }, position: { x: 87, y: 50 } },
  { data: { id: 'e1-2', source: '1', target: '2' } },
  { data: { id: 'e2-3', source: '2', target: '3' } },
  { data: { id: 'e3-1', source: '3', target: '1' } },
];`}
              </CodeBlock>

              <p className="mt-6">
                This structure separates <strong className="text-neutral-300">topology</strong> (which nodes connect to which) from{' '}
                <strong className="text-neutral-300">geometry</strong> (where nodes appear). This allows the same graph to be
                rendered with different layouts.
              </p>
            </div>
          </section>

          {/* Graph Generators */}
          <section id="generators" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-purple-500/50 pl-6">
              <span className="text-purple-400">Algorithmic Graph Generation</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Rather than manually creating each graph structure, I implemented <strong className="text-neutral-300">generators</strong> that
                algorithmically construct classic graphs. This ensures mathematical correctness and allows parameterization.
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Complete Graph K<sub>n</sub></h3>

              <p>
                A complete graph connects every pair of nodes. The algorithm positions nodes in a circle for aesthetic symmetry.
              </p>

              <CodeBlock filename="lib/graphGenerators.ts" language="typescript">
{`function generateCompleteGraph(n: number): GraphElement[] {
  const elements: GraphElement[] = [];
  const radius = 120;

  // Create nodes in circular layout
  for (let i = 1; i <= n; i++) {
    const angle = (2 * Math.PI * (i - 1)) / n;
    elements.push({
      data: { id: i.toString(), label: i.toString() },
      position: {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
      }
    });
  }

  // Create all possible edges (n choose 2)
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      elements.push({
        data: {
          id: \`e\${i}-\${j}\`,
          source: i.toString(),
          target: j.toString()
        }
      });
    }
  }

  return elements;
}`}
              </CodeBlock>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Cycle Graph C<sub>n</sub></h3>

              <p>
                A cycle graph forms a closed loop. Each node connects to exactly two neighbors.
              </p>

              <CodeBlock filename="lib/graphGenerators.ts" language="typescript">
{`function generateCycleGraph(n: number): GraphElement[] {
  const elements: GraphElement[] = [];
  const radius = 120;

  // Create nodes
  for (let i = 1; i <= n; i++) {
    const angle = (2 * Math.PI * (i - 1)) / n;
    elements.push({
      data: { id: i.toString(), label: i.toString() },
      position: {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
      }
    });
  }

  // Create cycle edges
  for (let i = 1; i <= n; i++) {
    const next = i === n ? 1 : i + 1;  // Wrap around
    elements.push({
      data: {
        id: \`e\${i}-\${next}\`,
        source: i.toString(),
        target: next.toString()
      }
    });
  }

  return elements;
}`}
              </CodeBlock>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Bipartite Graph K<sub>m,n</sub></h3>

              <p>
                A bipartite graph has two disjoint sets of nodes, with edges only between sets (never within).
              </p>

              <CodeBlock filename="lib/graphGenerators.ts" language="typescript">
{`function generateBipartiteGraph(m: number, n: number): GraphElement[] {
  const elements: GraphElement[] = [];
  const spacing = 80;
  const separation = 200;

  // Left set (m nodes)
  for (let i = 1; i <= m; i++) {
    elements.push({
      data: { id: i.toString(), label: i.toString() },
      position: {
        x: -separation / 2,
        y: (i - 1) * spacing - ((m - 1) * spacing) / 2
      }
    });
  }

  // Right set (n nodes)
  for (let i = 1; i <= n; i++) {
    const id = (m + i).toString();
    elements.push({
      data: { id, label: id },
      position: {
        x: separation / 2,
        y: (i - 1) * spacing - ((n - 1) * spacing) / 2
      }
    });
  }

  // All cross-edges (m × n edges total)
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      elements.push({
        data: {
          id: \`e\${i}-\${m + j}\`,
          source: i.toString(),
          target: (m + j).toString()
        }
      });
    }
  }

  return elements;
}`}
              </CodeBlock>

              <p className="mt-6">
                These generators demonstrate <strong className="text-neutral-300">parametric graph construction</strong>: the same
                algorithm produces different graphs based on input parameters, ensuring consistency and mathematical accuracy.
              </p>
            </div>
          </section>

          {/* Interactive Features */}
          <section id="interactions" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-pink-500/50 pl-6">
              <span className="text-pink-400">Interactive Features</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                The visualizer supports real-time graph manipulation, allowing students to experiment with structures
                and observe properties dynamically.
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Initializing Cytoscape</h3>

              <CodeBlock filename="components/GraphCanvas.tsx" language="typescript">
{`"use client";
import { useEffect, useRef } from 'react';
import cytoscape, { Core } from 'cytoscape';

export default function GraphCanvas({ elements, onGraphChange }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<Core | null>(null);

  useEffect(() => {
    if (!containerRef.current || cyRef.current) return;

    // Initialize Cytoscape instance
    cyRef.current = cytoscape({
      container: containerRef.current,
      elements: elements,

      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#ffffff',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '16px',
            'font-weight': 'bold',
            'width': '50px',
            'height': '50px',
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ffffff',
            'curve-style': 'straight'
          }
        },
        {
          selector: 'node:selected',
          style: {
            'background-color': '#3b82f6',
            'color': '#ffffff'
          }
        }
      ],

      layout: { name: 'preset' },  // Use provided positions
      userZoomingEnabled: true,
      userPanningEnabled: true,
      boxSelectionEnabled: true,
    });

    return () => {
      cyRef.current?.destroy();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}`}
              </CodeBlock>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Adding Nodes on Right-Click</h3>

              <CodeBlock filename="components/GraphCanvas.tsx" language="typescript">
{`// Right-click empty space to create node
cyRef.current.on('cxttap', (evt) => {
  // Only create if clicking background, not existing elements
  if (evt.target === cyRef.current) {
    const position = evt.position || evt.cyPosition;

    const newNode = {
      data: {
        id: nodeCounter.toString(),
        label: nodeCounter.toString()
      },
      position: position
    };

    cyRef.current?.add(newNode);
    setNodeCounter(prev => prev + 1);

    // Notify parent component of graph change
    if (onGraphChange) {
      onGraphChange(getAllElements());
    }
  }
});`}
              </CodeBlock>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Creating Edges Between Nodes</h3>

              <CodeBlock filename="components/GraphCanvas.tsx" language="typescript">
{`const createEdge = (sourceId: string, targetId: string) => {
  if (!cyRef.current) return;

  // Check if edge already exists (prevent duplicates)
  const existingEdge = cyRef.current.edges().filter(edge => {
    const source = edge.source().id();
    const target = edge.target().id();
    return (source === sourceId && target === targetId) ||
           (source === targetId && target === sourceId);
  });

  if (existingEdge.length > 0) return;

  // Create new edge
  const newEdge = {
    data: {
      id: \`e\${sourceId}-\${targetId}\`,
      source: sourceId,
      target: targetId
    }
  };

  cyRef.current.add(newEdge);
  onGraphChange(getAllElements());
};`}
              </CodeBlock>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Deleting Selected Elements</h3>

              <CodeBlock filename="components/GraphCanvas.tsx" language="typescript">
{`const deleteSelected = () => {
  if (!cyRef.current) return;

  const selected = cyRef.current.$(':selected');
  selected.remove();  // Removes nodes and their incident edges

  onGraphChange(getAllElements());
};

// Keyboard shortcut for deletion
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault();
      deleteSelected();
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, []);`}
              </CodeBlock>
            </div>
          </section>

          {/* Styling */}
          <section id="styling" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-amber-500/50 pl-6">
              <span className="text-amber-400">Styling & Animations</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Cytoscape.js uses a CSS-like syntax for styling graph elements, supporting selectors,
                pseudo-classes, and dynamic styling based on data.
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Advanced Styling</h3>

              <CodeBlock filename="components/GraphCanvas.tsx" language="typescript">
{`style: [
  {
    selector: 'node',
    style: {
      'background-color': '#ffffff',
      'label': 'data(label)',
      'text-valign': 'center',
      'text-halign': 'center',
      'font-size': '16px',
      'font-weight': 'bold',
      'width': '50px',
      'height': '50px',
      'border-width': '0px'
    }
  },
  {
    selector: 'node:selected',
    style: {
      'background-color': '#3b82f6',  // Blue when selected
      'color': '#ffffff'
    }
  },
  {
    selector: 'edge',
    style: {
      'width': 3,
      'line-color': '#ffffff',
      'curve-style': 'straight'
    }
  },
  {
    selector: 'edge:selected',
    style: {
      'line-color': '#3b82f6',
      'width': 4
    }
  },
  {
    selector: '.temp-edge',  // Temporary edge while drawing
    style: {
      'line-color': '#3b82f6',
      'line-style': 'dashed',
      'line-dash-pattern': [6, 3]
    }
  }
]`}
              </CodeBlock>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Smooth Transitions</h3>

              <p>
                Cytoscape supports animated transitions when graph structure changes:
              </p>

              <CodeBlock filename="components/GraphCanvas.tsx" language="typescript">
{`// Animate node addition
cyRef.current.add(newNode).animate({
  style: { 'opacity': 1 },
  duration: 300,
  easing: 'ease-out'
});

// Animate layout changes
cyRef.current.layout({
  name: 'circle',
  animate: true,
  animationDuration: 500,
  animationEasing: 'ease-in-out'
}).run();`}
              </CodeBlock>
            </div>
          </section>

          {/* Performance */}
          <section id="performance" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-lime-500/50 pl-6">
              <span className="text-lime-400">Performance Optimizations</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                For educational graphs (typically &lt;100 nodes), performance is excellent out of the box.
                However, several optimizations improve responsiveness:
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">1. Batch Updates</h3>

              <CodeBlock filename="components/GraphCanvas.tsx" language="typescript">
{`// Bad: Multiple renders
elements.forEach(el => cyRef.current.add(el));

// Good: Single batch operation
cyRef.current.batch(() => {
  elements.forEach(el => cyRef.current.add(el));
});`}
              </CodeBlock>

              <h3 className="text-xl font-light text-white mb-4 mt-8">2. Debounced Change Notifications</h3>

              <CodeBlock filename="components/GraphCanvas.tsx" language="typescript">
{`import { debounce } from 'lodash';

const notifyChange = debounce(() => {
  onGraphChange(getAllElements());
}, 100);

// Use in event handlers
cyRef.current.on('drag', 'node', () => {
  notifyChange();
});`}
              </CodeBlock>

              <h3 className="text-xl font-light text-white mb-4 mt-8">3. Conditional Rendering</h3>

              <CodeBlock filename="components/GraphCanvas.tsx" language="typescript">
{`// Only update external state on significant changes
const isInternalChange = useRef(false);

useEffect(() => {
  if (isInternalChange.current) {
    isInternalChange.current = false;
    return;  // Skip update from internal change
  }

  // Update graph from external prop changes
  cyRef.current?.elements().remove();
  cyRef.current?.add(elements);
}, [elements]);`}
              </CodeBlock>

              <h3 className="text-xl font-light text-white mb-4 mt-8">4. Memory Management</h3>

              <CodeBlock filename="components/GraphCanvas.tsx" language="typescript">
{`useEffect(() => {
  // Initialize Cytoscape
  cyRef.current = cytoscape({ /* config */ });

  // Cleanup on unmount
  return () => {
    cyRef.current?.destroy();
    cyRef.current = null;
  };
}, []);`}
              </CodeBlock>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-sky-500/50 pl-6">
              <span className="text-sky-400">Conclusion</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Building an interactive graph visualizer with Cytoscape.js demonstrates the power of specialized
                visualization libraries. By choosing a graph-first tool, I avoided reinventing fundamental concepts
                like node selection, edge routing, and layout algorithms.
              </p>

              <p>
                The combination of <strong className="text-neutral-300">algorithmic graph generation</strong> and{' '}
                <strong className="text-neutral-300">interactive manipulation</strong> creates an effective learning tool
                for graph theory. Students can explore classic structures (complete graphs, cycles, bipartite graphs)
                and experiment with custom configurations in real-time.
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-8">
                <h3 className="text-lg font-medium text-white mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Cytoscape.js provides graph-specific features out of the box</li>
                  <li>✓ Algorithmic generators ensure mathematical correctness</li>
                  <li>✓ TypeScript interfaces improve code quality and developer experience</li>
                  <li>✓ Batch operations and debouncing maintain smooth performance</li>
                  <li>✓ CSS-like styling enables flexible visual customization</li>
                  <li>✓ React integration requires careful state management</li>
                </ul>
              </div>

              <p>
                The complete source code demonstrates these patterns in a production environment, handling
                edge cases like duplicate edge prevention, undo/redo history, and responsive mobile layouts.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-neutral-800">
            <p className="text-neutral-500 text-sm">
              Written by <Link href="/" className="text-neutral-400 hover:text-white transition-colors">Wahab Cide</Link> • October 2025
            </p>
            <p className="text-neutral-600 text-sm mt-2">
              View the live demo •
              <a href="https://github.com/wahab-cide/graph-theory" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition-colors ml-1">
                GitHub Repository
              </a>
            </p>
          </footer>
        </div>
      </div>
    </article>
  );
}
