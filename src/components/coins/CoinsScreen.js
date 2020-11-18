import React , {Component} from 'react';
import { 
    StyleSheet,
    Image} from 'react-native';
import Http from '../../libs/http';
import Favorites from '../favorites/FavoritesScreen';
import Colors from '../../res/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuCoins from '../MenuCoins';
const Tabs = createBottomTabNavigator();

class CoinsScreen extends Component{
    state = {
        coins: [],
        allCoins: [],
        loading: false
    }
    componentDidMount = async () => {
        this.getCoins();
    }
    getCoins = async () => {
        this.setState({ loading: true});
        // DATOS EXTRAIDOS DE LA API
        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        this.setState({coins:res.data , allCoins: res.data , loading:false});
    }
    handlePress = (coin) => {
        this.props.navigation.navigate('CoinDetail',{ coin })
    }
    handleSearch = (query) => {
        const {allCoins} = this.state;
        const coinsFiltered = allCoins.filter((coin) => {
            return coin.name.toLowerCase().includes(query.toLowerCase()) ||
                   coin.symbol.toLowerCase().includes(query.toLowerCase());
        });
        this.setState({coins:coinsFiltered});
    }
    render(){
        const {coins,loading} = this.state;
        return(
            <Tabs.Navigator
                tabBarOptions={{
                tintColor: "#fefefe",
                style: {
                    backgroundColor: Colors.blackPearl
                }
                }
            }>
                <Tabs.Screen
                    name="Coins"
                    component={ MenuCoins }
                    options={{
                        tabBarVisible: true,
                        tabBarIcon: ({ size , color }) => (
                        <Image 
                            style={{tintColor:color , width: size , height: size}}
                            source={require('../../assets/dinero.png')}/>
                        )
                    }}
                />
                <Tabs.Screen
                    name="Favorites"
                    component={ Favorites }
                    options={{
                        tabBarIcon: ({ size , color }) => (
                        <Image 
                            style={{tintColor:color , width: size , height: size}}
                            source={require('../../assets/star.png')}/>
                        )
                    }}
                />   
            </Tabs.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade,
    },
    tituloTexto: {
        color:"#fff",
        textAlign: "center",
    },
    boton: {
        padding: 8,
        backgroundColor: "blue",
        borderRadius: 8,
        margin: 16
    },
    botonTexto: {
        color:"#fff",
        textAlign: "center",
    },
    loader: {
        marginTop: 60
    }
})

export default CoinsScreen;