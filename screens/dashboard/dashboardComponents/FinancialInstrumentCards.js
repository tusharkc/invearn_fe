import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

const FinancialInstrumentCards = ({
  instrumentName,
  listedOn,
  currentPrice,
  changePercentage,
  previousPrice,
  onPressFunction,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={[tw`my-3 mx-2`, { elevation: 20 }]}
    >
      <LinearGradient colors={["#333333", "#2A2A2A"]}>
        <View
          style={[
            tw`flex-row items-center justify-between p-4`,
            styles.cardContainer,
          ]}
        >
          <View>
            <Text style={[tw`text-gray-50 text-lg leading-6 font-bold`]}>
              {instrumentName}
            </Text>
            <Text style={[tw`text-sm pt-2 text-gray-50`]}>{listedOn}</Text>
          </View>
          <View>
            <Text
              style={[
                tw`text-gray-50 text-lg leading-6 font-bold`,
                {
                  color: previousPrice <= currentPrice ? "#1CC600" : "#FF4D4D",
                },
              ]}
            >
              {currentPrice}
            </Text>
            <Text
              style={[
                tw`text-sm mt-2 text-right`,
                {
                  color: previousPrice <= currentPrice ? "#1CC600" : "#FF4D4D",
                },
              ]}
            >
              {previousPrice > currentPrice ? "-" : null} {changePercentage} %
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default FinancialInstrumentCards;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: "#363636",
    borderRadius: 5,
    height: 65,
  },
});
