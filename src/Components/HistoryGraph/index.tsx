import React, {useEffect, useState}  from 'react';
import {View} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import {styles} from './styles';

const HistoryGraph = ({calorieHistory}) => {

    //useState to make dataInfo out of consumedCalories
    const [dataInfo, setDataInfo] = useState({
        labels: [],
        datasets: [
        {
            data: [],
        },
  ],
    });

    //useEffect to use calorieHistory, commented out to prevent errors
    useEffect(() => {
        const lastWeekCalories = calorieHistory.slice(-7);

        const labels = lastWeekCalories.map(entry => entry.label);
        const calories = lastWeekCalories.map(entry => entry.calories);

        const weekHistory = {
            labels: labels.map(String),
            datasets: [
                {
                    data: calories,
                },
            ],
        };

        setDataInfo(weekHistory);
    }, [calorieHistory]);

    const chartConfig = {
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        backgroundGradientFrom: '#fff',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#fff',
        backgroundGradientToOpacity: 0,
        fillShadowGradientFrom: '#EFFF38',
        fillShadowGradientFromOpacity: 1,
        fillShadowGradientTo: '#44FF6D',
        fillShadowGradientToOpacity: 1,
        decimalPlaces: 0,
    };

    return (
            <View style={styles.innerContainer}>
                <BarChart
                    data={dataInfo}
                    chartConfig={chartConfig}
                    width={350}
                    height={220}
                    yAxisLabel={''}
                    yAxisSuffix={' cal'}
                />
            </View>
    );
};

export default HistoryGraph;
