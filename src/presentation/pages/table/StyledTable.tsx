import React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Market } from '../../../domain/models/market';

type Props = {
  markets: Market[] | []
}

const StyledTable: React.FC<Props> = ({ markets }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Account Name</TableCell>
          <TableCell align="left">Amount</TableCell>
          <TableCell align="left">Currency Name</TableCell>
          <TableCell align="left">Transaction Type</TableCell>
          <TableCell align="left">Transaction Description</TableCell>
          <TableCell align="left">Credit Card Number</TableCell>
          <TableCell align="left">Credit Card Issuer</TableCell>
          <TableCell align="left">Credit Card CCV</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {markets.map((row, key) => (
          <TableRow
            key={key}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">{row.accountName}</TableCell>
            <TableCell align="left">{row.amount}</TableCell>
            <TableCell align="left">{row.currencyName}</TableCell>
            <TableCell align="left">{row.trasactionType}</TableCell>
            <TableCell align="left">{row.transactionDescription}</TableCell>
            <TableCell align="left">{row.creditCardNumber}</TableCell>
            <TableCell align="left">{row.creditCardIssuer}</TableCell>
            <TableCell align="left">{row.creditCardCCV}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default StyledTable