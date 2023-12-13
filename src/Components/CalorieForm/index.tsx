import React from 'react';
import {View} from 'react-native';
import {Input, Button} from 'react-native-elements';

const CalorieForm = () => {
    return (
        <View>
            <Input
                label="Food"
                placeholder="Name of Food"
            />
            <Input
                label="Calories"
                placeholder="Calories from Food"
            />
            <Button
                title="Submit"
            />
        </View>
    );
};


export default CalorieForm;
