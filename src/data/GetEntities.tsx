/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { apiURL } from '../main';

export const GetEntities = ({
  onLoad = () => {}
} : {
  onLoad: (data: any) => void
}) => {

  useEffect(() => {
    fetch(`${apiURL}/entity`).then((response) => {
      return response.json();
    }).then((data) => {
      onLoad(data);
    }).catch((err) => {
      console.error(err);
    })
  }, [onLoad]);

  return null
}
