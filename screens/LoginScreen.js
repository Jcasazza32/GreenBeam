import { TouchableHighlight, StyleSheet, Text, View, TextInput, Keyboard  } from 'react-native';

import React from 'react';

export default function LoginScreenload({ navigation }) {
    const [Username, onUserName] = React.useState();
    const [Password, onPassword ] = React.useState();

    const loginAttemt = (Username, Password) =>{
      if(Boolean(Username) && Boolean(Password)){ //Must have a username and pasword defined  
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
        onChangeText={onUserName}
        value={Username}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onPassword}
        value={Password}
        placeholder="Password"
      />

    <TouchableHighlight onPress={() => loginAttemt(Username, Password)} style={styles.button}>
            <Text style = {styles.text}>
               Login
            </Text>
      </TouchableHighlight>
 
    <TouchableHighlight onPress={() => navigation.push("CreateAccount")} style={styles.button}>
            <Text style = {styles.text}>
               Create Account
            </Text>
      </TouchableHighlight>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#118c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
   button: {
    backgroundColor: "#fff",
     alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 8,
    height: 40,
    width: 200,
  },
  text: {
     fontSize: 20,
      borderColor: 'black',
  },
  input: {
    height: 40,
    width: 200,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    textAlign: 'center'
  },
});