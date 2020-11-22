import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MoodTag = (props) => {
  return (
    <View style={styles.container}>
      <Text>Mood Tag form here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MoodTag;
