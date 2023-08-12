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

export default function PlaySong({navigation: { goBack } ,navigation,route }) {


    const  data  = route.params.songs;

console.log(data)

//From Me To You - Mono Remastered



    return (

        <View style={styles.mainContainer}>

            <View style={styles.firstView}>
                <View style={styles.topIconView}>
                    <TouchableOpacity onPress={() => navigation.navigate('SongsList')}>
                    <MaterialIcon name={'chevron-down'} size={hp('3.5%')} color={'white'} style={{marginLeft:wp('3')}} />
                    </TouchableOpacity>
                    <MaterialIcon name={'dots-horizontal'} size={hp('3.5%')} color={'white'} style={{marginRight:wp('3')}} />
                </View>
                <Image
                    style={styles.sampleLogo}
                    source={require('../assets/images/Beatles.png')}
                />

            </View>

            <View style={styles.secondView}>
                <View style={styles.sliderView}>

                    <Text style={{ marginLeft: wp('5'), color: 'white', marginTop: hp('1'), fontSize: hp('1.70') }}>{data.song}</Text>
                    <View style={{ width: wp('100'), height: hp('5'), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: wp('5'), color: 'white', fontSize: hp('1.50') }}>Beatless</Text>
                        <MaterialIcon name={'cards-heart-outline'} size={hp('3%')} color={'white'} style={{ marginRight: wp('4') }} />
                    </View>
                    <Slider
                        style={{ width: wp('98'), height: hp('1') }}
                        minimumValue={0}
                        maximumValue={1}
                        thumbTintColor="white"
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#A8A196"
                    />

                </View>
                <View style={styles.controllerView}>
                    <MaterialIcon name={'shuffle-variant'} size={hp('3%')} color={'white'} style={{}} />
                    <MaterialIcon name={'skip-backward-outline'} size={hp('5%')} color={'white'} style={{}} />
                    <MaterialIcon name={'play-circle'} size={hp('9%')} color={'white'} style={{}} />
                    <MaterialIcon name={'skip-forward-outline'} size={hp('5%')} color={'white'} style={{}} />
                    <MaterialIcon name={'repeat'} size={hp('3%')} color={'white'} style={{}} />
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
        height: hp('65'),


    },
    secondView: {
        width: wp('100'),
        height: hp('35'),




    },
    sliderView: {
        width: wp('100'),
        height: hp('10'),

    },
    sampleLogo: {
        width: wp('95'),
        height: hp('50'),
        marginLeft: wp('3'),
        marginTop: hp('3')

    },
    controllerView: {
        width: wp('100'),
        height: hp('10'),
        marginTop: hp('1'),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    topIconView: {
        marginTop:hp('1'),
        width: wp('100'),
        height: hp('5'),
        flexDirection: 'row',
        justifyContent: 'space-between',



    }




})