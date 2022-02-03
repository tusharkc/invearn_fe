import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";

const ButtonPrimary = ({ text, onPressHandler, btnStyle, btnTextStyles }) => {
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[tw`${btnStyle}`, styles.invearnButtonPrimary]}
    >
      <Text style={[tw`${btnTextStyles}`, styles.invearnButtonTextPrimary]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

export function ButtonWithIcon({
  text,
  onPressHandler,
  btnStyle,
  btnTextStyles,
  iconSrc,
}) {
  return (
    <TouchableOpacity
      style={[tw`${btnStyle}`, styles.invearnButtonWithIcon]}
      onPress={onPressHandler}
    >
      <Image source={iconSrc} style={[{ width: 25, height: 25 }]} />
      <Text
        style={[
          tw`${btnTextStyles} mx-8 pr-5`,
          styles.invearnButtonTextPrimary,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export const ButtonOutlined = ({
  text,
  onPressHandler,
  btnStyle,
  btnTextStyles,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[tw`${btnStyle}`, styles.invearnButtonOutlined]}
    >
      <Text style={[tw`${btnTextStyles}`]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  invearnButtonPrimary: {
    backgroundColor: "#1F5075",
    lineHeight: 20,
    width: 325,
    height: 45,
    justifyContent: "center",
    borderRadius: 5,
    elevation: 3,
  },

  invearnButtonWithIcon: {
    backgroundColor: "white",
    lineHeight: 20,
    width: 325,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
  },

  invearnButtonTextPrimary: {
    textAlign: "center",
    letterSpacing: 1,
    fontSize: 18,
  },

  invearnButtonOutlined: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
  },
});
