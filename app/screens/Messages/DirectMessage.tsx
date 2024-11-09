import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RouterProps } from '../List';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import ChatBubble from 'react-native-chat-bubble';


type itemData = {
    message: string;
    owner: boolean;
    isImportant: boolean;
    messageDate: string;
    pictureUrl: string;
}

const data : itemData[] = [
    {
        message: "Hey Gurl!!!",
        owner: false,
        isImportant: false,
        messageDate: "Thurs 25, Dec 9.19 PM",
        pictureUrl: "",
    },
    {
        message: "You Matched with David",
        owner: true,
        isImportant: true,
        messageDate: "Thurs 25, Dec 9.19 PM",
        pictureUrl: "",
    },
    {
        message: "Wassup",
        owner: true,
        isImportant: false,
        messageDate: "Thurs 25, Dec 9.19 PM",
        pictureUrl: "",
    },
    {
        message: "I'm Radiant",
        owner: false,
        isImportant: false,
        messageDate: "Thurs 25, Dec 9.19 PM",
        pictureUrl: "",
    },
    {
        message: "Marry me!",
        owner: true,
        isImportant: false,
        messageDate: "Thurs 25, Dec 9.19 PM",
        pictureUrl: "",
    },
    {
        message: "Marry me!",
        owner: true,
        isImportant: false,
        messageDate: "Thurs 25, Dec 9.19 PM",
        pictureUrl: "",
    },
    {
        message: "Marry me!",
        owner: true,
        isImportant: false,
        messageDate: "Thurs 25, Dec 9.19 PM",
        pictureUrl: "",
    },
    {
        message: "Marry me!",
        owner: true,
        isImportant: false,
        messageDate: "Thurs 25, Dec 9.19 PM",
        pictureUrl: "",
    },
    {
        message: "Marry me!",
        owner: true,
        isImportant: false,
        messageDate: "Thurs 25, Dec 9.19 PM",
        pictureUrl: "",
    },
    {
        message: "",
        owner: true,
        isImportant: false,
        messageDate: "Thurs 25, Dec 9.19 PM",
        pictureUrl: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
    },

]


type itemProps = {
    item: itemData;
    onPress: () => void;
    ownerBackgroundColor: string, 
    nonOwnerBackground: string,
    textColor: string,
}

// Ui element pertaining to a message bubble and it's corresponding Column Element?
const Item = ({item, onPress, ownerBackgroundColor, nonOwnerBackground, textColor}: itemProps) => {
    if (item.pictureUrl === ""){
        return (
            <ChatBubble
          isOwnMessage={item.owner}
          bubbleColor={item.owner ? ownerBackgroundColor : nonOwnerBackground}
          tailColor={item.owner ? ownerBackgroundColor : nonOwnerBackground}
          withTail={false}
          onPress={() => console.log("Bubble Pressed!")}
        >
          <Text style={{color: textColor}}>{item.message}</Text>
        </ChatBubble>
        )
    } else {
        if (item.owner){
            console.log("returned owner")
            return (
                <Image
                source={{
                    uri: item.pictureUrl,
                  }}
                style={[styles.imageStyle,{}]}
            />
            )
        } else {
            console.log("returned nonwoern")
            return (
                <Image
                source={{
                    uri: item.pictureUrl,
                  }}
                style={styles.imageStyle}
            />
            )
        }
    }
}


    
    

const ImportantMiddleMessage = ({item}: itemProps) => (
    <View style={styles.importantMessage}>
        <Text style={[styles.importantText]}>{item.messageDate}</Text>
        <Text style={styles.importantText}>{item.message}</Text>
    </View>
)


const renderItem = ({item}: {item: itemData}) => {
    if (item.isImportant){
        return (
            <ImportantMiddleMessage 
                item={item}
                ownerBackgroundColor='white'
                textColor='White'
                onPress={() => { } } nonOwnerBackground={''}            
            />
        )
    } 
    return (
      <Item
        item={item}
        onPress={() => {}}
        ownerBackgroundColor={"#e2bdff"}
        nonOwnerBackground={"#ffffff"}
        textColor={"Black"}
      />
    );
  };

/**
 * Function that servers as the screen for the direct message screen, obviously should take in some parameters, 
 * however no clue how we will internalise the message/user id system right now is the prototype ui stage.
 */
function DirectMessageScreen(){
    const [sendText, setsendText] = useState('');
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.backgroundView}>
            <FlatList
                data={data}
                renderItem={renderItem}
                style={styles.messageScroll}
            />
            <MessageBottombar onsend={() => {}}/>
        </View>
        </GestureHandlerRootView>
    )
}


/**
 * 
 * purely ui prototype function
 */
function DirectMessagePrototype(){    
    return (
        <View style={styles.importantMessage}>
            
        </View>
    )
}

function MessageBottombar({onsend} : {onsend: () => void}){
    const [sendText, setsendText] = useState('');
    return (
        <View style= {styles.messageBar}>
            <TextInput
                style={styles.searchBar}
                placeholder="SEND MESSAGE"
                value={sendText}
                onChangeText={setsendText}
                clearButtonMode="always"
                placeholderTextColor={"#FFFF"}
            />
            <Ionicons name="image"  color= "#ea3ef7" size={33} style={[{alignSelf: "center", marginLeft: 20}]} />
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
            borderBottomColor: '#081e23', 
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

//timestamp every 5 hours



export {DirectMessageScreen, DirectMessagePrototype, messageTopBar}