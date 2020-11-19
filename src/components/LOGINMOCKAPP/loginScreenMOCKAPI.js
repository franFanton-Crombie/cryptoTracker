import React, { useState } from 'react';
import { View, Text, Button,StyleSheet , Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { login } from '../../api/Mock';
import EmailForm from '../../Forms/EmailForm';

const LoginScreenMOCKAPI = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Welcome to CrypoTracker</Text>
              <View style={styles.row}>
                <Image style={styles.imagen} source={require('../../assets/logo_coinTracker.jpeg')}/>
              </View>
    <EmailForm
      buttonText="Log in"
      onSubmit={login}
      onAuthentication={() => navigation.navigate('MenuCoins')}
    >
      <Button
        title="Create account"
        onPress={() => navigation.navigate('CreateAccountMOCKAPI')}
      />
    </EmailForm>
    </SafeAreaView>
  );
};

export default LoginScreenMOCKAPI;

const styles = StyleSheet.create({ 
  titleText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    marginTop: 20,
    marginBottom: 20,
},
row: {
  flexDirection:"row",
  justifyContent: "center",
},
imagen:{
  width: 250,
  height: 250,
  resizeMode: 'contain',
  justifyContent: "center"
},
container: {
  flex: 1,
  backgroundColor: "black",
},
})