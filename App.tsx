/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, StatusBar, Text} from 'react-native';
import {theme} from './src/infrastructure/theme/index';

import RestaurantsScreen from '../MealsToGo/src/features/restaurants/screens/restaurants.screen';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeArea} from './src/components/utils/safe-area.component';
import Icon from 'react-native-ionicons';
import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';

const star = require('./assets/images/star.png');

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: star,
  Settings: star,
  Map: star,
};

const Settings = () => {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
};

const Map = () => {
  return (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );
};

const screenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({size, color}) => (
      <Image
        source={iconName}
        style={{width: size, height: size}}
        tintColor={color}
      />
    ),
  };
};

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Settings" component={Settings} />
              <Tab.Screen name="Map" component={Map} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <StatusBar />
    </>
  );
}

export default App;
