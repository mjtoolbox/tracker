import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MoodTile from './MoodTile';
import { MOODS, TAGS } from '../data/mood-data';

const renderItem = (item) => {
  <MoodTile
    date={item.date}
    day={item.day}
    weatherIcon={item.weatherIcon}
    score={item.score}
  />;
};

const formattedDate = (itemDate) => {
  var d = new Date(itemDate);
  return (
    d.getFullYear() +
    '/' +
    d.getMonth() +
    '/' +
    d.getDate() +
    ' ' +
    d.getHours() +
    ':' +
    d.getMinutes()
  );
};

const MoodList = (props) => {
  const renderMoodTile = (itemData) => {
    return (
      <MoodTile
        date={formattedDate(itemData.item.date)}
        day={new Date(itemData.item.date).getDay()}
        icon={itemData.item.weatherIcon}
        score={itemData.item.score}
      />
    );
  };

  return (
    <View style={styles.detailContainer}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={MOODS}
        renderItem={renderMoodTile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
export default MoodList;
