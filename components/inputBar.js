import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const inputBar = (props) =>{

    return(
            <View style={styles.inputContainer}>
                    <TextInput style={styles.input}/>
                    <TouchableOpacity style={styles.touchableStyle}><Text style={styles.addText}>+</Text></TouchableOpacity>

            </View>

    )
}


const styles = StyleSheet.create({
    
    inputContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            shadowOffset:{width:0,height:3},
            shadowColor: 'black',
            shadowOpacity: 0.2,
            top:1
    },
    input:{
            backgroundColor:'#f2efea',
            flex:1, // felx provides consistent layout on different devices
            height:50,
            fontSize:25,
            fontWeight:'bold',
            color:'#534d56'
            
    },
    addText:{
        fontSize:40,
        paddingLeft:18,
        paddingRight:40,
        alignItems:'center',
        color:'white',
        bottom:2,
        fontWeight: '500'
    },
    touchableStyle:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        backgroundColor:'#00b295',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'

    }
    
})

export default inputBar;