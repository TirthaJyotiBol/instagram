import { ScrollView, View} from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react'
import Post from './Post'

const AllPosts = () => {
    const [api,updateApi] = useState([])
    const fetchApi= async ()=>{
        const res = await fetch('https://randomuser.me/api/?results=50');
        const data = await res.json();
        updateApi(data.results);
    }

    useEffect(() => {
      fetchApi();
    }, [])

  return (
    <View>
        <ScrollView>
      {
        api.map((data)=>{
          return (
            <>
              <Post Key={data.login.uuid} 
                name={data.name.first+" "+data.name.last}
                profilepic ={{uri : data.picture.thumbnail}} 
                post ={{uri : data.picture.large}}/> 
            </>
          );
        })
      }
      </ScrollView>

    </View>
  )
}

export default AllPosts