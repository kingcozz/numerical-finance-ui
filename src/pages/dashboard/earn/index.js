import React from 'react';
import { Box, Card, CardContent, Typography, Button, Divider, Stack, Grid } from '@mui/material';
import Head from 'next/head';
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

EarnPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// Custom components for parts of the staking interface
const StatDisplay = ({ label, value, sublabel }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
    <Typography variant="subtitle1">{label}</Typography>
    <Box sx={{ textAlign: 'right' }}>
      <Typography variant="body1">{value}</Typography>
      <Typography variant="caption" color="text.secondary">
        {sublabel}
      </Typography>
    </Box>
  </Box>
);

const StakeCard = ({ title, wallet, staked, totalStaked, totalSupply }) => (
  <Card sx={{ bgcolor: 'background.default', m: 2 }}>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <StatDisplay
        label="My Wallet"
        value={`${wallet.amount} ${title}`}
        sublabel={`($${wallet.value})`}
      />
      <StatDisplay
        label="Staked"
        value={`${staked.amount} ${title}`}
        sublabel={`($${staked.value})`}
      />
      <Divider light />
      <StatDisplay
        label="Total Staked"
        value={totalStaked.amount}
        sublabel={`($${totalStaked.value})`}
      />
      <StatDisplay
        label="Total Supply"
        value={totalSupply.amount}
        sublabel={`($${totalSupply.value})`}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button variant="contained">Stake</Button>
        <Button variant="outlined">Unstake</Button>
      </Box>
    </CardContent>
  </Card>
);

export default function EarnPage() {
  const { themeStretch } = useSettingsContext();
  const isDesktop = useResponsive('up', 'lg');
  return (
    <Box sx={{ p: 4 }}>
      <Card sx={{ bgcolor: 'background.default', mb: 4 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom component="div">
            Stake
          </Typography>
          <Typography
            variant="h3"
            component="div"
            sx={{ display: 'flex', alignItems: 'center', mb: 3 }}
          >
            APR 5.06%{' '}
            <Typography variant="body1" color="primary" sx={{ ml: 1 }}>
              Fee Booster 100%
            </Typography>
          </Typography>
          <Divider light />
          {/* Placeholder for other details and cards */}
          <Typography variant="subtitle1" component="div" sx={{ mt: 2 }}>
            Total Rewards $0.00
          </Typography>
          <Typography variant="subtitle1" component="div">
            esNEU 0.00 ($0.00)
          </Typography>
          <Typography variant="subtitle1" component="div">
            DAI 0.00 ($0.00)
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" sx={{ mr: 1 }}>
              Claim & Stake
            </Button>
            <Button variant="outlined">Claim</Button>
          </Box>
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <StakeCard
            title="NEU"
            wallet={{ amount: '0.00', value: '0.00' }}
            staked={{ amount: '0.00', value: '0.00' }}
            totalStaked={{ amount: '37,563.90 NEU', value: '77,720' }}
            totalSupply={{ amount: '5,969,985.51 NEU', value: '1,248,747' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StakeCard
            title="esNEU"
            wallet={{ amount: '0.00', value: '0.00' }}
            staked={{ amount: '0.00', value: '0.00' }}
            totalStaked={{ amount: '150,006.92 esNEU', value: '3,377' }}
            totalSupply={{ amount: '2,291,443.87 esNEU', value: '479,303' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
