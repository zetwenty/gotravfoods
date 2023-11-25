import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons  } from "@expo/vector-icons";
import Discover from "./Discover";
import Profile from "./Profile";
import Flight from "./Flight";
const Tab = createBottomTabNavigator()

const BottomNav = () => {
  return (
    <Tab.Navigator
        initialRouteName="Discover"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "lightgray",
            marginHorizontal: 16,
            borderRadius: 24,
            height: 64,
            marginBottom: 16,
            shadowOpacity: 0,
            elevation: 1,
          },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Discover") {
              iconName = "home";
              color = focused ? "black" : "lightgray";
            } 
            else if (route.name === "Profile") {
              iconName = "person";
              color = focused ? "black" : "lightgray";
            }
            else if (route.name === "Flight") {
              iconName = "airplanemode-active";
              color = focused ? "black" : "lightgray";
            }

            return <MaterialIcons name={iconName} size={24} color={color} />;
          },

          headerShown: false,
        })}>

        <Tab.Screen name="Discover" component={Discover} options={{ headerShown: false }}/>
        <Tab.Screen name="Flight" component={Flight} options={{ headerShown: false }}/>
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>

      </Tab.Navigator>
  )}

export default BottomNav