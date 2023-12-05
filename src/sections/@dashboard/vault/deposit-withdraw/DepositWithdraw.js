import React from 'react';
import { Box, Card, Tabs, Tab, Typography, Button, TextField, InputAdornment, Switch, FormControlLabel, Stack } from '@mui/material';
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function InputWithIcon({ icon, placeholder, endAdornment }) {
  return (
    <TextField
      fullWidth
      type="number"
      InputProps={{
        startAdornment: <InputAdornment position="start"><Iconify icon={icon} /></InputAdornment>,
        endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
      }}
      placeholder={placeholder}
      variant="outlined"
      sx={{ mb: 2 }}
    />
  );
}

export default function DepositWithdraw() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Card sx={{ width: '100%', borderRadius: 1 }}>
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="deposit-withdraw-tabs" variant="fullWidth" centered>
        <Tab label="Deposit" />
        <Tab label="Withdraw" />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        {/* Deposit Content */}
        <Typography variant="subtitle1" gutterBottom>Max Deposit Limit: 10,686,722.01 GLP</Typography>
        <InputWithIcon icon="cryptocurrency:glp" placeholder="0.00" endAdornment="GLP" />
        <Stack direction="row" spacing={1} mb={2}>
          <Button variant="outlined">25%</Button>
          <Button variant="outlined">50%</Button>
          <Button variant="outlined">75%</Button>
          <Button variant="outlined">MAX</Button>
        </Stack>
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          <Iconify icon="akar-icons:circle-check-fill" sx={{ color: 'success.main', mr: 1 }} />
          You can buy GLP with assets from other chains.
        </Typography>
        <InputWithIcon icon="cryptocurrency:glp" placeholder="0" endAdornment="nGLP" />
        <Typography variant="subtitle2" gutterBottom>
          Fee Detail
        </Typography>
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>Deposit</Button>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        {/* Withdraw Content */}
        <Typography variant="subtitle1" gutterBottom>Max Withdraw Limit: 7,788,441.81 GLP</Typography>
        <InputWithIcon icon="cryptocurrency:glp" placeholder="0.00" endAdornment="nGLP" />
        <Stack direction="row" spacing={1} mb={2}>
          <Button variant="outlined">25%</Button>
          <Button variant="outlined">50%</Button>
          <Button variant="outlined">75%</Button>
          <Button variant="outlined">MAX</Button>
        </Stack>
        <Typography variant="subtitle2" gutterBottom>
          Fee Optimization
        </Typography>
        <Switch checked={true} />
        <InputWithIcon icon="cryptocurrency:glp" placeholder="0" endAdornment="GLP+DAI" />
        <Typography variant="subtitle2" gutterBottom>
          Fee Detail
        </Typography>
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>Withdraw</Button>
      </TabPanel>
    </Card>
  );
}
