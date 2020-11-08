import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MoodTile = (props) => {

 return (
   <View style={styles.container}>
      <Text>Hello</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MoodTile