import React, { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createAccount } from '../../api/Mock';
import EmailForm from '../../Forms/EmailForm';

const CreateAccountScreenMOCKAPI = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>Complete de Form</Text>
      </View>
      <EmailForm
        buttonText="Sign up"
        onSubmit={createAccount}
        onAuthentication={() => navigation.navigate('MenuCoins')}
      >
        <Button
          title="Back to log in"
          onPress={() => navigation.navigate('LoginMOCKAPI')}
        />
      </EmailForm>
    </SafeAreaView>
    
  );
};

export default CreateAccountScreenMOCKAPI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    marginTop: 20,
    marginBottom: 20,
},
})