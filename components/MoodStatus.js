import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import MoodCircleProgress from './MoodCircleProgress';
import { MOODS } from '../data/mood-data';

// https://github.com/leecade/react-native-swiper
const MoodStatus = (props) => {
  const renderCircle = (itemData) => {
    return (
      <View style={styles.circle}>
        <MoodCircleProgress score={itemData.item.score} />
        <Text style={styles.daytext}>THR</Text>
      </View>
    );
  };
  return (
    <View style={styles.circleContainer}>
      <FlatList data={MOODS} renderItem={renderCircle} />
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
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  circle: {
    marginHorizontal: 15,
  },
  daytext: {
    paddingLeft: 20,
  },
});
export default MoodStatus;
