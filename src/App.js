// App.js
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import ReactFlow, { MiniMap, Controls, Background } from "react-flow-renderer";




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
      }}
    >
      {data.label}
    </div>
  );
};

// 2. Inside your MindmapGraph component, define nodeTypes object:
const nodeTypes = {
  default: CustomNode,
};



const initialNodes = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 300, y: 100 } },
  { id: '3', data: { label: 'Node 3' }, position: { x: 200, y: 300 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
];




function MindmapGraph() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
<div
  style={{ flex: 1, height: '100%' }}
  className="rounded-xl shadow-soft border border-softMoonstone bg-alice_blue p-4"
>
  <ReactFlow nodes={nodes} edges={edges} fitView>
    <MiniMap nodeStrokeColor={n => '#609EAF'} nodeColor={n => '#F0F6FF'} />
    <Controls />
    <Background color="#609EAF" gap={16} />
  </ReactFlow>
</div>

  );
}


/*function MindmapGraph({ onHoverNode }) {
  // Just placeholders for nodes
  const nodes = [
    { id: 1, title: "Node 1", detail: "Detail for node 1" },
    { id: 2, title: "Node 2", detail: "Detail for node 2" },
    { id: 3, title: "Node 3", detail: "Detail for node 3" },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-alice_blue rounded shadow-inner flex-1 overflow-auto">
      {nodes.map((node) => (
        <div
          key={node.id}
          onMouseEnter={() => onHoverNode(node)}
          onMouseLeave={() => onHoverNode(null)}
          className="p-4 bg-white rounded shadow cursor-pointer hover:shadow-lg transition"
          style={{ minWidth: 120 }}
        >
          {node.title}
        </div>
      ))}
    </div>
  );
}*/
// /* <MindmapGraph onHoverNode={setHoveredNode} /> */
function CardDetail({ node }) {
  if (!node) return null;
  return (
<div className="absolute bottom-6 right-6 w-72 p-6 bg-light_orange rounded-xl shadow-lg text-charcoal border border-softMoonstone">
  <h3 className="font-bold mb-3">{node.title}</h3>
  <p>{node.detail}</p>
</div>

  );
}

function Toolbar() {
  return (
<div className="p-6 bg-alice_blue text-charcoal flex gap-6 justify-center rounded-t-xl border-t border-softMoonstone shadow-soft">
  <button className="px-6 py-3 bg-moonstone text-alice_blue rounded-lg hover:bg-chef_blue transition">
    Add Node
  </button>
  <button className="px-6 py-3 bg-moonstone text-alice_blue rounded-lg hover:bg-chef_blue transition">
    Delete Node
  </button>
  <button className="px-6 py-3 bg-moonstone text-alice_blue rounded-lg hover:bg-chef_blue transition">
    Export
  </button>
</div>

  );
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mode, setMode] = useState("review");
  const [hoveredNode, setHoveredNode] = useState(null);

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
        
        <MindmapGraph />
  
        <Toolbar />
      </div>
      <CardDetail node={hoveredNode} />
    </div>
  );
}


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. //comment2
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
