import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MoodCircleProgress from '../components/MoodCircleProgress';
import MoodTitle from '../components/MoodTile';

const MoodMainScreen = (props) => {
  return (
    <View style={styles.container}>
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
      <View style={styles.detailContainer}>
        <MoodTitle />
        <MoodTitle />
        <MoodTitle />
        <MoodTitle />
        <MoodTitle />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  circle: {
    marginHorizontal: 20,
  },
  daytext: {
    paddingLeft: 30,
  },
  detailContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MoodMainScreen;
