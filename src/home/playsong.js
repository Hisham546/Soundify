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
import TrackPlayer, { useProgress  } from 'react-native-track-player';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

export default function PlaySong({ navigation: { goBack }, navigation, route }) {

    const [songUrl, setSongUrl] = useState('');
    const [startPlay, setStartPlay] = useState(false);
    const data = route.params.songs;
    const progress = useProgress();




    useEffect(() => {
        setSongUrl(data.url)
        async function setup() {
            //  await TrackPlayer.setupPlayer({});
            await TrackPlayer.add({
                id: '1',
                url: data.url,
                title: data.title,
                artist: data.artist,
                // artwork: 'file:///path-to-your-album-artwork.jpg',
            });
        }

        setup();

        // return () => TrackPlayer.destroy();
    }, []);

    const playTrack = async () => {
        setStartPlay(true);
        await TrackPlayer.play();
    };

    const pauseTrack = async () => {
        setStartPlay(false);
        await TrackPlayer.pause();
    };

    const reset = async () => {
        TrackPlayer.reset();
        navigation.navigate('Dashboard')
    }
    const handleSlidingComplete = async (value) => {
        await TrackPlayer.seekTo(value); // Seek to the specified position (value) in the track
    };
    return (

        <View style={styles.mainContainer}>

            <View style={styles.firstView}>
                <View style={styles.topIconView}>
                    <TouchableOpacity onPress={() =>reset()}>
                        <MaterialIcon name={'chevron-down'} size={hp('3.5%')} color={'white'} style={{ marginLeft: wp('3') }} />
                    </TouchableOpacity>
                    <MaterialIcon name={'dots-horizontal'} size={hp('3.5%')} color={'white'} style={{ marginRight: wp('3') }} />
                </View>
  
                <Image
                 resizeMode="contain"
                    style={styles.sampleLogo}
                    source={data ? { uri: data.cover } : require('../assets/images/Beatles.png')}
                />
                   <View style={{ width: wp('100'), height: hp('5'), flexDirection: 'column',alignItems:'center' }}>
                        <Text style={{  color: 'white', fontSize: hp('1.80'),fontWeight:"500" }}>{data?.title}</Text>
                        <Text style={{ color: 'white', marginTop: hp('1'), fontSize: hp('1.50') }}>{data?.artist}</Text>
                        {/* <MaterialIcon name={'cards-heart-outline'} size={hp('3%')} color={'white'} style={{ marginRight: wp('4') }} /> */}
                    </View>
            </View>

            <View style={styles.secondView}>

                <View style={styles.sliderView}>

                   
                 
                    <Slider
                        style={{ width: wp('98'), height: hp('1') }}
                        value={progress.position}
                        minimumValue={0}
                        maximumValue={progress.duration}
                        onSlidingComplete={handleSlidingComplete}
                        thumbTintColor="white"
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#A8A196"
                    />
                </View>
                <View style={styles.controllerView}>
                    <MaterialIcon name={'shuffle-variant'} size={hp('3%')} color={'white'} style={{}} />
                    <MaterialIcon name={'skip-backward-outline'} size={hp('5%')} color={'white'} style={{}} />
                    <TouchableOpacity  activeOpacity={.90}  onPress={startPlay ? pauseTrack : playTrack} >
                        <MaterialIcon name={startPlay ? 'pause' : 'play-circle'} size={hp('9%')} color={'white'} style={{}} />
                    </TouchableOpacity>
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
        backgroundColor: 'black'

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
 
        justifyContent:'center',
        alignItems:'center'


    },
    sampleLogo: {
        width: wp('90'),
        height: hp('50'),
        marginLeft: wp('5.50'),
        marginTop: hp('2')

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



    }




})