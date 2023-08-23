import { StyleSheet, View } from 'react-native';
import Home from './Screens/Home';
import Splash from './Screens/Splash';
import Searchscreen from './Screens/Searchscreen';
import Reels from './Screens/Reels';
import Profile from './Screens/Profile';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTagged from './components/MyTagged';
import MyReelsProfile from './components/MyReelsProfile';
import Test from './components/Test';




export default function App() {

  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>

        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Splash" component={Splash}  />
        <Stack.Screen name="Searchscreen" component={Searchscreen}/>
        <Stack.Screen name="Reels" component={Reels}/>
        <Stack.Screen name ="MyReelsProfile" component={MyReelsProfile}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='MyTagged' component={MyTagged}/>
        <Stack.Screen name="Test" component={Test}/>

      </Stack.Navigator>
    </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
