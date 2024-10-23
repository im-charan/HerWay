import React from "react";
import { View } from "react-native-web";
import { Icon,icon_colors } from "@rneui/base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReportPage from "../(screen)/(report)/report";
import HomePage from "../(screen)/(homescreen)/homePage";
import ProfilePage from "../(screen)/(profile)/profilePage";
import SosPage from "../(screen)/(sos)/sosPage";

import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

const Tab = createBottomTabNavigator();

const CustomNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: "pink",
          borderRadius: 15,
          height: 60,
        },
      }}
    >
      <Tab.Screen 
      component={HomePage} 
      name="Home"
      options={{
        tabBarIcon : ({colour}) => <Entypo name="home" size={24} color="black" />,
        headerShown : false
      }}
      ></Tab.Screen>

      <Tab.Screen 
      component={ReportPage} 
      name="Report"
      options={{
        tabBarIcon : ({colour}) => <MaterialIcons name="report-problem" size={24} color="black" />,
        headerShown : false
      }}
      ></Tab.Screen>

      <Tab.Screen 
      component={SosPage} 
      name="SOS"
      options={{
        tabBarIcon : ({colour}) => <MaterialIcons name="sos" size={30} color="black" />,
        headerShown : false
      }}
      ></Tab.Screen>
      

      <Tab.Screen 
      component={ProfilePage} 
      name="Profile"
      options = {{
        tabBarIcon : ({colour}) => <Fontisto name="female" size={24} color="black" />,
        headerShown : false
      }}
      ></Tab.Screen>
      {/* <Tab.Screen component={UserInfo} name="UsersInfo"></Tab.Screen> */}
    </Tab.Navigator>
  );
};

export default CustomNavigator;