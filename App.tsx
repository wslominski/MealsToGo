/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {theme} from './src/infrastructure/theme/index';

import RestaurantsScreen from '../MealsToGo/src/features/restaurants/screens/restaurants.screen';
import {ThemeProvider} from 'styled-components/native';

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <StatusBar />
      </ThemeProvider>
    </>
  );
}

export default App;
