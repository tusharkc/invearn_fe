import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { addUserDetailsStyle, globalStyles } from "../../styles";
import UserDefaultImg from "../../assets/media/user_default_img.svg";
import tw from "tailwind-react-native-classnames";
import ButtonPrimary, {
  ButtonOutlined,
} from "../../components/sharedComponents/buttons";

const AddUserDetailsScreen = ({ navigation }) => {
  return (
    <ScrollView style={globalStyles.pageCointainer}>
      <Text
        style={[tw`mx-auto my-20 text-gray-50 text-base tracking-wide px-8`]}
      >
        You are just one step away from being a good trader!
      </Text>
      <View style={[tw`mx-auto`, { marginTop: -60 }]}>
        <UserDefaultImg />
        <ButtonOutlined
          text={"Add Photo"}
          btnStyle={"mx-auto my-5 w-36"}
          btnTextStyles={"text-gray-50 text-center p-3 text-xl"}
        />
      </View>
      <TextInput
        style={[
          tw`w-80 mx-auto p-4 text-gray-50`,
          addUserDetailsStyle.textArea,
        ]}
        placeholderTextColor="grey"
        numberOfLines={5}
        placeholder="About You"
        multiline
        maxLength={200}
        textAlignVertical="top"
      />

      <ButtonPrimary
        btnStyle={"mx-auto my-8"}
        btnTextStyles={"text-gray-50 text-xl"}
        text={"Submit"}
        onPressHandler={() => navigation.navigate("Dashboard")}
      />
    </ScrollView>
  );
};

export default AddUserDetailsScreen;
