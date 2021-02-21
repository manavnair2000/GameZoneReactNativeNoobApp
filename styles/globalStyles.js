import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    headerTitleText : {
        fontFamily: 'RobotoCondensed_400Regular',
        fontSize : 28,
    },
    headerView : {
        alignItems : 'center',
    },
    cardBasicStyle:{
        borderRadius: 15,
        flex: 1,
        borderWidth:1,
        borderColor: '#333',
        padding: 8,
        marginVertical: 8,
        shadowOffset: {
            width: 1,
            height:1
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowColor: '#333',
    }
});

export const image = {
    apex_legend : require('../assets/apex_legends.png'),
    fortnite: require('../assets/fortnite.png'),
    gtav: require('../assets/gtav.png')
};