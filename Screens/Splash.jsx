import { View, Text , StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import Home from './Home'
import Icon from 'react-native-vector-icons/FontAwesome';

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(Home);
        }, 3000);
    }, [])
  return (
      <View style = {Styles.container}>
        <Text style = {Styles.Item} >  <Icon name="instagram" size={30} color="red" /> Instagram | By Tirtha</Text>
        <View style={Styles.line} />
      </View>
  )
}

const Styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor: 'black',
        padding : 10,
        alignItems: 'center'
    },
    Item: {
        color : 'white',
        fontSize : 25,
        marginTop : 400
    },
    line: {
        alignSelf:'center',
        marginLeft: 15,
        width: '50%',
        marginTop:10,
        height: 2,
        backgroundColor: 'red', // Change this to your desired line color
        shadowColor: 'black',   // Shadow color
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 1,     // Shadow opacity
        shadowRadius: 5,        // Shadow radius
        elevation: 3,   
      },
      author : {
        alignSelf: 'center',
        fontSize: 20,
        marginTop : 300,
        marginBottom : 5,
        color : '#c9c904'
      }
})

export default Splash