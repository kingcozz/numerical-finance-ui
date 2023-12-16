import { Container, Grid, Box } from '@mui/material';
import { useRouter } from 'next/router';

import VaultBalance from './balance/VaultBalance';
import Header from './header/VaultHeader';
import Apr from './apr/VaultApr';
import Stats from './stats/VaultStats';
import DepositWithdraw from './deposit-withdraw/DepositWithdraw';

export default function VaultPage() {
  const router = useRouter();
  const { id } = router.query;

  // Adjust the componentWidth object for the desired max widths
  const componentWidth = { xs: 12, sm: 10, md: 8, lg: 6 };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
      <Grid container spacing={3} justifyContent="center">
        
        {/* If the header should be full width, we can remove the maxWidth constraint */}
        <Grid item xs={12}>
          <Header />
        </Grid>

        {/* Apply the same maxWidth to the left and right columns */}
        <Grid item {...componentWidth}>
          <VaultBalance />
          <Apr />
          <Stats />
        </Grid>

        <Grid item {...componentWidth}>
          <DepositWithdraw />
        </Grid>
      </Grid>
    </Container>
  );
}
