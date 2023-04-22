import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [l, onChangeL] = useState();
  const [w, onChangeW] = useState();
  const [h, onChangeH] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        inputMode="numeric"
        onChangeText={onChangeL}
        value={l}
      />
      <TextInput
        inputMode="numeric"
        onChangeText={onChangeW}
        value={w}
      />
      <TextInput
        inputMode="numeric"
        onChangeText={onChangeL}
        value={h}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
