import React from "react";
import { FoodInfoWrapper } from "./foodInfoStyles";
import meals from "../../consts/meals";
import { useStore } from "../../hooks/store.hook";

const FoodInfo = () => {
  const index = useStore((state) => state.index);
  const indexModule = ((index % 2) + 2) % 2;

  return (
    <FoodInfoWrapper
      color={meals[indexModule].textColor || meals[indexModule].backgroundColor}
      backgroundColor={meals[indexModule].textColor}
      boxShadow={`0px 4px 14px 1px ${meals[indexModule].textColor}`}
      MozBoxShadow={`0px 4px 14px 1px ${meals[indexModule].textColor}`}
      WebkitBoxShadow={`0px 4px 14px 1px ${meals[indexModule].textColor}`}
    >
      <span className="price">${meals[indexModule].price}</span>
      <span className="foodName">{meals[indexModule].name}</span>
      <p className="foodInfo">{meals[indexModule].information}</p>
      <div
        className="orderBtn"
        // onClick={() => {}}
      >
        <span className="orderText">Order Now</span>
      </div>
    </FoodInfoWrapper>
  );
};

export default FoodInfo;
