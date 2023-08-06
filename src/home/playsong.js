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
export default function PlaySong({ }) {










    return (

        <View style={styles.mainContainer}>

            <View style={styles.firstView}>


            </View>

            <View style={styles.secondView}>


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


    }




})