/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Paper } from '@mui/material';
// import { useState } from 'react';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'reactflow/dist/style.css';
import { GetEntity } from '../data/GetEntity';
import { UpdateEntity } from '../data/UpdateEntity';


export default function Editor() {
  const [entity, setEntity] = useState<any>([]);
  const [needsUpdate, setNeedsUpdate] = useState<any>(false);
  const { id } = useParams<any>();

  if (!id) return null

  // useEffect(() => {


  return <>
    <GetEntity key={id} entityId={id} onLoad={setEntity} />
    {needsUpdate && <UpdateEntity entityId={id} payload={entity} onLoad={() => setNeedsUpdate(false)} />}
    {/* {id} {JSON.stringify(entity)} */}

  <TextField
    value={entity.body}
    multiline={true}
    maxRows={40}
    fullWidth={true}
    onChange={(e) => {
      setEntity({...entity, body: e.target.value})
      setNeedsUpdate(true)
    }}
  />

    <div style={{ width: '800px', height: '400px', overflow: 'hidden'}}>
      <a-scene embedded>
         {/* <a-text position="-1 0.5 -3" color="#4CC3D9" value="Hello, something!"></a-text> */}

      <a-box dangerouslySetInnerHTML={{ __html: entity.body }}>
        {/* <span>ddd</span> */}

      </a-box>
      </a-scene>
    </div>
    {/* <textarea value={JSON.stringify(entity, null, 2)} readOnly={true} style={{ width: '100%', height: '100%' }} /> */}
    {/* <a-scene  embedded>
      <a-text position="-1 0.5 -3" color="#4CC3D9" value="Hello, World!"></a-text>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene> */}
  </>
}
