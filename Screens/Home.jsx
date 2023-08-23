import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Homeheader from '../components/Homeheader'
import Homebuttom from '../components/Homebuttom'
import Homebody from '../components/Homebody'

export default function Home() {
  return (
    <View style = {Styles.homeContainer}>
        <Homeheader/>
        <Homebody/>
        <Homebuttom/>

    </View>
  )
}

const Styles = StyleSheet.create({

    homeContainer: {
        width:'100%',
        height:'100%',
        marginTop:20,
    }

})

