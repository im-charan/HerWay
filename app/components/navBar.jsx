import React from "react";
import { View } from "react-native-web";
import { Icon,icon_colors } from "@rneui/base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReportPage from "../(screen)/(report)/report";
import AlarmPage from "../(screen)/(alarm)/alarmPage";
import HomePage from "../(screen)/(homescreen)/homePage";
import ProfilePage from "../(screen)/(profile)/profilePage";


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
          backgroundColor: "skyblue",
          borderRadius: 15,
          height: 90,
        },
      }}
    >
      <Tab.Screen component={ReportPage} name="Report"></Tab.Screen>
      <Tab.Screen component={AlarmPage} name="Alarm"></Tab.Screen>
      <Tab.Screen component={HomePage} name="Home"></Tab.Screen>
      

      <Tab.Screen component={ProfilePage} name="Profile"></Tab.Screen>
      {/* <Tab.Screen component={UserInfo} name="UsersInfo"></Tab.Screen> */}
    </Tab.Navigator>
  );
};

export default CustomNavigator;