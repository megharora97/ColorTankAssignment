import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LIMIT = Array(52).fill(0);

export default function Scale({max, mid, min}) {
  return (
    <View style={styles.scale}>
      <View style={styles.scaleChild}>
        <Text style={styles.levelText(92)}>
          Max{'\n'}
          <Text style={styles.levelAmount}>{max}</Text>
        </Text>
        <Text style={styles.levelText(21)}>
          Warning{'\n'}
          <Text style={styles.levelAmount}>{mid}</Text>
        </Text>
        <Text style={styles.levelText(6)}>
          Min{'\n'}
          <Text style={styles.levelAmount}>{min}</Text>
        </Text>
        {LIMIT.map(() => {
          return <View style={styles.dash} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scale: {
    height: '52%',
    width: '20%',
    zIndex: 9999,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  dash: {
    width: 5,
    height: 1,
    backgroundColor: '#a1a1a1',
  },
  scaleChild: {
    height: '96%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 6,
  },
  levelText: height => ({
    position: 'absolute',
    bottom: `${height}%`,
    backgroundColor: 'white',
    zIndex: 999,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  }),
  levelAmount: {
    fontSize: 16,
  },
});
