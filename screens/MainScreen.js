import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MainCard from '../components/MainCard';

const MainScreen = (props) => {
  const moodClickHandler = () => {
    props.navigation.navigate('MoodMain');
  };

  const foodClickHandler = () => {
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
    paddingBottom: 20,
  },
});
export default MainScreen;
