import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useFonts, Redressed_400Regular} from '@expo-google-fonts/redressed';
import AppLoading from 'expo-app-loading';

import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';

import { StatusBar } from 'expo-status-bar';
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
// initialParams={{ itemId: Location.getCurrentPositionAsync() }}
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false, headerBackVisible : 'false' }}>
    <HomeStack.Screen name="Home" component={Home}/>
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
  <HomeDrawer.Navigator initialRouteName="HomeStack" screenOptions={{  headerBackVisible : 'false',gestureEnabled : false }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <HomeDrawer.Screen name="HomeStack" component={HomeStackScreen} options={{title :"Home", headerTitle : "" ,gestureEnabled : false}}/> 
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
  <AuthStack.Navigator presentation= 'card'>
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: "Sign In", headerShown: false, gestureEnabled : false}}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account",gestureEnabled : false, headerStyle: {backgroundColor: '#19b194',headerTintColor: "#FFF",}}}
    />
    <AuthStack.Screen
      name="HomeDrawer"
      component={HomeDrawerScreen}
      options={{headerShown: false, gestureEnabled : false}}
    />
  </AuthStack.Navigator>
);

export default function App() {
 //const [number, onChangeNumber] = React.useState(null);
 console.log("runs")   
  let [fontsLoaded] = useFonts({Redressed_400Regular, "Cabin_400Regular": require("./assets/Cabin_400Regular.ttf"), "OleoScript_400Regular": require("./assets/OleoScript_400Regular.ttf")});

 if (!fontsLoaded) {
      return <AppLoading />;
  } else {
    return (
    //<AuthContext.Provider value={authContext}>r
        <NavigationContainer>
          <AuthStackScreen/>
        </NavigationContainer>         
          //</AuthContext.Provider>
  );
}};
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

  // if (isLoading) {
  //   return <Splash />;
  // }
