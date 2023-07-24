import React from 'react';

import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen';
import {Text} from 'react-native-paper';
import {RestaurantDetails} from '../../features/restaurants/screens/restaurant-details.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{...TransitionPresets.ModalPresentationIOS}}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetails}
      />
    </RestaurantStack.Navigator>
  );
};
