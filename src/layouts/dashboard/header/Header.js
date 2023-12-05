import { useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
// @mui
import { Stack, AppBar, Toolbar, IconButton, Skeleton, Card, Box } from '@mui/material';
// import useTheme
import { styled, useTheme } from '@mui/material/styles';
// utils
import { useAccount } from 'wagmi';
import Link from 'next/link';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { NAV } from '../../../config-global';
// components
import Logo from '../../../components/logo';
import Iconify from '../../../components/iconify';
import { useSettingsContext } from '../../../components/settings';
//
import ConnectButton from './ConnectButton';
import AccountPopover from './AccountPopover';
import { useLotteryAccountInfo } from 'redux/slices/lottery/hooks';
import { useAuthContext } from 'auth/useAuthContext';

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  const { address: account } = useAccount();

  const { themeLayout } = useSettingsContext();
  const { theme } = useTheme();

  const accountInfo = useLotteryAccountInfo();

  const isNavHorizontal = themeLayout === 'horizontal';

  const isDesktop = useResponsive('up', 'lg');

  const pages = [
    'Vault',
    //  'Earn'
  ];

  const { getUser } = useAuthContext();

  // useEffect(() => {
  //   getUser(account);
  // }, [account]);

  const isLoading = !Object.keys(accountInfo).length;
  const renderContent = (
    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: isDesktop ? '50%' : '90%', zIndex: 999 }}>
      <Logo />
      <div style={{marginRight: isDesktop ? undefined : '1rem', marginLeft: '1rem'}} className="w-[25%] justify-center">Numerical Finance</div>

      {/* </div> */}
      <div className="xl:flex w-[100%] justify-center text-sm font-normal">
        {pages.map((page, i) => (
          <Link
            href={`/dashboard/${page.toLowerCase() === 'vault' ? 'app' : page.toLowerCase()}`}
            key={i}
            className={`${i === pages.length - 1 ? '' : ''} px-3 uppercase transition  mr-10`}
          >
            {page}
          </Link>
        ))}
      </div>

      {!isDesktop && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1, color: 'text.primary' }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Box style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
        <ConnectButton />
        <AccountPopover />
      </Box>
    </Box>
  );

  return (
    <AppBar
      style={{
        top: 0,
        left: 0,
        right: 0,
        position: 'fixed',
        // zIndex: 0, // Ensure it's above other elements
        boxShadow: 'none', // Remove box shadow to match the flat design
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '64px',
          padding: theme?.spacing(0, 2),
          [theme?.breakpoints.up('sm')]: {
            padding: theme?.spacing(0, 4),
          },
        }}
      >
        {renderContent}
      </div>
      <div className="absolute w-[calc(100%-16px)] h-full rounded-lg left-2 top-[7px] z-0" />
    </AppBar>
  );
}
