import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import qrcode from "./img/QR.png";
import { PRIMARY_BLUE, SECONDARY_BLUE, DARK_BLUE } from "../../style";
import closeIcon from "./img/outline_arrow_back_black_24dp_blue.png";

const paragraphStyle = {
  color: "#a2a2a2",
  marginBottom: 38,
  maxWidth: 300,
  marginHorizontal: "auto",
  textAlign: "center",
  fontWeight: "400",
  lineHeight: 18,
};

export const PaymentScreen = ({ price = 455.66, navigate }) => {
  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 24,
          marginTop: 34,
          justifyContent: "space-between",
          justifyItems: "center",
          width: "100%",
          paddingHorizontal: 12,
        }}
      >
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigate("ar")}>
          <Image
            source={closeIcon}
            style={{ width: 24, height: 24 }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text
          style={{
            color: SECONDARY_BLUE,
            fontSize: 24,
            fontWeight: "700",
          }}
        >
          Payment
        </Text>
        <View style={{ width: 24, height: 24 }} />
      </View>
      <Text style={{ ...paragraphStyle, maxWidth: 200 }}>
        Please scan your QR code to proceed your payment.
      </Text>
      <Text
        style={{
          color: SECONDARY_BLUE,
          fontSize: 24,
          fontWeight: "800",
          marginBottom: 2,
        }}
      >
        TOTAL
      </Text>
      <Text
        style={{
          color: SECONDARY_BLUE,
          fontSize: 48,
          fontWeight: "800",
          marginBottom: 40,
        }}
      >
        SEK {(price || 1400.26).toFixed(2)}
      </Text>
      <TouchableOpacity activeOpacity={1} onPress={() => navigate("final")}>
        <Image
          source={qrcode}
          style={{ width: 240, height: 240, marginBottom: 40 }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={paragraphStyle}>
        A new way to make the payments easy, reliable and secure. You can manage
        all your transactions from your phone.
      </Text>
    </View>
  );
};
export default PaymentScreen;
