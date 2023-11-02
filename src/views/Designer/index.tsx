/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import { IndustrialProvider, PlacementPosition, Status } from 'mui-industrial';
// import { useState } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactFlow, { Background, Controls, MiniMap, Panel } from 'reactflow';
import 'reactflow/dist/style.css';
import { GetEntities } from '../../data/GetEntities';
import GetFiles from './GetFiles';
// import { CustomImportList } from './components/CustomImportList';
// import { SPaper } from './components/CustomPaper/css';
import NodeSceneMain from '../../components/NodeSceneMain';

export default function Designer() {
  const [entities, setEntities] = useState<any[]>([]);
  const [nodes, setNodes] = useState<any[]>([]);

  useEffect(() => {
    setNodes(entities.map((entity, i) => {
      return {
        id: String(entity.id),
        type: 'sceneMain',
        style: { border: '1px dotted #CCC', padding: 16, borderRadius: 8 },
        position: { x: i * 500, y: i * 400 },
        data: { id: entity.id }
      }
    }))
  }, [entities]);

  const nodeTypes = {
    sceneMain: NodeSceneMain,
  };

  return <>
      <GetEntities onLoad={setEntities} />
      {/* {JSON.stringify(nodes)} */}
    {/* <IndustrialProvider position={PlacementPosition.BOTTOM} style={{ width: "100%", height: "30px" }}> */}
    {/* <div style={{ width: '100%', position: 'absolute', height: '100%', color: 'black' }}> */}
      {nodes.length > 0 && <ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={[]} fitView nodesDraggable>

      {/* <Panel position="top-left">
        <SPaper>
          <CustomImportList />
        </SPaper>
      </Panel> */}

        <Background color="#aaa" gap={16} />
        <MiniMap />
        <Controls />
      </ReactFlow>}
      {/* dd */}
      {/* {JSON.stringify(entities)} */}
      {/* {entities.map((entity) => <div style={{ width: '100px', height: '100px'}}>
        <Link to={`/preview/${entity.id}`}>{entity.id}</Link>
      </div>)} */}
      {/* ff */}

{/* <GetFiles /> */}
    {/* </div> */}
    {/* <Status id='sampleStatus'> */}
      {/* <Status.Template text='Sample Status' /> */}
    {/* </Status> */}
    {/* </IndustrialProvider> */}
  </>
}
