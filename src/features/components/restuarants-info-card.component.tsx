// import React, {useState} from 'react';
// import {StyleSheet, Text, View, Image, ViewBase} from 'react-native';
// import {Card} from 'react-native-paper';
// import styled from 'styled-components/native';

// const RestaurantCard = styled(Card)`
//   background-color: white;
// `;

// const RestaurantCardCover = styled(Card.Cover)`
//   padding: ${props => props.theme.space[3]};
//   background-color: white;
// `;

// const Title = styled(Text)`
//   font-size: ${props => props.theme.fontSizes.body};
// `;

// const Info = styled(View)`
//   padding: ${props => props.theme.space[3]};
// `;

// const Address = styled(Text)`
//   font-size: ${props => props.theme.fontSizes.caption};
// `;

// const RatingRow = styled(View)`
//   padding-top: ${props => props.theme.space[1]};
//   padding-bottom: ${props => props.theme.space[1]};
//   flex-direction: row;
//   justify-content: space-between;
// `;

// export const RestaurantInfo = ({restaurant = {}}: any) => {
//   const {
//     name = 'Restaurant One',
//     icon,
//     photos = [
//       'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
//     ],
//     address = '100 some street',
//     isOpenNow = true,
//     rating = 4,
//     isClosedTemorarily,
//   } = restaurant;
//   const starPng = require('../../../assets/images/star.png');
//   const openIconPng = require('../../../assets/images/openIcon.png');
//   const [starSrc, setStarSrc] = useState(starPng);
//   const ratingArray = Array.from(new Array(Math.floor(rating)));
//   return (
//     <RestaurantCard elevation={5}>
//       <RestaurantCardCover key={name} source={{uri: photos[0]}} />
//       <Info>
//         <Title>{name}</Title>
//         <RatingRow>
//           <View style={{flexDirection: 'row'}}>
//             {ratingArray.map(() => (
//               <Image source={starSrc} style={{width: 20, height: 20}} />
//             ))}
//           </View>
//           {isOpenNow && (
//             <Image source={openIconPng} style={{width: 20, height: 20}} />
//           )}
//         </RatingRow>
//         <Address>{address}</Address>
//       </Info>
//     </RestaurantCard>
//   );
// };

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

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const star = require('../../../assets/images/star.png');
  const openIconPng = require('../../../assets/images/openIcon.png');
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <Image source={star} style={{width: 20, height: 20}} />
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
