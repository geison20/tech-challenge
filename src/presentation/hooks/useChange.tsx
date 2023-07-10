import { useState } from "react";
import { termFilter } from "../utils/filters";

//TODO: implent and use properly
function useChange(data: any[] | [], cb: (e: any[] | []) => void) {
  const [value, setValue] = useState('')
  
  function handleChange(e: any): any {
    setValue(e.target.value);
    const filtered = termFilter(data, value)
    cb(filtered)
  }

  return [value, handleChange]
  
}

export default useChange