import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import parse from 'html-react-parser';
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
        placeholder = "Enter Length"
      />
      <TextInput
        inputMode="numeric"
        onChangeText={setW}
        value={w}
        placeholder = "Enter Width"
      />
      <TextInput
        inputMode="numeric"
        onChangeText={setH}
        value={h}
        placeholder = "Enter Height"
      />
    
      {parse(makerjs.exporter.toSVG(new box(parseFloat(l), parseFloat(w), parseFloat(h))))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d29e62',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function box( l, w, h) {
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
