import { Card, CardContent, Typography } from '@mui/material';

export default function TVL () {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle1">TVL</Typography>
        <Typography variant="h6">$44,343.95</Typography>
        <Typography variant="subtitle1">Capacity</Typography>
        <Typography variant="h6">$3,000,000.00</Typography>
      </CardContent>
    </Card>
  );
};
