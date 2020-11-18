import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InicioScreen from './src/components/Inicio/InicioScreen';
import LoginScreen from './src/components/Inicio/LoginScreen';
import CoinsScreen from './src/components/coins/CoinsScreen';
import CoinDetailScreen from './src/components/coinDetail/CoinsDetailScreen';
import FavoritesScreen from './src/components/favorites/FavoritesScreen';
import Colors from './src/res/colors';
import MainTabsNavigator from './src/components/MainTabs/MainTabsNavigator';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: Colors.blackPearl,
                shadowColor: Colors.blackPearl,
            },
            headerTintColor: Colors.white
          }}
        >
        
          <Stack.Screen name="Inicio" component={ InicioScreen }/>
          <Stack.Screen name="InicioSesion" component={ LoginScreen }/>
          <Stack.Screen name="MainTabs" component={ MainTabsNavigator } />
          <Stack.Screen name="MenuCoins" component={ CoinsScreen} />
          <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>    
      </NavigationContainer>
  );
};

export default App;
