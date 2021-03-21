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
        alignItems: 'center',
        justifyContent:'center'
        
    },
    title:{
        color:'grey',
        fontSize:30,
    }

});

export default Header;


