/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, IconButton, Button } from '@mui/material';
// utils
import { useWeb3Modal } from '@web3modal/react';
import { useAccount, useDisconnect } from 'wagmi';
import { useAuthContext } from 'auth/useAuthContext';
import StyledImage from 'components/StyledImage';

export default function ConnectButton() {
  const { open, close } = useWeb3Modal();
  const { address: account, isConnected } = useAccount();
  const { disconnect } = useDisconnect({
    onError(error) {
      console.log('Error', error)
    },
    onSuccess(data) {
      console.log('Success', data)
    },
  });
  const ellipsis = account
    ? `${account.slice(0, 4)}...${account.substring(account.length - 5, account.length - 1)}`
    : '';

  const { user } = useAuthContext();
  console.log(user);

  return !isConnected ? (
    <div className="rounded-lg p-1.5">
      <Button
        variant="contained"
        size="lg"
        onClick={() => {
          console.log('Connecting');
          open()
        }}
        sx={{
          // background: '#288afb',
          fontWeight: '400',
          paddingY: 1.2,
          borderRadius: '6px',
          // ':hover': { background: '#0076ff', boxShadow: '0 8px 16px 0 #0076ff30' },
        }}
      >
        Connect
      </Button>
    </div>
  ) : (
    <Button
      onClick={(event) => {
        console.log('Disconnecting');
        event.preventDefault();
        event.stopPropagation();
        disconnect();
      }}
      sx={{
        borderRadius: '8px', // This gives the rounded border
        cursor: 'pointer',
        transition: 'opacity 0.2s',
        backgroundColor: 'color.secondary', // Replace with your desired background color
        color: 'white', // Ensures text color is white
        '&:hover': {
          backgroundColor: '#357a38', // Darken the color slightly on hover
          opacity: 0.8,
        },
        padding: { xs: '8px 0', sm: '8px' },
        marginRight: '1rem'
      }}
      variant="contained" // This gives the button a solid background color
    >
      <div className="flex items-center justify-center">{ellipsis}</div>
    </Button>
  );
}
