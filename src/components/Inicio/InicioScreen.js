import React, { Component } from 'react';
import {View,Text,Pressable,StyleSheet,Image,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../res/colors';

const Tabs = createBottomTabNavigator();

class InicioScreen extends Component {
  state = {
    user: "",
    password: ""
}
  handleTextUser = (user) => {
    this.setState({user});
    if(this.props.onChange){
        this.props.onChange(user);
    }
}
handleTextPassword = (password) => {
    this.setState({password});
    if(this.props.onChange){
        this.props.onChange(password);
    }
}
handlePress = () => {
    this.props.navigation.navigate("MenuCoins");
}
    render(){
      const  { user ,password} = this.state;
        return (
          <SafeAreaView style={styles.container}>
            <View>
              <Text style={styles.titleText}>Welcome to CrypoTracker</Text>
              <View style={styles.row}>
                <Image style={styles.imagen} source={require('../../assets/logo_coinTracker.jpeg')}/>
              </View>
              <View style={styles.login}>
                <Text style={styles.titleText}>
                  Login
                </Text>
              </View>
              <View>
                <View style={styles.row}>
                  <Text style={styles.titleText}>User: </Text>
                  <TextInput
                      style={[
                          styles.textInputUser,
                          Platform.OS == 'ios' ?
                              styles.textInputIos :
                              styles.textInputAndroid
                      ]} 
                      onChangeText={this.handleTextUser}
                      value={user}
                      placeholderTextColor="white"
                  />
                </View>
                <View style={styles.row}>
                    <Text style={styles.titleText}>Password: </Text>
                    <TextInput 
                        style={[
                            styles.textInput,
                            Platform.OS == 'ios' ?
                                styles.textInputIos :
                                styles.textInputAndroid
                        ]} 
                        onChangeText={this.handleTextPassword}
                        value={password}
                        placeholderTextColor="white"
                    />
                </View>
                <View style={styles.row}>
                  <Pressable style={styles.botonLogin} onPress={() => this.handlePress()} >
                    <Text style={styles.btnText}>Accept</Text>
                  </Pressable>
                </View>   
              </View>      
              <View style={styles.botones}>
                <Text style={styles.titleNewCount}>
                  You don't have a count?
                </Text>
                <Pressable style={styles.btnSI} onPress={() => this.props.navigation.navigate('InicioSesion')}>
                  <Text style={styles.btnText}>Sign In</Text>
                </Pressable>
                </View>
                <View style={styles.botones}>
                  <Pressable style={styles.btnM} onPress={() => this.props.navigation.navigate('MenuCoins' , {user})}>
                    <Text style={styles.btnText}>Coins</Text>
                  </Pressable>
                </View>
              </View>    
            
          </SafeAreaView>
        );
    }
}

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
    },
    btnSI: {
        padding: 8,
        backgroundColor: 'green',
        borderRadius: 8,
        marginRight: 15,
        
    },
    btnM: {
      padding: 8,
      backgroundColor: 'rgba(91,183,236,0.8)',
      borderRadius: 8,
      marginLeft: 15,
      
  },
    column: {
      flexDirection:"column",
      justifyContent: "center",
      marginLeft: 100,
    },
    gif: {
      width: 250,
      height:250,
      resizeMode:"contain"
    },
    textGif: {
      color: 'rgba(189,69,43,0.5)',
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 10,
      marginLeft: 20,
      
    },
    imagen:{
      width: 250,
      height: 250,
      resizeMode: 'contain',
      justifyContent: "center"
    },
    row: {
      flexDirection:"row",
      justifyContent: "center",
    },
    botones: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 30,
    },
    textInput:{
      height: 46,
      width:250,
      backgroundColor: Colors.charade,
      paddingLeft: 16,
      color: "white",
  },
  textInputUser: {
      height: 46,
      width:250,
      backgroundColor: Colors.charade,
      paddingLeft: 16,
      color: "white",
      marginLeft: 50,
  },
  textInput:{
    height: 46,
    width:250,
    backgroundColor: Colors.charade,
    paddingLeft: 16,
    color: "white",
},
textInputUser: {
    height: 46,
    width:250,
    backgroundColor: Colors.charade,
    paddingLeft: 16,
    color: "white",
    marginLeft: 50,
},
textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
},
textInputIos:{
    borderRadius: 8,
    margin: 8,
},
btnText: {
  textAlign: "center",
  color: "white",
  width: 100,
},
botonLogin: {
  padding: 8,
  backgroundColor: 'rgba(91,183,236,0.8)',
  borderRadius: 8,
  marginRight: 15,
  marginTop: 10,
  
},
titleNewCount: {
  color: "white",
  marginTop: 10,
  marginRight:10,
}

  })
  
  
export default InicioScreen;