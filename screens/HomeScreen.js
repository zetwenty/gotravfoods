import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
  } from "react-native";
  import React, { useLayoutEffect } from "react";
  import * as Animatable from "react-native-animatable";
  
  import { useNavigation } from "@react-navigation/native";
  import { fdstr } from "../assets";
  
  const HomeScreen = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  
    return (
      <SafeAreaView className="bg-[#f1ffdd] flex-1 relative">
        {/* First Section */}
  
        <View className="flex-row px-8 mt-16 items-center space-x-1">
          <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
            <Text className="text-[#00BCC9] text-3xl font-semibold">G</Text>
          </View>
  
          <Text className="text-[#2A2B4B] text-3xl font-semibold">Travfoods</Text>
        </View>
  
        {/* Second Section */}
        <View className="px-6 mt-8 space-y-3">
          <Text className="text-[#3C6072] text-[41px]">ENJOY THE TRIP, INDULGE YOUR TASTE, BUD</Text>
  
          <Text className="text-[#3C6072] text-base">
          "Your diet is your bank account. Good food choices are a good investment." - Bethenny Frankel
          </Text> 
          
        </View>
  
        {/* Circle Section */}
        {/* <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
        <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View> */}
  
        {/* Image container */}
        <View className="flex-1 relative items-center justify-center">
          <Animatable.Image
            animation="fadeIn"
            easing="ease-in-out"
            source={fdstr}
            className="w-full h-full object-cover mt-20"
          />
  
          <TouchableOpacity
            onPress={() => navigation.navigate("BottomNav")}
            className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
          >
            <Animatable.View
              animation={"pulse"}
              easing="ease-in-out"
              iterationCount={"infinite"}
              className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
            >
              <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default HomeScreen;
  