import styled from 'styled-components';
import { Link } from "react-router-dom";

import { colors } from '../../patterns/colors'
import { spaces } from '../../patterns/spaces';
import { typo } from '../../patterns/typo';
import { TableCell } from '@mui/material';

export const ContentWrapper = styled.section`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CustomLink = styled(Link)`
  color: ${colors.white};
  margin: ${spaces.base} 0;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: ${typo.base};

  svg {
    width: 2rem;
    height: 2rem;
    margin-left: ${spaces.half};
  }
`;

export const TableWrapper = styled.div`
  margin: ${spaces.base} 0;
`;

export const CustomTableCell = styled(TableCell)`
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  font-size: ${typo.base} !important;

  ${({ isHead }) =>
    isHead ?
      `
        background-color: ${colors.white} !important;
        color: ${colors.mainColor} !important;
      ` :
      `color: ${colors.white} !important;`
  }
`;

export const EmptyMessage = styled.span`
  display: block;
  margin-top: ${spaces.base};
`;