import React from 'react';
import {Image} from 'react-native';
import {Spacer} from '../../components/spacer/spacer.component';
import {Text} from '../../components/typrography/text.component';

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from './restaurant-into-card.styles';

export const RestaurantInfoCard = ({restaurant}) => {
  const star = require('../../../assets/images/star.png');
  const openIconPng = require('../../../assets/images/openIcon.png');
  const {
    name = 'Name',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: restaurant.photos}} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <Image
                key={`star-${placeId}-${i}`}
                source={star}
                style={{width: 20, height: 20}}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && (
                <Image source={openIconPng} style={{width: 20, height: 20}} />
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{uri: icon}} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
