import { TouchableHighlight, Text, View, TextInput,Image} from 'react-native';
import { Dimensions } from 'react-native';
import React from 'react';
import {styles} from './style.js';

const fontwidth= Dimensions.get('window').width
export default function LoginScreenload({ navigation }) {
    const [Username, onUserName] = React.useState();
    const [Password, onPassword ] = React.useState();
   
    
    const loginAttemt = (Username, Password) =>{
      if(Boolean(Username) && Boolean(Password)){ //Must have a username and pasword defined  
      console.log(Username);
      console.log(Password);
      navigation.navigate('HomeDrawer');
      }else{
        console.log("done")
      }
    }
  
    //
  return (
      <View style={styles.container}> 
      <Text style = {{fontSize:0.2*fontwidth,fontFamily: 'Redressed_400Regular',color: '#fff',}}> Green Beam  </Text>
      <Image source = {require('./greenbeamlogo.png')} style = {{ width: '80%', height: '30%',marginTop: 50 ,marginBottom: 30}}/>
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
