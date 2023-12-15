import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Input, Button} from 'react-native-elements';

const CalorieForm = ({setConsumedFoods}) => {
  const [calories, setCalories] = useState(0);
  const [name, setName] = useState();

  function submitFood() {

    setConsumedFoods(prevConsumedFoods => [
      ...prevConsumedFoods,
      {name: name, calories: calories},
    ]);
    setCalories(0);
    setName('');
  }
  useEffect(() => {
    console.log(calories);
  }, [calories]);
  return (
    <View>
      <Input
        label="Food"
        placeholder="Name of Food"
        value={name}
        onChangeText={value => setName(value)}
      />
      <Input
        label="Calories"
        placeholder="Calories from Food"
        value={calories.toString()}
        onChangeText={value => {
          const parsedValue = parseInt(value);
          if (!isNaN(parsedValue)) {
            setCalories(parsedValue);
          }
        }}
      />
      <TouchableOpacity onPress={() => submitFood()}>
        <Button title="Submit" onPress={() => submitFood()} />
      </TouchableOpacity>
    </View>
  );
};

export default CalorieForm;
