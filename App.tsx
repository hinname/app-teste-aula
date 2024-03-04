import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Hello World!!!</Text>
      <View
        style={{
          borderBottomColor: 'black',
          width: 100,
          margin: 10,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Text>{count} clicks</Text>
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
