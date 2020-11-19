import React, { useState } from 'react';
import { View, Text, Button,StyleSheet , Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { login } from '../../api/Mock';
import EmailForm from '../../Forms/EmailForm';

import { LoginButton, AccessToken } from 'react-native-fbsdk';

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
    <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
    
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