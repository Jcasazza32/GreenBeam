import { TouchableHighlight , StyleSheet, Text, View, TextInput, Keyboard  } from 'react-native';
import {styles} from './style.js';

import React from 'react';

export default function CreateAccountLoad({ navigation }) {
    const [Username, onUserName] = React.useState();
    const [Password, onPassword ] = React.useState();
    const [Email , onEmail] =React.useState();
    const [Phone , onPhone] =React.useState();


    const CreateAccountAttemp = (Username, Password, Email) =>{
      if(Boolean(Username) && Boolean(Password) && Boolean(Email)){ //Must have a username, pasword and email defined  
      console.log(Username);
      console.log(Password);
      navigation.push("HomeDrawer");
      }else{
        console.log("done")
      }
      
    }
  return (
      <View style={styles.container}> 
      
     <TextInput
        style={styles.input}
        onChangeText={onEmail}
        value={Email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onPassword}
        value={Password}
        placeholder="Password"
      />
      
       <TextInput
        style={styles.input}
        onChangeText={onPhone}
        value={Phone}
        keyboardType="numeric"
        placeholder="Phone number"
      />

    <TouchableHighlight onPress={() => CreateAccountAttemp(Username, Password, Email)} style={styles.button}>
            <Text style = {styles.text}>
               Create Account 
            </Text>
      </TouchableHighlight>    
    </View>
  );
}

