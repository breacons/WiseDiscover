import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
import { DARK_BLUE, PRIMARY_BLUE, SECONDARY_BLUE } from "../../style";
import { PulseIndicator } from "react-native-indicators";

import successImage from "./img/success.png";
import wiseLogo from "./img/wise.png";
import otpLogo from "./img/otp.png";

const paragraphStyle = {
  color: "#a2a2a2",
  marginBottom: 10,
  maxWidth: 300,
  marginHorizontal: "auto",
  textAlign: "center",
  fontWeight: "400",
  lineHeight: 20,
};

export const FinalScreen = ({ price = 26.4, navigate}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <PulseIndicator color={PRIMARY_BLUE} size={100} />
      </View>
    );
  }

  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 24,
          marginTop: 34,
          justifyContent: "center",
          justifyItems: "center",
          width: "100%",
          paddingHorizontal: 12,
        }}
      >
        <Text
          style={{
            color: SECONDARY_BLUE,
            fontSize: 24,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Successful Payment
        </Text>
      </View>
      <Image
        source={successImage}
        resizeMode="contain"
        style={{ width: 200, height: 200, marginBottom: 30 }}
      />
      <Text style={paragraphStyle}>You just saved</Text>
      <Text
        style={{
          color: SECONDARY_BLUE,
          fontSize: 28,
          fontWeight: "800",
          marginBottom: 28,
        }}
      >
        1280.30 HUF
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: DARK_BLUE,
          paddingHorizontal: 32,
          width: "100%",
          paddingVertical: 18,
        }}
      >
        <Image
          source={wiseLogo}
          resizeMode="contain"
          style={{ width: 90, height: 26 }}
        />
        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 18,
              marginBottom: 2,
            }}
          >
            16 417.41 HUF
          </Text>
          <Text
            style={{
              color: "#44EE70",
              fontWeight: "700",
              fontSize: 10,
              textAlign: "right",
            }}
          >
            With recommended products
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // backgroundColor: DARK_BLUE,
          paddingHorizontal: 32,
          width: "100%",
          paddingVertical: 18,
          borderBottomColor: "#e5e5e5",
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
        }}
      >
        <Image
          source={otpLogo}
          resizeMode="contain"
          style={{ width: 120, height: 34 }}
        />
        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Text
            style={{
              color: DARK_BLUE,
              fontWeight: "700",
              fontSize: 18,
              marginBottom: 2,
            }}
          >
            17 697.71 HUF
          </Text>
          <Text
            style={{
              color: "#d95252",
              fontWeight: "700",
              fontSize: 10,
              textAlign: "right",
            }}
          >
            +1 280.30 HUF
          </Text>
        </View>
      </View>

      {/*<Text style={paragraphStyle}>Thank you for choosing Wise!</Text>*/}

      <View style={{ width: " 100%", padding: 32 }}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigate("start")}
          style={{
            backgroundColor: PRIMARY_BLUE,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: 10,
            borderRadius: 15,
            height: 60,
            marginRight: 0,
            flexGrow: 1,
            width: "100%",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              lineHeight: 28,
              fontWeight: "800",
              fontFamily: "Helvetica",
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FinalScreen;
