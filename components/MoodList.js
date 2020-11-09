import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MoodTile from './MoodTile';

const list = [
  {
    id: Math.random().toString(),
    date: 'Aug 31',
    day: 'WED',
    weatherIcon: require('../assets/sunny.png'),
    score: 3,
  },
  {
    id: Math.random().toString(),
    date: 'Sep 1',
    day: 'THR',
    weatherIcon: require('../assets/cloudy.png'),
    score: 2,
  },
  {
    id: Math.random().toString(),
    date: 'Sep 2',
    day: 'FRI',
    weatherIcon: require('../assets/rain.png'),
    score: 5,
  },
  {
    id: Math.random().toString(),
    date: 'Sep 3',
    day: 'SAT',
    weatherIcon: require('../assets/sunny.png'),
    score: 4,
  },
];

const renderItem = (item) => {
  <MoodTile
    date={item.date}
    day={item.day}
    weatherIcon={item.weatherIcon}
    score={item.score}
  />;
};

const MoodList = (props) => {
  return (
    <View style={styles.detailContainer}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={list}
        renderItem={(itemData) => (
          <MoodTile
            date={itemData.item.date}
            day={itemData.item.day}
            weatherIcon={itemData.item.weatherIcon}
            score={itemData.item.score}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MoodList;
