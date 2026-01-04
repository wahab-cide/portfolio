"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';
import { graphData } from '@/lib/graph-data';
import { createSimulation } from '@/lib/graph-config';
import { GraphNode, GraphLink } from '@/types/graph';

export function ForceDirectedGraph() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 700 });
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const simulationRef = useRef<d3.Simulation<GraphNode, GraphLink> | null>(null);

  // Responsive dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDimensions({ width: Math.min(width - 32, 600), height: 400 });
      } else if (width < 1024) {
        setDimensions({ width: 800, height: 450 });
      } else {
        setDimensions({ width: 1000, height: 500 });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // D3 force simulation
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous render

    const { width, height } = dimensions;

    // Clone data to avoid mutating original
    const nodes = graphData.nodes.map(d => ({ ...d }));
    const links = graphData.links.map(d => ({ ...d }));

    // Create simulation
    const simulation = createSimulation(nodes, links, width, height);
    simulationRef.current = simulation;

    // Create container groups
    const linkGroup = svg.append('g').attr('class', 'links');
    const nodeGroup = svg.append('g').attr('class', 'nodes');

    // Render links
    const link = linkGroup
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', '#ffffff')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1);

    // Create node groups
    const node = nodeGroup
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', 'node')
      .style('cursor', 'pointer');

    // Add circles
    node.append('circle')
      .attr('r', d => d.size)
      .attr('fill', d => d.color)
      .attr('stroke', 'none')
      .attr('opacity', 1);

    // Add labels
    node.append('text')
      .text(d => d.label)
      .attr('font-size', d => d.type === 'central' ? 12 : 9)
      .attr('text-anchor', 'middle')
      .attr('dy', d => d.size + 12)
      .attr('fill', '#ffffff')
      .attr('font-weight', d => d.type === 'central' ? 500 : 400)
      .style('pointer-events', 'none')
      .style('user-select', 'none');

    // Drag behavior
    const drag = d3.drag<SVGGElement, GraphNode>()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    node.call(drag as never);

    // Hover effects
    node.on('mouseenter', function(event, d) {
      setHoveredNode(d);

      // Scale up hovered node
      d3.select(this).select('circle')
        .transition()
        .duration(200)
        .attr('r', d.size * 1.2)
        .attr('opacity', 1);

      // Dim other nodes
      nodeGroup.selectAll('g')
        .filter((n) => (n as GraphNode).id !== d.id)
        .transition()
        .duration(200)
        .attr('opacity', 0.3);

      // Highlight connected links
      linkGroup.selectAll('line')
        .transition()
        .duration(200)
        .attr('stroke-opacity', (l) => {
          const link = l as GraphLink;
          const source = typeof link.source === 'object' ? link.source.id : link.source;
          const target = typeof link.target === 'object' ? link.target.id : link.target;
          return (source === d.id || target === d.id) ? 0.6 : 0.1;
        });
    });

    node.on('mouseleave', function() {
      setHoveredNode(null);

      // Reset node size
      d3.select(this).select('circle')
        .transition()
        .duration(200)
        .attr('r', (d) => (d as GraphNode).size)
        .attr('opacity', 0.9);

      // Reset opacity
      nodeGroup.selectAll('g')
        .transition()
        .duration(200)
        .attr('opacity', 1);

      // Reset links
      linkGroup.selectAll('line')
        .transition()
        .duration(200)
        .attr('stroke-opacity', 0.3);
    });

    // Click handler
    node.on('click', (event, d) => {
      if (d.url) {
        window.open(d.url, '_blank');
      }
    });

    // Update positions on tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d) => (d.source as GraphNode).x!)
        .attr('y1', (d) => (d.source as GraphNode).y!)
        .attr('x2', (d) => (d.target as GraphNode).x!)
        .attr('y2', (d) => (d.target as GraphNode).y!);

      node.attr('transform', (d) => `translate(${d.x},${d.y})`);

      // Auto-stop when settled
      if (simulation.alpha() < 0.01) {
        simulation.stop();
      }
    });

    // Cleanup
    return () => {
      simulation.stop();
    };
  }, [dimensions]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full flex justify-center mt-8"
    >
      <div className="relative">
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          role="img"
          aria-label="Interactive knowledge graph showing relationships between projects and interests"
        >
          <title>Knowledge Graph</title>
          <desc>Visual representation of Abdul Wahab&apos;s work, education, and research</desc>
        </svg>

        {/* Tooltip */}
        {hoveredNode && hoveredNode.type === 'central' && (
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 md:top-1/2 md:left-0 md:translate-x-0 md:-translate-y-1/2 pointer-events-none z-10 text-center md:text-left bg-black border-l-2 border-orange-400 px-6 py-4 md:ml-4"
            style={{ maxWidth: '400px' }}
          >
            <h3 className="text-white font-medium text-lg mb-2">{hoveredNode.label}</h3>
            {hoveredNode.description && (
              <p className="text-neutral-400 text-sm leading-relaxed">{hoveredNode.description}</p>
            )}
            {hoveredNode.url && (
              <p className="text-orange-400 text-xs mt-2">Click to visit →</p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
