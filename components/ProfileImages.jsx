import { View, Text,Image, ScrollView,Dimensions,StyleSheet } from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react';

const ProfileImages = () => 
{
    const api_key = 'Pu6EdPY96EbBfJSM31AskNiAzfitnt209Ux8VThVkhZOf2GwH93baPKO';
    const [myImage,updateImage] = useState([]);


    const fetchApi = async()=>{
       
        const response = await fetch(
            'https://api.pexels.com/v1/curated?per_page=10',
            {
              headers: {
                Authorization: api_key,
              },
            }
          );

        const data = await response.json();
        updateImage(data.photos);
    }

    useEffect(() => {
        fetchApi();
    }, [])

  return (
    <ScrollView>
    <View style={Style.cont}>
      {
        myImage.map((d)=>{
            return(
                <>
                    <Image
                            style={Style.img}
                            source={{ uri: d.src.medium }}
                    />
                </>
            );
        })
      }
    </View>
    </ScrollView>
  )
}


const screenWidth = Dimensions.get('window').width;
const imageWidth = (screenWidth - 20) / 3;

const Style = StyleSheet.create({
    cont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor:'black'
    },
    
    img: {
        borderColor:'black',
        borderWidth:2,
        width: imageWidth,
        height: imageWidth*1.2,
        marginBottom:3,
    }
})


export default ProfileImages