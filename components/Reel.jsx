import { View, Text ,StyleSheet} from 'react-native'
import Video from 'react-native-video'
import React from 'react'
import { Button } from 'react-native-paper'
import Test from './Test'
import { useNavigation } from '@react-navigation/native'

const Reel = () => {
  const navigation = useNavigation()
  return (
    <View style={Styles.container}>
      <Text>Reel Component</Text>
      {/* <Video
        style={{width:'100%',height:400}}
        source={Vid}
      /> */}
      <Button onPress={navigation.navigate(Test)} title='Test'/>
            </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        marginTop:31,
        paddingLeft:10
    }
})

export default Reel