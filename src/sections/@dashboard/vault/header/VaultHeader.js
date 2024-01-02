import React from 'react';
import { Box, Card, Typography, Button } from '@mui/material';
import Iconify from 'components/iconify';
import { description } from '_mock/assets';

export default function Header({ title, description, image}) {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        bgcolor: 'background.paper',
        position: 'relative', // For absolute positioning the green bar
        // borderRadius: '0 5px 5px 0',
      }}
    >
      {/* Green bar on the left side */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '15px',
          bgcolor: '#38b197', // Use a color from the theme or a custom color
        }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', pl: '10px' }}>
        <img src={image} alt="" style={{ width: '125px', height: '100px' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 5 }}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body1">{description ?? 'This strategy enables you to earn GLP APR while remaining protected against ETH/BTC price movements.'}</Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Iconify icon="eva:question-mark-circle-fill" width={24} height={24} />}
      >
        How to
      </Button>
    </Card>
  );
}
