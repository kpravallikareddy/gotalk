import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Header from '../components/Header';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const PersonalAccount = ({ navigation }) => {
    return(
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={styles.subcontainer}>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity>
                            <Image 
                            source={require('../assets/leftarrow.png')}
                            style={{height:15,width:15,resizeMode:'contain'}}
                            />
                        </TouchableOpacity>
                   </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    subcontainer:{
        flex:1,
        padding:15,
    }
})

export default PersonalAccount;