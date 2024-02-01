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
export default function SongsList({ navigation }) {
    const [songs, setSongs] = useState('');


    useEffect(() => {
        // Initialize Track Player
        TrackPlayer.setupPlayer({});
        if (checkPermission()) {
            getSongs(); // If permissions granted, it will trigger actualDownload()
        }
    }, []);
    

    const getSongs = async () => {

        const songs = await getAll({
            limit: 20,
            offset: 0,
            coverQuality: 50,
            minSongDuration: 1000,
        });
        setSongs(songs)


    }


    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    return (

  



            <View style={styles.songListView}>
                <View style={styles.sliderView}>
{/* 
                    <Text style={{ marginLeft: wp('5'), color: 'white', marginTop: hp('1'), fontSize: hp('2.70') }}> Remastered</Text>
                    <View style={{ width: wp('100'), height: hp('5'), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: wp('8'), color: 'white', fontSize: hp('1.50') }}>Beatless</Text>

                    </View> */}
                 
                    <View style={styles.songListView}>
                        <FlatList
                            data={songs}
                            style={{ width: wp('100'), height: hp('5'),backgroundColor:'blue', marginTop: hp('1') }}
                            renderItem={({ item }) =>
                                <TouchableOpacity onPress={() => navigation.navigate('PlaySong', { songs: item })}
                                    style={{ width: wp('100'), height: hp('5') }}>
                                    <Text style={{ marginLeft: wp('8'), color: 'white', fontSize: hp('2') }}>{item.title}</Text>
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