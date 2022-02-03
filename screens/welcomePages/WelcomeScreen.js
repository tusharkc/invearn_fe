import { SafeAreaView, Text, Image } from "react-native";
import React, { Component } from "react";
import tw from "tailwind-react-native-classnames";
import ButtonPrimary, {
  ButtonWithIcon,
} from "../../components/sharedComponents/buttons";
import {
  globalStyles,
  typographyStyles,
  welcomeScreenStyles,
} from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-elements";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={(typographyStyles.baseFontStyle, globalStyles.baseContainer)}
    >
      <Image
        source={require("../../assets/media/invearn_logo.png")}
        style={[tw`pt-5`, welcomeScreenStyles.logoImg]}
      />
      <Text style={[tw`text-gray-50 py-0 text-lg font-bold tracking-normal`]}>
        Learn trading, with fellow trader friends
      </Text>

      <Text style={[tw`text-gray-50 pt-20 text-sm tracking-normal`]}>
        Sign up for you account with 10,000, in less then 5 minutes.
      </Text>

      <ButtonPrimary
        onPressHandler={() => navigation.navigate("SignUpScreen")}
        text={"Sign up with E-mail"}
        btnStyle={"my-5"}
        btnTextStyles={"text-gray-50"}
      />
      <ButtonWithIcon
        text={"Sign up with Google"}
        btnTextStyles={"text-gray-900"}
        iconSrc={require("../../assets/media/google_logo.png")}
      />
      <Text style={[tw`py-5 text-gray-50`]}>
        Already have an account?{" "}
        <Text
          style={{ color: "#2387D1" }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Login
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
