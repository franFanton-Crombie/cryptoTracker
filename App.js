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

import LoginMockApi from './src/components/LOGINMOCKAPP/loginScreenMOCKAPI'
import HomeMockApi from './src/components/LOGINMOCKAPP/HomeScreenMOCKAPI'
import CreateAccountMockApi from './src/components/LOGINMOCKAPP/createAccountScreenMOCKAPI'

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
            headerTintColor: Colors.white,
            headerShown: false
          }}
        >
          <Stack.Screen name="LoginMOCKAPI" component={ LoginMockApi }/>
          <Stack.Screen name="HomeMOCKAPI" component={ HomeMockApi }/>
          <Stack.Screen name="CreateAccountMOCKAPI" component={ CreateAccountMockApi }/>
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
