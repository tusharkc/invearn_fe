import {
  View,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { globalStyles } from "../../styles";
import InvearnTextImg from "../../assets/media/invearn_logo_text.svg";
import tw from "tailwind-react-native-classnames";
import { Icon, Input } from "react-native-elements";
import ButtonPrimary from "../../components/sharedComponents/buttons";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.pageCointainer}>
      <InvearnTextImg
        style={[tw`mx-auto`, { width: 140, height: 35, marginTop: 60 }]}
      />
      <KeyboardAvoidingView>
        <Text style={[tw`mx-auto text-gray-50 my-16 text-lg tracking-wide`]}>
          {`Hi there, welcome back to your \naccount! `}
        </Text>

        <Input
          placeholderTextColor={"#515151"}
          inputContainerStyle={[
            tw`mx-auto`,
            globalStyles.invearnBasicInputElementContainer,
          ]}
          placeholder="Email"
          style={[tw`mx-2 text-gray-50`]}
        />
        <Input
          placeholderTextColor={"#515151"}
          inputContainerStyle={[
            tw`mx-auto`,
            globalStyles.invearnBasicInputElementContainer,
          ]}
          placeholder="Password"
          secureTextEntry
          rightIcon={<Icon name="lock" color="black" style={[tw`mx-2`]} />}
          style={[tw`mx-2 text-gray-50`]}
        />
        <Text style={[tw`text-right mx-4 text-gray-50`]}>Forgot Password?</Text>

        <ButtonPrimary
          btnStyle={"mx-auto my-8"}
          text={"Log In"}
          btnTextStyles={"text-gray-50"}
          onPressHandler={() => navigation.navigate("Dashboard")}
        />

        <Text style={[tw`py-5 mx-auto mt-8 text-gray-50`]}>
          Don't have a account?{" "}
          <Text
            style={{ color: "#2387D1" }}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            Sign Up Now
          </Text>
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
