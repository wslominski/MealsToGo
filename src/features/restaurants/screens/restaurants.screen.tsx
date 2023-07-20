import React from 'react';
import styled from 'styled-components/native';
import {
  SafeAreaView,
  StatusBar,
  View,
  useColorScheme,
  FlatList,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../../components/restuarants-info-card.component';
import {Spacer} from '../../../components/spacer/spacer.component';

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
      <FlatList
        data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={item => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </SafeArea>
  );
}
