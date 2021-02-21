import React,  { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { globalStyles, image } from '../styles/globalStyles';
import CardComponent  from '../components/cardComponent';
import { Entypo } from '@expo/vector-icons';
export default function HomeScreen({navigation}){
    const [games, modifyGame] = useState([
        { title: 'Apex Legends', rating: 5, desc: 'A very nice game to play! A very nice game to play! A very nice game to play! ', key: '1', img: image.apex_legend },
        { title: 'Fortnite', rating: 4, desc: 'A very nice game to play!', key: '2', img: image.fortnite },
        { title: 'GTA V', rating: 3, desc: 'A very nice game to play!', key: '3' ,img: image.gtav},
    ]);
    const addGame = (val) => {
        val.key = Math.random().toString();
        modifyGame([
            val,
            ...games
        ])
    };
    return(
        <View style={styles.flatList}>
        <FlatList 
            data={games}
            renderItem={({item})=>(
                <CardComponent>
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Game Review',item);
                        }}
                    >
                        <View style={styles.homeCardStyle}>
                            <Image source={item.img} style={{ width: 50, height: 50}} fadeDuration={0} />
                            <Text style={styles.gameStyle}> {item.title}</Text>
                            <Entypo style={styles.iconStyle} name="chevron-with-circle-right" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                </CardComponent>
            )}
        />
        <StatusBar style="light" />
        </View>
    );

}

const styles = StyleSheet.create({
    flatList:{
        marginVertical: 10,
        marginHorizontal: 15,
        flex: 1,
    },
    gameStyle: {
        fontFamily: 'RobotoCondensed_400Regular',
        fontSize: 22,
        alignSelf: 'center'
    },
    homeCardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconStyle:{
        marginHorizontal: 10,
        alignSelf: 'center'
    }
})