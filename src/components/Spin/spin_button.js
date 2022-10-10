import React, { useEffect } from "react";
import { SpinButtonWrapper, ButtonIcon } from "./SpinStyles";
import meals from "../../consts/meals";
import { useStore } from "../../hooks/store.hook";
export default function Button() {
  const index = useStore((state) => state.index );
  const indexModule = ((index % 2) + 2) % 2;

  const increaseIndex = useStore((state) =>  state.increaseIndex);
  const decreaseIndex = useStore((state) => state.decreaseIndex);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 37 || e.keyCode === 40) decreaseIndex();
      if (e.keyCode === 38 || e.keyCode === 39) increaseIndex();
    });
    return () => {
      window.removeEventListener("keydown", () => {});
    };
  }, [decreaseIndex, increaseIndex]);
  return (
    

    <SpinButtonWrapper>
      <div className="buttonStyle" onClick={decreaseIndex}>
        <ButtonIcon color={meals[indexModule].textColor} className="bi bi-arrow-down-circle-fill"></ButtonIcon>
      </div>
      <div className="buttonStyle" onClick={increaseIndex}>
        <ButtonIcon color={meals[indexModule].textColor} className="bi bi-arrow-down-circle-fill"></ButtonIcon>
      </div>
    </SpinButtonWrapper>
  );
}
