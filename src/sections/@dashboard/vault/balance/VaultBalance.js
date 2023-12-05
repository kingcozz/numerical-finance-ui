import { Card, CardContent, Typography, Button } from '@mui/material';

export default function Balance () {

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle1">My nGLP</Typography>
        <Typography variant="h6">0 nGLP</Typography>
        <Typography variant="subtitle1">Reserved</Typography>
        <Typography variant="h6">0.00 nGLP</Typography>
        <Typography variant="subtitle1">Reward</Typography>
        <Typography variant="h6">0 DAI</Typography>
        <Button variant="contained" color="secondary" size="small" sx={{ mt: 1 }}>Claim</Button>
      </CardContent>
    </Card>
  );
};
