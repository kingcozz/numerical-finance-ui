import { Box, Card, CardContent, Typography, Divider, Tooltip, IconButton } from '@mui/material';
import Iconify from 'components/iconify/Iconify';

export default function CombinedInfoCard() {
  return (
    <Card
      sx={{
        mb: 2,
        // bgcolor: 'secondary.dark',
        // color: 'text.secondary',
        borderRadius: '16px',
      }}
    >
      <CardContent>
        {/* APR Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1">
            APR
            <Tooltip title="Annual Percentage Rate" placement="top">
              <IconButton>
                <Iconify
                  icon="material-symbols:info-outline"
                  width={16}
                  height={16}
                  color="#38b197"
                />
              </IconButton>
            </Tooltip>
          </Typography>

          <Typography variant="h3"  color="#38b197">29.43%</Typography>
        </Box>
        <Divider sx={{ my: 2, bgcolor: 'text.primary' }} />

        {/* nGLP Price Section */}
        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1">
            nGLP Price{' '}
            <Tooltip title="Current nGLP Price" placement="top">
              <IconButton>
                <Iconify
                  icon="material-symbols:info-outline"
                  width={16}
                  height={16}
                  color="#38b197"
                />
              </IconButton>
            </Tooltip>
          </Typography>

          <Typography variant="h3">$0.92</Typography>
        </Box>
        <Divider sx={{ my: 2, bgcolor: 'text.primary' }} /> */}

        {/* TVL Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1">TVL</Typography>
          <Typography variant="h6"  color="#38b197">$43,604.01</Typography>
        </Box>
        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1">Deposit</Typography>
          <Typography variant="h6">$43,604.01</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1">Capacity</Typography>
          <Typography variant="h6">$3,000,000.00</Typography>
        </Box> */}
      </CardContent>
    </Card>
  );
}
