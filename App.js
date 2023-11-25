import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

import DetailFlight from "./screens/DetailFlight";

import ItemScreen from "./screens/ItemScreen";

import BottomNav from "./screens/BottomNav";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
          <Stack.Screen name="Bandara" component={DetailFlight} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
