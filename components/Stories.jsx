import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import StoryBadge from './StoryBadge'
import Img from '../images/profile.jpg'
import { Avatar } from 'react-native-paper';

const Stories = () => {

    const [users,setUsers] = useState([]);

    const fetchData = async()=>{
        const response = await fetch('https://randomuser.me/api/?results=20');
        const data = await response.json();
        setUsers(data.results);
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <View style={Styles.storyContainer}>

        <ScrollView horizontal style={Styles.othersStory}>
                <View style={Styles.story}>
                    <StoryBadge name="Tirtha" url = {Img} />
                    <TouchableOpacity onPress={()=>{console.log("Add Story Button Pressed");}} >
                         <Avatar.Text style={{marginTop:-45,marginLeft:60,backgroundColor:'#0c65f5'}} size={30} label="+"  />
                    </TouchableOpacity>
                    
                </View>


            {
                    users.map((D)=>{
                        return(
                            <>
                                <View style={Styles.story}>
                                     <StoryBadge key={D.id.value} name={D.name.first} url = {{uri:D.picture.medium}} />
                                </View>
                            </>
                        )
                    })
                }


        </ScrollView>
    </View>
  )
}

const Styles = StyleSheet.create({

    storyContainer: {
        flexDirection:'row',
        backgroundColor:'black',
        width:'100%',
        height:120,
        paddingVertical:10,
    },

    othersStory :{
        flexDirection:'row',
    },

    story: {
        marginHorizontal:8
    }


})

export default Stories