import { styled } from "styled-components";
import { colors } from "../../patterns/colors";
import { spaces } from "../../patterns/spaces";
import { typo } from "../../patterns/typo";

export const Box = styled.div`
  background-color: ${colors.secondaryColor};
  color: ${colors.mainColor};
  margin-top: ${spaces.largest};
  border-radius: 4px;
  padding: ${spaces.large} ${spaces.base};
`;

export const ImageHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${spaces.base};
`;

export const ListItem = styled.li`
  b {
    font-weight: bold;
  }
`;

export const List = styled.ul`
  > li {
    margin-bottom: ${spaces.half};
    font-size: ${typo.base};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;