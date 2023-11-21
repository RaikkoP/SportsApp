import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StepCounter from '../../Components/StepCounter';
import Row from '../../Components/Row';
import Col from '../../Components/Col';

function Frontpage(): React.JSX.Element {
  return (
    <LinearGradient
      colors={['#FFBABA', '#FFD874', '#FFBA53', '#FE5E5E']}
      style={styles.grid_container}>
      <Row>
        <Col numRows={1}>
          <StepCounter />
        </Col>
        <Col numRows={2}>
          <View>
            <Text>Calories Burned: 260 kcal</Text>
            <Text>Distance walked: 2.3km</Text>
            <Text>Minutes active: 1H 12min</Text>
          </View>
        </Col>
      </Row>
    </LinearGradient>
  );
}

export default Frontpage;
