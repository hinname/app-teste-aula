import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type HomeMenuCardProps = {
  cardName: string;
};

export default function SubjectCard(props : HomeMenuCardProps) {
  return (
    <View style={styles.container}>
      <Text>{props.cardName}</Text>
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