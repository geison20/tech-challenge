import { useEffect, useRef, useState } from "react";
import { Container } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
  ContentWrapper,
  CustomLink,
  BoxWrapper,
} from './styles';
import { UserBox } from "../../components/UserBox";
import { io } from "socket.io-client";
import { ENDPOINT } from "../../constants";

export const User = () => {
  const socketIo = useRef(null);
  const [client, setClient] = useState(null);

  useEffect(() => {
    socketIo.current = io(ENDPOINT);

    socketIo.current.on(
      "client-connected",
      (client) => client && setClient(client)
    );

    return () => socketIo.current.disconnect();
  }, []);

  if(!client) {
    return (
      <ContentWrapper>
        <Container fixed>
          Loading...
        </Container>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper>
      <Container fixed>
        <CustomLink to='/table'>
          <ArrowBackIcon/>
          Back to table
        </CustomLink>
        <BoxWrapper>
          <UserBox
            avatarLetter={client.first_name[0]}
            attributes={[
              {label: 'Name', value: client.first_name},
              {label: 'Client ID', value: client.client_id},
              {label: 'Job', value: client.job},
              {label: 'Job Descriptor', value: client.job_descriptor}
            ]}/>
        </BoxWrapper>
      </Container>
    </ContentWrapper>
  );
}