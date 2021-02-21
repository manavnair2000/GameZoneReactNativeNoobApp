import React  from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import {headerStyle, headerBackground } from '../styles/headerStyles';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
export default function Header(props) {
    return(
        <View style={headerStyle.headerParent}>
           <MaterialIcons  name="menu" size={24} color="white" style={styles.menu} />
            <View style={headerStyle.header}>
                <Entypo style={styles.gameIcon} name="game-controller" size={24} color="#bdbdbd" />
                <Text style={headerStyle.headerText}>GameZone</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    menu:{
        position: 'absolute',
        justifyContent: 'flex-start',
        // marginVertical: 3,
        textAlignVertical: 'center',
    },
    headerBGImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
    },
    gameIcon:{
        marginHorizontal: 5,
        justifyContent: 'center',
    }
})