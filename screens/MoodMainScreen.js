import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import MoodCircleProgress from '../components/MoodCircleProgress';
import MoodStatus from '../components/MoodStatus';
import MoodTitle from '../components/MoodTile';

const MoodMainScreen = (props) => {
  return (
    <View style={styles.container}>
      <Icon
        name='add'
        raised
        style={styles.iconContainer}
        onPress={() => props.navigation.navigate('NewMood')}
      />
      <MoodStatus />
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
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  detailContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MoodMainScreen;
