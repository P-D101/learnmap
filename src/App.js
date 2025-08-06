// App.js
import React, { useState, useCallback } from "react";
import logo from './logo.svg';
import './App.css';
//import ReactFlow, { MiniMap, Controls, Background } from "react-flow-renderer";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from 'react-flow-renderer';

import { useEffect } from 'react';

function Sidebar({ toggleSidebar }) {
  return (
    <div className="w-64 bg-alice_blue text-charcoal flex flex-col p-6 rounded-xl shadow-soft border border-softMoonstone">  <input
        type="search"
        placeholder="Search mindmaps..."
        className="mb-6 p-3 rounded-lg bg-white text-charcoal border border-softMoonstone focus:outline-none focus:ring-2 focus:ring-moonstone"
   />
      <div className="flex-1 overflow-auto">
        {/* Placeholder list */}
        <ul>
          <li className="p-3 rounded-lg hover:bg-moonstone/20 cursor-pointer transition">Mindmap 1</li>
          <li className="p-3 rounded-lg hover:bg-moonstone/20 cursor-pointer transition">Mindmap 2</li>
          <li className="p-3 rounded-lg hover:bg-moonstone/20 cursor-pointer transition">Mindmap 3</li>
        </ul>
      </div>
      <button
        onClick={toggleSidebar}
        className="mt-6 p-3 bg-moonstone text-alice_blue rounded-lg hover:bg-chef_blue transition"
    >
        Collapse
      </button>
    </div>
  );
}

function ModeIndicator({ mode, toggleMode }) {
  return (
    <div className="p-3 text-charcoal bg-light_orange rounded-lg w-max cursor-pointer select-none font-semibold shadow-soft transition hover:bg-light_orange/90"
 onClick={toggleMode}>
      {mode === "review" ? "Review Mode" : "Create Mode"}
    </div>
  );
}

// 1. Define the custom node component at the top or near MindmapGraph
const CustomNode = ({ data }) => {
  return (
    <div
      style={{
        padding: 16,
        backgroundColor: '#F0F6FF',  // alice_blue
        color: '#2F3E46',            // charcoal
        borderRadius: 12,            // rounded corners
        boxShadow: '0 4px 8px rgba(96, 158, 175, 0.15)', // soft shadow
        border: '1px solid rgba(96, 158, 175, 0.3)',     // subtle border
        minWidth: 120,
        cursor: 'pointer',
        userSelect: 'none',
        textAlign: 'center'
      }}
    >
      {data.mainTopic}
    </div>
  );
};

// 2. Inside your MindmapGraph component, define nodeTypes object:
const nodeTypes = {
  default: CustomNode,
};


/*
const initialNodes = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 300, y: 100 } },
  { id: '3', data: { label: 'Node 3' }, position: { x: 200, y: 300 } },
];
*/

const initialNodes = [
  {
    id: '1',
    x: 100,
    y: 100 ,
    
      mainTopic: 'Photosynthesis',
      practiceDone: false,
      pastPapers: '2021 Q5, 2022 Q3',
      dueInDays: 5,
      relatedLinks: 'https://example.com/photosynthesis',
      colorTag: 'green',
      blurbNotes: 'Key process in plants',
      description: 'The process by which green plants use sunlight to synthesize food.',
      imageUrl: '',
      dateCreated: '2025-07-11',
      mindMapName: 'Biology Basics',
    
    type: 'default', // or use 'custom' if you define a custom node component
  },
  {
    id: '2',
    x: 300
    , y: 100 ,
    
      mainTopic: 'Cell Division',
      practiceDone: true,
      pastPapers: '2020 Q2',
      dueInDays: 10,
      relatedLinks: 'https://example.com/cell-division',
      colorTag: 'blue',
      blurbNotes: 'Mitosis and Meiosis',
      description: 'Cell division involves mitosis and meiosis to reproduce and grow.',
      imageUrl: '',
      dateCreated: '2025-07-10',
      mindMapName: 'Biology Basics'
    ,
    type: 'default',
  }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
];
function MindmapGraph({ nodes, edges, onNodesChange, onEdgesChange, onConnect, onSelectionChange }) {


  return (
<div
  style={{ flex: 1, height: '100%' }}
  className="rounded-xl shadow-soft border border-softMoonstone bg-alice_blue p-4"
>

  
  <ReactFlow 

//new code
      nodes={nodes.map(node => ({
        ...node,
        position: { x: node.x, y: node.y },  // Convert x/y to position object
        data: {
          ...node.data || {},  // Preserve existing data if any
          ...node            // Spread all node properties into data
        }
      }))}

        //nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onSelectionChange={onSelectionChange}
        fitView>
      
    <MiniMap zoomable pannable nodeStrokeColor={n => '#609EAF'} nodeColor={n => '#F0F6FF'} />
    <Controls />
    <Background color= '#F0F6FF' gap={16} />
  </ReactFlow>
</div>

  );
}

