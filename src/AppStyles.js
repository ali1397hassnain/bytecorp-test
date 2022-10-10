import styled from "styled-components";
import {device} from "./breakpoints"
// @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");

export const AppWrapper = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  padding-bottom: 40px;

  @media ${device.tablet} {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media ${device.laptop} {
    margin-left: 100px;
    margin-right: 100px;
  }
`