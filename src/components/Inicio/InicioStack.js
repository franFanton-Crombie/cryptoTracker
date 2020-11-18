import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from './InicioScreen';
import Colors from '../../res/colors';
import LoginScreen from './LoginScreen';
import MenuStack from '../menu/MenuStack';
import { TabActions } from '@react-navigation/native';
const Stack = createStackNavigator();
const InicioStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
            headerStyle: {
                backgroundColor: Colors.blackPearl,
                shadowColor: Colors.blackPearl,
            },
            headerTintColor: Colors.white
        }}
        >
            <Stack.Screen 
                name="Inicio"
                component={ InicioScreen }
            />
            <Stack.Screen 
                name="InicioSesion"
                component={ LoginScreen }
            />
            
        </Stack.Navigator>
    );
}

export default InicioStack;