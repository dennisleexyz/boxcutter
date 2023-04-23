import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import makerjs from 'makerjs';

export default function App() {
  const [l, setL] = useState('');
  const [w, setW] = useState('');
  const [h, setH] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        inputMode="numeric"
        onChangeText={setL}
        value={l}
      />
      <TextInput
        inputMode="numeric"
        onChangeText={setW}
        value={w}
      />
      <TextInput
        inputMode="numeric"
        onChangeText={setH}
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

function box(l, w, h) {
  this.units = makerjs.unitType.Inch;

  var paths = [];

  for (const x of [
    1,
    1 + l,
    1 + l + w,
    1 + 2*l + w,
  ])
    paths.push({
      type: 'line',
      origin: [x, 0],
      end: [x, l + h],
      layer: 'red',
    });

  for (const y of [
    l/2,
    l/2 + h,
  ])
    paths.push({
      type: 'line',
      origin: [0, y],
      end: [1 + 2*(l+w), y],
      layer: 'red',
    });

  for (const x of [
    1 + l/2,
    1 + 3*l/2 + w,
  ])

  this.paths = paths;
  this.models = [new makerjs.models.Rectangle(1 + 2*(l+w), l + h)];
}
