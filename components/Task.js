import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Vibration, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Task(props) {

    const name = "suraj sharma";
    const [backgroundColor, setTaskCompletedColour] = useState("#d63230");
    const [textDecorationLine, setTaskCompletedLine] = useState("none");
    const [isPressed, setPress] = useState(false);


    const checkPressed = () => {

        if (isPressed == true) {
            setPress(false);
        } else {
            setPress(true);
        }
    }

    const completeTask = () => {

        if (isPressed == true) {
            setTaskCompletedColour("#d63230");
            setTaskCompletedLine("");
        } else {
            setTaskCompletedColour("green");
            setTaskCompletedLine("line-through");
            Vibration.vibrate(10 * (1 * 1000));
        }
    }
    return (
        <TouchableOpacity onLongPress={() => {
            checkPressed();
            completeTask();
            props.incrementCountFunc(isPressed);
            var returnVal = props.allCompleted();
            if(returnVal==true){
                Alert.alert(
                    "All Tasks completed",
                    "Would you like to clear your todos?",
                    [
                      {
                        text: "No",
                        onPress: () => console.log("No Pressed"),
                      },
                      { text: "Yes", onPress: () => props.allCompletedYes() }
                    ]
                  );
            }
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