import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Home from "./screens/home";
import Navigator from "./routes/homeStack";

const getFont = () =>
  Font.loadAsync({
    "mulish-regular": require("./assets/fonts/Mulish-Regular.ttf"),
    "mulish-bold": require("./assets/fonts/Mulish-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);
  if (fontsLoaded) {
    return <Home />;
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontLoaded(true)} />
    );
  }
}
