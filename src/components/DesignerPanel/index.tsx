import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import { BottomNavigation, BottomNavigationAction, Box, } from '@mui/material';
import { useState } from 'react';
import { AddEntity } from './AddEntity';

export const DesignerPanel = ({ entities }) => {
  const [value, setValue] = useState(0);


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


      <div>
        {value === 0 && <AddEntity entities={entities} />}

      </div>
        {/* {objects.map((object) => (
        <CustomImportItem {...{object}} />
      ))} */}

    </Box>
  );
}
