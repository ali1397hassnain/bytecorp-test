import styled from "styled-components";
import { device } from "../../breakpoints";

export const SpinBackground = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 80vw;
  height: 80vw;
  position: absolute;
  right: 5vw;
  top: -40vw;

  z-index: -1;
  border-radius: 100%;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: end;
  display: flex;

  -webkit-transition: background-color 0.5s ease-in-out;
  -moz-transition: background-color 0.5s ease-in-out;
  -o-transition: background-color 0.5s ease-in-out;
  transition: background-color 0.5s ease-in-out;

  @media ${device.tablet} {
    width: 80vw;
    height: 80vw;
    right: 10vw;
    top: -40vw;
  }

  @media ${device.laptop} {
    right: -10vw;
    top: -50vw;
  }
`;

export const SpinImage = styled.img`
  width: 90vw;
  height: 90vw;
  position: absolute;
  top: 40vw;
  transform: ${({ transform }) => transform} @media ${device.tablet} {
    width: 56vw;
    height: 56vw;
    top: 50vw;
  }

  @media ${device.laptop} {
    width: 45vw;
    height: 45vw;
    top: 58vw;
  }

  @media ${device.desktop} {
    width: 45vw;
    height: 45vw;
  }

  -webkit-transition: 300ms linear all;
  -moz-transition: 300ms linear all;
  -o-transition: 300ms linear all;
  transition: 300ms linear all;
  -ms-transition: 300ms linear all;
`;

export const ImageShown = styled.img`
  position: absolute;
  right: 34vw;
  top: 31vw;
  height: 32vw;
  width: 32vw;

  @media ${device.tablet} {
    right: 39vw;
    top: 28vw;
    width: 21vw;
    height: 21vw;
  }
  @media ${device.laptop} {
    right: 22vw;
    top: 23vw;
    width: 15vw;
    height: 15vw;
  }

  border-radius: 500px;
  background-color: white;
  -webkit-box-shadow: 0px 4px 20px 2px rgb(201, 201, 201);
  -moz-box-shadow: 0px 4px 20px 2px rgb(201, 201, 201);
  box-shadow: 0px 4px 20px 2px rgb(201, 201, 201);
  -webkit-border-radius: 500px;
  -moz-border-radius: 500px;
  -ms-border-radius: 500px;
  -o-border-radius: 500px;

  -webkit-transition: opacity 0.2s ease-in-out;
  -moz-transition: opacity 0.2s ease-in-out;
  -o-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;

  .startAnimation {
    -webkit-animation: spin 0.2s linear;
    -moz-animation: spin 0.2s linear;
    animation: spin 0.2s linear;
  }
`;

export const SpinButtonWrapper = styled.div`
  width: 36vw;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 73vw;
  right: 14vw;
  top: 48vw;

  @media ${device.tablet} {
    width: 50vw;
    right: 25vw;
    top: 42vw;
  }
  @media ${device.laptop} {
    width: 36vw;
    right: 12vw;
    top: 35vw;
  }

  .buttonStyle {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonIcon = styled.i`
  color: ${({ color }) => color};
  font-size: 38px;
`;
