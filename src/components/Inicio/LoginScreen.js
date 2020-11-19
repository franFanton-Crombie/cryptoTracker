import React, { Component } from 'react';
import {View,Text,Pressable,StyleSheet,Alert, Button} from 'react-native';
import { SafeAreaView, withSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../../res/colors';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
    name: t.String,
    // PARA HACER UN CAMPO OPCIONAL USAR maybe
    //surname: t.maybe(t.String),
    surname: t.String,
    email: t.String,
    username: t.String,
    password: t.String,
    terms: t.Boolean
});
const options = {
    fields: {
      email: {
        error: 'Without an email address how are you going to reset your password when you forget it?'
      },
      password: {
        error: 'Choose something you use on a dozen other sites or something you won\'t remember'
      },
      terms: {
        label: 'Agree to Terms',
      },
    },
  };
  const formStyles = {
    ...Form.stylesheet,
    controlLabel: {
      normal: {
        color: 'blue',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      },
      error: {
        color: 'red',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      }
    }
  }

class LoginScreen extends Component {    
    handleSubmit = () => {
        const user = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', user);

        if(user != null){
            Alert.alert("Form Complete","", [
                {
                    text: "Accept",
                    onPress: () => {},
                    style: "cancel"
                }
            ])
            this.props.navigation.navigate("MenuCoins", { user });
        }   
      }
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.textTitle}>Complete de Form</Text>
                </View>
                <Form 
                    style={formStyles}
                    ref={c => this._form = c} 
                    options={options}
                    type={User} />
                <Button
                style={styles.botonSU}
                    title="Sign Up!"
                    onPress={this.handleSubmit}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 20,
        padding: 20,
        backgroundColor: '#ffffff',
      },
    row: {
        flexDirection: "row",
        justifyContent: "center"
    },
    textTitle: {
        fontSize: 25,
        marginBottom: 10,
    },
    botonSU: {
        padding: 8,
        backgroundColor: 'rgba(91,183,236,0.8)',
        borderRadius: 8,
        marginLeft: 15,
        
    },
  })

  
  
  
export default LoginScreen;