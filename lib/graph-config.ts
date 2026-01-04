import * as d3 from 'd3';
import { GraphNode, GraphLink } from '@/types/graph';

export const createSimulation = (
  nodes: GraphNode[],
  links: GraphLink[],
  width: number,
  height: number
) => {
  return d3.forceSimulation<GraphNode>(nodes)
    .force('link', d3.forceLink<GraphNode, GraphLink>(links)
      .id((d) => d.id)
      .distance(d => d.strength > 0.8 ? 70 : 130)
      .strength(1))
    .force('charge', d3.forceManyBody<GraphNode>()
      .strength(-220)
      .distanceMin(40)
      .distanceMax(400))
    .force('center', d3.forceCenter(width / 2, height / 2)
      .strength(0.1))
    .force('collision', d3.forceCollide<GraphNode>()
      .radius((d) => d.size + 10)
      .strength(0.75))
    .force('x', d3.forceX(width / 2).strength(0.05))
    .force('y', d3.forceY(height / 2).strength(0.05))
    .force('radial', d3.forceRadial<GraphNode>(
      120,
      width / 2,
      height / 2
    ).strength((d) => d.type === 'central' ? 0.35 : 0));
};
