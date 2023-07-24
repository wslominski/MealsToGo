import React, {useState} from 'react';
import {SafeArea} from '../../../components/utils/safe-area.component';
import {RestaurantInfoCard} from '../../components/restuarants-info-card.component';
import {List} from 'react-native-paper';
import {Icon} from 'react-native-vector-icons';

export const RestaurantDetails = ({route}) => {
  const {restaurant} = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <List.Accordion
        // right={props => <List.Icon {...props} icon="ab-testing" size={60} />}
        title="Breakfast"
        left={props => <List.Icon {...props} icon="hamburger" />}
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
        <List.Item title="Eggs" />
        <List.Item title="Cereal" />
      </List.Accordion>
      <List.Accordion
        title="Lunch"
        left={props => <List.Icon {...props} icon="hamburger" />}
        expanded={lunchExpanded}
        onPress={() => setLunchExpanded(!lunchExpanded)}>
        <List.Item title="Sandwich" />
        <List.Item title="Soup" />
      </List.Accordion>
      <List.Accordion
        title="Dinner"
        left={props => <List.Icon {...props} icon="food-variant" />}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!dinnerExpanded)}>
        <List.Item title="Steak" />
        <List.Item title="Potatoes" />
      </List.Accordion>
      <List.Accordion
        title="Drinks"
        left={props => <List.Icon {...props} icon="cup" />}
        expanded={drinksExpanded}
        onPress={() => setDrinksExpanded(!drinksExpanded)}>
        <List.Item title="Mule" />
        <List.Item title="Fule" />
        <List.Item title="Rule" />
        <List.Item title="Drule" />
      </List.Accordion>
    </SafeArea>
  );
};
