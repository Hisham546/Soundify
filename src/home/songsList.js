import React, { useEffect,useRef,useState } from "react";

import {
View,
Image,
Text,Button,
StyleSheet,TouchableOpacity,FlatList,
TextInput}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import TrackPlayer from 'react-native-track-player';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

export default function SongsList({}){




    return (

        <View style={styles.mainContainer}>

            <View style={styles.firstView}>
                <View style={styles.topIconView}>
                    <TouchableOpacity onPress={() => navigation.navigate('SongsList')}>
                    <MaterialIcon name={'chevron-down'} size={hp('3.5%')} color={'white'} style={{marginLeft:wp('3')}} />
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
                    <View style={{width:wp(100),height:hp('8'),flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <MaterialIcon name={'cards-heart-outline'} size={hp('3%')} color={'white'} style={{ marginLeft: wp('4') }} />
                    <MaterialIcon name={'arrow-down-circle'} size={hp('3.5%')} color={'#23a54c'} style={{marginRight:wp('3')}} />
                    <MaterialIcon name={'dots-horizontal'} size={hp('3.5%')} color={'white'} style={{marginRight: wp('10')}} />

                    <MaterialIcon name={'pause-circle'} size={hp('8.5%')} color={'#23a54c'} style={{marginLeft:wp('20')}} />
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

    },
    firstView: {
        width: wp('100'),
        height: hp('45'),


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
        marginTop:hp('1'),
        width: wp('100'),
        height: hp('5'),
        flexDirection: 'row',
        justifyContent: 'space-between',



    }




})