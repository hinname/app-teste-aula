import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 150, height: 50 }}
          source={require('./assets/logo-estacio.png')}
        />
        <Text style={{textAlign: 'center'}}>SIA - Sistema de informações Acadêmicas</Text>
        <Text style={{fontSize: 12, textAlign: 'center'}}>Segunda, 4 de Março de 2024</Text>
      </View>
      <View>
        <Button title='Entrar com email de estudante'/>
        <View style={styles.line}>
          <View
          style={{
            borderBottomColor: 'black',
            width: 125,
            borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text>OU</Text>
          <View
          style={{
            borderBottomColor: 'black',
            width: 125,
            borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </View>
      </View>
      <View style={styles.form}>
        <Text>Usuário</Text>
        <TextInput/>
        <Text style={{textAlign: 'right', color: 'blue', fontSize: 10}}>Não sei ou esqueci a matrícula</Text>
        <Text>Senha</Text>
        <TextInput/>
        <Text style={{textAlign: 'right', color: 'blue', fontSize: 10}}>Esqueci minha senha</Text>
        <Button title='Entrar'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  header: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  form: {},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
