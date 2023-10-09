import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is my first react native app</Text>
      <StatusBar style="auto" />
      <Button title="Click me" onPress={() => alert('Hello World')} />
      <Switch value={isEnabled} onValueChange={() => setIsEnabled(previousState => !previousState)} />
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
  text: {
    fontSize : 20,
  }
});
