import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper'
import Homebuttom from '../components/Homebuttom'
import Searchitems from '../components/Searchitems'

const Searchscreen = () => {
  return (
    <View style={Styles.search_screen_container}>
      <Searchbar
        style = {Styles.searchBar}
        placeholder='Search...'
        color='white'
      />

      <ScrollView >
        <Searchitems/>
      </ScrollView>
      

      <Homebuttom/>
    </View>
  )
}

const Styles = StyleSheet.create({
  search_screen_container: {
    marginTop:'12%',
    backgroundColor:'black',
    width:'100%',
    height:'100%'
  },
  searchBar: {
    alignSelf:'center',
    marginBottom:12,
    // borderRadius:0,
    marginTop:10,
    borderColor:'red',
    height:50,
    backgroundColor:'#2e2e2d',
    color:'white',
    width: '95%'
  }
})

export default Searchscreen