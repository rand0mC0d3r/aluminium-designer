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
      description: "Random Description Lorem",
      code: [
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>,
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>,
      ]
    },
    {
      id: '2',
      label: "Ipsum Dolor",
      description: "Random Description Ipsum",
      code: [
        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>,
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      ]
    },
    {
      id: '3',
      label: "Sit Amet",
      description: "Random Description Sit Random Description Sit Random Description Sit ",
      code: [
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>,
      ]
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
