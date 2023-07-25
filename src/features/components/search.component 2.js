import React, {useContext, useState} from 'react';
import {Searchbar} from 'react-native-paper';
import styled from 'styled-components/native';
import {View} from 'react-native';
import {LocationContext} from '../../services/location/location.context';

const SearchConatiner = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

export const Search = () => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchConatiner>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
      />
    </SearchConatiner>
  );
};
