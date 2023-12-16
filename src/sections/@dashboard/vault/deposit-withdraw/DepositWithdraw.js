import React, { useState } from 'react';
import {
  Box,
  Card,
  IconButton,
  Tabs,
  Tab,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Switch,
  FormControlLabel,
  Stack,
  styled,
} from '@mui/material';
import Iconify from '../../../../components/iconify';

const CurrencyToggle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function InputWithIcon({ value, balance }) {
  const [currency, setCurrency] = useState('dai'); // default currency
  const toggleCurrency = () => {
    setCurrency(currency === 'dai' ? 'glp' : 'dai');
  };

  // Placeholder for currency icons
  const currencyIcon = currency === 'dai' ? 'cryptocurrency:dai' : 'cryptocurrency:glp';
  const currencyEndAdornment = currency === 'dai' ? 'DAI' : 'nGLP';

  return (
    <Box sx={{ mb: 2, p: 2, bgcolor: 'action.hover', borderRadius: 2 }}>
      <CurrencyToggle onClick={toggleCurrency}>
        <Iconify icon={currencyIcon} width={24} height={24} />
        <Typography variant="body2" sx={{}}>
          {currency.toUpperCase()}
        </Typography>
      </CurrencyToggle>
      <TextField
        fullWidth
        type="number"
        value={value}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Typography variant="body2" sx={{ color: 'gray' }}>
                {value} {currencyEndAdornment}
              </Typography>
            </InputAdornment>
          ),
          disableUnderline: true,
          sx: {
            fontSize: '1.5rem',
            // color: 'text.primary',
            '&.MuiInputBase-input': {
              textAlign: 'right',
            },
          },
        }}
        variant="filled"
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <IconButton onClick={() => {}} size="small">
          <Iconify icon="ant-design:wallet-outlined" />
        </IconButton>
        <Typography variant="body2" sx={{ color: 'gray' }}>
          = ${balance} USD
        </Typography>
      </Box>
    </Box>
  );
}

function OutputWithIcon({ icon, value }) {
  return (
    <Box sx={{ mb: 2, p: 2, bgcolor: 'action.hover', borderRadius: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <IconButton disabled>
          <Iconify icon={icon} width={24} height={24} />
        </IconButton>
      </Box>
      <TextField
        fullWidth
        type="number"
        value={value}
        InputProps={{
          readOnly: true,
          disableUnderline: true,
          sx: {
            fontSize: '1.5rem',
            color: 'text.primary',
            '&.MuiInputBase-input': {
              textAlign: 'center',
            },
          },
        }}
        variant="filled"
      />
      <Typography variant="body2" sx={{ color: 'gray', mt: 1, display: 'flex', justifyContent: 'right' }}>
        = ${value} USD
      </Typography>
    </Box>
  );
}

export default function DepositWithdraw() {
  const [tabValue, setTabValue] = useState(0);
  const [selectedCurrencyIndex, setSelectedCurrencyIndex] = useState(0); // default to 'glp'

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCurrencyToggle = (currency) => {
    setSelectedCurrencyIndex(currency); // Update the selected currency
  };

  return (
    <Card sx={{ width: '100%', borderRadius: 1 }}>
      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="deposit-withdraw-tabs"
        variant="fullWidth"
        centered
        sx={{
          '.MuiTabs-indicator': {
            top: 0,
            bgcolor: 'primary.main', // Color of the indicator
          },
        }}
      >
        <Tab
          label="Deposit"
          sx={{
            color: 'text.primary',
            borderBottom: tabValue === 0 ? 2 : 0,
            borderColor: '#38b197',
          }}
        />
        <Tab
          label="Withdraw"
          sx={{
            color: 'text.primary',
            borderBottom: tabValue === 1 ? 2 : 0,
            borderColor: '#38b197',
          }}
        />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        {/* Deposit Content */}
        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          <Typography variant="subtitle1" gutterBottom sx={{ color: 'gray' }}>
            Max Deposit Limit:
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ ml: 1 }}>
            15,297,303.50 GLP
          </Typography>
        </Box>
        <InputWithIcon icon="cryptocurrency:glp" placeholder="0.00" endAdornment="nGLP" />
        <Stack direction="row" spacing={1} mb={2} justifyContent="center">
          {['25%', '50%', '75%', 'MAX'].map((percent) => (
            <Button
              key={percent}
              variant="outlined"
              sx={{ color: 'text.primary', borderColor: 'text.secondary' }}
            >
              {percent}
            </Button>
          ))}
        </Stack>
        <OutputWithIcon icon="cryptocurrency:dai" value={0} />
        <Typography variant="subtitle2" gutterBottom sx={{ color: 'text.secondary' }}>
          Fee Detail
        </Typography>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        {/* Withdraw Content */}
        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          <Typography variant="subtitle1" gutterBottom sx={{ color: 'gray' }}>
            Max Withdraw Limit:
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ ml: 1 }}>
            15,297,303.50 GLP
          </Typography>
        </Box>
        <InputWithIcon icon="cryptocurrency:glp" placeholder="0.00" endAdornment="nGLP" />
        <Stack direction="row" spacing={1} mb={2} justifyContent="center">
          {['25%', '50%', '75%', 'MAX'].map((percent) => (
            <Button
              key={percent}
              variant="outlined"
              sx={{ color: 'text.primary', borderColor: 'text.secondary' }}
            >
              {percent}
            </Button>
          ))}
        </Stack>
        <FormControlLabel
          control={<Switch checked />}
          label="Fee Optimization"
          sx={{ mb: 2, color: 'text.secondary' }}
        />
        <OutputWithIcon icon="cryptocurrency:dai" value={0} />
        <Typography variant="subtitle2" gutterBottom sx={{ color: 'text.secondary' }}>
          Fee Detail
        </Typography>
      </TabPanel>
      {/* Deposit/Withdraw Button */}
      <Box>
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            bgcolor: 'primary.main',
            '&:hover': { bgcolor: 'primary.dark' },
            height: '50px', // Adjust the height as needed
          }}
        >
          {tabValue === 0 ? 'Deposit' : 'Withdraw'}
        </Button>
      </Box>
    </Card>
  );
}
