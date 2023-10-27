import { Box, Paper, Typography } from '@mui/material';

export interface CustomImportItemProps {
  id: string;
  label: string;
  description?: string;
  code?: any[];
  icon?: string;
  tags?: string[];
}

export const CustomImportItem = ({object} : {object: CustomImportItemProps}) => {
  return (
    <Paper style={{ maxWidth: '450px', overflow: 'hidden'}}>
      <Box sx={{ p: 2 }}>
        <Box display={'flex'} sx={{gap: '8px'}} alignItems={'center'}>
          <Typography variant="caption"> {object.id}</Typography>
          <Typography variant="subtitle2"> {object.label}</Typography>
        </Box>
        <Box display={'flex'} sx={{gap: '8px'}} alignItems={'flex-start'}>
          {/* <img src="https://via.placeholder.com/150" alt="placeholder" /> */}

          <div style={{ width: '350px', height: '350px', position: 'relative', overflow: 'hidden', display: 'contents'}}>
            <iframe src="https://aframe.io/aframe/examples/boilerplate/hello-world/" />
            {/* <a-scene key={object.id} id={object.id}>
              <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
            </a-scene> */}
        </div>
          <Typography variant="caption" color="textSecondary"> {object.description}</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
