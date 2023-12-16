import React from 'react';
import {
  Box,
  Card,
  Tabs,
  Tab,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Switch,
  FormControlLabel,
  Stack,
} from '@mui/material';
import Iconify from '../../../../components/iconify';

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

function InputWithIcon({ icon, placeholder, endAdornment }) {
  return (
    <TextField
      fullWidth
      type="number"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Iconify icon={icon} width={24} height={24} />
          </InputAdornment>
        ),
        endAdornment: endAdornment ? (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ) : null,
      }}
      placeholder={placeholder}
      variant="outlined"
      sx={{
        mb: 2,
        input: {
          // color: 'text.primary' // Adjust as needed for your theme
        },
        '& .MuiOutlinedInput-root': {
          background: 'background.paper', // Adjust as needed for your theme
          border: '1px solid', // Custom border
          borderColor: 'divider', // Adjust as needed for your theme
        },
      }}
    />
  );
}

export default function DepositWithdraw() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Card
      sx={{ width: '100%', borderRadius: 1 }}
    >
      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="deposit-withdraw-tabs"
        variant="fullWidth"
        centered
        sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
      >
        <Tab
          label="Deposit"
          sx={{
            color: 'text.primary',
            borderBottom: tabValue === 0 ? 2 : 0,
            borderColor: 'primary.main',
          }}
        />
        <Tab
          label="Withdraw"
          sx={{
            color: 'text.primary',
            borderBottom: tabValue === 1 ? 2 : 0,
            borderColor: 'primary.main',
          }}
        />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        {/* Deposit Content */}
        <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
          Max Deposit Limit: 15,297,303.50 GLP
        </Typography>
        <InputWithIcon icon="cryptocurrency:glp" placeholder="0.00" endAdornment="GLP" />
        {/* Percentage Buttons */}
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
        <InputWithIcon icon="cryptocurrency:glp" placeholder="0" endAdornment="nGLP" />
        <Typography variant="subtitle2" gutterBottom sx={{ color: 'text.secondary' }}>
          Fee Detail
        </Typography>       
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        {/* Withdraw Content */}
        <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>Max Withdraw Limit: 9,744,414.74 nGLP</Typography>
        <InputWithIcon icon="cryptocurrency:glp" placeholder="0.00" endAdornment="nGLP" />
        <Stack direction="row" spacing={1} mb={2} justifyContent="center">
          {['25%', '50%', '75%', 'MAX'].map((percent) => (
            <Button key={percent} variant="outlined" sx={{ color: 'text.primary', borderColor: 'text.secondary' }}>{percent}</Button>
          ))}
        </Stack>
        <FormControlLabel
          control={<Switch checked />}
          label="Fee Optimization"
          sx={{ mb: 2, color: 'text.secondary' }}
        />
        <InputWithIcon icon="cryptocurrency:glp" placeholder="0" endAdornment="GLP+DAI" />
        <Typography variant="subtitle2" gutterBottom sx={{ color: 'text.secondary' }}>
          Fee Detail
        </Typography>       
      </TabPanel>
      {/* Deposit/Withdraw Button */}
      <Box sx={{ p: 2 }}>
        <Button variant="contained" fullWidth sx={{ mt: 2, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}>
          {tabValue === 0 ? 'Deposit' : 'Withdraw'}
        </Button>
      </Box>
    </Card>
  );
}
