import { Paper } from '@mui/material';
import { IndustrialProvider, PlacementPosition, Status } from 'mui-industrial';
import ReactFlow, { Background, Panel } from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css';
import { CustomImportList } from './components/CustomImportList';
import { SPaper } from './components/CustomPaper/css';

function App() {

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

  return (
    <IndustrialProvider position={PlacementPosition.BOTTOM} style={{ width: "100%", height: "30px" }}>
    <div style={{ width: '100%', position: 'absolute', height: '100%' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>

      <Panel position="top-left">
        <SPaper>
          <CustomImportList />
        </SPaper>
      </Panel>
        <Panel position="top-center">top-center</Panel>
        <Panel position="top-right">top-right</Panel>
        <Panel position="bottom-left">bottom-left</Panel>
        <Panel position="bottom-center">bottom-center</Panel>
        <Panel position="bottom-right">bottom-right</Panel>

        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
    <Status id='sampleStatus'>
      <Status.Template text='Sample Status' />
    </Status>
    </IndustrialProvider>
  )
}

export default App
