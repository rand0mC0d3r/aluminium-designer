import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
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
      description: "Random Description Lordddem",
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
      <BottomNavigationAction label="Add" icon={<AddCircleOutlineOutlinedIcon />} />
      <BottomNavigationAction label="Delete" icon={<DeleteForeverOutlinedIcon />} />
      <BottomNavigationAction label="Costs" icon={<PointOfSaleOutlinedIcon />} />
    </BottomNavigation>

      {objects.map((object) => (
        <CustomImportItem {...{object}} />
      ))}

    </Box>
  );
}
