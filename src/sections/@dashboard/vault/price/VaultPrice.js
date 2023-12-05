import { Card, CardContent, Typography } from '@mui/material';

export default function Price(){
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="subtitle1">nGLP Price</Typography>
        <Typography variant="h3">$0.92</Typography>
      </CardContent>
    </Card>
  );
};
