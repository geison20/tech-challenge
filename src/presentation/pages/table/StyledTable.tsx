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
          <TableCell align="right">Amount</TableCell>
          <TableCell align="right">Currency Name</TableCell>
          <TableCell align="right">Transaction Type</TableCell>
          <TableCell align="right">Transaction Description</TableCell>
          <TableCell align="right">Credit Card Number</TableCell>
          <TableCell align="right">Credit Card Issuer</TableCell>
          <TableCell align="right">Credit Card CCV</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {markets.map((row) => (
          <TableRow
            key={row.accountName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">{row.accountName}</TableCell>
            <TableCell align="right">{row.amount}</TableCell>
            <TableCell align="right">{row.currencyName}</TableCell>
            <TableCell align="right">{row.trasactionType}</TableCell>
            <TableCell align="right">{row.transactionDescription}</TableCell>
            <TableCell align="right">{row.creditCardNumber}</TableCell>
            <TableCell align="right">{row.creditCardIssuer}</TableCell>
            <TableCell align="right">{row.creditCardCCV}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default StyledTable