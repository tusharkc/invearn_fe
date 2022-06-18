import { FlatList, Text, View } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function StockModal({ onBuyPress }) {
  const marketChangeData = [
    {
      title: "CMP",
      change: "1",
    },
    {
      title: "CHG",
      change: "1",
    },
    {
      title: "CHG %",
      change: "1",
    },
    {
      title: "VOL",
      change: "1",
    },
    {
      title: "52 W High",
      change: "1",
    },
    {
      title: "52 W Low",
      change: "1",
    },
  ];

  const bidData = [
    {
      bid: "14,000.25",
      orders: "100",
      qty: "10",
    },
    {
      bid: "14,000.25",
      orders: "100",
      qty: "10",
    },
    {
      bid: "14,000.25",
      orders: "100",
      qty: "10",
    },
    {
      bid: "14,000.25",
      orders: "100",
      qty: "10",
    },
    {
      bid: "14,000.25",
      orders: "100",
      qty: "10",
    },
  ];

  return (
    <View>
      <View style={[tw`flex-row py-6 px-6 items-center justify-between`]}>
        <TouchableOpacity
          onPress={onBuyPress}
          style={[
            tw`items-center justify-center`,
            {
              height: 45,
              backgroundColor: "rgba(31,80,117,0.5)",
              width: 140,
              borderRadius: 5,
              borderColor: "#363535",
              borderWidth: 2,
              elevation: 3,
            },
          ]}
        >
          <Text style={[tw`text-gray-50 font-bold text-base`]}>BUY</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            tw`items-center justify-center`,
            {
              height: 45,
              backgroundColor: "rgba(255,77,77,0.5)",
              width: 140,
              borderRadius: 5,
              borderColor: "#363535",
              borderWidth: 2,
              elevation: 3,
            },
          ]}
        >
          <Text style={[tw`text-gray-50 font-bold text-base`]}>SELL</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={marketChangeData}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <View
            style={[
              tw`flex-row justify-between py-1 px-2`,
              { backgroundColor: index % 2 == 0 ? "#2F2F2F" : "#3C3C3C" },
            ]}
          >
            <Text style={[tw`text-left text-gray-50 text-sm w-2/6`]}>
              {item.title}
            </Text>
            <Text style={[tw`text-right text-gray-50 text-sm w-2/6`]}>
              {item.change}
            </Text>
          </View>
        )}
      />

      <FlatList
        data={bidData}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={() => (
          <View style={[tw`flex-row justify-between pt-5`]}>
            <Text style={[tw`text-gray-50 w-2/6 text-center font-bold`]}>
              Offer
            </Text>
            <Text style={[tw`text-gray-50 w-2/6 text-center font-bold`]}>
              Order
            </Text>
            <Text style={[tw`text-gray-50 w-2/6 text-center font-bold`]}>
              Quantity
            </Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <View style={[tw`flex-row items-center justify-between pt-2`]}>
            <Text
              style={[
                tw`text-center w-2/6`,
                { color: index % 2 == 0 ? "#1CC600" : "#FF4D4D" },
              ]}
            >
              Rs {item.bid}
            </Text>
            <Text
              style={[
                tw`text-center w-2/6`,
                { color: index % 2 == 0 ? "#1CC600" : "#FF4D4D" },
              ]}
            >
              {item.orders}
            </Text>
            <Text
              style={[
                tw`text-center w-2/6`,
                { color: index % 2 == 0 ? "#1CC600" : "#FF4D4D" },
              ]}
            >
              {item.qty}
            </Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={[tw`flex-row justify-between pt-2`]}>
            <Text style={[tw`text-gray-50 text-center font-bold w-2/6`]}>
              Total
            </Text>
            <Text style={[tw`w-2/6`]} />
            <Text style={[tw`text-gray-50 text-center font-bold w-2/6`]}>
              80
            </Text>
          </View>
        )}
      />
      <TouchableOpacity>
        <Text
          style={[
            tw`text-center py-4 text-gray-50 text-base`,
            { color: "rgba(31, 80, 117, 1)" },
          ]}
        >
          View Complete Chart
        </Text>
      </TouchableOpacity>

      <View style={[tw`flex-row items-center justify-between px-2`]}>
        <LinearGradient
          style={[
            tw`items-center pt-2`,
            {
              height: 55,
              width: 80,
              borderWidth: 1,
              borderColor: "#363636",
            },
          ]}
          colors={["#333333", "#2A2A2A"]}
        >
          <Text style={[tw`text-center text-gray-50`]}>{`O\n14000.25`}</Text>
        </LinearGradient>
        <LinearGradient
          style={[
            tw`items-center pt-2`,
            {
              height: 55,
              width: 80,
              borderWidth: 1,
              borderColor: "#363636",
            },
          ]}
          colors={["#333333", "#2A2A2A"]}
        >
          <Text style={[tw`text-center text-gray-50`]}>{`H\n14000.25`}</Text>
        </LinearGradient>
        <LinearGradient
          style={[
            tw`items-center pt-2`,
            {
              height: 55,
              width: 80,
              borderWidth: 1,
              borderColor: "#363636",
            },
          ]}
          colors={["#333333", "#2A2A2A"]}
        >
          <Text style={[tw`text-center text-gray-50`]}>{`L\n14000.25`}</Text>
        </LinearGradient>
        <LinearGradient
          style={[
            tw`items-center pt-2`,
            {
              height: 55,
              width: 80,
              borderWidth: 1,
              borderColor: "#363636",
            },
          ]}
          colors={["#333333", "#2A2A2A"]}
        >
          <Text style={[tw`text-center text-gray-50`]}>{`C\n14000.25`}</Text>
        </LinearGradient>
      </View>
    </View>
  );
}
