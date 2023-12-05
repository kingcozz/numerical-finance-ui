import { Card, CardContent, Typography, Box } from '@mui/material';

export default function Stats() {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>Stats</Typography>
        <Box sx={{ height: 200, bgcolor: '#d0e2f2', mb: 2 }}>
          {/* Fake chart */}
          <Typography variant="body2" sx={{ p: 2 }}>Total APR (NEU price reflected) - nGLP Price</Typography>
        </Box>
        {/* Here you would insert the actual chart component */}
      </CardContent>
    </Card>
  );
};
