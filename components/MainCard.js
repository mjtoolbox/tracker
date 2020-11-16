import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';

const MainCard = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={props.onClick}>
        <Image source={props.imageUrl} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'center',
  },
  card: {
    paddingBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
});
export default MainCard;
