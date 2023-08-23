import { View,Text ,StyleSheet,Image, TouchableOpacity} from 'react-native'
import Img from '../images/Tirtha.jpeg'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-paper';

export default function Post(Props) {


  return (

    <View style={Style.cont}>
        <View style={Style.post_header}>
            <Image
                style={Style.image}
                source={Props.profilepic}
            />
            <Text style={{color:'white',marginLeft:15,marginTop:10,fontSize:15}}>
                {Props.name}
            </Text>
        </View>
        
        <View style={Style.post_picture}>
            <Image
                style = {Style.image_post}
                source={Props.post}
            />
        </View>

        <View style={Style.post_social}>
            <TouchableOpacity onPress={()=>{console.log('Liked');}}>
                 <Icon style={Style.like} name="favorite" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{console.log('Comment');}}>
                 <Icon style={Style.comment} name="comment" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{console.log('Share');}} >
                <Icon style={Style.share} name="share" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{console.log('Saved');}}>
                <Icon style={Style.save} name="folder" size={30} color="black" />
            </TouchableOpacity> 
            
        </View>

        <View style={Style.post_addcomment}>
            <Image source={Img} style={Style.comment_picture}/>
            <TextInput style={Style.Mycomment} placeholder='Add a comment...'></TextInput>
        </View>

        
    </View>
  )
}


const Style = StyleSheet.create({
    
    cont: {
        marginVertical:25,
        paddingVertical:1,
    },
    username:{
        color:'black'
    },
    post_header:{
        flexDirection:'row',
        marginLeft:10
    },
    image:{
        height:40,
        width:40,
        borderRadius:60
    },
    image_post: {
        height:350,
        width:'100%',
        marginTop:12
    },
    post_social:{
        flexDirection:'row',
        marginHorizontal:10,
        paddingVertical:20
    },
    like:{
        color:'red',
        marginHorizontal:10
    },
    comment: {
        marginHorizontal:10
    },
    share:{
        marginHorizontal:10
    },
    save:{
        marginLeft:140,
        color:'white'
    },
    post_addcomment:{
        flexDirection:'row'
    },
    comment_picture:{
        height:30,
        width:30,
        borderRadius:80,
        marginHorizontal:15,
        marginVertical:5
    },
    Mycomment:{
        backgroundColor:'black',
        color:'red',
        width:'70%',
        height:40
    }

   
})