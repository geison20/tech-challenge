import React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Market } from '../../../domain/models/market';
import StyledTableCell from "./StyledTableCell";

type Props = {
  markets: Market[] | []
}

const styles = {
  container: {
    backgroundColor: '#001e3e',
    maxHeight: 440,
  },
  table: {
    minWidth: 650,
  }
}

const StyledTable: React.FC<Props> = ({ markets }) => (
  <TableContainer sx={styles.container} component={Paper}>
    <Table stickyHeader sx={styles.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <StyledTableCell >Account Name</StyledTableCell>
          <StyledTableCell th align="left">Amount</StyledTableCell>
          <StyledTableCell th align="left">Currency Name</StyledTableCell>
          <StyledTableCell th align="left">Transaction Type</StyledTableCell>
          <StyledTableCell th align="left">Transaction Description</StyledTableCell>
          <StyledTableCell th align="left">Credit Card Number</StyledTableCell>
          <StyledTableCell th align="left">Credit Card Issuer</StyledTableCell>
          <StyledTableCell th align="left">Credit Card CCV</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {markets.map((row, key) => (
          <TableRow
            key={key}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <StyledTableCell th component="th" scope="row">{row.accountName}</StyledTableCell>
            <StyledTableCell align="left">{row.amount}</StyledTableCell>
            <StyledTableCell align="left">{row.currencyName}</StyledTableCell>
            <StyledTableCell align="left">{row.trasactionType}</StyledTableCell>
            <StyledTableCell align="left">{row.transactionDescription}</StyledTableCell>
            <StyledTableCell align="left">{row.creditCardNumber}</StyledTableCell>
            <StyledTableCell align="left">{row.creditCardIssuer}</StyledTableCell>
            <StyledTableCell align="left">{row.creditCardCCV}</StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default StyledTable