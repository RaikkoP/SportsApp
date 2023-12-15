import React, {useEffect, useState}  from 'react';
import {View} from 'react-native';
import { BarChart } from "react-native-chart-kit";
import {styles} from './styles';

const HistoryGraph = ({consumedCalories}) => {
    
    const [dataInfo, setDataInfo] = useState(0);

    useEffect(() => {
        const lastWeekCalories = consumedCalories.slice(-7)

        const labels =lastWeekCalories.map(entry => entry.date)
        const calories = lastWeekCalories.map(entry => entry.calories)

        const weekHistory = {
            labels,
            datasets: [
                {
                    data: calories,
                }
            ]
        };

        setDataInfo(weekHistory);
    }, [consumedCalories]);


    
    const testData = {
        labels: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                data: [Math.floor(Math.random()*2500),Math.floor(Math.random()*2500),Math.floor(Math.random()*2500),Math.floor(Math.random()*2500),Math.floor(Math.random()*2500),Math.floor(Math.random()*2500),Math.floor(Math.random()*2500)]
            }
        ]
    }

    const chartConfig= {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0,
        fillShadowGradientFrom: "#EFFF38",
        fillShadowGradientFromOpacity: 1,
        fillShadowGradientTo: "#44FF6D",
        fillShadowGradientToOpacity: 1,
    }

    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <BarChart
                    data={dataInfo} 
                    chartConfig={chartConfig}
                    width={350}
                    height={220}
                    yAxisLabel={"Calories"}
                    yAxisSuffix={" cal"}
                />
            </View>
        </View>

    )
}

export default HistoryGraph;