import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CalorieTracker from '../../Components/CalorieTracker';


function Frontpage(): React.JSX.Element {
  return (
    <LinearGradient
      colors={['#FFBABA', '#FFD874', '#FFBA53', '#FE5E5E']}
      style={styles.main}>
      <View style={styles.container}>
        <CalorieTracker/>
        <Text>This is my form for adding food</Text>
      </View>
      <View style={styles.container}>
        <Text>This is my water intake</Text>
      </View>
      <View style={styles.container}>
        <Text>Mood Changes</Text>
      </View>
    </LinearGradient>
  );
}

export default Frontpage;
