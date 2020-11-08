import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MoodCircleProgress from '../components/MoodCircleProgress';

const MoodMainScreen = (props) => {
  return (
    <View style={styles.container}>
      <MoodCircleProgress score={4} />
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
export default MoodMainScreen;
