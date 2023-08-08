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
import CardView from 'react-native-cardview'
export default function SongsList({ }) {

    const songs = [
        {
            id: '1',
            song: 'Love me like you do',
            title: 'Ellie Goudling',
        },
        {
            id: '2',
            song: 'Beutifull',
            title: 'Akon',
        },
        {
            id: '3',
            song: 'Dust till dawn',
            title: 'Zayn',
        },

    ]

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    return (

        <View style={styles.mainContainer}>

            <View style={styles.firstView}>
                <View style={styles.topIconView}>
                    <TouchableOpacity onPress={() => navigation.navigate('SongsList')}>
                        <MaterialIcon name={'chevron-down'} size={hp('3.5%')} color={'white'} style={{ marginLeft: wp('3') }} />
                    </TouchableOpacity>

                </View>
                <Image
                    style={styles.sampleLogo}
                    source={require('../assets/images/Beatles.png')}
                />

            </View>

            <View style={styles.secondView}>
                <View style={styles.sliderView}>

                    <Text style={{ marginLeft: wp('5'), color: 'white', marginTop: hp('1'), fontSize: hp('2.70') }}> Remastered</Text>
                    <View style={{ width: wp('100'), height: hp('5'), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: wp('8'), color: 'white', fontSize: hp('1.50') }}>Beatless</Text>

                    </View>
                    <View style={{ width: wp(100), height: hp('8'), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <MaterialIcon name={'cards-heart-outline'} size={hp('3%')} color={'white'} style={{ marginLeft: wp('4') }} />
                        <MaterialIcon name={'arrow-down-circle'} size={hp('3.5%')} color={'#23a54c'} style={{ marginRight: wp('3') }} />
                        <MaterialIcon name={'dots-horizontal'} size={hp('3.5%')} color={'white'} style={{ marginRight: wp('10') }} />

                        <MaterialIcon name={'pause-circle'} size={hp('8.5%')} color={'#23a54c'} style={{ marginLeft: wp('20') }} />
                    </View>
                    <View style={styles.songListView}>
                        <FlatList
                            data={songs}
                            style={{ width: wp('100'), height: hp('5'), marginTop: hp('1') }}
                            renderItem={({ item }) =>
                                <View style={{ width: wp('100'), height: hp('5') }}>
                                    <Text style={{ marginLeft: wp('8'), color: 'white', fontSize: hp('1.50') }}>{item.song}</Text>
                                </View>
                            }
                            keyExtractor={item => item.id}
                        />


                    </View>


                </View>


            </View>

        </View>



    );


}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#93261d'
        //backgroundColor:'white'

    },
    firstView: {
        width: wp('100'),
        height: hp('45'),


    },
    secondView: {
        width: wp('100'),
        height: hp('55'),

    },
    sliderView: {
        width: wp('100'),
        height: hp('10'),

    },
    sampleLogo: {
        width: wp('73'),
        height: hp('33'),
        marginLeft: wp('11'),
        marginTop: hp('1')

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
        marginTop: hp('1'),
        width: wp('100'),
        height: hp('5'),
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    FlatListView: {
        width: wp('100'),
        height: hp('6'),

    },
    FlatList: {

        width: wp('100'),
        height: hp('6'),
    },
    songListView: {
        width: wp('100'),
        height: hp('37'),



    }




})