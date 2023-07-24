import React, {
  useState,
  useEffect,
  useMemo,
  createContext,
  useContext,
} from 'react';

import {restaurantsTransform, restaurantsRequest} from './restaurants.service';
import {LocationContext} from '../location/location.context';
import {locations} from '../location/mock';

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  const retrieveRestaurants = loc => {
    setLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then(results => {
          setLoading(false);
          setRestaurants(results);
        })
        .catch(err => {
          setLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{restaurants, loading, error}}>
      {children}
    </RestaurantContext.Provider>
  );
};
