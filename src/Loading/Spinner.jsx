import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckDroplet, faTruckRampBox } from '@fortawesome/free-solid-svg-icons';

export default function Spinner() {
  return (
    <div className='loading-area'>
      <FontAwesomeIcon className='loading-icon' icon={faTruckRampBox} />
      <b>Loading <span>Products...</span></b>
      <p>Please wait a minute, were getting the data</p>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </div>
  );
}