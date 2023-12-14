import {View,Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CalorieInfo = ({dailyCalories, consumedCalories}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Calories: {consumedCalories} / {dailyCalories}</Text>
        </View>
    );
};

export default CalorieInfo;
