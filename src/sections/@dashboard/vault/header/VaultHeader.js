import { Box, Typography, Button } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: 'background.paper' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src="/path-to-your-logo.png" alt="GLP Logo" style={{ width: '50px', height: '50px' }} />
        <Typography variant="h5" sx={{ ml: 2 }}>GLP Market Neutral V2</Typography>
      </Box>
      <Button variant="contained" color="primary">How to</Button>
    </Box>
  );
};
