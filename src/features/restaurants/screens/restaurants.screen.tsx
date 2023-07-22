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
import {SafeArea} from '../../../components/utils/safe-area.component';

const SearchConatiner = styled(View)`
  padding: 16px;
  background-color: white;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

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
      <RestaurantList
        data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
}
