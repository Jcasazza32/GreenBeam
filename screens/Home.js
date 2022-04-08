import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import {styles} from './style.js';

//https://github.com/react-native-maps/react-native-maps
//https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md
//https://instamobile.io/react-native-tutorials/react-native-maps/
//https://instamobile.io/react-native-tutorials/react-native-location/

import React from 'react';

export default function HomeLoad() {
 /*
  const checkPermission = () => {
  const hasPermission =  Location.requestForegroundPermissionsAsync();
  if (hasPermission.status === 'granted') {
    const permission =  askPermission();
    return permission;
  }
  return true;
  };
  const askPermission =  () => {
  const permission =  Location.getForegroundPermissionsAsync();
  return permission.status === 'granted';
  };
 
  checkPermission
  const userLocation =  Location.getCurrentPositionAsync();
  */

  /*
  <MapView
         style={mapstyles.map}
         provider={PROVIDER_GOOGLE}
         showsUserLocation
         initialRegion={{
         latitude: 30.633263,
         longitude: -97.677986,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
        />
  */
  return (
    <View style={styles.home}> 
      <View style={{height: 400,
   width: 400, backgroundColor: '#fff'}}>
        
      </View>
      <Text>Home</Text>
    </View>
  );
}
const mapstyles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});