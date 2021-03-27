import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Vibration } from 'react-native';
import Header from './Header';


const Task = (props,countVal) => {


    const [backgroundColor, setTaskCompletedColour] = useState("#d63230");
    const [textDecorationLine, setTaskCompletedLine] = useState("");
    const [isPressed, setPress] = useState(false);
    const [taskCount, setTaskCount] = useState(0);


    const checkPressed = () => {

        if (isPressed == true) {
            setPress(false);
            console.log(isPressed);
        } else {
            setPress(true);
            console.log(isPressed);
        }
    }

    const completeTask = () => {

        if (isPressed == true) {
            setTaskCompletedColour("#d63230");
            setTaskCompletedLine("");
            setTaskCount(taskCount + 1);
            countVal+=taskCount;



        } else {
            setTaskCompletedColour("green");
            setTaskCompletedLine("line-through");
            setTaskCount(taskCount - 1);
            Vibration.vibrate(10 * (1 * 1000));

        }
    }

    return (

        <TouchableOpacity onLongPress={() => {
            checkPressed();
            completeTask();
           

        }} delayLongPress={300} >
            <View style={[styles.taskContainer, { backgroundColor }]}>
                <Text style={[styles.textStyle, { textDecorationLine }]}> {props.text}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({ //this is a class which is passed


    taskContainer: {
        padding: 24,
        borderRadius: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    textStyle: {
        padding: 10,
        justifyContent: 'space-between',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
        textDecorationStyle: 'double',
        textDecorationColor: 'black',

    },

})

export default Task;