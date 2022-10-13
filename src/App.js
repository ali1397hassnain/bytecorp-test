import React from "react";
import { AppWrapper } from "./AppStyles.js";
import Header from "./components/Header";
import Spin from "./components/Spin";
import FoodInfo from "./components/FoodInfo";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Spin />
      <FoodInfo />
      <Footer />
    </AppWrapper>
  );
}

export default App;
