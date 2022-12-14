import styled from "styled-components";
import { device } from "../../breakpoints";

export const HeaderWrapper = styled.div`
  flex-direction: column;
  background-color: white;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  padding-top: 27px;
  padding-left: 50px;
  padding-right: 30vw;
  box-shadow: 2px 0px 25px 0px rgba(0, 0, 0, 0.75);
  transform: translate3d(-100vw, 0, 0);
  transition: all 0.5s ease;

  @media ${device.tablet} {
    padding-top: 47px;
    padding-left: 0px;
    padding-right: 0px;
    height: 27px;
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: transparent;
    position: relative;
    box-shadow: none;
    transform: translate3d(0vw, 0, 0);
  }

  .logo {
    cursor: pointer;
    margin-bottom: 24px;
    @media ${device.tablet} {
      margin-right: 170px;
      margin-bottom: 0px;
    }
  }

  .headerItems {
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
      flex-direction: row;
      width: 275px;
    }

    @media ${device.laptop} {
      margin-left: 11vw;
    }

    .headerItem {
      color: #333;
      text-decoration: none;
      line-height: 27px;
      font-size: 18px;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      margin-bottom: 24px;

      @media ${device.tablet} {
        font-size: 14px;
        flex-direction: row;
        margin-bottom: 0px;
      }
    }
  }

  .cart {
    cursor: pointer;
    margin-right: auto;

    @media ${device.tablet} {
      margin-right: 0px;
      margin-left: auto;
      display: flex;
    }
  }

  .closeButton {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${device.tablet} {
      display: none;
    }

    .close {
      width: 25px;
      height: 25px;
    }
  }
`;

export const NavButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 30px;
  left: 30px;
  width: 50px;
  height: 50px;
  @media ${device.tablet} {
    display: none;
  }

  .menu {
    width: 35px;
    height: 35px;
  }
`;
