import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getColorByPercentage} from '../../utils/helper';

export default function Indicator({amount, filledAmount}) {
  return (
    <View style={styles.container}>
      <View style={styles.child(amount)}>
        <Text style={styles.arrow}>▶</Text>
        <Text style={styles.text}>
          Current{'\n'}
          <Text style={styles.available(amount)}>{filledAmount} L</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '20%',
    overflow: 'visible',
    justifyContent: 'flex-end',
  },
  child: amount => ({
    flexDirection: 'row',
    height: `${amount + 12}%`,
  }),
  arrow: {
    transform: [{rotateY: '180deg'}],
    marginTop: 32,
    marginEnd: 6,
  },
  text: {
    fontSize: 13,
    fontWeight: '700',
    color: '#000',
  },
  available: amount => ({
    color: getColorByPercentage(amount),
    fontSize: 28,
  }),
});
