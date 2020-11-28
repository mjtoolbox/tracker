import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Weather from '../components/Weather';
import MoodSlider from '../components/MoodSlider';
import MoodTag from '../components/MoodTag';

//TODO: Custom marker for MultiSlider
const NewMoodScreen = (props) => {
  const [weather, setWeather] = useState('');
  const [tagList, setTagList] = useState([]);

  const addTagHandler = (tagName) => {
    setTagList((currentTagList)=>[
      ...currentTagList,
      { id: Math.random().toString(), value: tagName }
    ])
  }

  return (
    <View style={styles.container}>
      <Weather />
      <MoodSlider />
      <MoodTag onAddTag={addTagHandler}/>
      <Button title='Save' onPress={() => console.log('Save clicked')} />
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
});
export default NewMoodScreen;
