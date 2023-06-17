import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import ColorTank from './component/ColorTank';

function App() {
  const [showTank, setShowTank] = useState(false);

  const [amount, setAmount] = useState('1');
  const [filled, setFilled] = useState('0.1');

  const goBack = () => {
    if (!showTank) {
      if (!(amount >= 1 && amount <= 5)) {
        Alert.alert('Tank size should be between 1 to 5 L');
        return;
      }
      if (filled > amount) {
        Alert.alert('Filled amount cannot be greater than tank size');
        return;
      }
    }
    setShowTank(!showTank);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      {showTank ? (
        <ColorTank size={amount} filled={filled} goBack={goBack} />
      ) : (
        <View style={styles.form}>
          <Text style={styles.title}>{'Tank Size (b/w 1L to 5L)'}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter tank size"
            placeholderTextColor={'#c2c2c2'}
            maxLength={4}
            value={amount}
            onChangeText={setAmount}
          />
          <Text style={{...styles.title, marginTop: 16}}>
            Amount of tank filled
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setFilled}
            placeholderTextColor={'#c2c2c2'}
            maxLength={4}
            value={filled}
            placeholder="Enter the filled amount"
          />
          <Pressable style={styles.tankBtn} onPress={goBack}>
            <Text style={styles.tanktext}>Show Tank</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '90%',
  },
  tankBtn: {
    height: 40,
    backgroundColor: '#028ad0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginTop: 40,
  },
  tanktext: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  input: {
    height: 46,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    padding: 12,
    marginTop: 4,
    color: '#000',
  },
  title: {
    fontWeight: '500',
    fontSize: 15,
    color: '#000',
  },
});

export default App;
