import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MoodCircleProgress from '../components/MoodCircleProgress';

const MoodMainScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <MoodCircleProgress score={4} />
      </View>
      <View style={styles.circle}>
        <MoodCircleProgress score={2} />
      </View>
      <View style={styles.circle}>
        <MoodCircleProgress score={5} />
      </View>
      <View style={styles.circle}>
        <MoodCircleProgress score={3} />
      </View>
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
  circle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default MoodMainScreen;
