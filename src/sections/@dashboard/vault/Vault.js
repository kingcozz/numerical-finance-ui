import { Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';

import VaultBalance from './balance/VaultBalance';
import Header from './header/VaultHeader';
import Apr from './apr/VaultApr';
import Price from './price/VaultPrice';
import Stats from './stats/VaultStats';
import Tvl from './tvl/VaultTvl';
import DepositWithdraw from './deposit-withdraw/DepositWithdraw';

export default function VaultPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4, px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 } }}> {/* Add top and bottom margin */}
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Header />
        </Grid>

        {/* Left column */}
        <Grid item xs={10} md={8} lg={6}> {/* Adjust the size as needed */}
          <VaultBalance />
          <Apr />
          {/* <Price />
          <Tvl /> */}
          <Stats />
        </Grid>

        {/* Right column */}
        <Grid item xs={10} md={8} lg={6}> {/* Adjust the size as needed */}
          <DepositWithdraw />        
         
        </Grid>
      </Grid>
    </Container>
  );
}
