import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface colProps {
  numRows: number;
  children: JSX.Element | JSX.Element[] | JSX.Element[] | JSX.Element;
}

const Col = ({numRows, children}: colProps) => {
  return (
    <View style={styles[`${numRows}col` as keyof typeof styles]}>
      {children}
    </View>
  );
};

export default Col;
