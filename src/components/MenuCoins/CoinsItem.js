import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
    Pressable,
} from 'react-native';
import Colors from '../../res/colors';

const CoinsItem = ({ item , onPress }) => {
    getImgArrow = () => {
        if(item.percent_change_1h > 0){
            return require("../../assets/arrow_up.png");
        }
        else{
            return require("../../assets/arrow_down.png");
        }
    }
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.symbolText}>{item.symbol}</Text>
                <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.percentText}>{item.percent_change_1h}</Text>
                <Image style={styles.imgIcon} source={this.getImgArrow()}/>    
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        borderColor: Colors.zircon,
        borderBottomWidth: 1,
        paddingLeft: Platform.OS == 'ios' ? 16 : 0,
        marginLeft: Platform.OS == 'ios' ? 0 : 16,
    },
    row:{
        flexDirection:"row",
    },
    symbolText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginRight: 8,
    },
    nameText: {
        color: "white",
        fontSize: 14,
        marginRight: 12,
    },
    priceText: {
        color: "white",
        fontSize: 14,
    },
    percentText:{
        color: "white",
        fontSize: 12,
        marginRight: 8,
    },
    imgIcon:{
        width: 22,
        height: 22,
    }
});

export default CoinsItem;