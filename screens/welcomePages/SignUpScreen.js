import {
  Image,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Input, Icon } from "react-native-elements";
import { globalStyles } from "../../styles";
import ButtonPrimary from "../../components/sharedComponents/buttons";
import InvearnTextImg from "../../assets/media/invearn_logo_text.svg";

const SignUpScreen = ({ navigation }) => {
  return (
    <ScrollView style={globalStyles.pageCointainer}>
      <InvearnTextImg
        style={[tw`mx-auto`, { width: 140, height: 35, marginTop: 60 }]}
      />
      <Text style={[tw`mx-auto text-gray-50 my-8 text-lg tracking-wide`]}>
        {`You are just two step away from being \na good trader!`}
      </Text>
      <KeyboardAvoidingView style={[tw`w-11/12 mx-auto`]}>
        <Input
          placeholderTextColor={"#515151"}
          inputContainerStyle={[
            tw`mx-auto`,
            globalStyles.invearnBasicInputElementContainer,
          ]}
          placeholder="Full Name"
          style={[tw`mx-2 text-gray-50`]}
        />
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
        <ButtonPrimary
          onPressHandler={() => navigation.navigate("AddUserDetails")}
          btnTextStyles={"text-gray-50"}
          btnStyle={"mx-auto my-5"}
          text={"Sign Up"}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUpScreen;
