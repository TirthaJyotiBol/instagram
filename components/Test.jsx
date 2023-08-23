import { View,Text ,StyleSheet,Image, TouchableOpacity} from 'react-native'


export default function Test(Props) {


  return (

    <View style={Style.cont}>
        
        
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