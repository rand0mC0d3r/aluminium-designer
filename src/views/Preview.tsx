/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Paper } from '@mui/material';
// import { useState } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'reactflow/dist/style.css';
import { GetEntity } from '../data/GetEntity';


export default function Preview() {
  const [entity, setEntity] = useState<any>([]);
  const { id } = useParams<any>();

  if (!id) return null

  // const [selectedParts, setSelectedParts] = useState<string[]>([]);




  return <>
    <GetEntity entityId={id} onLoad={setEntity} />
    {id} {JSON.stringify(entity)}


    {/* <textarea value={JSON.stringify(entity, null, 2)} readOnly={true} style={{ width: '100%', height: '100%' }} /> */}
    {/* <a-scene>
      <a-text position="-1 0.5 -3" color="#4CC3D9" value="Hello, World!"></a-text>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene> */}
  </>
}
