import { Container } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BackupTableIcon from '@mui/icons-material/BackupTable';

import {
  ContentWrapper,
  CustomLink,
  NotFoundMessage,
} from './styles';


export const NotFound = () => {
  return (
    <ContentWrapper>
      <Container fixed>
        <NotFoundMessage>
          Page not found
        </NotFoundMessage>
        <div>
          <CustomLink to='/user'>
            <AccountCircleIcon/>
            Go to user page
          </CustomLink>
          <CustomLink to='/table'>
            <BackupTableIcon/>
            Go to table page
          </CustomLink>
        </div>
      </Container>
    </ContentWrapper>
  );
}