function CardDetail({ node }) {
  if (!node) return null;

  const {
    mainTopic,
    description,
    blurbNotes,
    pastPapers,
    dueInDays,
    relatedLinks,  
    colorTag,
    mindMapName,
    dateCreated,
  } = node.data;

  return (
<div className="absolute bottom-6 right-6 w-72 p-6 bg-light_orange rounded-xl shadow-lg text-charcoal border border-softMoonstone">
      <h3 className="text-xl font-bold">{mainTopic}</h3>
      <p className="text-sm text-gray-700 italic">{blurbNotes}</p>
      <p className="text-sm">{description}</p>
      <p className="text-sm"><strong>Past Papers:</strong> {pastPapers}</p>
      <p className="text-sm"><strong>Due in:</strong> {dueInDays} days</p>
      <p className="text-sm"><strong>Mind Map:</strong> {mindMapName}</p>
      <p className="text-sm"><strong>Created:</strong> {dateCreated}</p>
      <a className="text-blue-600 underline text-sm" href={relatedLinks} target="_blank" rel="noreferrer">Open related link</a>
  </div>
  );
}

function Toolbar({onAddNode, onDeleteSelected}) {
  return (
<div className="p-6 bg-alice_blue text-charcoal flex gap-6 justify-center rounded-t-xl border-t border-softMoonstone shadow-soft">
  {/*<button className="px-6 py-3 bg-moonstone text-alice_blue rounded-lg hover:bg-chef_blue transition">*/}
  <button onClick={onAddNode} className="px-4 py-2 bg-space_cadet rounded hover:bg-space_cadet/80">   
    Add Node
  </button>
  <button onClick={onDeleteSelected} className="px-6 py-3 bg-moonstone text-alice_blue rounded-lg hover:bg-chef_blue transition">
    Delete Node
  </button>
  <button className="px-6 py-3 bg-moonstone text-alice_blue rounded-lg hover:bg-chef_blue transition">
    Export
  </button>
</div>

  );
}

export default function App() {
  // State variables
  const [selectedElements, setSelectedElements] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mode, setMode] = useState("review");
  const [hoveredNode, setHoveredNode] = useState(null);
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);



useEffect(() => {
  fetch('/nodes')
    .then(res => res.json())
    .then(data => {
      const safeNodes = data.map((node) => ({
        ...node,
        x: node.x || 0,
        y: node.y || 0
        //position: node.position || { x: Math.random() * 250, y: Math.random() * 250 },
      }));
      setNodes(safeNodes);
    })
    .catch(err => console.error('Error fetching nodes:', err));
}, []);


//add new node to backend and update state
  

const handleAddNode = () => {

  const flowWrapper = document.querySelector('.react-flow__viewport');
  const container = document.querySelector('.react-flow');

  if (!flowWrapper || !container) {
    console.error("Flow container not found.");
    return;
  }

  const bounds = container.getBoundingClientRect();
  const transform = flowWrapper.style.transform.match(/translate\((-?\d+\.?\d*)px, (-?\d+\.?\d*)px\) scale\(([\d.]+)\)/);

  if (!transform) {
    console.error("Could not parse transform.");
    return;
  }

  const [, translateX, translateY, scale] = transform.map(Number);

  const centerX = (bounds.width / 2 - translateX) / scale;
  const centerY = (bounds.height / 2 - translateY) / scale;

  const newNode = {
    //position: { x: 100, y: 100 },//{ x: Math.random() * 250, y: Math.random() * 250 },
    //data: {
    x: centerX,
    y: centerY,
    mainTopic: `New Node ${nodes.length + 1}`,
    practiceDone: false,
    pastPapers: '',
    dueInDays: 7,
    relatedLinks: '',
    colorTag: 'gray',
    blurbNotes: '',
    description: '',
    imageUrl: '',
    dateCreated: new Date().toISOString().split('T')[0],
    mindMapName: 'Default Map',
   // },
    type: 'default',
  };

  fetch('http://localhost:8080/nodes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newNode),
  })
    .then((res) => {
      if (!res.ok) throw new Error('Failed to save node');
      return res.json();
    })
      .then((createdNode) => {
        setNodes((prevNodes) => [
        ...prevNodes,
        {
          ...createdNode,
          x: createdNode.x,
          y: createdNode.y
          //position: createdNode.position || newNode.position, // <== this line
        },
      ]);
    })
    .catch((err) => console.error('Error creating node:', err));
};


