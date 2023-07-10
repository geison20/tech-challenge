import { useEffect, useState } from "react";
import { GetMarket } from "../../domain/usecases/get-market";
import { GetUser } from "../../domain/usecases/get-user";

function useFetch(remote: GetUser | GetMarket, callback: (e: any) => any) {
  useEffect(() => {
    remote.get(callback)
    return () => remote.disconnect()
  }, [])
}

export default useFetch