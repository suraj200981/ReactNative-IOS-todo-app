import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const Task = (props) => {
 

    const [backgroundColor, setTaskCompleted] = useState("#d63230");
    
        return(
        <TouchableOpacity onLongPress={() =>{
           console.log("Long press achieved");
           setTaskCompleted("green");
        }} delayLongPress={300}>
        <View style={[styles.taskContainer,{backgroundColor}]}>
            <Text style={styles.textStyle}> {props.text}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ //this is a class which is passed


    taskContainer:{
        padding:24,
        borderRadius:50,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
        marginLeft:10,
        marginRight:10
    },  
    textStyle:{
        padding:10,
        justifyContent:'space-between',
        color:'white',
        fontWeight:'bold',
        fontSize:28,

    }

})

export default Task;