import { useEffect, useState} from 'react';
// @mui
import { Stack, Button, Typography, Box, IconButton } from '@mui/material';
// auth
import { useAuthContext } from '../../../auth/useAuthContext';
// locales
import { useLocales } from '../../../locales';
// routes
import { PATH_DOCS } from '../../../routes/paths';
import Image from 'next/image';
import SvgColor from 'components/svg-color';
import { useSettingsContext } from 'components/settings';

// ----------------------------------------------------------------------

export default function NavDocs() {
  const { translate } = useLocales();

  const { themeMode, onToggleMode } = useSettingsContext();

  return (
    <Stack
      spacing={3}
      sx={{
        px: 5,
        pb: 5,
        mt: 10,
        width: 1,
        display: 'block',
        textAlign: 'center',
      }}
    >
      {/* <Box component="img" src="/assets/illustrations/monkey.png" /> */}
      <Image src="/assets/illustrations/monkey.png" alt="monkey" width={200} height={200} />

      <div>
        {/* <Typography gutterBottom variant="subtitle1">
          
        </Typography> */}

        {/* <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
          {`${translate('docs.description')}`}
        </Typography> */}
      </div>

      {/* <IconButton color={themeMode === 'dark' ? 'warning' : 'default'} onClick={onToggleMode}>
        <SvgColor src={`/assets/icons/setting/ic_${themeMode === 'light' ? 'moon' : 'sun'}.svg`} />
      </IconButton> */}
    </Stack>
  );
}
