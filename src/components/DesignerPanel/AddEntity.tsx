import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import RestoreIcon from '@mui/icons-material/Restore';
import { BottomNavigation, BottomNavigationAction, Box, } from '@mui/material';
import { useState } from 'react';
import { CustomImportItem } from '../CustomImportItem';
import PreviewEntity from '../PreviewEntity';

export const AddEntity = ({entities}) => {
  // const [value, setValue] = useState(0);


  return (
    <Box display="flex" sx={{gap: '8px'}} flexDirection={'column'}>

      {entities?.map((entity) => <div key={entity.id}>
        {/* {JSON.stringify(entity)} */}

        {/* {entity.name} */}
        {entity.title} - {entity.id}
        {/* {JSON.stringify(entity.processedBody)} */}
        {entity?.processedBody && <PreviewEntity body={entity.processedBody} style={{ height: '300px', width: '300px'}} />}
      </div>)}
   {/* ffff */}

    </Box>
  );
}
