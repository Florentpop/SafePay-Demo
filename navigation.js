import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/components/screens/logInScreen';
import Signup from './src/components/screens/signUpScreen';
import GetStarted from './src/components/screens/getStartedScreen';
import Select from './src/components/screens/OptionScreen';

const Stack  = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="GetStarted">
          <Stack.Screen
            options={{
              headerShown: false
            }}
            
              name="GetStarted" component={GetStarted}/>

          <Stack.Screen
            options={{
              headerShown: false
              }}
              
              name="Login" component={Login}/>

          <Stack.Screen
            options={{
              headerShown: false
                }}
                
              name="Signup" component={Signup}/>

          <Stack.Screen
            options={{
              headerTitle:"Select option",
          headerStyle:{
            backgroundColor:"#4470da"
          },
          headerTintColor:"white",
          headerTitleAlign:"center",
                  }}
                  
              name="Select" component={Select}/>
             
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}


