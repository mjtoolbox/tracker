import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import MoodStatus from '../components/MoodStatus';
import MoodList from '../components/MoodList';

const MoodMainScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          name='add'
          raised
          onPress={() => props.navigation.navigate('NewMood')}
        />
      </View>
      <MoodStatus />
      <MoodList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'flex-end',
    padding: 5,
  },
});
export default MoodMainScreen;
