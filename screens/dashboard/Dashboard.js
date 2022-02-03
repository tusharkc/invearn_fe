import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import React from "react";
import { dashboardStyles, globalStyles } from "../../styles";
import { Icon, Input } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

export default function Dashboard() {
  return (
    <SafeAreaView style={globalStyles.pageCointainer}>
      <View style={[tw`mx-auto flex flex-row items-baseline`]}>
        <Icon name="menu" color="black" size={30} />
        <Input
          inputContainerStyle={[tw``, dashboardStyles.searchInput]}
          leftIcon={<Icon name="search" color="black" style={[tw`mx-2`]} />}
        />
        <Icon name="person" color="black" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
