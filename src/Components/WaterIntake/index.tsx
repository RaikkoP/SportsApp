import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {Input} from 'react-native-elements';


const WaterIntake = () => {
    return (
        <View style={styles.container}>
            <View>
                <Input inputStyle={styles.input} label="Glasses of Water" />
            </View>
            <View>
                <Image style={styles.icon} source={require('../../assets/glass.png')} />
            </View>
        </View>
    );
};

export default WaterIntake;
