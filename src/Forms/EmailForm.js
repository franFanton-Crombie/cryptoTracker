import React, { useState } from 'react'
import { ScrollView, StyleSheet, TextInput, Button, Text, View } from 'react-native'
import { setToken } from '../api/Token'

const EmailForm = ({ buttonText, onSubmit, children, onAuthentication }) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submit = () => {
    onSubmit(email, password)
      .then(async (res) => {
        await setToken(res.auth_token);
        onAuthentication();
      })
      .catch((res) => setErrorMessage(res.error));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>User: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Password: </Text>
        <TextInput
          style={styles.input2}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
        />
      </View>
      
      <Button title={buttonText} onPress={submit}/>
      {errorMessage ? <Text style={styles.textoError}>{errorMessage}</Text> : null}
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
    marginTop: 20,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 40,
    borderRadius: 8,
    backgroundColor: "white"
  },
  input2: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: "white"
  },
  row: {
    flexDirection:"row",
    justifyContent:"center"
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 27
  },
  textoError: {
    color:"white"
  }
});

export default EmailForm;