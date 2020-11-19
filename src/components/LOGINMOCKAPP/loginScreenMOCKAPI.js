import React, { useState } from 'react';
import { View, Text, Button,StyleSheet , Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { login } from '../../api/Mock';
import EmailForm from '../../Forms/EmailForm';

import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton , statusCodes} from '@react-native-community/google-signin';



GoogleSignin.configure();
// import statusCodes along with GoogleSignin


// Somewhere in your code
signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      // user has not signed in yet
    } else {
      // some other error
    }
  }
};
isSignedIn = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  this.setState({ isLoginScreenPresented: !isSignedIn });
};
getCurrentUser = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();
  this.setState({ currentUser });
};
signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    this.setState({ user: null }); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};
revokeAccess = async () => {
  try {
    await GoogleSignin.revokeAccess();
    console.log('deleted');
  } catch (error) {
    console.error(error);
  }
};
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
      <View>
        <GoogleSigninButton 
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
          />
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