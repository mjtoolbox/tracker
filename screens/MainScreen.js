import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import MoodMainScreen from './MoodMainScreen';
import FoodMainScreen from './FoodMainScreen';
import MainCard from '../components/MainCard';

const MainScreen = (props) => {
  const moodClickHandler = () => {
    console.log('Mood clicked');
    props.navigation.navigate('MoodMain');
  };

  const foodClickHandler = () => {
    console.log('Food clicked');
    props.navigation.navigate('FoodMain');
  };

  return (
    <View style={styles.container}>
      <MainCard
        imageUrl={require('../assets/mood.jpg')}
        title='Mood'
        onClick={moodClickHandler}
      />
      <MainCard
        imageUrl={require('../assets/food.jpg')}
        title='Food'
        onClick={foodClickHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MainScreen;
