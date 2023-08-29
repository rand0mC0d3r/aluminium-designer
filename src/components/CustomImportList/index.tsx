import { Box, Paper } from '@mui/material';
import { CustomImportItem } from '../CustomImportItem';

export const CustomImportList = () => {

  const objects = [
    {
      id: '1',
      label: "Random Label Lorem",
      description: "Random Description Lorem"
    },
    {
      id: '2',
      label: "Ipsum Dolor",
      description: "Random Description Ipsum"
    },
    {
      id: '3',
      label: "Sit Amet",
      description: "Random Description Sit Random Description Sit Random Description Sit "
    },
  ]

  return (
    <Box display="flex" sx={{gap: '8px'}} flexDirection={'column'}>
      {objects.map((object) => (
        <CustomImportItem {...{object}} />
      ))}

    </Box>
  );
}
