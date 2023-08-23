import { View,Image ,StyleSheet, TouchableOpacity} from 'react-native'
import { Dimensions } from 'react-native';
import React, { useState,useEffect } from 'react'


export default function Searchitems() {

    const [images,setImages] = useState([]);
    const fetchApi = async ()=>{
        const response = await fetch('https://randomuser.me/api/?results=50');
        const data = await response.json();
        setImages(data.results);
    }
    useEffect(() => {
        fetchApi();
    }, [])

  return (
    <View style={Style.cont}>
        {
            images.map((image)=>{
                return(
                    <>
                         <TouchableOpacity >
                            <Image style={Style.img} source={{uri:image.picture.large}}/>
                        </TouchableOpacity>
                    </>
                );
            })
        }

        
    </View>
  )
}

const screenWidth = Dimensions.get('window').width;
const imageWidth = (screenWidth - 20) / 2;

const Style = StyleSheet.create({
    cont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    },
    
    img: {
        borderColor:'black',
        borderWidth:2,
        width: imageWidth,
        height: imageWidth*1.2,
        marginBottom:3,
    }
})