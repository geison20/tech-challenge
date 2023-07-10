import { useState } from "react";
import { termFilter } from "../utils/filters";

//TODO: implent and use properly
function useChange(data: any[] | [], cb: (e: any[] | []) => void, field: string) {
  const [value, setValue] = useState('')
  
  function handleChange(e: any): any {
    setValue(e.target.value);
    const filtered = termFilter(data, value, field)
    cb(filtered)
  }

  return [value, handleChange]
  
}

export default useChange