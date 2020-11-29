import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AppLoading } from 'expo';
import axios from 'axios';

const openweathermap_url =
  'http://api.openweathermap.org/data/2.5/weather?q=Coquitlam,%20CA&units=metric&appid=f6d782216f36411d6f33f609c246f6b8';

// {"coord":{"lon":-122.75,"lat":49.28},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":279,"feels_like":276.6,"temp_min":277.59,"temp_max":280.37,"pressure":1013,"humidity":87,"sea_level":1013,"grnd_level":1011},"visibility":3058,"wind":{"speed":1.5,"deg":80},"rain":{"1h":0.18},"clouds":{"all":100},"dt":1606081483,"sys":{"type":1,"id":376,"country":"CA","sunrise":1606059199,"sunset":1606090901},"timezone":-28800,"id":5927689,"name":"Coquitlam","cod":200}

const Weather = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState('');

  // const getDataUsingAsyncAwaitGetCall = async () => {
  //   try {
  //     const response = await axios.get(openweathermap_url);
  //     console.log(JSON.stringify(response.data));
  //     setWeatherData(JSON.stringify(response.data));
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  const getDataUsingSimpleGetCall = () => {
    axios
      .get(openweathermap_url)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setWeatherData(response.data.weather[0].description);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={getDataUsingSimpleGetCall}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Current weather</Text>
      <Text>{weatherData}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Weather;
