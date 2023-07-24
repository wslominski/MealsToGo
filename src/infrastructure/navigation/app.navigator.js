import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Text, Image} from 'react-native';
import {RestaurantsNavigator} from './restaurants.navigator';
import {SafeArea} from '../../components/utils/safe-area.component';

const star = require('../../../assets/images/star.png');

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: star,
  Settings: star,
  Map: star,
};
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);
const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarIcon: ({size, color}) => (
      <Image
        source={iconName}
        style={{width: size, height: size}}
        tintColor={color}
      />
    ),
  };
};
export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
