import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CalorieTracker from '../../Components/CalorieTracker';
import CalorieInfo from '../../Components/CalorieInfo';
import CalorieForm from '../../Components/CalorieForm';
import WaterIntake from '../../Components/WaterIntake';


function Frontpage(): React.JSX.Element {
  return (
    <LinearGradient
      colors={['#FFBABA', '#FFD874', '#FFBA53', '#FE5E5E']}
      style={styles.main}>
      <View style={styles.container1}>
        <CalorieTracker/>
        <CalorieInfo />
        <CalorieForm />
      </View>
      <View style={styles.container2}>
        <WaterIntake />
      </View>
    </LinearGradient>
  );
}

export default Frontpage;
