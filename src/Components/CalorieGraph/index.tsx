import React from 'react';
import {View} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

const CalorieGraph = () => {
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

  const data = [
    {
      name: 'Consumed',
      population: 59600,
      color: '#44FF6D',
      legendFontColor: '#7F7F7F',
      legendFontSize: 9,
    },
    {
      name: 'Missing',
      population: 10000,
      color: '#9F9F9F',
      legendFontColor: '#7F7F7F',
      legendFontSize: 9,
    },
  ];

  return (
    <View>
      <PieChart
        data={data}
        width={350}
        height={280}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        center={[85, 10]}
        hasLegend={false}
        absolute
      />
    </View>
  );
};

export default CalorieGraph;
