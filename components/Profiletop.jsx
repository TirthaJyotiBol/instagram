import { View, Image ,StyleSheet,Text, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import Img from '../images/Tirthapic.jpg'
import { Button } from 'react-native-paper'
import Assam from '../images/As.jpg'
import Amritsar from '../images/Amritsar.jpg'
import Bangalore from '../images/blr.jpg'
import Delhi from '../images/del.jpg'
import Himachal from '../images/him.jpg'
import StoryBadge from './StoryBadge'

const Profiletop = () => {
  return (

    <View style={Styles.container}>

    <View style={Styles.containerItems} >

    <View>
        <Image 
        style={Styles.profilePic}
            source={Img}
        />
        <Text style={Styles.textColor}>Tirtha Jyoti Bol</Text>
        <Text style={Styles.textColor}>You Should Leave !</Text>
    </View>

    <View style={Styles.socials}>
    <Text style={Styles.textColor}>  780</Text>
    <Text style={Styles.textColor}>Posts</Text>
    </View>

    <View style={Styles.socials}>
    <Text style={Styles.textColor}>    1001</Text>
    <Text style={Styles.textColor}>Followers</Text>
    </View>

    <View style={Styles.socials}>
    <Text style={Styles.textColor}>      960</Text>
    <Text style={Styles.textColor}>Followings</Text>
    </View>
      
    </View>

    <View style={{flexDirection:'row'}}>
        <Button buttonColor='grey' textColor='white' mode="outlined" style={{borderRadius:8,marginLeft:20,width:150,height:40}} onPress={()=>{console.log('Button');}}>
            Share Profile
        </Button>
        <Button buttonColor='grey' textColor='white' mode="outlined" style={{borderRadius:8,marginLeft:20,width:150,height:40}} onPress={()=>{console.log('Button');}}>
            Share Profile
        </Button>
    </View>

        <ScrollView horizontal style={Styles.moments}>
            <TouchableOpacity style={{marginLeft:10}}>
            <StoryBadge name="Assam" url = {Assam}/>
            </TouchableOpacity>
           
            <TouchableOpacity style={{marginLeft:10}}>
            <StoryBadge name="Amritsar" url = {Amritsar}/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft:10}}>
            <StoryBadge name="Bangalore" url = {Bangalore}/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft:10}}>
            <StoryBadge name="Himachal" url = {Himachal}/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft:10,marginRight:30}}>
            <StoryBadge name="Delhi" url = {Delhi}/>
            </TouchableOpacity>
            
        </ScrollView>
  
   

    </View>
  )
}

const Styles = StyleSheet.create({

    container: {
        height:'max-height',
        backgroundColor:'black'
    },
    containerItems: {
       paddingLeft:10,
       paddingTop:8,
       flexDirection:'row',
       paddingBottom:14
    },
    profilePic:{
        height:80,
        width:80,
        borderRadius:80
    },
    socials:{
        alignSelf:'center',
        marginTop:-50,
        marginLeft:1,
        width:70
    },
    textColor:{
        color:'white'
    },
    moments: {
        padding:20,
    }

  })

export default Profiletop