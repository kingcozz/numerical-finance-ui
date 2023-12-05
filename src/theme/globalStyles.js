// @mui
import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        },
        '#__next': {
          width: '100%',
          height: '100%',
        },

        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        '.box-shadow': {
          boxShadow:
            '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        },
        '.slick-list': {
          height: '100%',
        },
        '.slick-track': {
          height: '100%',
          display: 'flex',
        },
        '.slick-slide>div': {
          height: '100%',
          overflowY: 'scroll',
        },
        '.slick-slide': {
          height: 'unset',
        },
        '.MuiSkeleton-root': {
          backgroundColor: 'rgb(150 150 150 / 16%)!important',
        },
        '.MuiSkeleton-root::after': {
          background: 'linear-gradient(90deg,transparent,rgb(150 150 150 / 8%),transparent)!important',
        },
        '.yellowScroll::-webkit-scrollbar': {
          width: "16px",
          height: "16px",
          display: "block !important"
        },
        '.yellowScroll::-webkit-scrollbar-thumb:vertical': {
          border: "6px solid rgba(0, 0, 0, 0)",
          backgroundClip: "padding-box",
          borderRadius: "9999px",
          backgroundColor: "#eebb19",
        }
      }}
    />
  );

  return inputGlobalStyles;
}
