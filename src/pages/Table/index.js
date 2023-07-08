import { useEffect, useRef, useState } from "react";
import { Container, InputAdornment, TableBody, TableContainer, TableHead, TableRow, TextField, Table as MUITable } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

import {
  ContentWrapper,
  CustomLink,
  Header,
  TableWrapper,
  CustomTableCell,
  EmptyMessage,
} from './styles';
import { io } from "socket.io-client";
import { ENDPOINT } from "../../constants";
import { colors } from "../../patterns/colors";
import { typo } from "../../patterns/typo";

export const Table = () => {
  const socketIo = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    socketIo.current = io(ENDPOINT);

    socketIo.current.on(
      "market-data",
      (data) => data && setMarketData((md) => [...md, data])
    );

    return () => socketIo.current.disconnect();
  }, []);

  return (
    <ContentWrapper>
      <Container fixed>
        <Header>
          <CustomLink to='/user'>
            See User
            <AccountCircleIcon/>
          </CustomLink>
        </Header>
        <TextField
          placeholder="Search by account"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={`
            background-color: ${colors.white};
            input {
              font-size: ${typo.base};
            }
            fieldset {
              border-width: 0 !important;
            }
          `}
          fullWidth
        />
        {marketData.length > 0 ? (
          <TableWrapper>
            <TableContainer sx={{ maxHeight: 400, border: `solid 1px ${colors.white}` }}>
              <MUITable stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <CustomTableCell isHead style={{ minWidth: '150px' }}>
                      Account Name
                    </CustomTableCell>
                    <CustomTableCell isHead style={{ minWidth: '100px' }}>
                      Amount
                    </CustomTableCell>
                    <CustomTableCell isHead style={{ minWidth: '150px' }}>
                      Currency Name
                    </CustomTableCell>
                    <CustomTableCell isHead style={{ minWidth: '150px' }}>
                      Transaction Type
                    </CustomTableCell>
                    <CustomTableCell isHead style={{ minWidth: '350px' }}>
                      Transaction Description
                    </CustomTableCell>
                    <CustomTableCell isHead style={{ minWidth: '150px' }}>
                      Credit Card Number
                    </CustomTableCell>
                    <CustomTableCell isHead style={{ minWidth: '150px' }}>
                      Credit Card Issuer
                    </CustomTableCell>
                    <CustomTableCell isHead style={{ minWidth: '100px' }}>
                      Credit Card CVV
                    </CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {marketData
                    .filter((md) => {
                      if(searchValue.trim() === '') {
                        return true
                      }
                      return md.account_name.toLowerCase().includes(searchValue.toLowerCase())
                    })
                    .map((md) => (
                      <TableRow hover>
                        <CustomTableCell style={{ maxWidth: '150px' }}>{md.account_name}</CustomTableCell>
                        <CustomTableCell style={{ maxWidth: '100px' }}>{md.amount}</CustomTableCell>
                        <CustomTableCell style={{ maxWidth: '150px' }}>{md.currency_name}</CustomTableCell>
                        <CustomTableCell style={{ maxWidth: '150px' }}>{md.transaction_type}</CustomTableCell>
                        <CustomTableCell style={{ maxWidth: '350px' }}>{md.transaction_description}</CustomTableCell>
                        <CustomTableCell style={{ maxWidth: '150px' }}>{md.credit_card_number}</CustomTableCell>
                        <CustomTableCell style={{ maxWidth: '150px' }}>{md.credit_card_issuer}</CustomTableCell>
                        <CustomTableCell style={{ maxWidth: '100px' }}>{md.credit_card_cvv}</CustomTableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </MUITable>
            </TableContainer>
          </TableWrapper>
        ) : (<EmptyMessage>Transactions not found</EmptyMessage>)}
      </Container>
    </ContentWrapper>
  );
}