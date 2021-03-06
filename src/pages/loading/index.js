import React,{useEffect} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Loading = () => {
    const navigation = useNavigation();
    // function handleNavigationGetCred(){
    //     navigation.navigate('GetCred');
    // }
    // function handleNavigationToBack(){
    //     navigation.goBack();
    // }
    function handleNavigationToAnalyze(){   
        
        setTimeout(()=>{navigation.navigate('Analyze')},
            2000
        )
    }

    handleNavigationToAnalyze();

    return (
        <View style={styles.container}>
            <View style={styles.barTop}></View>            
            {/* <TouchableOpacity style={styles.btnBack} onPress={handleNavigationToBack}>
                <Image style={styles.imageBack} source={require('../../assets/images/back.png')}/>
            </TouchableOpacity> */}
            <Image style={styles.image} source={require('../../assets/images/getcred.png')}/>
            <View style={styles.containerCenter}>
                <ActivityIndicator style={styles.imageIcon} size="large" color="red" />
                <Text style={styles.messageSubtitle}> 
                Carregando...</Text>
            </View>
            <View style={styles.hr}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center'
    },
    containerCenter:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 140
    },
    btnBack: {        
        alignSelf: 'flex-start',
    },
    imageIcon: {
        marginTop: 400
    },  
    imageBack: {
        marginTop: 8,
        marginHorizontal: 8 
    },  
    barTop:{
        width: 1000,
        height: 70,
        backgroundColor: '#EF0505',
    },  
    image: {
        marginTop: 50,
    },
    imageIcon:{
        marginTop: 60,    
        marginBottom: 50,    
    },
    message:{
        fontFamily: 'Rubik_700Bold',
        textAlign: 'center'
    },
    messageSubtitle: {
        fontFamily: 'Rubik_400Regular'
    },
    inputText: {
        width: 350,
        borderRadius: 6,
        backgroundColor: 'white',
        color: '#20232a',
        padding: 15,
        marginTop: 40,
        shadowColor: "#000",
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    btnEnter: {
        padding: 15,
        borderRadius: 40,
        color: '#20232a',
        backgroundColor: '#EF0505',
        width: 360, 
        borderWidth: 1,
        borderColor: '#EF0505',
        marginTop: 220
    },
    hr: {
        width: 200,
        height: 6,
        marginTop: 290,
        backgroundColor: 'red',
        borderRadius: 40
    },
    text: {
        alignSelf: 'center',
        color: '#EF0505',
        color: 'white',
        fontFamily: 'Rubik_500Medium'
    },
}); 

export default Loading;