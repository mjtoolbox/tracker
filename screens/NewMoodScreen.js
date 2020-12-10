import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableHighlight,
} from 'react-native';
import Weather from '../components/Weather';
import MoodSlider from '../components/MoodSlider';
import MoodTag from '../components/MoodTag';
import { TAGS } from '../data/mood-data';
import { firebase } from '../config';
import { LogBox } from 'react-native';

LogBox.ignoreWarnings(['Setting a timer']);

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

    var db = firebase.database();
    db.ref('/moodlist').push({
      id: Date.now(),
      weather: weather,
      score: sliderScore,
      tags: tagList,
    });

    props.navigation.navigate('MoodMain');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      >
        <Weather onWeatherReady={weatherReadyHandler} />
        <MoodSlider onAddScore={addScoreHandler} />
        <MoodTag onAddTag={addTagHandler} tagList={tagList} />
        <View style={styles.button}>
          <Button title='save' onPress={saveHandler} />
        </View>
      </KeyboardAvoidingView>
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
  button: {
    flex: 1,
    marginBottom: 20,
    justifyContent: 'center',
    // backgroundColor: '#f000ff',
  },
});
export default NewMoodScreen;
