import React , {Component} from 'react';
import {View,Text,Image,StyleSheet, SectionList,FlatList,Pressable,Alert,SafeAreaView,Button} from 'react-native';
import Http from '../../libs/http';
import Colors from '../../res/colors';
import CoinMarketItem from './coinMarketItem';
import Storage from '../../libs/storage';


class CoinDetailScreen extends Component {
    state = {
        coin: {},
        markets: {},
        isFavorite: false
    }
    
    toogleFavorite = () => {
        if(this.state.isFavorite){
            this.removeFavorite();
        }
        else{
            this.addFavorite();
        }
    }

    addFavorite = async () => {
        //HAY QUE PASAR A STRING PORQ STORAGE SOLO GUARDA ESE TIPO DE DATOS
        const coin = JSON.stringify(this.state.coin);
        const key = `favorite-${this.state.coin.id}`;
        const stored = await Storage.instance.store(key,coin);
        
        if(stored){
            this.setState({ isFavorite: true });
        }
    }

    removeFavorite = async () => {
        Alert.alert("Remove Favorite", "Are you sure?", [
            {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
            },
            {
                text: "Remove",
                onPress: async () => {
                    const key = `favorite-${this.state.coin.id}`;
                    await Storage.instance.remove(key);
                    this.setState({ isFavorite: false });
                },
                style: "destructive"
            }
        ])
    }

    getFavorite = async () => {
        try {
            const key = `favorite-${this.state.coin.id}`;
            const favString  = await Storage.instance.get(key);
            if(favString != null){
                this.setState({ isFavorite:true });
            }
        } catch(err) {
            console.log("Error al extraer los favoritos",err);
        }     
    }

    getSymbolIcon = (name) =>{
        if(name){
            const symbol = name.toLowerCase().replace(" ","-");
            
            return `https://c1.coinlore.com/img/16x16/${symbol}.png`;
    
        }
    }
    getSections = (coin) => {
        const sections = [
            {
                title: "Market cap",
                data: [coin.market_cap_usd]
            },
            {
                title: "Volume 24h",
                data: [coin.volume24]
            },
            {
                title: "Change 24h",
                data: [coin.percent_change_24h]
            }
        ];
        return sections;
    }
    getMarkets = async (coinId) => {
        const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
        const markets = await Http.instance.get(url);
        this.setState({ markets });
    }
    componentDidMount(){
        const {coin} = this.props.route.params;
        this.props.navigation.setOptions({title: coin.symbol});
        this.getMarkets(coin.id);
        this.setState({ coin }, () => {
            this.getFavorite();
        });
    }
    backToMenu = async () => {
        
        this.props.navigation.navigate('MenuCoins');
      };
    render(){
        const { coin , markets , isFavorite} = this.state;
        return(
            <SafeAreaView style={styles.container}>
                <Button title="Back" onPress={this.backToMenu} />
                <View style={styles.subHeader}>
                    <View style={styles.row}>
                        <Image style={styles.iconImg} source={{uri: this.getSymbolIcon(coin.name)}}/>
                        <Text style={styles.titleText}>{coin.name}</Text>
                    </View>
                    <Pressable
                        onPress={this.toogleFavorite} 
                        style={[styles.btnFavorite,
                            isFavorite ?
                                styles.btnFavoriteRemove :
                                styles.btnFavoriteAdd
                        ]}>
                        <Text style={styles.btnFavoriteText}>{ isFavorite ? "Remove favorite" : "Add favorite"}</Text>
                    </Pressable>
                </View>

                <SectionList
                    style={styles.section}
                    sections={this.getSections(coin)}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => 
                        <View style={styles.secttionItem}>
                            <Text style={styles.itemText}>{item}</Text>
                        </View>    
                    }
                    renderSectionHeader={({ section }) => 
                        <View style={styles.sectionheader}>
                            <Text style={styles.sectionText}>{section.title}</Text>
                        </View>    
                    }
                />
                <Text style={styles.marketTitle}>Markets</Text>
                <FlatList
                    style={styles.list}
                    keyExtractor={(item) => `${item.base}-${item.name}-${item.quote}`}
                    data={markets}
                    renderItem={({item}) => <CoinMarketItem item={item} />}
                    horizontal={true}
                />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    iconImg:{
        width: 25,
        height: 25,
    },
    sectionheader:{
        backgroundColor:"rgba(0,0,0,0.2)",
        padding: 8,
    },
    row: {
        flexDirection: "row",
    },
    sectionItem:{
        padding: 8,
    },
    itemText:{
        color: "white",
        fontSize: 14,
    },
    sectionText:{
        color: "white",
        fontSize: 14,
        fontWeight:"bold",
    },
    container:{
        flex: 1,
        backgroundColor: Colors.charade,
    },
    section:{
        maxHeight: 220,
    },
    titleText:{
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginLeft: 8,
    },
    subHeader:{
        backgroundColor: "rgba(0,0,0,0.2)",
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    list:{
        maxHeight: 100,
        paddingLeft: 16,
    },
    marketTitle:{
        color: "white",
        fontSize: 16,
        marginBottom: 16,
        fontWeight: "bold",
        marginLeft: 16,
    },
    btnFavorite: {
        padding: 8,
        borderRadius: 8,
    },
    btnFavoriteAdd: {
        backgroundColor: Colors.picton,
    },
    btnFavoriteRemove: {
        backgroundColor: Colors.carmine,
    },
    btnFavoriteText: {
        color: Colors.white,
    }
});
export default CoinDetailScreen;