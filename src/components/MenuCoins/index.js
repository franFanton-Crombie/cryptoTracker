import React from 'react';
import { 
    FlatList,
    ActivityIndicator,
    SafeAreaView,
    StyleSheet,
    Button
} from 'react-native';
import Colors from '../../res/colors';
import Http from '../../libs/http';
import CoinsItem from './CoinsItem';
import CoinsSearch from './coinSearch';
class MenuCoins extends React.Component {
    state = {
        coins: [],
        allCoins: [],
        loading: false
    }
    componentDidMount = async () => {
        this.getCoins();
    }
    getCoins = async () => {
        console.log(login,auth_token)
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

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Button title="Log out" onPress={() => this.props.navigation.navigate('LoginMOCKAPI')} />
                <CoinsSearch onChange={this.handleSearch} />
                {this.state.loading ? 
                    <ActivityIndicator style={styles.loader} color='black' size="large" />
                    : null
                }
                <FlatList
                    data={this.state.coins}
                    renderItem={({ item }) => 
                    <CoinsItem item={item} 
                                onPress={() => this.handlePress(item)} />
                    }
                />
            </SafeAreaView>
        );
    };
};


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

export default MenuCoins;