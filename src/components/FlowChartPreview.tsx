import React, { useCallback, useEffect, useState } from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface FlowchartData {
  nodes: any[];
  edges: any[];
  theme: string;
  orientation: string;
}

interface FlowChartPreviewProps {
  flowchartData: FlowchartData;
}

export const FlowChartPreview: React.FC<FlowChartPreviewProps> = ({ flowchartData }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge(params, eds));
  }, [setEdges]);

  useEffect(() => {
    // Apply theme and orientation to nodes
    if (flowchartData) {
      const isHorizontal = flowchartData.orientation === 'horizontal';
      
      const themedNodes = flowchartData.nodes.map((node) => {
        let nodeStyle = {};
        let nodeClass = '';

        // Apply theme-specific styling
        switch(flowchartData.theme) {
          case 'modern-minimal':
            nodeStyle = { 
              background: '#f0f9ff', 
              color: '#3b82f6',
              borderRadius: '12px',
              border: '1px solid #93c5fd'
            };
            nodeClass = 'modern-minimal-node';
            break;
          case 'corporate-professional':
            nodeStyle = { 
              background: '#1e3a8a', 
              color: 'white',
              borderRadius: '4px',
              border: '1px solid #1e40af'
            };
            nodeClass = 'corporate-node';
            break;
          case 'creative-colorful':
            nodeStyle = { 
              background: 'linear-gradient(45deg, #f97316, #db2777)',
              color: 'white',
              borderRadius: '24px',
              padding: '8px'
            };
            nodeClass = 'colorful-node';
            break;
          case 'tech-blueprint':
            nodeStyle = { 
              background: '#020617', 
              color: '#38bdf8',
              borderRadius: '16px',
              border: '1px solid #0284c7'
            };
            nodeClass = 'blueprint-node';
            break;
          case 'healthcare':
            nodeStyle = { 
              background: '#e0f2fe', 
              color: '#0284c7',
              borderRadius: '12px',
              border: '1px solid #7dd3fc'
            };
            nodeClass = 'healthcare-node';
            break;
          case 'finance-banking':
            nodeStyle = { 
              background: '#ecfccb', 
              color: '#4d7c0f',
              borderRadius: '4px',
              border: '1px solid #84cc16'
            };
            nodeClass = 'finance-node';
            break;
          default:
            nodeStyle = {};
        }

        // Apply orientation-specific settings for source and target positions
        const sourcePosition = isHorizontal ? 'right' : 'bottom';
        const targetPosition = isHorizontal ? 'left' : 'top';

        return {
          ...node,
          style: { ...nodeStyle, ...node.style },
          className: `${nodeClass} ${node.className || ''}`.trim(),
          sourcePosition,
          targetPosition
        };
      });

      setNodes(themedNodes);
      setEdges(flowchartData.edges);
    }
  }, [flowchartData, setNodes, setEdges]);

  const getBackgroundColor = () => {
    switch(flowchartData.theme) {
      case 'tech-blueprint':
        return '#0f172a';
      case 'corporate-professional':
        return '#f8fafc';
      case 'creative-colorful':
        return '#fdf4ff';
      case 'healthcare':
        return '#f0f9ff';
      case 'finance-banking':
        return '#f7fee7';
      case 'modern-minimal':
      default:
        return '#f8fafc';
    }
  };

  const getBackgroundVariant = () => {
    switch(flowchartData.theme) {
      case 'tech-blueprint':
        return 'dots';
      case 'finance-banking':
        return 'lines';
      default:
        return 'dots';
    }
  };

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        proOptions={{ 
          hideAttribution: true 
        }}
        defaultEdgeOptions={{ 
          type: 'smoothstep' 
        }}
        style={{ background: getBackgroundColor() }}
      >
        <Background variant={getBackgroundVariant() as any} color="#888" gap={16} />
        <Controls />
        
        <Panel position="bottom-left">
          <div className="p-2 bg-background/80 backdrop-blur-sm dark:bg-background/40 rounded-md text-xs">
            <p>Theme: {flowchartData.theme}</p>
            <p>Orientation: {flowchartData.orientation}</p>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};