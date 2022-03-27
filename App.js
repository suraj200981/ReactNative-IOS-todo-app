import React, { useState } from 'react';
import { StyleSheet, View, Platform, Text, TouchableOpacity, TextInput, Keyboard, ScrollView, Alert } from 'react-native';
import Header from './components/Header';
import Task from './components/Task';

import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {

  const [task, setTask] = useState();

  const [taskItems, setTaskitems] = useState([]);

  const [intVal, setIntVal] = useState(0);

  const handleAddTask = () => {
    
    
    console.log(taskItems)  //testing to see if value is passed in arrray

    setTaskitems([...taskItems, task]);//appeneds new tasks to the taskitems array
    setTask("");//clear input after submit
    Keyboard.dismiss();

    //save tasks to local storage
    AsyncStorage.setItem('tasks', JSON.stringify(taskItems));
  }

  function getTodos(){
    AsyncStorage.getItem('tasks').then(
      (result) => {
        if(result){
          setTaskitems(JSON.parse(result));
        }
      }
    )
  }
  const alertTodo = () => {

    if(task=="" || task==null){
      Alert.alert("Cannot add an empty todo!");

    }else{
      handleAddTask();
    }
  }
  function getCompleteTask(isPressed) {
    if(isPressed==false){
       setIntVal(intVal + 1);
    }else{
      setIntVal(intVal - 1);
    }
  }

  function AllTasksCompletedYes(){
    setTaskitems([]);
    setIntVal(0);
    AsyncStorage.setItem('tasks', JSON.stringify(taskItems));
  }


  function allTasksCompleted(){
    console.log("-----------")
    console.log("Total Tasks in Array: "+taskItems.length);
    console.log("Completed Tasks: "+intVal);
    console.log("-----------")
    //check if intVal is 1 less then taskItems.length
    if(intVal==taskItems.length-1){
      return true;
    }else{
      return false;
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
            return <Task text={item}
            incrementCountFunc={getCompleteTask}
            taskArrLength={taskItems.length}
            allCompleted={allTasksCompleted}
            allCompletedYes={AllTasksCompletedYes}/> 
          })
        }
      </ScrollView>
        <TouchableOpacity style={{width:150,height:50, backgroundColor:'black', borderRadius:15, textAlign:'center', marginLeft:140, marginBottom:20, paddingTop:5}}>
          <Text style={{color:'white', fontSize:30, textAlign:'center'}} onPress={() =>getTodos()}>Load</Text>
        </TouchableOpacity>
    </View>
  );
}


//styles
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
