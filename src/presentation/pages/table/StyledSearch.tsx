import React, { useState } from "react"
import { Input } from '@mui/material';
import { Market } from '../../../domain/models/market';
import { termFilter } from "../../utils/filters";

type Props = {
  markets: Market[] | []
  onChange: (markets: Market[] | []) => void
}

const StyledSearch: React.FC<Props> = ({ markets, onChange }) => {
  const [term, setTerm] = useState()

  const handlerChange = (e: any) => {
    const { value } = e.target
    setTerm(value)

    const filteredMarkets = termFilter(markets, value)
    onChange(filteredMarkets)
  }

  return (
    <Input value={term} onChange={handlerChange}/>
  )
}

export default StyledSearch