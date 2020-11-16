import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Badge } from 'react-native-elements';

const TagList = (props) => {
  const renderTagItem = (itemData) => {
    return (
      <Badge
        value={<Text style={styles.tagItem}>{itemData.item.text}</Text>}
        status='primary'
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.tagList}
        renderItem={renderTagItem}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagItem: {
    color: 'white',
    margin: 10,
  },
});
export default TagList;
