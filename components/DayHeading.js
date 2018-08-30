import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function DayHeading({ style }) {
  return (
    <View style={style}>
      <Text style={styles.dayHeadingDay}>THURSDAY</Text>
      <Text style={styles.dayHeadingDate}>AUGUST 30</Text>
    </View>
  )
}
