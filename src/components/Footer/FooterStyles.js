import styled from "styled-components";
import { device } from "../../breakpoints";

export const FooterStyled = styled.p`
  display: flex;
  text-transform: capitalize;
  padding-top: 15vh;
  align-items: flex-end;

  @media ${device.maxTablet} {
    align-items: center;
    justify-content: center;
  }
`;
