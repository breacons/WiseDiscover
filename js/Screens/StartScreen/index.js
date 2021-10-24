import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import wiseMockup from "./img/wise.png";
import qrbutton from "./img/qrbutton.png";
import { DARK_BLUE } from "../../style";

export const StartScreen = ({ setCurrentScreen }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: DARK_BLUE,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        onPress={() => setCurrentScreen("ar")}
        style={{
          backgroundColor: "white",
          // height: 140,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          marginHorizontal: 20,
          borderRadius: 10,
          padding: 30,
          marginTop: 20,
          marginBottom: -25,
          flexDirection: "column",
        }}
      >
        <Image
          source={qrbutton}
          style={{ width: 50, height: 50, marginBottom: 10 }}
          resizeMode="contain"
        />
        <Text
          style={{
            color: DARK_BLUE,
            fontWeight: "700",
            fontSize: 18,
            textAlign: "center",
            marginBottom: 8
          }}
        >
          Scan Products
        </Text>
        <Text
          style={{
            color: "#888888",
            fontWeight: "500",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          And make your shopping abroad easier
        </Text>
      </TouchableOpacity>
      <Image
        source={wiseMockup}
        resizeMode="contain"
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default StartScreen;
