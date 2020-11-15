import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Badge } from 'react-native-elements';
import { TAGS } from '../data/mood-data';
import TagList from './TagList';

const MoodTile = (props) => {
  const displayTags = TAGS.filter((tag) => tag.moodId === props.moodId);

  const iconSource = () => {
    if (props.icon === 'sunny') {
      return require('../assets/sunny.png');
    } else if (props.icon === 'cloudy') {
      return require('../assets/cloudy.png');
    } else {
      return require('../assets/rainy.png');
    }
  };

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
      <View>
        <View>
          <Text style={styles.day}>{props.date}</Text>
        </View>
        <View>
          <Text>{dayOfWeek()}</Text>
        </View>
      </View>
      <View style={styles.iconWrap}>
        <Image source={iconSource()} style={styles.tinylogo} />
      </View>
      <View style={styles.badgeContainer}>
        <TagList
          tagList={displayTags}
        />
      </View>
      <View>
        <Text style={styles.score}>{props.score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 5,
    marginVertical: 3,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
  },
  day: {
    textAlign: 'center',
    fontSize: 16,
  },
  iconWrap: {
    paddingHorizontal: 20,
  },
  tinylogo: {
    width: 40,
    height: 40,
  },
  badgeContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  score: {
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: '#0275d8',
    color: 'white',
    paddingHorizontal: 15,
  },
});
export default MoodTile;
