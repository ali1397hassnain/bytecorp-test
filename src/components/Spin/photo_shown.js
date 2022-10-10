import React from "react";
import { ImageShown } from "./SpinStyles";
import { useStore } from "../../hooks/store.hook";
import { images } from "../../assets/meals";
export default function PhotoShown() {
  const index = useStore((state) => state.index);
  return (
    <>
      {images.map((item, i) => {
        return (
          <ImageShown
            key={i}
            src={images[i]}
            className={`${((index % 5) + 5) % 5 === i && "startAnimation"}`}
            alt="spin"
            loading="lazy"
            style={{ opacity: ((index % 5) + 5) % 5 === i ? 1 : 0 }}
          />
        );
      })}
    </>
  );
}
