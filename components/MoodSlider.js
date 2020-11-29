import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider, Divider } from 'react-native-elements';

const MoodSlider = (props) => {
  const [score, setScore] = useState(1);

  const scoreHandler = (value) => {
    setScore(value);
    props.onAddScore(score);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        New mood logging screen. How do you feel right now?
      </Text>
      <View style={styles.topLabel}>
        <Text>Bad</Text>
        <Text>Good</Text>
      </View>
      <View style={styles.slider}>
        <Slider
          value={score}
          onValueChange={scoreHandler}
          mininumValue={1}
          maximumValue={5}
          step={1}
          trackStyle={{ height: 2, backgroundColor: '#999' }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: '#3399FF' }}
        />
        <View style={styles.label}>
          <Text>0</Text>
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
          <Text>4</Text>
          <Text>5</Text>
        </View>
      </View>
      <Divider style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  topLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 30,
  },
  slider: {
    flex: 1,
    marginHorizontal: 40,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  label: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  divider: {
    backgroundColor: '#999',
    marginVertical: 40,
  },
});
export default MoodSlider;
