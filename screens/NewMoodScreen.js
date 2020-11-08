import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NewMoodScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>New mood logging screen. How do you feel right now?</Text>
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
export default NewMoodScreen;
