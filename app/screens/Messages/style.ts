import React from 'react';
import {StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    backgroundView: {
        flex: 1, 
        backgroundColor: '#081e23',
    },
    messageColumn : {
        width: "100%",
        justifyContent: "center",
    },
    importantMessage: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
    },
    message : {
        width: "100%",
        justifyContent: "center",
        height: 60,
    },
    importantText: {
        color: "#000000",
        fontSize: 12
    },
    messageScroll:{
        height: "90%",
        width: "100%",
        paddingHorizontal: 20,
    },
    searchBar: {
        height: "80%",
        width: '80%',
        backgroundColor: '#081e23',
        borderRadius: 40,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: '#ddd',
      },
      imageStyle: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        borderRadius: 20
      },
    messageBar: {
        height: "10%",
        backgroundColor: '#081e23',
        paddingLeft: 20,
        flexDirection: "row",
        justifyContent: 'flex-start', 
        alignItems: 'center',  
    }

});

export default styles;