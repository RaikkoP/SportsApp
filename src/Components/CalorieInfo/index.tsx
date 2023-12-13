import {View,Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CalorieInfo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Calories: 400 / 2400</Text>
        </View>
    );
};

export default CalorieInfo;
