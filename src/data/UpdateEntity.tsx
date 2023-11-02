/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { apiURL } from '../main';

export const UpdateEntity = ({
  entityId,
  payload,
  onLoad = () => {}
} : {
  entityId: string,
  payload: any,
  onLoad: (data: any) => void
}) => {

  useEffect(() => {
    fetch(`${apiURL}/entity/${entityId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      onLoad(data);
    }).catch((err) => {
      console.error(err);
    })
  }, [entityId, payload, onLoad]);

  return null
}
