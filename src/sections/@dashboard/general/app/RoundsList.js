import PropTypes from 'prop-types';
import { useState } from 'react';
import { format } from 'date-fns';
import { sentenceCase } from 'change-case';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Stack,
  Table,
  Avatar,
  Button,
  Divider,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  CardHeader,
  Typography,
  IconButton,
  TableContainer,
} from '@mui/material';
// components
import Label from '../../../../components/label';
import Iconify from '../../../../components/iconify';
import Scrollbar from '../../../../components/scrollbar';
import MenuPopover from '../../../../components/menu-popover';
import { TableHeadCustom } from '../../../../components/table';

// ----------------------------------------------------------------------

RoundsList.propTypes = {
  title: PropTypes.string,
  tableData: PropTypes.array,
  subheader: PropTypes.string,
  tableLabels: PropTypes.array,
};

export default function RoundsList({ title, subheader, tableLabels, tableData, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: 'unset' }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHeadCustom headLabel={tableLabels} />

            <TableBody>
              {tableData.map((row) => (
                <RoundsListRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View All
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

RoundsListRow.propTypes = {
  row: PropTypes.shape({
    roundId: PropTypes.string,
    startingTimestamp: PropTypes.string,
    closedTimestamp: PropTypes.string,
    endedTimestamp: PropTypes.string,
    totalTickets: PropTypes.string,
    totalPlayers: PropTypes.string,
    totalPrizePool: PropTypes.string,
    active: PropTypes.bool,
    winner: PropTypes.object,
  }),
};

function RoundsListRow({ row }) {
  const startTime = new Date(row.startingTimestamp);
  const closeTime = new Date(row.closedTimestamp);
  const endTime = new Date(row.endedTimestamp);

  const [open, setOpen] = useState(false);

  return (
    <TableRow>
      <TableCell>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="subtitle2">{row.roundId}</Typography>
        </Stack>
      </TableCell>
      <TableCell>
        {`${startTime.toLocaleDateString()}`}
        <br />
        {`${startTime.toLocaleTimeString()}`}
      </TableCell>
      <TableCell>
        {`${closeTime.toLocaleDateString()}`}
        <br />
        {`${closeTime.toLocaleTimeString()}`}
      </TableCell>
      <TableCell>
        {`${endTime.toLocaleDateString()}`}
        <br />
        {`${endTime.toLocaleTimeString()}`}
      </TableCell>
      <TableCell>{row.totalTickets}</TableCell>
      <TableCell>{row.totalPlayers}</TableCell>
      <TableCell>{row.totalPrizePool}</TableCell>
      <TableCell>{row.active.toString()}</TableCell>

      <TableCell>
        {`Biggest buy: ${row.winner.currentBiggestBuy}`}
        <br />
        {!open ? (
          <Button
            size="small"
            sx={{ fontSize: '12px', mx: 'auto' }}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            View More
          </Button>
        ) : (
          ''
        )}
        {open ? (
          <>
            {`Biggest buyer: ${row.winner.currentBiggestBuyer}`}
            <br />
            {`Daily winners: ${row.winner.dailyWinners}`}
            <br />
            {`Weekly winners: ${row.winner.weeklyWinners}`}
            <br />
            {`Monthly winners: ${row.winner.monthlyWinners}`}
            <br />
            {`Biyearly winners: ${row.winner.biyearlyWinners}`}
            <br />
            {`Yearly winners: ${row.winner.yearlyWinners}`}
            <br />
            {`Grand winner: ${row.winner.grandWinner}`}
            <br />
          </>
        ) : (
          ''
        )}
        {open ? (
          <Button size="small" color="inherit" onClick={() => setOpen(false)}>
            View Less
          </Button>
        ) : (
          ''
        )}
      </TableCell>
    </TableRow>
  );
}
