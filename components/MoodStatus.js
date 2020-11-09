import React from 'react';
import { StyleSheet, FlatList, View, Button, Text } from 'react-native';
import MoodCircleProgress from './MoodCircleProgress';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const list = [
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

// https://github.com/leecade/react-native-swiper
const MoodStatus = (props) => {
  return (
    <View style={styles.circleContainer}>
      <View style={styles.circle}>
        <MoodCircleProgress score={3} />
        <Text style={styles.daytext}>WED</Text>
      </View>
      <View style={styles.circle}>
        <MoodCircleProgress score={2} />
        <Text style={styles.daytext}>THR</Text>
      </View>
      <View style={styles.circle}>
        <MoodCircleProgress score={5} />
        <Text style={styles.daytext}>FRI</Text>
      </View>
      <View style={styles.circle}>
        <MoodCircleProgress score={4} />
        <Text style={styles.daytext}>SAT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    // borderColor: 'black',
    // borderWidth: 0.5,
  },
  circle: {
    marginHorizontal: 15,
  },
  daytext: {
    paddingLeft: 20,
  },
});
export default MoodStatus;
