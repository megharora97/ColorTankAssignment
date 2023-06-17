import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
  View,
  Text,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Scale from '../Scale';
import Filled from '../Filled';
import {getColorByPercentage} from '../../utils/helper';
import Indicator from '../Indicator';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function ColorTank(props) {
  const [amount, setAmount] = useState(0);

  const [max, setMax] = useState(0);
  const [mid, setMid] = useState(0);
  const [min, setMin] = useState(0);

  const [filledAmount, setFilledAmount] = useState(0);

  useEffect(() => {
    setMax((props.size - 0.01).toFixed(2));
    setMid((props.size * 0.25).toFixed(2));
    setMin((props.size * 0.1).toFixed(2));
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    let fill = props.filled;
    if (props.filled > props.size) fill = props.size;
    setFilledAmount(parseFloat(fill).toFixed(2));
    setAmount((fill / props.size) * 100);
  }, [props]);

  return (
    <View style={styles.container}>
      <Scale max={max} mid={mid} min={min} />
      <Filled amount={amount} />
      <Indicator amount={amount} filledAmount={filledAmount} />
      <Pressable style={styles.goBack} onPress={props.goBack}>
        <Text style={styles.goBackText}>Go Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  goBack: {
    position: 'absolute',
    bottom: 100,
  },
  goBackText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18,
  },
});
