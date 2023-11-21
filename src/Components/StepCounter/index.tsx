import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const StepCounter = () => {
  return (
    <View style={styles.stepCounter}>
      <Text style={styles.text}>
        Steps: <Text style={styles.counter}>4200</Text>
      </Text>
      <Text style={styles.text}>
        Goal: <Text style={styles.counter}>15000</Text>
      </Text>
    </View>
  );
};

export default StepCounter;
