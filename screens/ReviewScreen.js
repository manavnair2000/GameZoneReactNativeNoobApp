import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View , Text, Image } from "react-native";
import CardComponent from '../components/cardComponent';
import { FontAwesome } from '@expo/vector-icons';

export default function ReviewScreen({ route, navigation}){
    const gameItem  = route.params;
    return(
        <View style={styles.reviewParent}>
        {/* <CardComponent> */}
            <View style={styles.cardStyle}>
                <Image source={gameItem.img} style={styles.gameImage} fadeDuration={0} />
                <View style={styles.gameContent}>
                    <Text style={styles.gameTitle}>{gameItem.title}</Text>
                    <Text style={styles.gameDesc}>{gameItem.desc}</Text>
                </View>
            </View>
            <View style={styles.rating}>    
            <Text style={styles.ratingText}> Rating: </Text>    
                {[...Array(gameItem.rating)].map((e,i) => <FontAwesome key={i} name="heart" style={styles.heart} size={20} color="red" />)}

            </View>
            {/* </CardComponent> */}
            <StatusBar style="dark" />
        </View>
    );

};

const styles = StyleSheet.create({
    reviewParent: {
        flex: 1,
        paddingVertical:20,
        paddingHorizontal: 15,
    },
    gameContent: {
        flexWrap: 'wrap'
    },
    cardStyle: {
        justifyContent: 'space-between',
        // flexWrap: 'wrap',
        // marginVertical: 20
    },
    gameTitle: {
        fontFamily: 'RobotoCondensed_400Regular',
        fontSize: 22,
        alignSelf: 'center',
    },
    gameImage: { 
        width: 100,
        height: 100,
        alignSelf: 'center',
        flexWrap: 'wrap',
    },
    gameContent:{
        flexDirection: 'column',
    },
    gameDesc:{
        marginHorizontal: 10,
        alignSelf: 'center',
        flexDirection: 'column',
        fontSize: 15,
        textAlignVertical : 'center',
        includeFontPadding : false
    },
    ratingText: {
        fontFamily: 'RobotoCondensed_400Regular',
        fontSize: 15,
        marginHorizontal: 10,
        alignSelf: 'center',
    },
    rating: {
        flexDirection: 'row',
        marginVertical: 10,
        borderTopColor: '#333',
        borderTopWidth: 1,
        paddingVertical: 10,
        justifyContent: 'center',
    },
    heart: {
        marginHorizontal: 2,
        alignSelf: 'center',
    }
});