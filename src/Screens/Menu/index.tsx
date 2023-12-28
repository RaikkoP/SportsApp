import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../Components/Button';


const Menu = ({navigation}): React.JSX.Element => {

    const goToTracker = () => {
        navigation.navigate('Tracker');
    };
    const goToHistory = () => {
        navigation.navigate('History');
    };

  return (
    <LinearGradient
      colors={['#FFBABA', '#FFD874', '#FFBA53', '#FE5E5E']}
      style={styles.main}>
      <View style={styles.container}>
        <Button title="Calorie Tracker" onPress={goToTracker}/>
        <Button title="History" onPress={goToHistory}/>
      </View>
    </LinearGradient>
  );
};

export default Menu;
