/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { apiURL } from '../main';

export const GetEntity = ({
  entityId,
  onLoad = () => {}
} : {
  entityId: string,
  onLoad: (data: any) => void
}) => {

  useEffect(() => {
    console.log('fetching entity')
    fetch(`${apiURL}/entity/${entityId}`).then((response) => {
      return response.json();
    }).then((data) => {
      onLoad(data);
    }).catch((err) => {
      console.error(err);
    })

  }, [entityId, onLoad]);

  return null
}
