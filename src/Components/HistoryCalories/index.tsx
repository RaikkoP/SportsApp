import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import {styles} from './styles';

const HistoryCalories = (calorieHistory) => {
    
    return(
        <View style={styles.container}>
            <Text style={styles.labels}>{calorieHistory.label}</Text>
            <View style={styles.container2}>
                <Text style={styles.caloriesHeader}>Calories consumed: </Text>
                <Text style={styles.calories}>{calorieHistory.calories}</Text>
            </View>
        </View>
    )
}

export default HistoryCalories;