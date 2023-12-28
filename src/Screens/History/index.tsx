import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HistoryGraph from '../../Components/HistoryGraph';
import HomeButton from '../../Components/HomeButton';
import HistoryCalories from '../../Components/HistoryCalories';


const History = ({navigation}): React.JSX.Element => {

  const calorieHistory = [
    {
      label: "Tue",
      calories: Math.floor(Math.random()*2500)
    },
    {
      label: "Wed",
      calories: Math.floor(Math.random()*2500)
    },
    {
      label: "Thu",
      calories: Math.floor(Math.random()*2500)
    },
    {
      label: "Fri",
      calories: Math.floor(Math.random()*2500)
    },
    {
      label: "Sat",
      calories: Math.floor(Math.random()*2500)
    },
    {
      label: "Sun",
      calories: Math.floor(Math.random()*2500)
    },
    {
      label: "Mon",
      calories: Math.floor(Math.random()*2500)
    }
  ]

  return (
    <LinearGradient
      colors={['#FFBABA', '#FFD874', '#FFBA53', '#FE5E5E']}
      style={styles.main}>
        <HomeButton navigation={navigation}/>
        <View style={styles.container1}>
            <HistoryGraph calorieHistory={calorieHistory}/>
        </View>
        <View style={styles.container2}>
          <HistoryCalories calorieHistory={calorieHistory}/>
        </View>
    </LinearGradient>
  );
}

export default History;