import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const Task = (props) => {
 

    var [ isPress, setIsPress ] = React.useState(false);  
    
        return(
        <TouchableOpacity style={[styles.LongPress]} onLongPress={() =>{
           isPress=true;
           console.log(isPress);
        }} delayLongPress={300}>
        <View style={styles.taskContainer}>
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
        backgroundColor: '#d63230',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
        marginLeft:10,
        marginRight:10
    },  
    changetaskContainer:{
        padding:24,
        borderRadius:50,
        alignItems:'center',
        backgroundColor: 'green',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10

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