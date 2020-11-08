import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Badge } from 'react-native-elements';

const MoodTile = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>Aug 21{'\n'}WED</Text>
      <View style={styles.iconWrap}>
        <Image
          source={require('../assets/sunny.png')}
          style={styles.tinylogo}
        />
      </View>
      <View style={styles.badgeContainer}>
        <Badge
          value={
            <Text style={{ color: 'white', margin: 10 }}>Called friends</Text>
          }
          status='primary'
        />
        <Badge
          value={
            <Text style={{ color: 'white', margin: 10 }}>Drank greentea</Text>
          }
          status='primary'
        />
      </View>
      <View>
        <Text style={styles.score}>3</Text>
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
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.5,
  },
  day: {
    textAlign: 'center',
    fontSize: 20,
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
