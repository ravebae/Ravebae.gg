import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RouterProps } from '../List';
import Ionicons from 'react-native-vector-icons/Ionicons';
/**
 * Function that servers as the screen for the direct message screen, obviously should take in some parameters, 
 * however no clue how we will internalise the message/user id system right now is the prototype ui stage.
 */
 function DirectMessageScreen(){    
    return (
        <View>
            <Text>Details</Text>
        </View>
    )
}

/**
 * 
 * purely ui prototype function
 */
function DirectMessagePrototype(){    
    return (
        <View>
            
        </View>
    )
}

/**
 * internal top bar function
 */
function messageTopBar({ navigation }: RouterProps){
    return {
        title: "David",
        headerStyle: {
            backgroundColor: '#081e23', 
            borderBottomWidth: 1,
            borderBottomColor: '#ccc', 
            elevation: 5,
          },
          headerTitleStyle: {
            color: '#FFFFFF', 
            fontWeight: 'bold', 
          },
        headerLeft: () =>{
            return <Ionicons name="chevron-back-circle-outline" onPress={() => navigation.goBack() } color= "#ea3ef7"/>
        },
        headerRight: ()=>{
            return <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="videocam" color= "#ea3ef7"/>
                <Ionicons name="call" color= "#ea3ef7"/>
                <Ionicons name="calendar" color= "#ea3ef7"/>
            </View>
        }
    }
}

export {DirectMessageScreen, DirectMessagePrototype, messageTopBar}