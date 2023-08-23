import { View, Text, StyleSheet ,Image,TouchableOpacity} from 'react-native'
import React from 'react'



const StoryBadge = (props) => {
  return (
    <View>
        <TouchableOpacity
        style={{alignItems:'center'}}
            onPress={()=>{console.log('Story Pressed');}}
        >

            <Image
                style={Styles.storyImage}
                source={props.url}
            />
            <Text style={Styles.storyName}>{props.name}</Text>


       </TouchableOpacity>
       
    </View>
  )
}

const Styles = StyleSheet.create({
    storyImage: {
        height:80,
        width:80,
        borderRadius:50,
        borderColor:'purple',
        borderWidth:3
    },
    storyName: {
        color:'white'
    }


})

export default StoryBadge