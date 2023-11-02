/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Checkbox, Chip, Slider, TextField, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'reactflow/dist/style.css';
import { GetEntity } from '../data/GetEntity';
import { UpdateEntity } from '../data/UpdateEntity';

export default function Editor() {
  const [entity, setEntity] = useState<any>(null);
  const [needsUpdate, setNeedsUpdate] = useState<any>(false);
  const [variable, setVariable] = useState<any>({});
  const { id } = useParams<any>();

  if (!id) return null

  const processBody = useCallback((body: string) => {
    let processedBody = body;
    entity.variableList.forEach((variableItem: any) => {
      processedBody = processedBody.replace(new RegExp(`{{${variableItem.name}}}`, 'g'), variableItem.value)
    })
    return processedBody
  }, [entity])

  // useEffect(() => {
  //   if (!needsUpdate && entity) {
  //     setEntity({...entity, processedBody: processBody(entity.body)})
  //     // setNeedsUpdate(true)
  //   }

  // }, [entity, processBody, needsUpdate])

  return <>
    {!entity && <GetEntity key={id} entityId={id} onLoad={setEntity} />}
    {needsUpdate && entity && <UpdateEntity
    entityId={id}
    payload={{...entity, processedBody: processBody(entity.body)}}
    onSuccess={(data) => {
      setEntity(data)
      setNeedsUpdate(false)
    }} />}

    {entity && <Box display="flex" sx={{ flexDirection: 'row', alignItems: 'stretch', gap: '16px' }} flexGrow={1} p={2}>

      <Box display={'flex'} flexDirection={'column'} sx={{ gap: '8px', flex: '0 1 50%'}}>

        <Box display={'flex'} alignItems={'center'}>
          <Checkbox checked={entity.pure || false} onChange={(e) => {
            setEntity({...entity, pure: e.target.checked})
            setNeedsUpdate(true)
          }} />
          <Typography>Pure component</Typography>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Checkbox checked={entity.variables || false} onChange={(e) => {
            setEntity({...entity, variables: e.target.checked, variableList: []})
            setNeedsUpdate(true)
          }} />
          <Typography>Has variables</Typography>
        </Box>


        <Box display={'flex'} alignItems={'center'}>
          {entity.variableList.map(variableItem => <Chip
            key={variableItem.name}
            variant='outlined'
            label={<Box display='flex' sx={{ gap: '16px'}} alignItems={'center'}>
              <Typography variant="caption">{variableItem.name} : {variableItem.value}</Typography>
              <Slider
                onChangeCommitted={(e : any, newValue) => {
                  setEntity({...entity, variableList: entity.variableList.map((item: any) => {
                    if (item.name === variableItem.name) {
                      return {...item, value: newValue}
                    }
                    return item
                  })})
                  setNeedsUpdate(true)
                }}
                min={0}
                max={20}
                step={1}
                value={variableItem.value}
                style={{ width: '100px'}}
                size='small'
               />
            </Box>}
            onDelete={() => {
              setEntity({...entity, variableList: entity.variableList.filter((item: any) => item.name !== variableItem.name)})
              setNeedsUpdate(true)
            }}
          />)}
          <Box display='flex' sx={{ gap: '8px'}} alignItems={'center'}>
            <TextField
            placeholder="name"
            size="small"
            value={variable.name}
            onChange={(e) => setVariable({...variable, name: e.target.value})}
            />
            <TextField
            placeholder="value"
            size="small"
            value={variable.value}
            onChange={(e) => setVariable({...variable, value: e.target.value})}
            />
            {/* <TextField placeholder="value" size="small" /> */}
            <Button
            variant='contained'
            onClick={() => {
              setEntity({...entity, variableList: [...entity.variableList, variable]})
              setVariable({})
              setNeedsUpdate(true)
            }}
            >add</Button>
          </Box>
        </Box>

        <TextField
          placeholder='Title'
          autoFocus
          value={entity.title || ''}
          fullWidth={true}
          onChange={(e) => {
            setEntity({...entity, title: e.target.value})
            // setNeedsUpdate(true)
          }}
        />


        <TextField
          autoFocus
          value={entity.body}
          multiline={true}
          rows={10}
          fullWidth={true}
          onChange={(e) => {
            setEntity({...entity, body: e.target.value, processedBody: processBody(e.target.value)})
            setNeedsUpdate(true)
          }}
        />

        <TextField
          autoFocus
          disabled
          value={entity.processedBody}
          multiline={true}
          rows={10}
          fullWidth={true}
          onChange={(e) => {
            setEntity({...entity, body: e.target.value})
            setNeedsUpdate(true)
          }}
        />


      </Box>

      <Box style={{ flex: '0 0 50%', height: '100%', overflow: 'hidden'}} sx={{ border: '1px solid', borderRadius: '8px'}}>
        <a-scene embedded>
          <a-box dangerouslySetInnerHTML={{ __html: entity.processedBody }} />
        </a-scene>
      </Box>
    </Box>}
  </>
}
