import PropTypes from 'prop-types';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { useEffect, useState } from 'react';
import { bgGradient } from '../../../../utils/cssStyles';
import { fShortenNumber } from '../../../../utils/formatNumber';
// components
import Iconify from '../../../../components/iconify';

// ----------------------------------------------------------------------

AppTimeStamp.propTypes = {
  sx: PropTypes.object,
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  timeStamp: PropTypes.number,
};

export default function AppTimeStamp({ title, timeStamp, icon, color = 'primary', sx, ...other }) {
  const theme = useTheme();

  const getReturnValues = (countDown) => {
    const _time = Math.floor(countDown / 1000);
    // calculate time left
    const days = Math.floor(_time / (3600 * 24));
    const hours = Math.floor((_time % 86400) / 3600);
    const minutes = Math.floor((_time % 3600) / 60);
    const seconds = Math.floor(_time % 60);

    return [days, hours, minutes, seconds];
  };

  const countDownDate = timeStamp * 1000;

  const [countDown, setCountDown] = useState(
    countDownDate - Date.now() > 0 ? countDownDate - Date.now() : 0
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (countDownDate - Date.now() < 0) {
        setCountDown(0);
        clearInterval(interval);
        return;
      }
      setCountDown(countDownDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const times = getReturnValues(countDown);

  function formatNumber(num) {
    return `0${num}`.slice(-2);
  }
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: theme.palette[color].darker,
        bgcolor: theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <Iconify
        icon={icon}
        sx={{
          mb: 3,
          p: 2.5,
          width: 64,
          height: 64,
          borderRadius: '50%',
          color: theme.palette[color].dark,
          ...bgGradient({
            direction: '135deg',
            startColor: `${alpha(theme.palette[color].dark, 0)} 0%`,
            endColor: `${alpha(theme.palette[color].dark, 0.24)} 100%`,
          }),
        }}
      />

      <Typography variant="h3">{`${formatNumber(times[0])}:${formatNumber(times[1])}:${formatNumber(
        times[2]
      )}:${formatNumber(times[3])}`}</Typography>

      <Typography variant="h5" sx={{ opacity: 0.64 }}>
        {title}
      </Typography>
    </Card>
  );
}
