import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const Task = (props) => {
 

    const [backgroundColor, setTaskCompletedColour] = useState("#d63230");
    const [textDecorationLine, setTaskCompletedLine] =useState("")
    
        return(
        <TouchableOpacity onLongPress={() =>{
           console.log("Long press achieved");
           setTaskCompletedColour("green");
           setTaskCompletedLine("line-through")
        }} delayLongPress={300}>
        <View style={[styles.taskContainer,{backgroundColor}]}>
            <Text style={[styles.textStyle,{textDecorationLine}]}> {props.text}</Text>
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
        textDecorationStyle: 'double',
        textDecorationColor:'black',

    }

})

export default Task;