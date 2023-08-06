import React, { useEffect, useRef, useState } from "react";

import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TrackPlayer from 'react-native-track-player';

import Slider from '@react-native-community/slider';
export default function PlaySong({ }) {










    return (

        <View style={styles.mainContainer}>

            <View style={styles.firstView}>


            </View>

            <View style={styles.secondView}>
            <View style={styles.sliderView}> 

            <Text>From Me To You - Mono Remastered</Text>  
                <Slider
                    style={{ width:wp('90'), height: hp('10') }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />
                </View>

            </View>

        </View>



    );


}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'white'

    },
    firstView: {
        width: wp('100'),
        height: hp('60'),


    },
    secondView: {
        width: wp('100'),
        height: hp('40'),
        backgroundColor: 'green'


    },
    sliderView:{
        width:wp('100'),
        height:hp('15'),
        backgroundColor:'gray',
        justifyContent:'center',
        alignItems:'center'

    }




})