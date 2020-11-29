import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Keyboard,
} from 'react-native';
import { Badge } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

const MoodTag = (props) => {
  const [enteredTag, setEnteredTag] = useState('');

  const tagInputHandler = (enteredText) => {
    setEnteredTag(enteredText);
  };
  const addTagHandler = () => {
    props.onAddTag(enteredTag);
    setEnteredTag('');
    Keyboard.dismiss();
  };

  const renderTagItem = (itemData) => {
    return (
      <TouchableOpacity>
        <Badge
          value={<Text style={styles.tagItem}>{itemData.item.value}</Text>}
          status='primary'
          containerStyle={{ paddingHorizontal: 3 }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.customtag}>Custom Tags</Text>
      <Text style={styles.subtext}>Anything impacted your mood right now</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Emotion tag'
          style={styles.inputBox}
          onChangeText={tagInputHandler}
          value={enteredTag}
          maxLength={20}
        />
        <View style={styles.button}>
          <Button title='Add' onPress={addTagHandler} />
        </View>
      </View>
      <View style={styles.list}>
        <FlatList data={props.tagList} renderItem={renderTagItem} horizontal />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 10,
    // backgroundColor: '#0f00ff',
  },
  customtag: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    paddingLeft: 20,
  },
  subtext: {
    paddingLeft: 20,
    paddingBottom: 5,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f000ff',
    minHeight: 40,
  },
  inputBox: {
    width: '70%',
    height: 35,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  button: {
    width: '15%',
    paddingLeft: 5,
    paddingBottom: 3,
  },
  list: {
    flex: 1,
    minHeight: 30,
    flexDirection: 'row',
    paddingHorizontal: 25,
    // backgroundColor: '#f0ffff',
  },
  tagItem: {
    color: 'white',
    margin: 10,
  },
});
export default MoodTag;
