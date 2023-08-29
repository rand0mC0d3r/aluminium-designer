import { Box, Paper, Typography } from '@mui/material';

export interface CustomImportItemProps {
  id: string;
  label: string;
  description?: string;
  code?: string;
  icon?: string;
  tags?: string[];
}

export const CustomImportItem = ({object} : {object: CustomImportItemProps}) => {
  return (
    <Paper style={{ maxWidth: '450px'}}>
      <Box sx={{ p: 2 }}>
        <Box display={'flex'} sx={{gap: '8px'}} alignItems={'center'}>
          <Typography variant="caption"> {object.id}</Typography>
          <Typography variant="subtitle2"> {object.label}</Typography>
        </Box>
        <Box display={'flex'} sx={{gap: '8px'}} alignItems={'flex-start'}>
          <img src="https://via.placeholder.com/150" alt="placeholder" />
        <Typography variant="caption" color="textSecondary"> {object.description}</Typography>

        </Box>
      </Box>
    </Paper>
  );
}
