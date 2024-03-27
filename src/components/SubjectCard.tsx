import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type SubjectCardProps = {
  subjectName: string;
};

export default function SubjectCard(props : SubjectCardProps) {
  return (
    <View style={styles.container}>
      <Text>{props.subjectName}</Text>
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