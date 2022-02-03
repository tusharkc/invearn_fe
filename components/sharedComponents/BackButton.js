import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity>
      <Image source={require("../../assets/media/go_back.png")} />
    </TouchableOpacity>
  );
};

export default BackButton;
