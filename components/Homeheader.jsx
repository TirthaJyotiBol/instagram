import { View, Text, Image ,StyleSheet,useState} from 'react-native';
import { Button} from 'react-native-paper';
import React from 'react'
import Logo from '../images/iglogo.png'
import Icon from 'react-native-vector-icons/FontAwesome';



const Homeheader = () => {



  return (
    <View style={Styles.container}>

        <Image
            style = {Styles.instagram_logo}
            source={Logo}
        />
        <Icon style={Styles.instagram_dropdown} name="caret-down" size={15} color="black" />

        <View style={Styles.right_menu_items}>
             <Icon style={Styles.instagram_dropdown_right} name="heart-o"  size={20}/>
             <Icon style={Styles.instagram_dropdown_right} name="comments" size={23}/>
        </View>


    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        paddingLeft : 15,
        backgroundColor:'black',
        marginTop:22
    },

    instagram_logo :{
        height:50,
        width:90,
        tintColor : 'white'
    },

    instagram_dropdown: {
        marginLeft :5,
        marginTop:15,
        color : 'white'
    },

    instagram_dropdown_right: {
        marginLeft :10,
        marginTop:12,
        color : 'white'
    },

    right_menu_items: { 
        flexDirection:'row',
        marginLeft:150
    }
})

export default Homeheader;