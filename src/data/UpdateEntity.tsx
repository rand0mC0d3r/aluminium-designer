/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { apiURL } from '../main';

export const UpdateEntity = ({
  entityId,
  payload,
  onSuccess = () => {},
  onError = () => {}
} : {
  entityId: string,
  payload: any,
  onSuccess: (data: any) => void,
  onError?: (data: any) => void
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
      onSuccess(data);
    }).catch((err) => {
      console.error(err);
      onError(err);
    })
  }, [entityId, payload, onSuccess, onError]);

  return null
}
