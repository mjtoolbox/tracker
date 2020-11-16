import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MoodCircleProgress from './MoodCircleProgress';

const Circle = (props) => {
  const dayOfWeek = () => {
    if (props.day == '0') {
      return 'SUN';
    } else if (props.day == '1') {
      return 'MON';
    } else if (props.day == '2') {
      return 'TUE';
    } else if (props.day == '3') {
      return 'WED';
    } else if (props.day == '4') {
      return 'THR';
    } else if (props.day == '5') {
      return 'FRI';
    } else if (props.day == '6') {
      return 'SAT';
    }
  };

  return (
    <View style={styles.container}>
      <MoodCircleProgress score={props.score} />
      <Text style={styles.daytext}>{dayOfWeek()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  daytext: {
    textAlign: 'center',
  },
});
export default Circle;
