import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Slider } from 'react-native-elements';

//TODO: Custom marker for MultiSlider
const NewMoodScreen = (props) => {
  const [score, setScore] = useState(1);

  const scoreHandler = (enteredScore) => {
    setScore(enteredScore);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        New mood logging screen. How do you feel right now?
      </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    textAlign: 'center',
  },
  slider: {
    marginHorizontal: 40,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  label: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
export default NewMoodScreen;
