import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import MoodMainScreen from '../screens/MoodMainScreen';
import NewMoodScreen from '../screens/NewMoodScreen';
import FoodMainScreen from '../screens/FoodMainScreen';

//TODO: Customize Navigation label
const TrackerNavigator = createStackNavigator({
  Tracker: MainScreen,
  MoodMain: {
    screen: MoodMainScreen,
  },
  NewMood: NewMoodScreen,
  FoodMain: FoodMainScreen,
});

export default createAppContainer(TrackerNavigator);
