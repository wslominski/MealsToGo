import React, {useState, useEffect, useMemo, createContext} from 'react';

import {restaurantsTransform, restaurantsRequest} from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setLoading(true);
    setTimeout(() => {
      restaurantsRequest()
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
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider value={{restaurants, loading, error}}>
      {children}
    </RestaurantContext.Provider>
  );
};
