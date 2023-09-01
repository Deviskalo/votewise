// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import Presidents from "./screens/Presidents";
import Senators from "./screens/Senators";
import Representatives from "./screens/Representatives";
import PresidentsDetails from "./screens/PresidentsDetails";
import SenatorsDetails from "./screens/SenatorsDetails";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Presidential Aspirant") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Senators") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Representatives") {
            iconName = focused ? "user" : "user";
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#c0032c",
        tabBarInactiveTintColor: "#002368",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Presidential Aspirant" component={Presidents} />
      {/* <Tab.Screen name="Representatives" component={Representatives} /> */}
      <Tab.Screen name="Senators" component={Senators} />
    </Tab.Navigator>
  );
};

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Default"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PresidentsDetails"
        component={PresidentsDetails}
        options={{ title: "Presidential Aspirant Details" }}
      />

      <Stack.Screen
        name="SenatorsDetails"
        component={SenatorsDetails}
        options={{ title: "Senators Aspirant Details" }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
