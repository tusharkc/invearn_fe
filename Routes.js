import {
  commonScreenOptions,
  orderScreenOptions,
} from "./components/screenOptions/options";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/welcomePages/WelcomeScreen";
import SignUpScreen from "./screens/welcomePages/SignUpScreen";
import AddUserDetailsScreen from "./screens/welcomePages/AddUserDetailsScreen";
import LoginScreen from "./screens/welcomePages/LoginScreen";
import Dashboard from "./screens/dashboard/Dashboard";
import UserPortfolioScreen from "./screens/portfolio/UserPortfolioScreen";
import SocialScreen from "./screens/social/SocialScreen";

import React from "react";
import BottomNav from "./components/sharedComponents/BottomNav/BottomNav";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={commonScreenOptions}
      />
      <Stack.Screen
        name="AddUserDetails"
        component={AddUserDetailsScreen}
        options={commonScreenOptions}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={commonScreenOptions}
      />

      <Stack.Screen
        name="PlaceOrderScreen"
        component={PlaceOrderScreen}
        options={orderScreenOptions}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BottomNav"
        component={BottomNav}
      />
    </Stack.Navigator>
  );
};

export default Routes;
