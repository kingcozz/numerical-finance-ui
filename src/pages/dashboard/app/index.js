// next
import Head from 'next/head';

// @mui
import {
  Divider,
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  Container,
  Grid,
} from '@mui/material';
import Image from 'next/image';
import { useAccount, useDisconnect } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';
import { getEllipsis } from 'utils/functions';
import Iconify from 'components/iconify';
// auth
import DashboardLayout from 'layouts/dashboard';
// _mock_

// components
import { useSettingsContext } from 'components/settings';
import { randomNumber } from '_mock';
import { SeoIllustration } from 'assets/illustrations';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import useResponsive from 'hooks/useResponsive';
import { useFetchLotteryData, useLotteryAccountInfo } from 'redux/slices/lottery/hooks';
import Carousel, { CarouselDots } from 'components/carousel';

// sections

// ----------------------------------------------------------------------

GeneralAppPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function GeneralAppPage() {
  const [isCopied, setIsCopied] = useState(false);

  const { themeStretch } = useSettingsContext();
  const { totalReferralBonus, referrals } = useLotteryAccountInfo();
  useFetchLotteryData();
  const { address: account } = useAccount();
  const { open, close } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const router = useRouter();
  const isDesktop = useResponsive('up', 'lg');

  // const onCopyAddress = () => {
  //   setIsCopied(true);
  //   setTimeout(() => {
  //     setIsCopied(false);
  //   }, 1000);
  //   navigator.clipboard.writeText(
  //     `${window?.location.origin}${router.pathname}?referral=${account}`
  //   );
  // };

  // Vault Item Component
  const VaultItem = ({ title, apr, myNGLP, deposit, logoSrc, id}) => {
    const theme = useTheme(); // Use the theme for consistent styling

    return (
      <Card sx={{ margin: theme.spacing(2, 0), minWidth: '50rem', cursor: 'pointer' }} onClick={() => router.push(`/dashboard/vault/${id}`)} >
        {' '}
        {/* Use theme spacing for consistent margins */}
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
            <Image src={logoSrc} alt={title} width={256} height={256} /> {/* Logo image */}
            <Box sx={{ ml: 5, flex: 1 }}>
              <Typography variant="h4" component="div">
                {title}
              </Typography>
              <Divider sx={{ my: 1 }} /> {/* Divider under the title */}
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    marginRight: '5rem',
                  }}
                >
                  <Typography style={{ color: 'gray', fontSize: '12px' }}>APR</Typography>
                  <Typography variant="body1" style={{ fontSize: '20px' }}>
                    {apr}%
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                  <Typography style={{ color: 'gray', fontSize: '12px' }}>My nGLP</Typography>

                  <Typography variant="body1" style={{ fontSize: '20px' }}>
                    {myNGLP}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                  <Typography style={{ color: 'gray', fontSize: '12px' }} sx={{ mt: 2 }}>
                    Deposit
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                  <Typography variant="body2" sx={{ mt: 1, color: '#38b197'}}>
                    ${deposit}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  };

  return (
    <div>
      <Head>
        <title> Numerical.Fi</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'} sx={{ mt: isDesktop ? 3 : 8 }}>
        <Grid
          container
          direction="column"
          spacing={3}
          sx={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {' '}
          {/* Change to a column direction for vertical stacking */}
          {/* ... your VaultItem usage ... */}
          <VaultItem
            title="Vault 1 - Stable - Rewards"
            apr="100"
            myNGLP="0 nGLP" // Replace with actual value
            deposit="44,449.64"
            logoSrc="/assets/illustrations/shape2color.png" // Replace with the actual path to your logo image          
            id="1" 
          />
          <VaultItem
            title="Vault 2 - Stable - Dividends"
            apr="50"
            myNGLP="0 nGLP" // Replace with actual value
            deposit="44,449.64"
            logoSrc="/assets/illustrations/shape2color.png" // Replace with the actual path to your logo image
            id="2"
          />
          <VaultItem
            title="Vault 1 - Volatile - Rewards"
            apr="37.01"
            myNGLP="0 nGLP" // Replace with actual value
            deposit="44,449.64"
            logoSrc="/assets/illustrations/shape2color.png" // Replace with the actual path to your logo image
            id="3"
          />
          <VaultItem
            title="Vault 2 - Volatile - Dividends"
            apr="37.01"
            myNGLP="0 nGLP" // Replace with actual value
            deposit="44,449.64"
            logoSrc="/assets/illustrations/shape2color.png" // Replace with the actual path to your logo image
            id="4"
          />
          {/* ... rest of your items ... */}
        </Grid>
      </Container>
    </div>
  );
}
