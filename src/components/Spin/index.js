import React from "react";
import { SpinBackground, SpinImage } from "./SpinStyles";
import spinImage from "../../assets/spin.png";
import meals from "../../consts/meals";
import Button from "./spin_button";
import PhotoShown from "./photo_shown";
import { useStore } from "../../hooks/store.hook";
export default function Spin() {
  const index = useStore((state) => state.index);
  return (
    <>
      <SpinBackground
        backgroundColor={meals[((index % 2) + 2) % 2].backgroundColor}
      >
        <SpinImage
          style={{ transform: `rotate(-${index * 36}deg)` }}
          src={spinImage}
          className="spinImage"
          alt="rotating-dishes"
          loading="lazy"
        />
      </SpinBackground>
      <PhotoShown />
      <Button />
    </>
  );
}
