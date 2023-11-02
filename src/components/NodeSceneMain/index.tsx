/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import 'aframe';
import AnchorIcon from '@mui/icons-material/Anchor';
// import { Entity, Scene } from 'aframe-react';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import { Box, Chip, Typography } from '@mui/material';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Handle, Position } from 'reactflow';
import { GetEntity } from '../../data/GetEntity';
import PreviewEntity from '../PreviewEntity';


export default memo(({ data, isConnectable }: { data: any, isConnectable: boolean}) => {
  const [entity, setEntity] = useState<any>(null);

  return (
    <>
      <GetEntity key={data.id} entityId={data.id} onLoad={setEntity} />

      {!entity?.pure && <Handle
        type="target"
        position={Position.Left}
        style={{ top: '40%', background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />}

      <Box display={'flex'} flexDirection={'column'} sx={{ gap: '8px'}}>

        <Box display={'flex'} sx={{ gap: '8px'}}>
          {entity?.pure && <Chip variant='outlined' label={<AnchorIcon />} />}
          {entity?.variables && <Chip variant='outlined' label={<BoltOutlinedIcon />} />}
          <Chip variant='outlined' label={`Qty: 3`} />
          <Link to={`/editor/${data.id}`}>
            <Chip color="primary" variant='outlined' label={`Edit`} />
          </Link>
        </Box>
      {/* </div>)} */}
        {entity?.processedBody && entity.processedBody && <PreviewEntity body={entity.processedBody} style={{ height: '300px', width: '300px'}} />}
        {/* <a-scene embedded>
          <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
          <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
          <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
          <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
          <a-sky color="#ECECEC"></a-sky>
          <a-entity camera orbit-controls="target: 0 1.6 -0.5; minDistance: 0.5; maxDistance: 180; initialPosition: 0 5 15"></a-entity>
        </a-scene> */}

        <Typography>{entity?.title || 'Preview'}: <strong>{data.id}</strong></Typography>
        {entity?.variableList?.map(variableItem => <Chip
          key={variableItem.name}
          label={`${variableItem.name} : ${variableItem.value}`}
          />)}
      </Box>
      {/* <input className="nodrag" type="color" onChange={data.onChange} defaultValue={data.color} /> */}
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: '40%', background: '#555' }}
        isConnectable={isConnectable}
      />
      {/* <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      /> */}
    </>
  );
});
