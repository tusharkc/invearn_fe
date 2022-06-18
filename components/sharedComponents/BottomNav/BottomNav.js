import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../../../screens/dashboard/Dashboard";
import UserPortfolioScreen from "../../../screens/portfolio/UserPortfolioScreen";
import SocialScreen from "../../../screens/social/SocialScreen.js";
import IconDashboardActive from "../../../assets/media/bottom_nav_icons/icon_dashboard_active.svg";
import IconDashboardInactive from "../../../assets/media/bottom_nav_icons/icon_dashboard_inactive.svg";
import IconPortfolioActive from "../../../assets/media/bottom_nav_icons/icon_portfolio_active.svg";
import IconPortfolioInactive from "../../../assets/media/bottom_nav_icons/icon_portfolio_inactive.svg";
import IconSocialActive from "../../../assets/media/bottom_nav_icons/icon_social_active.svg";
import IconSocialInactive from "../../../assets/media/bottom_nav_icons/icon_social_inactive.svg";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#2387D1",
        tabBarInactiveTintColor: "#000000",

        tabBarStyle: {
          height: 65,
          backgroundColor: "#232323",
          borderTopWidth: 0,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          color: "#fff",
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        options={{
          headerShown: false,
          tabBarIcon: (icon) =>
            icon.focused ? <IconDashboardActive /> : <IconDashboardInactive />,
        }}
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: (icon) =>
            icon.focused ? <IconPortfolioActive /> : <IconPortfolioInactive />,
        }}
        name="Portfolio"
        component={UserPortfolioScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: (icon) =>
            icon.focused ? <IconSocialActive /> : <IconSocialInactive />,
        }}
        name="World"
        component={SocialScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
