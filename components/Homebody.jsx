import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Stories from './Stories'
import AllPosts from './AllPosts'



const Homebody = () => {
  return (
    <View style={Styles.container}>
     <Stories/>
   <AllPosts/>
     
    </View>
  
  )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        height:650,
        paddingBottom:120,
        width:'100%'
    }
})

export default Homebody