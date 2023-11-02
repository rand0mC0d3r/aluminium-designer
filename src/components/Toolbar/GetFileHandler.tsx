/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from '@mui/material';

export default function GetFileHandler() {
const handleClick = async () => {
    try {
      const options = {
        type: 'openDirectory',
        suggestedName: 'my-folder',
      };
      const handle = await (window as any).showDirectoryPicker(options);
      const token = await handle.requestPermission({ mode: 'readwrite' });
      const tokenObject = { value: token, handle: handle };
      localStorage.setItem('folderToken', JSON.stringify(tokenObject));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button color="inherit" onClick={handleClick}>Open Folder</Button>
  );
}
