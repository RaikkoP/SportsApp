import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

interface rowProps {
  children: JSX.Element | JSX.Element[] | JSX.Element[] | JSX.Element;
}

const Row = ({children}: rowProps) => {
  return <View style={styles.row}>{children}</View>;
};

export default Row;
