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
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

export default function PlaySong({ }) {










    return (

        <View style={styles.mainContainer}>

            <View style={styles.firstView}>
            <Image
        style={styles.sampleLogo}
        source={require('../assets/images/Beatles.png')}
      />

            </View>

            <View style={styles.secondView}>
            <View style={styles.sliderView}> 

            <Text style={{marginLeft:wp('5'),color:'white',fontSize:hp('1.70')}}>From Me To You - Mono Remastered</Text>  
            <View style={{width:wp('100'),height:hp('5'),flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{marginLeft:wp('5'),color:'white',fontSize:hp('1.50')}}>Beatless</Text>
            <MaterialIcon name={'cards-heart-outline'} size={hp('3%')} color={'white'} style={{ marginRight: wp('4') }} />
            </View>
                <Slider
                    style={{ width:wp('98'), height: hp('10') }}
                    minimumValue={0}
                    maximumValue={1}
                    thumbTintColor="white"
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#A8A196"
                />
                </View>

            </View>

        </View>



    );


}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#7E6E5B'

    },
    firstView: {
        width: wp('100'),
        height: hp('60'),


    },
    secondView: {
        width: wp('100'),
        height: hp('40'),



    },
    sliderView:{
        width:wp('100'),
        height:hp('15'),

        justifyContent:'center',


    }




})