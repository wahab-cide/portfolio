import * as d3 from 'd3';

export type NodeType = 'central' | 'satellite';
export type NodeCategory = 'education' | 'work' | 'media' | 'research' | 'skill' | 'project';

export interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  type: NodeType;
  category: NodeCategory;
  color: string;
  size: number;
  url?: string;
  description?: string;
}

export interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  source: string | GraphNode;
  target: string | GraphNode;
  strength: number;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}
