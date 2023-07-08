import styled from 'styled-components';
import { Link } from "react-router-dom";

import { colors } from '../../patterns/colors'
import { spaces } from '../../patterns/spaces';
import { typo } from '../../patterns/typo';

export const ContentWrapper = styled.section`
  background-color: ${colors.mainColor};
  height: 100%;
  width: 100%;
`;

export const CustomLink = styled(Link)`
  color: ${colors.white};
  margin: ${spaces.base} 0;
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  border-bottom: solid 1px ${colors.white};
  font-size: ${typo.base};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    margin-right: ${spaces.half};
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;