// i18n
import '../locales/i18n';

// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// lightbox
/* eslint-disable import/no-unresolved */
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// map
import 'mapbox-gl/dist/mapbox-gl.css';

// editor
import 'react-quill/dist/quill.snow.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
// ----------------------------------------------------------------------
import { Analytics } from '@vercel/analytics/react';

import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
// next
import Head from 'next/head';
// redux
import { Provider as ReduxProvider } from 'react-redux';
// @mui
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// redux
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { Chain } from '@wagmi/core';
import { bsc } from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { store } from '../redux/store';
// utils
import createEmotionCache from '../utils/createEmotionCache';
// theme
import ThemeProvider from '../theme';
// locales
import ThemeLocalization from '../locales';
// components
import { StyledChart } from '../components/chart';
import ProgressBar from '../components/progress-bar';
import SnackbarProvider from '../components/snackbar';
import { MotionLazyContainer } from '../components/animate';
import { ThemeSettings, SettingsProvider } from '../components/settings';

// Check our docs
// https://docs.minimals.cc/authentication/js-version

// import { AuthProvider } from '../auth/JwtContext';
// import { AuthProvider } from '../auth/Auth0Context';
import { AuthProvider } from '../auth/FirebaseContext';
// import { AuthProvider } from '../auth/AwsCognitoContext';
import '../index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { RefreshContextProvider } from 'contexts/RefreshContext';
import { ProjectInfoProvider } from 'hooks/useProjectinfo';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache();

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object,
};

// const customBscChain = {
//   id: 56,
//   name: 'Binance Smart Chain',
//   shortName: 'BSC',
//   nativeCurrency: {
//     name: 'BNB',
//     symbol: 'BNB',
//     decimals: 18,
//   },
//   rpcUrls: {
//     public: { http: 'https://rpc.phalcon.xyz/rpc_d387185d25474c8cb29d977d7dc615ed' },
//     default: { http: 'https://rpc.phalcon.xyz/rpc_d387185d25474c8cb29d977d7dc615ed' },
//   },
//   blockExplorers: {
//     etherscan: {
//       name: 'BscScan',
//       url: 'https://scan.phalcon.xyz/fork_b6ea40f3b254458097bf48283a708ca4/',
//     },
//   },
// };
// const phalconUrl = 'https://rpc.phalcon.xyz/rpc_2950b7772c8d43c6abf103991d25c57c';
// const customBscChain = {
//   id: 1,
//   name: 'ETH',
//   shortName: 'ETH',
//   nativeCurrency: {
//     name: 'ETH',
//     symbol: 'ETH',
//     decimals: 18,
//   },
//   rpcUrls: {
//     public: { http: phalconUrl },
//     default: { http: phalconUrl },
//   },
//   blockExplorers: {
//     etherscan: {
//       name: 'etherscan',
//       url: 'https://scan.phalcon.xyz/fork_d06e899b29db4c02915b3cc49fb918ea',
//     },
//   },
//   contracts: {
//     multicall3: {
//       address: '0xca11bde05977b3631167028862be2a173976ca11',
//       blockCreated: 14353601,
//     },
//   },
// };

const chains = [bsc];
const projectId = 'b34347e36ad9f693a4761274e6b3ffd9';

const { publicClient } = configureChains(chains, [
  // jsonRpcProvider({
  //   rpc: (chain) => ({
  //     http: phalconUrl,
  //   }),
  // }),
  w3mProvider({ projectId }),
]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="og:image" content="https://i.imgur.com/mCQ662U.png" />          
          <meta name="twitter:card" content="https://i.imgur.com/mCQ662U.png" />
          <meta name="og:title" content="Numerical Finance" />
        </Head>

        <AuthProvider>
          <WagmiConfig config={wagmiConfig}>
            <ReduxProvider store={store}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <SettingsProvider>
                  <MotionLazyContainer>
                    <ThemeProvider>
                      <ThemeSettings>
                        <ThemeLocalization>
                          <SnackbarProvider>
                            <RefreshContextProvider>
                              <ProjectInfoProvider>
                                <StyledChart />
                                <ProgressBar />
                                {getLayout(<Component {...pageProps} />)}
                                <Analytics />
                                <ToastContainer />
                              </ProjectInfoProvider>
                            </RefreshContextProvider>
                          </SnackbarProvider>
                        </ThemeLocalization>
                      </ThemeSettings>
                    </ThemeProvider>
                  </MotionLazyContainer>
                </SettingsProvider>
              </LocalizationProvider>
            </ReduxProvider>
          </WagmiConfig>
        </AuthProvider>
      </CacheProvider>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  ) : (
    ''
  );
}