const handleDeleteSelected = () => {
  const selectedNodeIds = selectedElements.filter(el => el.id).map(el => el.id);

  Promise.all(selectedNodeIds.map(id =>
    fetch(`/nodes/${id}`, { method: 'DELETE' })
  ))
  .then(() => {
    setNodes(nodes.filter(n => !selectedNodeIds.includes(n.id)));
    setEdges(edges.filter(e => !selectedNodeIds.includes(e.source) && !selectedNodeIds.includes(e.target)));
  })
  .catch(err => console.error('Error deleting nodes:', err));
};

//new code here
const onNodesChange = useCallback((changes) => {
  setNodes((nds) => {
    // Convert our nodes to ReactFlow format (with position object)
    const reactFlowNodes = nds.map(node => ({
      ...node,
      position: { x: node.x, y: node.y }
    }));

    // Apply changes to ReactFlow format nodes
    const updatedReactFlowNodes = applyNodeChanges(changes, reactFlowNodes);

    // Convert back to our format (with direct x/y properties)
    const finalNodes = updatedReactFlowNodes.map(node => ({
      ...node,
      x: node.position.x,
      y: node.position.y,
      position: undefined // Remove the position object
    }));

    // Update backend for position changes
    changes.forEach(change => {
      if (change.type === 'position') {
        const nodeToUpdate = finalNodes.find(n => n.id === change.id);
        if (nodeToUpdate) {
          fetch(`/nodes/${nodeToUpdate.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              x: nodeToUpdate.x,
              y: nodeToUpdate.y
            })
          }).catch(err => console.error('Error updating node position:', err));
        }
      }
    });

    return finalNodes;
  });
}, []);
  
  /*const onNodesChange = useCallback((changes) => {
  setNodes((nds) => {
    const updatedNodes = applyNodeChanges(changes, nds);
    
    // For each changed node, send update to backend
    changes.forEach(change => {
      if (change.type === 'position' || change.type === 'remove' || change.type === 'reset') {
        const nodeToUpdate = updatedNodes.find(n => n.id === change.id);
        if (nodeToUpdate) {
          fetch(`/nodes/${nodeToUpdate.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nodeToUpdate.data), // or full node object
          }).catch(err => console.error('Error updating node:', err));
        }
      }
    });

    return updatedNodes;
  });
}, []);
*/

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  
  /*const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );*/
  //const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  //const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params) => {
      const label = prompt("Enter a label for this edge:");
      const newEdge = {
        ...params,
        label,
        id: `${params.source}-${params.target}-${Date.now()}`,
        type: "default", // this can be a custom edge type later
      };
      setEdges((eds) => addEdge(newEdge, eds));
    },
    [setEdges]
  );

  return (
    
    <div className="flex h-screen bg-alice_blue text-charcoal relative">
      {/* Settings/Profile Button */}
        <div className="absolute top-6 right-6 w-12 h-12 bg-moonstone text-alice_blue rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-chef_blue transition">
          ⚙️
        </div>


      {sidebarOpen && <Sidebar toggleSidebar={() => setSidebarOpen(false)} />}
      <div className="flex flex-col flex-1">
        <div className="flex justify-between p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className={`${
              sidebarOpen ? "hidden" : "block"
            } px-4 py-2 bg-charcoal text-alice_blue rounded`}
          >
            Open Sidebar
          </button>
          <ModeIndicator mode={mode} toggleMode={() => setMode(mode === "review" ? "create" : "review")} />
        </div>
        
                  
          <MindmapGraph
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onSelectionChange={({ nodes, edges }) => {
              const selected = [...(nodes || []), ...(edges || [])];
              setSelectedElements(selected);
            }}
          />
  

  
        <Toolbar onAddNode={handleAddNode} onDeleteSelected={handleDeleteSelected} />


      </div>
      <CardDetail node={hoveredNode} />
    </div>
  );
}


