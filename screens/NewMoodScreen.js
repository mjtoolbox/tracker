import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Weather from '../components/Weather';
import MoodSlider from '../components/MoodSlider';
import MoodTag from '../components/MoodTag';
import { TAGS } from '../data/mood-data';
import { Badge } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

//TODO: Custom marker for MultiSlider
const NewMoodScreen = (props) => {
  const [weather, setWeather] = useState('');
  const [tagList, setTagList] = useState([]);

  const testTags = TAGS.filter((tag) => tag.moodId === 'm1');

  const addTagHandler = (tagName) => {
    setTagList((currentTagList) => [
      ...currentTagList,
      { id: Math.random().toString(), value: tagName },
    ]);
  };

  const renderTagItem = (itemData) => {
    return (
      <TouchableOpacity>
        <Badge
          value={<Text style={styles.tagItem}>{itemData.item.text}</Text>}
          status='primary'
          style={{ paddingHorizontal: 5 }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Weather />
      <MoodSlider />
      <MoodTag onAddTag={addTagHandler} />
      <View style={styles.list}>
        <FlatList data={tagList} renderItem={renderTagItem} horizontal />
      </View>
      <View style={styles.button}>
        <Button title='Save' onPress={() => console.log('Save clicked')} />
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
  list: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    paddingHorizontal: 50,
    marginBottom: 10,
    backgroundColor: '#f0ffff',
  },
  tagItem: {
    color: 'white',
    margin: 10,
  },
  button: {
    width: '40%',
    marginBottom: 20,
    borderRadius: 10,
  },
});
export default NewMoodScreen;
