import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {ProgressChart} from 'react-native-chart-kit';

const CalorieTracker = () => {
    const data = {
        data: [0.4],
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
