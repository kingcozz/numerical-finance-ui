import { Card, CardContent, Typography } from '@mui/material';

export default function APR (){
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="subtitle1">APR</Typography>
        <Typography variant="h3">31%</Typography>
      </CardContent>
    </Card>
  );
};
