import React, { useEffect, useRef, useState } from "react";

import {
    View,
    Image,
    Text, Button,PermissionsAndroid,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TrackPlayer from 'react-native-track-player';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import CardView from 'react-native-cardview';
import { getAll, getAlbums, searchSongs } from "react-native-get-music-files";
export default function SongsList({ navigation }) {
    const [songs,setSongs]= useState('');
  

    // const songs = [
    //     {
    //         id: '1',
    //         song: 'Love me like you do',
    //         title: 'Ellie Goudling',
    //     },
    //     {
    //         id: '2',
    //         song: 'Beutifull',
    //         title: 'Akon',
    //     },
    //     {
    //         id: '3',
    //         song: 'Dust till dawn',
    //         title: 'Zayn',
    //     },

    // ]
useEffect(() =>{ 
    // Initialize Track Player
   TrackPlayer.setupPlayer({});
    checkPermission()
},[])
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
    const getSongs = async () => {

        const songsOrError = await getAll({
            limit: 20,
            offset: 0,
            coverQuality: 50,
            minSongDuration: 1000,
        });
        setSongs(songsOrError)
        console.log(songsOrError,'....songs')

    }
    checkPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                getSongs(); //-- If permissions granted it will trigger  actualDownload()
            } else {
                Alert.alert('Permission Denied!', 'You need to give storage permission to download the file');
            }
        } catch (err) {
        }
    }
;
      
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    return (

        <View style={styles.mainContainer}>

            <View style={styles.firstView}>
                <View style={styles.topIconView}>
                    <TouchableOpacity onPress={() => navigation.navigate()}>
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
                                <TouchableOpacity onPress={() => navigation.navigate('PlaySong',{songs:item})}
                                    style={{ width: wp('100'), height: hp('5') }}>
                                    <Text style={{ marginLeft: wp('8'), color: 'white', fontSize: hp('2') }}>{item.title}</Text>
                                </TouchableOpacity>
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
        backgroundColor: 'black'
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