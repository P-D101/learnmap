// App.js
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';




function Sidebar({ toggleSidebar }) {
  return (
    <div className="w-64 bg-charcoal text-alice_blue flex flex-col p-4">
      <input
        type="search"
        placeholder="Search mindmaps..."
        className="mb-4 p-2 rounded bg-space_cadet text-white"
      />
      <div className="flex-1 overflow-auto">
        {/* Placeholder list */}
        <ul>
          <li className="p-2 hover:bg-space_cadet rounded cursor-pointer">Mindmap 1</li>
          <li className="p-2 hover:bg-space_cadet rounded cursor-pointer">Mindmap 2</li>
          <li className="p-2 hover:bg-space_cadet rounded cursor-pointer">Mindmap 3</li>
        </ul>
      </div>
      <button
        onClick={toggleSidebar}
        className="mt-4 p-2 bg-moonstone rounded hover:bg-moonstone/80"
      >
        Collapse
      </button>
    </div>
  );
}

function ModeIndicator({ mode, toggleMode }) {
  return (
    <div className="p-2 text-charcoal bg-light_orange rounded w-max cursor-pointer select-none" onClick={toggleMode}>
      {mode === "review" ? "Review Mode" : "Create Mode"}
    </div>
  );
}

function MindmapGraph({ onHoverNode }) {
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
}

function CardDetail({ node }) {
  if (!node) return null;
  return (
    <div className="absolute bottom-4 right-4 w-64 p-4 bg-light_orange rounded shadow-lg text-charcoal">
      <h3 className="font-bold mb-2">{node.title}</h3>
      <p>{node.detail}</p>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="p-4 bg-charcoal text-alice_blue flex gap-4 justify-center">
      <button className="px-4 py-2 bg-space_cadet rounded hover:bg-space_cadet/80">
        Add Node
      </button>
      <button className="px-4 py-2 bg-space_cadet rounded hover:bg-space_cadet/80">
        Delete Node
      </button>
      <button className="px-4 py-2 bg-space_cadet rounded hover:bg-space_cadet/80">
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
        <MindmapGraph onHoverNode={setHoveredNode} />
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
