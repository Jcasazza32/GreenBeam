import { Coustard_400Regular, useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Settings, StyleSheet, Text, View, Alert } from 'react-native';


import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
<<<<<<< Updated upstream
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

=======
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem  } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';

/**
 * App Screens
 **/
import AddRestaurant from "./screens/AddRestaurant"
import CreateAccount from "./screens/CreateAccount"
import Favorites from "./screens/Favorites"
import Home from "./screens/Home"
import LoginScreen from "./screens/LoginScreen"
import Profile from "./screens/Profile"
import Restaurant from "./screens/Restaurant"
import SettingScreen from "./screens/SettingScreen"



/*
This just holds the actual home page and Resuant page 
*/
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false, headerBackVisible : 'false' }}>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Restaurant" component={Restaurant} />
  </HomeStack.Navigator>
);

/*
This funtion can handel all of the necessary requirements for loging the user out 
Currently just moves the user to the login page  
*/
const LogoutFunct = (parent) =>
parent.pop()


//https://reactnative.dev/docs/alert
//This creates an alert(a popup) which confirms if the user would loke to logout 
const createTwoButtonAlert = (parent) =>
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out",
      [
        { text: "No"},//does nothing closes alert 
        {text: "Yes", onPress: () => LogoutFunct(parent)}
      ]
    );

/*
With Drawer content we can add buttons directly into the drawer without them having thier own screen 
This holds the logout button which logs the user out 
*/
function CustomDrawerContent(props) {
 //https://stackoverflow.com/questions/52409855/how-to-get-objects-in-array-of-object-in-react-native
 return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" onPress={() =>
         createTwoButtonAlert(props.navigation.getParent())} /> 
    </DrawerContentScrollView>
  );
}

/*
This holds the main app 
It holds the Home screen and the setting screen
https://reactnavigation.org/docs/drawer-navigator/
//https://stackoverflow.com/questions/56820757/how-to-place-search-bar-inside-header-in-react-native may be useful when we need to add a search box 

*/
const HomeDrawer = createDrawerNavigator();
const HomeDrawerScreen  = () => (
  <HomeDrawer.Navigator initialRouteName="HomeStack" screenOptions={{  headerBackVisible : 'false' }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <HomeDrawer.Screen name="HomeStack" component={HomeStackScreen} options={{title :"Home", headerTitle : "" }}/> 
    <HomeDrawer.Screen name="Profile" component={Profile} />
    <HomeDrawer.Screen name="Favorites" component={Favorites} />
    <HomeDrawer.Screen name="Settings" component={SettingScreen} />
    <HomeDrawer.Screen name="AddRestaurant" component={AddRestaurant} />
  </HomeDrawer.Navigator>
);

/*
This Stack handels logging in and creating the account 
The base one is the login process 
if they login pass back to Root and move to the app its self 
The second layer is the create account proccess 
*/
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator presentation= 'card' screenOptions={{gestureEnabled : false, headerBackVisible : false }}>
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: "Sign In",}}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    />
    <AuthStack.Screen
      name="HomeDrawer"
      component={HomeDrawerScreen}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);
>>>>>>> Stashed changes

export default function App() {
 //const [number, onChangeNumber] = React.useState(null);
  
  return (
<<<<<<< Updated upstream
    <SafeAreaView style={LoginBackground.container}>
     <Text adjustsFontSizeToFit = {true} style={{ fontFamily: 'Inter-Black', fontSize: 60, color: '#beed72', justifyContent: 'center', alignItems: 'center'
, textAlign: 'center' }}>GreenBeam</Text>
      {/*
      <TextInput
        style={LoginInput.input}
        onChangeText={onChangeNumber}
        placeholder="useless placeholder"
        multiline = {false}
        keyboardType="email-address"
      />
      */}
      <StatusBar style="auto" />
    </SafeAreaView>
=======
    //<AuthContext.Provider value={authContext}>r
        <NavigationContainer>
          <AuthStackScreen/>
        </NavigationContainer>         
          //</AuthContext.Provider>
>>>>>>> Stashed changes
  );
};
//commented out but may be useful for login reqirements 

// /*
// This is the most deep layer of our navagators 
// Here we seperate login from using the app 
// If we aren't logged in we should be in the Auth stack 
// When we are logged in we are in the App Drawer
// */
// const RootStack = createStackNavigator();
// const RootStackScreen = () => (
//   <RootStack.Navigator headerMode="none">
//     console.log("not yet")
//     {false ? (
//       <RootStack.Screen
//         name="App"
//         component={HomeDrawer}
//         options={{
//           animationEnabled: false
//         }}
//       />
//     ) : (
//       <RootStack.Screen
//         name="Auth"
//         component={AuthStackScreen}
//         options={{
//           animationEnabled: false
//         }}
//       />
//     )}
//   </RootStack.Navigator>
// );

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  // const authContext = React.useMemo(() => {
  //   return {
  //     signIn: () => {
  //       setIsLoading(false);
  //       setUserToken("asdf");
  //     },
  //     signUp: () => {
  //       setIsLoading(false);
  //       setUserToken("asdf");
  //     },
  //     signOut: () => {
  //       setIsLoading(false);
  //       setUserToken(null);
  //     }
  //   };
  // }, []);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

<<<<<<< Updated upstream
const LoginBackground = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39ab1a',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
const LoginInput = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
=======
  // if (isLoading) {
  //   return <Splash />;
  // }
>>>>>>> Stashed changes
