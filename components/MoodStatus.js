import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Button, Text } from 'react-native';
import MoodCircleProgress from '../components/MoodCircleProgress';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const DATA = [
  {
    id: Math.random().toString(),
    value: getRndInteger(1, 5),
  },
  {
    id: Math.random().toString(),
    value: getRndInteger(1, 5),
  },
  {
    id: Math.random().toString(),
    value: getRndInteger(1, 5),
  },
  {
    id: Math.random().toString(),
    value: getRndInteger(1, 5),
  },
];

/**
 * Strange error Error: Text strings must be rendered within a <Text> component. occurs when MoodStatus component is used.
 * @param {*} props
 */
const MoodStatus = (props) => {
  return (
    <View style={styles.container}>
      <Text>Mood Status</Text>
      <MoodCircleProgress score={3} title='3' />;
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MoodStatus;
