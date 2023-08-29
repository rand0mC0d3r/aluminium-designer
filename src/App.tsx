import { useState } from 'react';
import ReactFlow, { Background } from 'reactflow';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import 'reactflow/dist/style.css';


function App() {
  const [count, setCount] = useState(0)


const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

  return (
    <div style={{ width: '100%', position: 'absolute', height: '100%', border: '1px solid blue'}}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} >
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  )
}

export default App
