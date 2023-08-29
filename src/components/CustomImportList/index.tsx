import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import { BottomNavigation, BottomNavigationAction, Box, } from '@mui/material';
import { useState } from 'react';
import { CustomImportItem } from '../CustomImportItem';

export const CustomImportList = () => {
  const [value, setValue] = useState(0);
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

    <BottomNavigation
      showLabels
      value={value}
      onChange={(_event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>

      {objects.map((object) => (
        <CustomImportItem {...{object}} />
      ))}

    </Box>
  );
}
