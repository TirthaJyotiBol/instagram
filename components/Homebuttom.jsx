import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { IconButton,Avatar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfilePic from '../images/profile.jpg'

import Home from '../Screens/Home';
import Searchscreen from '../Screens/Searchscreen';
import Reels from '../Screens/Reels';
import Profile from '../Screens/Profile';


import { useNavigation } from '@react-navigation/native';



const Homebuttom = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.button_container}>

    <IconButton
      style={Styles.icon_button}
        icon={() => <Icon name="home" size={24} color="white" />}
        onPress={() => {
          navigation.navigate(Home);
          console.log('Home button pressed');
        }}
      />

    <IconButton
      style={Styles.icon_button}
        icon={() => <Icon name="search" size={24} color="white" />}
        onPress={() => {
          navigation.navigate(Searchscreen)
          console.log('Search button pressed');
        }}
      />


    <IconButton
          style={Styles.icon_button}
          icon={() => <Icon name="add" size={24} color="white" />}
          onPress={() => {
            // Implement favorite functionality
            console.log('Reels button pressed');
          }}
        />

      <IconButton
          style={Styles.icon_button}
          icon={() => <Icon name="camera" size={24} color="white" />}
          onPress={() => {
            navigation.navigate(Reels);
            console.log('Reels button pressed');
          }}
        />  

    <TouchableOpacity
        onPress={()=>{
            navigation.navigate(Profile);
            console.log("Avatar clicked");
        }}
        onLongPress={()=>{
            console.log("Long Pressed clicked");
        }}
        style={{marginTop:13,marginLeft:25}}
    >
        <Avatar.Image
        size={26}
        source={ProfilePic}
        />
    </TouchableOpacity>
            
    </View>
  )
}

const Styles = StyleSheet.create({
    button_container: {
        backgroundColor : 'black',
        height : 60,
        paddingHorizontal:10,
        flexDirection:'row',
        paddingBottom:120
    },

    icon_button: {
        marginLeft: 22,
    }
})

export default Homebuttom;