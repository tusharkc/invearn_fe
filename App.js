import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { commonScreenOptions } from "./components/screenOptions/options";
import WelcomeScreen from "./screens/welcomePages/WelcomeScreen";
import SignUpScreen from "./screens/welcomePages/SignUpScreen";
import AddUserDetailsScreen from "./screens/welcomePages/AddUserDetailsScreen";
import LoginScreen from "./screens/welcomePages/LoginScreen";
import Dashboard from "./screens/dashboard/Dashboard";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
