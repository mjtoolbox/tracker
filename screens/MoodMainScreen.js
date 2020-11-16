import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import MoodStatus from '../components/MoodStatus';
import MoodList from '../components/MoodList';

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
      <MoodList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // alignItems: 'stretch',
    // justifyContent: 'flex-start',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
export default MoodMainScreen;
