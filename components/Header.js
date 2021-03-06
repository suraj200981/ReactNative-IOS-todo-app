import React from 'react';
import {StyleSheet, Text, View, } from 'react-native';


const Header = (props) => {

    return(
        <View style={styles.header}>
            <Text style={styles.title}> {props.title}</Text>
            <View style={styles.countContainer}>
            <Text style={styles.countTaskTitle}>Completed:{props.num} </Text>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    header:{
        backgroundColor:'#403d58',
        height: 100,
        alignItems: 'center', // aligns the text
        justifyContent:'center'// positions center of the componet itself
        
    },
    title:{
        color:'white',
        fontSize:38,
        fontWeight: 'bold'
    },
    countTaskTitle:{
        fontSize:20,
        color:'white'
    },
    countContainer:{
        flexDirection:'row'
    }

});

export default Header;


