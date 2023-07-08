import styled from 'styled-components';
import { Link } from "react-router-dom";

import { colors } from '../../patterns/colors'
import { spaces } from '../../patterns/spaces'
import { typo } from '../../patterns/typo'

export const ContentWrapper = styled.section`
  background-color: ${colors.mainColor};
  height: 100%;
  width: 100%;
`;

export const NotFoundMessage = styled.span`
  color: ${colors.white};
  display: inline-block;
  margin: ${spaces.large} 0 ${spaces.base};
  font-size: ${typo.large};
`;

export const CustomLink = styled(Link)`
  background-color: ${colors.white};
  color: ${colors.mainColor};
  display: flex;
  border-radius: 2px;
  text-decoration: none;
  border: none;
  padding: ${spaces.half} ${ spaces.base};
  margin-bottom: ${spaces.half};
  width: 160px;
  align-items: center;
  font-size: ${typo.base};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    margin-right: ${spaces.half};
  }
`;