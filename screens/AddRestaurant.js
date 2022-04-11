import {TouchableHighlight , StyleSheet, Text, View } from 'react-native';
import {styles} from './style.js';

import React from 'react';
import { useState } from 'react';

export default function App() {
  const questionNumber = 0 
  const [yselected, setYSelected] = useState(false)
  const [nselected, setNSelected] = useState(false)

  const backbutton = (questionNumber) =>{
   
  }

  const nextbutton = (questionNumber)=>{
   setYSelected(false) 
    setNSelected (false)
  }
  const changeColor = (yn) =>{
    if(yn == 0){
      setYSelected(true) 
      setNSelected (false)
    }else{
      setYSelected(false) 
    }
  }
  
  return (
    <View style={styles.container}>
      <Text>New problem </Text>
      <TouchableHighlight onPress={() => changeColor(0)} style={yselected ? [YNButton.selectedbutton] : [styles.longbutton]}>
            <Text style = {styles.text}>
               Yes  
            </Text>
      </TouchableHighlight>  
      <TouchableHighlight onPress={() => changeColor(1)} style={nselected ? [YNButton.selectedbutton] : [styles.longbutton]}>
            <Text style = {styles.text}>
               No  
            </Text>
      </TouchableHighlight>  
      <View style= {{height: 80,  width: '100%',  backgroundColor: "#19b194", flexDirection: 'row'}}>
       <TouchableHighlight onPress={() => backbutton(questionNumber)} style={styles.addrestbutton}>
            <Text style = {styles.text}>
               Back 
            </Text>
      </TouchableHighlight>   
       <TouchableHighlight onPress={() => nextbutton(questionNumber)} style={styles.addrestbutton}>
            <Text style = {styles.text}>
               Next  
            </Text>
      </TouchableHighlight>   
      </View>
      <TouchableHighlight onPress={() => finalsubmit(questionNumber)} style={styles.longbutton}>
            <Text style = {styles.text}>
               Submit  
            </Text>
      </TouchableHighlight>   
    </View>
  );
}

const YNButton= StyleSheet.create({
   selectedbutton: {
    backgroundColor: "green",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 8,
    height: 40,
    width: '85%',
  },
});