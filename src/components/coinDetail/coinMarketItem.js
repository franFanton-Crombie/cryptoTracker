import React from 'react';
import CoinsItem from '../MenuCoins/CoinsItem';
import CoinDetailScreen from './CoinsDetailScreen';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Colors from '../../res/colors';

const CointDetailScreen = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.priceText}>{item.price_usd}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderColor:  Colors.zircon,
        borderWidth: 1,
        padding: 16,
        marginRight: 8,
        alignItems:"center",
    },
    nameText:{
        color: "white",
        fontWeight: "bold",
    },
    priceText:{
        color: "white",
    }
})

export default CointDetailScreen;