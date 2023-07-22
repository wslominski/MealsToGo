import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {
  SafeAreaView,
  StatusBar,
  View,
  useColorScheme,
  FlatList,
} from 'react-native';
import {ActivityIndicator, Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../../components/restuarants-info-card.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import {SafeArea} from '../../../components/utils/safe-area.component';
import {RestaurantContext} from '../../../services/restaurants/restaurants.context';

const SearchConatiner = styled(View)`
  padding: 16px;
  background-color: white;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export default function RestaurantsScreen() {
  const {loading, error, restaurants} = useContext(RestaurantContext);
  const [searchQuery, setSearchQuery] = React.useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <SafeArea>
      {loading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="blue" />
        </LoadingContainer>
      )}
      <SearchConatiner>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchConatiner>
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
}
