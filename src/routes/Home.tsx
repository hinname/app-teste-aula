import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SubjectCard from "../components/SubjectCard";

export default function Home() {
  const [userName, setUserName] = useState('Herivelton');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Olá, {userName}</Text>
        <View style={styles.subjects}>
          <Text>Disciplinas em andamento:</Text>
          <SubjectCard subjectName="Programação para dispositivos moveis" />
        </View>
      </View>
      <View style={styles.main}>
        <Text>Meu curso</Text>
        <View style={styles.mainCards}>
          
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 25,
  },
  subjects: {
    flexDirection: 'column',
    gap: 10,
  },
  main: {

  },
  mainCards: {

  },
});