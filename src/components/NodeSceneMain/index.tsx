/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import 'aframe';
import { Entity, Scene } from 'aframe-react';
import { memo } from 'react';
import { Handle, Position } from 'reactflow';

// declare namespace JSX {
//   interface IntrinsicElements {
//     'a-scene': any;
//     'a-box': any;
//     'a-sphere': any;
//     'a-cylinder': any;
//     'a-plane': any;
//     'a-sky': any;
//     'a-entity': any;
//   }
// }

export default memo(({ data, isConnectable }: { data: any, isConnectable: boolean}) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div style={{ width: '600px', height: '600px'}}>
        Custom Color Picker Node: <strong>{data.color}</strong>
             <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
       <a-entity camera orbit-controls="target: 0 1.6 -0.5; minDistance: 0.5; maxDistance: 180; initialPosition: 0 5 15"></a-entity>
    </a-scene>
      </div>
      <input className="nodrag" type="color" onChange={data.onChange} defaultValue={data.color} />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
});
