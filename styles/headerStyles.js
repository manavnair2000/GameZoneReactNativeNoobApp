import { StyleSheet } from 'react-native';
export const headerStyle = StyleSheet.create({
    header:{
        // marginVertical:12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    headerText:{
        fontFamily: 'RobotoCondensed_700Bold_Italic',
        fontSize: 22,
        color: '#1de9b6',
        letterSpacing:1,
    } ,
});
export const headerBackground = {
    image : require('../assets/headerBackground1.png')
}