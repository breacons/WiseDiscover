import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import kellogyIcon from "./img/kellogy.png";
import liptonIcon from "./img/lipton-icon.png";
import nesquikIcon from "./img/nesquik-icon.png";
import sneakIcon from "./img/sneak-icon.png";
import { PRIMARY_BLUE, SECONDARY_BLUE, DARK_BLUE } from "../../../../style";
import { sum } from "lodash";

const smallButtonStyle = {
  backgroundColor: "#D8F1FA",
  // padding: 14,
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  height: 34,
  width: 34,
  // marginHorizontal: 6,
};
const smallButtonTextStyle = {
  color: PRIMARY_BLUE,
  fontSize: 14,
  marginBottom: 2,
  fontWeight: "500",
};

export const ItemsList = ({setPrice}) => {
  const [items, setItems] = useState([
    {
      name: "Kellogg's Tresor",
      count: 1,
      price: 41.79,
      image: kellogyIcon,
    },
    {
      name: "Sneak Energy",
      count: 1,
      price: 320.75,
      image: sneakIcon,
    },
    {
      name: "Lipton Tea",
      count: 3,
      price: 8.62,
      image: liptonIcon,
    },
    {
      name: "Nesquik Cereal",
      count: 2,
      price: 33.63,
      image: nesquikIcon,
    },
  ]);

  const onClickButton = (difference, name) => {
    const updated = items.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          count: Math.max(0, item.count + difference),
        };
      }

      return item;
    });

    setItems(updated);

    setPrice(sum(updated.map((item) => item.price * item.count)))
  };

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => (
          <View
            style={{ backgroundColor: "#f9f9f9", height: 1, width: "100%" }}
          />
        )}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 18,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: 15,
                  padding: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  marginRight: 14,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 40, height: 40 }}
                  resizeMode="cover"
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: SECONDARY_BLUE,
                    fontSize: 12,
                    marginBottom: 4,
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{ color: DARK_BLUE, fontSize: 18, fontWeight: "800" }}
                >
                  SEK {item.price.toFixed(2)}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => onClickButton(-1, item.name)}
                style={smallButtonStyle}
              >
                <Text style={smallButtonTextStyle}>-</Text>
              </TouchableOpacity>
              <Text
                style={{ marginHorizontal: 12, fontWeight: "600", width: 10 }}
              >
                {item.count}
              </Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => onClickButton(1, item.name)}
                style={smallButtonStyle}
              >
                <Text style={smallButtonTextStyle}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View
        style={{
          backgroundColor: DARK_BLUE,
          height: 1,
          width: "100%",
          marginBottom: 9,
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 40 }}>
        <Text style={{ color: DARK_BLUE, fontSize: 18, fontWeight: "800" }}>
          TOTAL:
        </Text>
        <Text
          style={{
            color: SECONDARY_BLUE,
            fontSize: 22,
            fontWeight: "800",
          }}
        >
          SEK {sum(items.map((item) => item.price * item.count)).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default ItemsList;
