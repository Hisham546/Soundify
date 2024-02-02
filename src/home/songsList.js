import React, { useEffect, useRef, useState } from "react";

import {
    View,
    Image,
    Text, Button, PermissionsAndroid,
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
import { checkPermission } from "../components/Permissions";
import { useNavigation } from '@react-navigation/native';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
export default function SongsList({ }) {
    const mmkv = new MMKVLoader().initialize();
    const navigation = useNavigation();
    const [songs, setSongs] = useState('');
    const [totalSongs, setTotalSongs] = useState(0)
    const [isPlayerInitialized, setIsPlayerInitialized] = useState(false);

    useEffect(() => {

        const initializePlayer = async () => {
            if (isPlayerInitialized === false) {
                await TrackPlayer.setupPlayer({});
                if (await checkPermission()) {
                    getSongs();
                    setIsPlayerInitialized(true);


                } else {
                    // console.log('hi')
                    // Handle case where pergmissions are not granted
                }
            }
        };

        initializePlayer();
    }, []);

    const getSongs = async () => {

        const songs = await getAll({
            limit: 20,
            offset: 0,
            coverQuality: 50,
            minSongDuration: 1000,
        });
        setSongs(songs)

        const titles = songs.map(song => song.title);
        const totalTitles = titles.length;
        setTotalSongs(totalTitles)

    }


    console.log(songs)
    return (





        <View style={styles.songListView}>
            <View style={styles.sliderView}>

                <View style={styles.songListView}>
                    <Text style={{ marginLeft: wp('4'), color: 'white', fontSize: hp('1.60') }}>{totalSongs} Songs</Text>
                    <FlatList
                        data={songs}
                        style={{ width: wp('100'), height: hp('5'), marginTop: hp('1') }}
                        renderItem={({ item,index }) =>
                            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('PlaySong', { songs: item,currentIndex: index, })}>
                                <CardView

                                    style={[styles.songCard]}>

                                    <Image
                                        resizeMode="contain"
                                        style={styles.thumbnail}
                                        source={songs ? { uri: item.cover } : require('../assets/images/Beatles.png')}
                                    />
                                    <View
                                        style={{ width: wp('100'), height: hp('5') }}>
                                        <Text style={{ marginLeft: wp('4'), color: 'white', fontSize: hp('1.80') }}>{item.title}</Text>
                                    </View>

                                </CardView>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                    />


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

    songListView: {
        width: wp('100'),
        height: hp('55'),
        backgroundColor: 'red'


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



    },
    songCard: {
        width: wp('100'),
        height: hp('8'),
        backgroundColor: 'black',
        marginTop: hp('1'),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

    },
    thumbnail: {
        width: wp('10'),
        height: hp(5),
        marginLeft: wp('6')
    }




})