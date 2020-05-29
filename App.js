import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contants from 'expo-constants';
import Home from './screens/Home' ;
import Create from './screens/Create';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const myOptions = {
  title:"Home",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"#006aff"}
}

 function App() {
  return (
    <View style={styles.container}>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={myOptions} />
        <Stack.Screen name="Create" component={Create} options={{...myOptions, title:"Create"}} />
        <Stack.Screen name="Profile" component={Profile} options={{...myOptions, title:"Profile"}} />
      </Stack.Navigator>
    </View>
  );
}
export default () => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
