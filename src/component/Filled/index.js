import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getColorByPercentage} from '../../utils/helper';

export default function Filled({amount}) {
  return (
    <>
      <View style={styles.box}>
        <View style={styles.smallBox} />
        <View style={styles.minBar(10)} />
        <View style={styles.minBar(25)} />
        <View style={styles.minBar(100)} />

        <View
          style={{
            height: `${amount}%`,
            backgroundColor: getColorByPercentage(amount),
            width: '100%',
            opacity: 0.7,
            borderRadius: 8,
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  minBar: height => ({
    borderTopWidth: 2,
    height: `${height}%`,
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 8,
    borderColor: '#fff',
  }),
  box: {
    height: '50%',
    width: '46%',
    backgroundColor: '#e2e2e2',
    borderRadius: 8,
    justifyContent: 'flex-end',
    borderColor: '#e2e2e2',
    padding: 9,
  },
  smallBox: {
    height: '4%',
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#e2e2e2',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'absolute',
    zIndex: 999999,
    top: '-3%',
  },
});
