import styled from "styled-components";
import {device} from "../../breakpoints"

export const FoodInfoWrapper = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 68vw;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${device.tablet} { 
    max-width: 800px;
  }

  @media ${device.laptop} { 
    margin-top: 200px;
    width: 28vw;
    justify-content: center;
    align-items: flex-start;
    text-align: initial;
  }

  .price {
    font-size: 44px;
    font-weight: 600;
    color: ${({color}) => color};
  }

  .foodName {
    color: #333;
    font-size: 36px;
    line-height: 50px;
    font-weight: 500;
  }

  .foodInfo {
    font-size: 13px;
  }

  .orderBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 163px;
    height: 48px;
    background-color: ${({backgroundColor}) => backgroundColor};
    box-shadow: ${({boxShadow}) => boxShadow};
    moz-box-shadow: ${({MozBoxShadow}) => MozBoxShadow};
    webkit-box-shadow: ${({WebkitBoxShadow}) => WebkitBoxShadow};
    margin-top: 28px;
    cursor: pointer;

    border-radius: 69px;
    -webkit-border-radius: 69px;
    -moz-border-radius: 69px;
    -ms-border-radius: 69px;
    -o-border-radius: 69px;

    .orderText {
      color: white;
      font-size: 13px;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`;
