import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Weather from '../components/Weather';
import MoodSlider from '../components/MoodSlider';
import MoodTag from '../components/MoodTag';
import { TAGS } from '../data/mood-data';

//TODO: Custom marker for MultiSlider
const NewMoodScreen = (props) => {
  const [weather, setWeather] = useState('');
  const [tagList, setTagList] = useState([]);
  const [sliderScore, setSliderScore] = useState(1);

  const testTags = TAGS.filter((tag) => tag.moodId === 'm1');

  const addTagHandler = (tagName) => {
    setTagList((currentTagList) => [
      ...currentTagList,
      { id: Math.random().toString(), value: tagName },
    ]);
  };

  const weatherReadyHandler = (weatherText) => {
    console.log('*********************' + weatherText);
    setWeather(weatherText);
  };

  const addScoreHandler = (score) => {
    setSliderScore(score);
  };

  const saveHandler = () => {
    console.log('Saving...');
    console.log(tagList);
    console.log(weather);
    console.log(sliderScore);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={styles.flexGrowOne}
      >
        <Weather onWeatherReady={weatherReadyHandler} />
        <MoodSlider onAddScore={addScoreHandler} />
        <MoodTag onAddTag={addTagHandler} tagList={tagList} />
        <View style={styles.button}>
          <Button title='Save' onPress={saveHandler} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  flexGrowOne: {
    flexGrow: 1,
    // alignItems: 'stretch',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '40%',
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
export default NewMoodScreen;
