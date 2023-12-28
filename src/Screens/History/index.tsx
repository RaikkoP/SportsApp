import React from 'react';
import {styles} from './styles';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HistoryGraph from '../../Components/HistoryGraph';
import CalorieGraph from '../../Components/CalorieGraph';
import HomeButton from '../../Components/HomeButton';

const History = ({navigation}): React.JSX.Element => {

  const calorieHistory = [
    {
      label: 'Tue',
      calories: Math.floor(Math.random() * 2500),
    },
    {
      label: 'Wed',
      calories: Math.floor(Math.random() * 2500),
    },
    {
      label: 'Thu',
      calories: Math.floor(Math.random() * 2500),
    },
    {
      label: 'Fri',
      calories: Math.floor(Math.random() * 2500),
    },
    {
      label: 'Sat',
      calories: Math.floor(Math.random() * 2500),
    },
    {
      label: 'Sun',
      calories: Math.floor(Math.random() * 2500),
    },
    {
      label: 'Mon',
      calories: Math.floor(Math.random() * 2500),
    },
  ];

  return (
    <LinearGradient
      colors={['#FFBABA', '#FFD874', '#FFBA53', '#FE5E5E']}
      style={styles.main}>
        <HomeButton navigation={navigation}/>
        <View style={styles.container}>
            <Text style={styles.title}>Weekly Calories</Text>
            <HistoryGraph calorieHistory={calorieHistory}/>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Monthly Calories</Text>
          <CalorieGraph />
          <Text style={styles.consumed}>Consumed</Text>
          <Text style={styles.left}>Calories Left</Text>
        </View>
    </LinearGradient>
  );
};

export default History;
