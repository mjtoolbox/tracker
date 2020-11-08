import React, { useState } from 'react';
import ProgressCircle from 'react-native-progress-circle';
import { Text, StyleSheet } from 'react-native';

const MoodCircleProgress = (props) => {
  return (
    <ProgressCircle
      percent={props.score * 20}
      radius={30}
      borderWidth={8}
      color='#3399FF'
      shadowColor='#999'
      bgColor='#fff'
    >
      <Text style={styles.score}>{props.score}</Text>
    </ProgressCircle>
  );
};

const styles = StyleSheet.create({
  score: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
  },
});
export default MoodCircleProgress;
