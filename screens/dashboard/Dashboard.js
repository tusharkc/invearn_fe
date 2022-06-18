import { View, ScrollView, FlatList, Modal } from "react-native";
import React, { useState } from "react";
import { dashboardStyles, globalStyles } from "../../styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header as HeaderRNE, Icon, Input } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import FinancialInstrumentChip from "./dashboardComponents/FinancialInstrumentChip";
import FinancialInstrumentCards from "./dashboardComponents/FinancialInstrumentCards";
import { TouchableOpacity } from "react-native";
import StockModal from "./dashboardComponents/StockModal";

export default function Dashboard({ navigation }) {
  //TODO: Remove the static data as soon as api has been called
  const listData = [
    {
      instrumentName: "NIFTY50",
      listedOn: "Indice",
      currentPrice: 18000,
      previousPrice: 20000,
      changePercentage: 2,
    },

    {
      instrumentName: "INFY",
      listedOn: "NSE",
      currentPrice: 1800.95,
      previousPrice: 1500,
      changePercentage: 2,
    },

    {
      instrumentName: "AAPL",
      listedOn: "DOW JONES",
      currentPrice: 18000,
      previousPrice: 20000,
      changePercentage: 2,
    },

    {
      instrumentName: "NIFTY50",
      listedOn: "Indice",
      currentPrice: 18000,
      previousPrice: 20000,
      changePercentage: 2,
    },

    {
      instrumentName: "INFY",
      listedOn: "NSE",
      currentPrice: 18000,
      previousPrice: 20000,
      changePercentage: 2,
    },

    {
      instrumentName: "AAPL",
      listedOn: "DOW JONES",
      currentPrice: 18000,
      previousPrice: 20000,
      changePercentage: 2,
    },

    {
      instrumentName: "NIFTY50",
      listedOn: "Indice",
      currentPrice: 18000,
      previousPrice: 20000,
      changePercentage: 2,
    },

    {
      instrumentName: "INFY",
      listedOn: "NSE",
      currentPrice: 1800.95,
      previousPrice: 1500,
      changePercentage: 2,
    },

    {
      instrumentName: "AAPL",
      listedOn: "DOW JONES",
      currentPrice: 18000,
      previousPrice: 20000,
      changePercentage: 2,
    },

    {
      instrumentName: "NIFTY50",
      listedOn: "Indice",
      currentPrice: 18000,
      previousPrice: 20000,
      changePercentage: 2,
    },

    {
      instrumentName: "INFY",
      listedOn: "NSE",
      currentPrice: 18000,
      previousPrice: 20000,
      changePercentage: 2,
    },

    {
      instrumentName: "AAPL",
      listedOn: "DOW JONES",
      currentPrice: 18000,
      previousPrice: 20000,
      changePercentage: 2,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [showMarketDepth, setShowMarketDepth] = useState(false);

  return (
    <View style={globalStyles.pageCointainer}>
      <HeaderRNE
        backgroundColor="#00000000"
        containerStyle={{ borderBottomColor: "#232323", height: 90 }}
        leftComponent={
          <Icon name="menu" color={"black"} style={[tw`mt-6 mx-2`]} />
        }
        centerComponent={
          <View>
            <Input
              leftIcon={
                <Icon
                  name="search"
                  color={"black"}
                  size={22}
                  style={[tw`mx-2`]}
                />
              }
              inputContainerStyle={[dashboardStyles.searchInput]}
              inputStyle={[tw`text-gray-50`]}
            />
          </View>
        }
        rightComponent={
          <Icon name="person" color="black" style={[tw`mt-6 mx-2`]} />
        }
      />
      <View>
        <ScrollView horizontal={true}>
          <TouchableOpacity>
            <FinancialInstrumentChip instrumentName={"Future and Options"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FinancialInstrumentChip instrumentName={"Crypto"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FinancialInstrumentChip instrumentName={"Stocks"} />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <FinancialInstrumentCards
            onPressFunction={() => {
              setShowModal(true);
            }}
            instrumentName={item.instrumentName}
            listedOn={item.listedOn}
            currentPrice={item.currentPrice}
            previousPrice={item.previousPrice}
            changePercentage={item.changePercentage}
          />
        )}
      />

      <Modal
        animationType="slide"
        visible={showModal}
        transparent
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View
          style={[
            tw`relative w-full h-full bottom-0`,
            { backgroundColor: "rgba(0,0,0,0.5)" },
          ]}
        >
          <View
            style={[
              tw`absolute w-full h-full`,
              {
                backgroundColor: "#2B2A2A",
                top: showMarketDepth == true ? "65%" : "25%",
                borderTopEndRadius: 25,
                borderTopStartRadius: 25,
              },
            ]}
          >
            <StockModal
              onBuyPress={() => {
                navigation.navigate("PlaceOrderScreen");
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
