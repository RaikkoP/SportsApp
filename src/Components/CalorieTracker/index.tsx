import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const CalorieTracker = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer1}>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../../assets/utensils-solid.png')} />
                </View>
                <Text>Info Goes Here</Text>
            </View>
            <View style={styles.innerContainer2}>
                <Text>Image goes Here</Text>
            </View>
        </View>
    );
};

export default CalorieTracker;
