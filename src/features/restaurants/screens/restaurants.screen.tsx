import React from 'react';
import styled from 'styled-components/native';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfo} from '../../components/restuarants-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchConatiner = styled(View)`
  padding: 16px;
  background-color: darkorange;
`;

const RestaurantListContainer = styled(View)`
  padding: 16px;
  background-color: blue;
  flex: 1;
`;

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <SafeArea>
      <SearchConatiner>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchConatiner>
      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
    </SafeArea>
  );
}
