import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function AccountScreen({navigation}) {
  return (
    <View>
      <Text>You are accounts page</Text>
    </View>
  );
}

function SettingScreen({navigation}) {
  return (
    <View>
      <Text>You are setting page</Text>
    </View>
  );
}

function HelpScreen({navigation}) {
  return (
    <View>
      <Text>You are help page</Text>
    </View>
  );
}

function FeedbackScreen({navigation}) {
  return (
    <View>
      <Text>You are feedback page</Text>
    </View>
  );
}

const ProfilePage = () => {
  return (
    <NavigationContainer independent={true} >
      <Drawer.Navigator defaultStatus='open' options={{}}>
        <Drawer.Screen 
        name="Account" 
        component={AccountScreen}  
        options={{
          headerStatusBarHeight : -10,
          drawerActiveTintColor : 'black',
          drawerActiveBackgroundColor : 'pink'
        }}/>

        <Drawer.Screen 
        name="Settings" 
        component={SettingScreen}  
        options={{
          headerStatusBarHeight : -10,
          drawerActiveTintColor : 'black',
          drawerActiveBackgroundColor : 'pink'
        }}/>

        <Drawer.Screen 
        name="Help" 
        component={HelpScreen}  
        options={{
          headerStatusBarHeight : -10,
          drawerActiveTintColor : 'black',
          drawerActiveBackgroundColor : 'pink'
        }}/>

        <Drawer.Screen 
        name="Feedback" 
        component={FeedbackScreen}  
        options={{
          headerStatusBarHeight : -10,
          drawerActiveTintColor : 'black',
          drawerActiveBackgroundColor : 'pink'
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default ProfilePage;