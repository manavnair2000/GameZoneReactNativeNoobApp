import * as React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { headerBackground } from '../styles/headerStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ReviewScreen from '../screens/ReviewScreen';
import Header from '../components/header';
import { BlurView } from 'expo-blur';

const HomeScreenStack = createStackNavigator();

export default function Home(){
    
    return (
        <NavigationContainer>
            <HomeScreenStack.Navigator>
                <HomeScreenStack.Screen name="Home" component={HomeScreen} options={{
                    headerTitle:()=>(<Header/>),
                    headerBackground: () => (
                        <ImageBackground blurRadius={15} source={headerBackground.image} style={styles.headerBGImage}></ImageBackground>
                    )
                    }}
                />
                <HomeScreenStack.Screen name="Game Review" component={ReviewScreen} 
                    options={({route}) => ({ title: 'Game Review of '+ route.params.title})}
                />
            </HomeScreenStack.Navigator>
        </NavigationContainer>
    )

}
const styles = StyleSheet.create({
    headerBGImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 0,
    },

})