import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
  Tooltip,
  IconButton,
} from '@mui/material';
import Iconify from 'components/iconify/Iconify';

export default function Balance() {
  return (
    <Card
      sx={{
        mb: 2,
        // bgcolor: 'secondary.dark', // Adjust the color to match your theme
        // color: 'text.secondary', // Adjust the text color to match your theme
        borderRadius: '16px', // Rounded corners as seen in the image
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1">
            My Deposit
            <Tooltip title="Information about Deposit" placement="top">
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

          <Typography variant="h6">0 USDC</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1">
            My share{' '}
            <Tooltip title="Information about my share" placement="top">
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

          <Typography variant="h6">0.00 %</Typography>
        </Box>
        <Divider sx={{ my: 2, bgcolor: 'text.primary' }} /> {/* Divider color adjusted */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1">
            Reward{' '}
            <Tooltip title="Information about Rewards" placement="top">
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

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ mr: 1 }}>
              0 USDC 
            </Typography>
            <Button variant="contained" color="success" size="small">
              Claim
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
