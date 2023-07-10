import React from "react"
import TableCell from '@mui/material/TableCell';

const styles = (th: boolean) => {
  const simpleRow = th
    ? {}
    : {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: 100 
    }

  return {
    color: 'white',
    backgroundColor: '#001e3e',
    ...simpleRow
  }
}

const StyledTableCell = (props: any) => 
  <TableCell sx={styles(props.th)} align="left" {...props}>{props.children}</TableCell>

export default StyledTableCell