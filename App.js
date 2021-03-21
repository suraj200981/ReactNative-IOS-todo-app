import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Header from './components/Header';
import InputBar from './components/inputBar';




export default function App() {
  const statusbar = (Platform.OS=='ios') ? <View style={styles.statusBar}></View> : <View></View> //if on iphone then show status bar else show regular view

  return (
    <View style={styles.container}>
      {statusbar}
      <Header title="Todo Today"/>

      <InputBar />
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
    flex:1,
    backgroundColor: 'white',
 
  },
  statusBar:{
    backgroundColor: '#fc7753', //outraeous orange colour
    height:80
  }
});
