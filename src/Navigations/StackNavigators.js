import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import RequestScreen from '../screens/RequestScreen';



const Home = createStackNavigator();

export function HomeStack(){
    return(
        <Home.Navigator>
            <Home.Screen 
                name ="HomeScreen"
                component = {HomeScreen}
                options ={{headerShown:false}}
            />
            <Home.Screen 
                name ="RequestScreen"
                component = {RequestScreen}
                options ={{headerShown:false}}
            /> 
            
        </Home.Navigator>
    )
}