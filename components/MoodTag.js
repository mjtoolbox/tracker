import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import TagList from './TagList';

const MoodTag = (props) => {
  const [enteredTag, setEnteredTag] = useState('');
  const tagInputHandler = (enteredText) => {
    setEnteredTag(enteredText);
  };
  const addTagHandler = () => {
    props.onAddTag(enteredTag);
    setEnteredTag('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.customtag}>Custom Tags</Text>
      <Text style={styles.subtext}>Anything impacted your mood</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Emotion tag'
          style={styles.inputBox}
          onChangeText={tagInputHandler}
          value={enteredTag}
        />
        <View style={styles.button}>
          <Button title='Add' onPress={addTagHandler} />
        </View>
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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  inputBox: {
    width: '70%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    width: '15%',
    margin: 5,
  },
});
export default MoodTag;
