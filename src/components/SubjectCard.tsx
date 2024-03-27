import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SubjectCard() {
  const [subjectName, setSubjectName] = useState('Programação para dispositivos móveis');
  return (
    <View style={styles.container}>
      <Text>{subjectName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    color: 'black',
  }
});