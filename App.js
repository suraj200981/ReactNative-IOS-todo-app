import React, { useState } from 'react';
import { StyleSheet, View, Platform, Text, TouchableOpacity, TextInput, Keyboard, ScrollView, Alert } from 'react-native';
import Header from './components/Header';
import Task from './components/Task';


const styles = StyleSheet.create({ //this is a class which is passed

  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  statusBar: {
    backgroundColor: '#fc7753', //outraeous orange colour
    height: 80
  },
  addText: {
    fontSize: 40,
    paddingLeft: 18,
    paddingRight: 40,
    alignItems: 'center',
    color: 'white',
    bottom: 2,
    fontWeight: '500'

  },
  touchableStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#00b295',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    top: 1
  },
  input: {
    backgroundColor: '#f2efea',
    flex: 1, // felx provides consistent layout on different devices
    height: 50,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#534d56'

  },
  toDosContainer:{
    flex:1,
    paddingTop:10,

  }
});



export default function App() {

  const [task, setTask] = useState();

  const [taskItems, setTaskitems] = useState([]);

  const [intVal, setIntVal] = useState(0);

  const handleAddTask = () => {
    
    
    console.log(taskItems)  //testing to see if value is passed in arrray

    setTaskitems([...taskItems, task]);//appeneds new tasks to the taskitems array
    setTask("");//clear input after submit
    Keyboard.dismiss();
  }



  const alertTodo = () => {

    if(task=="" || task==null){
      Alert.alert("Cannot add an empty todo!");

    }else{
      handleAddTask();
    }
  }
  function getCompleteTask(isPressed) {
    //if completed 
    if(isPressed==false){
      //console.log(isPressed);
       setIntVal(intVal + 1);
    }else{
     // console.log(isPressed);
      setIntVal(intVal - 1);
    }
  }



  const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusBar}></View> : <View></View> //if on iphone then show status bar else show regular view

  return (
    <View style={styles.container}>
      {statusbar}
      <Header title="Todo Today" num={intVal}/>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Enter todo...'
          value={task} onChangeText={task => setTask(task)} />
        <TouchableOpacity style={styles.touchableStyle}><Text style={styles.addText} onPress={() =>alertTodo()}>+</Text></TouchableOpacity>
      </View>
      <ScrollView style={styles.toDosContainer}>

        {
          taskItems.map((item)=>{
            return <Task text={item} incrementCountFunc={getCompleteTask}  /> 
          })
        }
      </ScrollView>

    </View>
  );
}

