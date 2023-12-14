import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CalorieTracker from '../../Components/CalorieTracker';
import CalorieInfo from '../../Components/CalorieInfo';
import CalorieForm from '../../Components/CalorieForm';
import WaterIntake from '../../Components/WaterIntake';


function Frontpage(): React.JSX.Element {
  const [dailyCalories, setDailyCalories] = useState(2300);
  const [consumedCalories, setConsumedCalories] = useState(0);
  const [consumedFoods, setConsumedFoods] = useState([]);
  const [glassesOfWater, setGlassesOfWater] = useState(0);

  useEffect(() => {
    if (consumedFoods.length > 0) {
      let totalCalories = consumedFoods.reduce((total, food) => total + food.calories, 0);
      setConsumedCalories(totalCalories);
      console.log(totalCalories);
    }
   }, [consumedFoods]);

  return (
    <LinearGradient
      colors={['#FFBABA', '#FFD874', '#FFBA53', '#FE5E5E']}
      style={styles.main}>
      <View style={styles.container1}>
        <CalorieTracker dailyCalories={dailyCalories} consumedCalories={consumedCalories} />
        <CalorieInfo dailyCalories={dailyCalories} consumedCalories={consumedCalories} />
        <CalorieForm consumedFoods={consumedFoods} setConsumedFoods={setConsumedFoods}/>
      </View>
      <View style={styles.container2}>
        <WaterIntake glassesOfWater={setGlassesOfWater}/>
      </View>
    </LinearGradient>
  );
}

export default Frontpage;
