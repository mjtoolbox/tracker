import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import MoodCircleProgress from './MoodCircleProgress';
import { MOODS } from '../data/mood-data';
import Circle from './Circle';

// https://github.com/leecade/react-native-swiper
const MoodStatus = (props) => {
  const renderCircle = (itemData) => {
    return (
      <Circle
        score={itemData.item.score}
        day={new Date(itemData.item.date).getDay()}
      />
    );
  };
  return (
    <View style={styles.circleContainer}>
      <FlatList
        data={MOODS}
        renderItem={renderCircle}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MoodStatus;
