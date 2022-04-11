import { StyleSheet, Text, View, TextInput,Image, Keyboard  } from 'react-native';


export const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19b194',
    alignItems: 'center',
    justifyContent: 'center'
  },
  home: {
    flex: 1,
    backgroundColor: '#19b194',
    alignItems: 'center',
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
  addrestbutton: {
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 8,
    height: 40,
    width: '45%',
  },
  longbutton: {
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 8,
    height: 40,
    width: '85%',
  },
  text: {
     fontSize: 20,
      borderColor: 'black',
      fontFamily: 'OleoScript_400Regular',
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