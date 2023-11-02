/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@mui/material';
import 'reactflow/dist/style.css';

export default function PreviewEntity({
  body,
  style,
 }: {
  body: string
  style?: any
 }) {
  return <>
    <Box style={{ overflow: 'hidden', borderRadius: '8px', ...style }} sx={{ border: '1px solid'}}>
      <a-scene embedded>
        <a-box dangerouslySetInnerHTML={{ __html: body }} />
      </a-scene>
    </Box>
  </>
}
