import React, { useState } from "react";
import ARIndexScreen from "./js/Screens/ARScreen";
import StartScreen from "./js/Screens/StartScreen";
import PaymentScreen from "./js/Screens/PaymentScreen";
import FinalScreen from "./js/Screens/FinalScreen";

export const App = () => {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [finalPrice, setFinalPrice] = useState(455.66);

  if (currentScreen === "start")
    return <StartScreen setCurrentScreen={setCurrentScreen} />;

  if (currentScreen === "ar")
    return (
      <ARIndexScreen
        navigate={(screen) => setCurrentScreen(screen)}
        setPrice={setFinalPrice}
      />
    );
  if (currentScreen === "payment")
    return (
      <PaymentScreen
        price={finalPrice}
        navigate={(screen) => setCurrentScreen(screen)}
      />
    );
  if (currentScreen === "final")
    return (
      <FinalScreen
        price={finalPrice}
        navigate={(screen) => setCurrentScreen(screen)}
      />
    );
  return <StartScreen setCurrentScreen={setCurrentScreen} />;
};
export default App;
