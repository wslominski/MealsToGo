import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {
  SafeAreaView,
  StatusBar,
  View,
  useColorScheme,
  FlatList,
  Pressable,
} from 'react-native';
import {ActivityIndicator, Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../../components/restuarants-info-card.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import {SafeArea} from '../../../components/utils/safe-area.component';
import {RestaurantContext} from '../../../services/restaurants/restaurants.context';
import {Search} from '../../components/search.component';
import {TouchableOpacity} from 'react-native-gesture-handler';

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

export default function RestaurantsScreen({navigation}) {
  const {loading, error, restaurants} = useContext(RestaurantContext);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeArea>
      {loading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="blue" />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {restaurant: item})
              }>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
}
