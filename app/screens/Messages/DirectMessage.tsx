import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RouterProps } from '../List';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style'
/**
 * Function that servers as the screen for the direct message screen, obviously should take in some parameters, 
 * however no clue how we will internalise the message/user id system right now is the prototype ui stage.
 */
 function DirectMessageScreen(){    
    return (
        <View style={styles.backgroundView}>
            <Text>Detailssss</Text>
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
        title: "david",
        headerStyle: {
            backgroundColor: '#081e23', 
            borderBottomWidth: 1,
            borderBottomColor: '#ccc', 
            elevation: 0,
            height: 100, 
          },
        headerTitleStyle: {
            color: 'white'
        },
        headerLeft: () =>{
            return <Ionicons name="chevron-back-circle" onPress={() => navigation.goBack() } color= "#ea3ef7" size={30} style={{ marginRight: 20 }}/>
        },
        headerRight: ()=>{
            return <View style={{ flexDirection: 'row', alignItems: 'center', } }>
                <View style={{ paddingHorizontal: 5 }}>
                    <Ionicons name="call" color="#ea3ef7" size={30} />
                </View>
                <View style={{ paddingHorizontal: 5 }}>
                    <Ionicons name="videocam" color="#ea3ef7" size={30} />
                </View>
                <View style={{ paddingHorizontal: 5 }}>
                    <Ionicons name="calendar" color="#ea3ef7" size={30} />
                </View>
                <View style={{ paddingHorizontal: 5 }}>
                    <Ionicons name="ellipsis-horizontal" color="#ea3ef7" size={30} />
                </View>
            </View>
        }
    }
}

export {DirectMessageScreen, DirectMessagePrototype, messageTopBar}