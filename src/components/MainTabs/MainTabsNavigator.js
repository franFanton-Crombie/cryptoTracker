import React from 'react';
import Coins from '../coins/CoinsScreen';
import Favorites from '../favorites/FavoritesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './TabBar';
import Colors from '../../res/colors';
import {
  Image
} from 'react-native';

const Tabs = createBottomTabNavigator();

const MainTabsNavigator = ({navigation}) => {
    return (
        <Tabs.Navigator
            tabBarOptions={{
            tintColor: "#fefefe",
            style: {
                backgroundColor: Colors.blackPearl
            }
            }
        }>
        <Tabs.Screen
          name="Coins"
          component={ Coins }
          options={{
            tabBarVisible: true,
            tabBarIcon: ({ size , color }) => (
              <Image 
                style={{tintColor:color , width: size , height: size}}
                source={require('../../assets/dinero.png')}/>
            )
          }}
        />
        <Tabs.Screen
          name="Favorites"
          component={ Favorites }
          options={{
            tabBarIcon: ({ size , color }) => (
              <Image 
                style={{tintColor:color , width: size , height: size}}
                source={require('../../assets/star.png')}/>
            )
          }}
        />   
      </Tabs.Navigator>
    )
};

export default MainTabsNavigator;