import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, Linking } from 'react-native';

export default function SignUp({navigation, route}: {navigation: any, route: any}) {
  const [loginDisabled, setLoginDisabled] = useState(true);
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  if (matricula.length > 0 && senha.length > 0 && loginDisabled !== false) {
    setLoginDisabled(false);
  }
  if ((matricula.length === 0 || senha.length === 0) && loginDisabled !== true) {
    setLoginDisabled(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 150, height: 50 }}
          source={require('../../assets/logo-estacio.png')}
        />
        <Text>SIA - Sistema de informações Acadêmicas</Text>
        <Text style={{fontSize: 12}}>Segunda, 4 de Março de 2024</Text>
      </View>
      <View>
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
        <Text>Digite sua matricula</Text>
        <TextInput style={styles.inputLogin} onChangeText={(value) => {setMatricula(value)}}/>
        <Text>Defina uma senha</Text>
        <TextInput secureTextEntry={true} style={styles.inputLogin} onChangeText={(value) => {setSenha(value)}}/>
        <Button title='Registrar' disabled={loginDisabled} onPress={() => {}}/>
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
    marginTop: 10,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 25,
  },
  linkLogin: {
    textAlign: 'right', 
    color: 'blue', 
    fontSize: 10
  },
  inputLogin: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
