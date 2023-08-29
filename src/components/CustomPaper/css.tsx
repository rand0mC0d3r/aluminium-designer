/* eslint-disable @typescript-eslint/no-explicit-any */
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SPaper: any = styled(Paper)(({ theme }) => ({
  maxWidth: '750px',
  padding: '12px',
  borderRadius: '8px',
  backgroundColor: `${theme.palette.background.paper} !important`,
  backdropFilter: 'blur(8px)',
}));
