import React, { useState } from "react"
import { Input } from '@mui/material';
import { Market } from '../../../domain/models/market';
import { termFilter } from "../../utils/filters";
import Search from '@mui/icons-material/Search';

type Props = {
  markets: Market[] | []
  onChange: (markets: Market[] | []) => void
}

const styles = {
  background: 'white',
  padding: 1,
  width: 300
}

const StyledSearch: React.FC<Props> = ({ markets, onChange }) => {
  const [term, setTerm] = useState()

  const handlerChange = (e: any) => {
    const { value } = e.target
    setTerm(value)

    const filteredMarkets = termFilter(markets, value, 'accountName')
    onChange(filteredMarkets)
  }

  return (
    <Input
      value={term}
      onChange={handlerChange}
      disableUnderline
      sx={styles}
      placeholder="Search by account"
      endAdornment={ <Search sx={{ color: 'grey' }}/>}
    />
  )
}

export default StyledSearch