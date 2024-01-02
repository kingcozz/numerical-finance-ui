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

  const _vaultData = [
    {
      id: 1,
      name: 'Numerical Stable Liquid Vault',
      symbol: "NSLV",
      image: '/assets/stable vault liquid.png',
      description: 'This vault enables you to earn Yield while being shielded against market volatility.'
    },
    {
      id: 2,
      name: 'Numerical Stable Locked Vault',
      symbol: "NSLK",
      image: '/assets/stable vault locked.png',
      description: 'This vault enables you to earn Yield while being shielded against market volatility.'
    },
    {
      id: 3,
      name: 'Numerical Volatile Liquid Vault',
      symbol: "NVLV",
      image: '/assets/volatile vault liquid.png',
      description: 'This vault enables you to earn Yield while being shielded against market volatility.'
    },
    {
      id: 4,
      name: 'Numerical Volatile Locked Vault',
      symbol: "NVLK",
      image: '/assets/volatile vault locked.png',
      description: 'This vault enables you to earn Yield while being shielded against market volatility.'
    }
  ];

  // create function to get vault data from id
  const getVaultData = (id) => {
    return _vaultData.find((vault) => vault.id === parseInt(id));
  };

  // Adjust the componentWidth object for the desired max widths
  const componentWidth = { xs: 12, sm: 10, md: 8, lg: 6 };

  const vaultData = getVaultData(id);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
      <Grid container spacing={3} justifyContent="center">
        
        {/* If the header should be full width, we can remove the maxWidth constraint */}
        <Grid item xs={12}>
          <Header title={vaultData?.name} image={vaultData?.image} description={vaultData?.description} />
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
