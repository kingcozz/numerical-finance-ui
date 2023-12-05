import PropTypes from 'prop-types';
// @mui
import { Button, Card, Typography, Stack, TextField } from '@mui/material';
// utils
import { fCurrency } from '../../../../utils/formatNumber';

// ----------------------------------------------------------------------

CurrentBalance.propTypes = {
  sx: PropTypes.object,
  title: PropTypes.string,
  sentAmount: PropTypes.number,
  currentBalance: PropTypes.number,
};

export default function CurrentBalance({ title, sentAmount, currentBalance, sx, ...other }) {
  const totalAmount = currentBalance - sentAmount;

  return (
    <Card sx={{ p: 3, ...sx, height: '100%' }} {...other}>
      <Typography variant="subtitle2" gutterBottom>
        {title}
      </Typography>

      <Stack spacing={2}>
        <Typography variant="h3">{fCurrency(totalAmount)}</Typography>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Your Current Balance
          </Typography>
          <Typography variant="body2">{fCurrency(currentBalance)}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Total Bonus Rewards
          </Typography>
          <Typography variant="body2">- {fCurrency(sentAmount)}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Total Amount
          </Typography>
          <Typography variant="subtitle1">{fCurrency(totalAmount)}</Typography>
        </Stack>

        <Stack direction="row" spacing={1.5}>
          <Button fullWidth variant="contained" color="warning">
            Claim Reward
          </Button>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={1} mt={4}>
        <TextField
          name=""
          value="http://localhost:3032/dashboard/app/"
          sx={{ flex: '1', color: 'white!important' }}
        />
        <Button color="warning" variant="contained">
          Copy Link
        </Button>
      </Stack>
    </Card>
  );
}
