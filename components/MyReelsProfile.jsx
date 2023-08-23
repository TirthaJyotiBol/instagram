import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Homeheader from '../components/Homeheader'
import Homebuttom from '../components/Homebuttom'
import Profiletop from '../components/Profiletop'
import ProfileImages from '../components/ProfileImages'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Profile from '../Screens/Profile'
import MyTagged from './MyTagged'


const MyReelsProfile = () => {
    const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Homeheader/> 

      <View style={Styles.profile_body}>
        <Profiletop/>

        <View style={{flexDirection:'row',paddingLeft:60,backgroundColor:'black'}}>
          <Button textColor='white'
            onPress={() => {
              navigation.navigate(Profile);
            }}
          >MyPosts</Button>

          <Button textColor='grey'
                      onPress={() => {
                        navigation.navigate(MyReelsProfile);
                      }}
                    >My Reels</Button>

          <Button textColor='white'
                      onPress={() => {
                        navigation.navigate(MyTagged);
                      }}
          >Tagged</Button>
         
        </View>
        

          <ProfileImages/>

      </View>

      <Homebuttom/>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  profile_body:{
    height:'79%'
  }
})

export default MyReelsProfile