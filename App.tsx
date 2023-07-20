/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';

import RestaurantsScreen from '../MealsToGo/src/features/restaurants/screens/restaurants.screen';

function App(): JSX.Element {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar />
    </>
  );
}

export default App;
