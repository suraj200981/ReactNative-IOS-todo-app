import React from 'react';
import {StyleSheet, Text, View, } from 'react-native';

const Header = (props) => {

    return(
        <View style={styles.header}>
            <Text style={styles.title}> {props.title}</Text>
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
    }

});

export default Header;


