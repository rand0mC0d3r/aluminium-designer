/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, TextField } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'reactflow/dist/style.css';
import { GetEntity } from '../data/GetEntity';
import { UpdateEntity } from '../data/UpdateEntity';

export default function Editor() {
  const [entity, setEntity] = useState<any>([]);
  const [needsUpdate, setNeedsUpdate] = useState<any>(false);
  const { id } = useParams<any>();

  if (!id) return null

  return <>
    <GetEntity key={id} entityId={id} onLoad={setEntity} />
    {needsUpdate && <UpdateEntity entityId={id} payload={entity} onSuccess={() => setNeedsUpdate(false)} />}

    <Box display="flex" sx={{ flexDirection: 'row', alignItems: 'stretch', gap: '16px' }} flexGrow={1} p={2}>
      <TextField
        autoFocus
        value={entity.body}
        multiline={true}
        rows={40}
        fullWidth={true}
        onChange={(e) => {
          setEntity({...entity, body: e.target.value})
          setNeedsUpdate(true)
        }}
      />

      <Box style={{ flex: '0 0 50%', height: '100%', overflow: 'hidden'}} sx={{ border: '1px solid', borderRadius: '8px'}}>
        <a-scene embedded>
          <a-box dangerouslySetInnerHTML={{ __html: entity.body }} />
        </a-scene>
      </Box>
    </Box>
  </>
}
