import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';



export default function App() {
  const statusbar = (Platform.OS=='ios') ? <View style={styles.statusBar}></View> : <View></View> //if on iphone then show status bar else show regular view

  return (
    <View style={styles.container}>
      {statusbar}
    </View>
  );
}

const styles = StyleSheet.create({ //this is a class which is passed

  constructor() { //constructor - as soon as the componet is rendered, it will run any code within it

this.state= {
  todoInput: '',
  todosArr: [
    {id:0, title: 'Code', done:true},
    {id:1, title: 'Eat', done:false},
  ]
}    
  },
  container: {
    backgroundColor: 'white',
  },
  statusBar:{
    backgroundColor: '#fc7753', //outraeous orange colour
    height:50
  }
});
