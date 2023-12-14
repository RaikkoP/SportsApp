import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {ProgressChart} from 'react-native-chart-kit';

const CalorieTracker = ({dailyCalories, consumedCalories}) => {

    const [dataInfo, setDataInfo] = useState(0);

    useEffect(() => {
        setDataInfo(consumedCalories / dailyCalories);
    }, [dailyCalories, consumedCalories, dataInfo]);
    const data = {
        data: [dataInfo],
      };
    const chartConfig = {
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0,
      };
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer1}>
                    <ProgressChart
                        data={data}
                        chartConfig={chartConfig}
                        width={350}
                        height={220}
                        strokeWidth={30}
                        radius={70}
                        hideLegend={true}
                    />
            </View>
        </View>
    );
};

export default CalorieTracker;
