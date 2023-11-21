import React from 'react';
import {styles} from './styles';
import {SafeAreaView, Text, View} from 'react-native';
import Row from '../../Components/Row';
import Col from '../../Components/Col';

function Frontpage(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.grid_container}>
      <Row>
        <Col numRows={1}>
          <View>
            <Text style={styles.text}>Steps: 4200</Text>
            <Text>Goal: 15000</Text>
          </View>
        </Col>
        <Col numRows={2}>
          <View>
            <Text>Calories Burned: 260 kcal</Text>
            <Text>Distance walked: 2.3km</Text>
            <Text>Minutes active: 1H 12min</Text>
          </View>
        </Col>
      </Row>
    </SafeAreaView>
  );
}

export default Frontpage;
