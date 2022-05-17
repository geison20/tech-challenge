import { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";

import io from "socket.io-client";

const ENDPOINT = `http://${window.location.hostname}:3003`;

const App = () => {
  const socketIo = useRef(null);
  const [client, setClient] = useState(null);

  useEffect(() => {
    socketIo.current = io(ENDPOINT);

    socketIo.current.on(
      "client-connected",
      (client) => client && setClient(client)
    );

    socketIo.current.on("market-data", (data) => console.log({ data }));

    return () => socketIo.current.disconnect();
  }, []);

  if (!client) {
    return <Typography>There's no one client connected at moment</Typography>;
  }

  return <Typography>Client Connected: {client?.first_name}</Typography>;
};

export default App;
