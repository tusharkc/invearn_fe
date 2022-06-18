import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-shadow-cards";
import tw from "tailwind-react-native-classnames";

const FinancialInstrumentChip = ({ instrumentName }) => {
  return (
    <View style={[tw`mx-3`]}>
      <Card
        style={[
          tw`w-full`,
          {
            borderColor: "#353434",
            borderWidth: 1,
            padding: 10,
            margin: 10,
            backgroundColor: "#00000000",
          },
        ]}
      >
        <Text style={[tw`text-xl font-bold text-center`, { color: "#1F5075" }]}>
          {instrumentName}
        </Text>
      </Card>
    </View>
  );
};

export default FinancialInstrumentChip;

const styles = StyleSheet.create({});
