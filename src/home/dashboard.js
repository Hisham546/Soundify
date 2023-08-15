import React, { useEffect, useRef, useState } from "react";

import {
  View,
  Image,
  Text, Button,
  StyleSheet, TouchableOpacity, FlatList,
  Dimensions
}
  from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TrackPlayer from 'react-native-track-player';
import DocumentPicker from 'react-native-document-picker'
import * as RNFS from '@dr.pogodin/react-native-fs';
import CardView from 'react-native-cardview'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function Dashboard({ navigation }) {


  // const fetchData = async () => {


  //   const result = await DocumentPicker.pick({
  //     type: [DocumentPicker.types.images],
  //   });
  //   console.log(result)
  // }


  // const start = async () => {
  //   // Set up the player
  //   await TrackPlayer.setupPlayer();

  //   // Add a track to the queue

  //   console.log(TrackPlayer)
  // }

  const songs = [
    {
      id: '1',
      song: 'Love me like you do',
      title: 'Ellie Goudling',
      image: require('../assets/images/Beatles.png')
    },
    {
      id: '2',
      song: 'Beutifull',
      title: 'Akon',
      image: require('../assets/images/Beatles.png')
    },
    {
      id: '3',
      song: 'Dust till dawn',
      title: 'Zayn',
      image: require('../assets/images/Beatles.png')
    },

  ]



  return (

    <View style={styles.mainContainer}>

      <View style={styles.topIconView}>

        <Text style={styles.heading}>Recently Played</Text>
      </View>
      <View style={styles.scrollableView}>
        <FlatList
          horizontal
          data={songs}
          style={{ width: wp('100'), height: hp('5'), marginTop: hp('1') }}
          renderItem={({ item }) =>
            <CardView
             style={styles.recentCardView}
              cornerRadius={5}>
              <TouchableOpacity onPress={() => navigation.navigate('PlaySong', { songs: item })}
                style={{ width: wp('100'), height: hp('5') }}>
                   <Image
                    style={styles.sampleLogo}
                    source={item.image}
                />
                <Text style={{ marginLeft: wp('8'), color: 'white', fontSize: hp('2') }}>{item.song}</Text>
              </TouchableOpacity>
            </CardView>
          }
          keyExtractor={item => item.id}
        />

      </View>
    </View>



  );


}




const styles = StyleSheet.create({


  mainContainer: {
    flex: 1,
    backgroundColor: 'black'

  },
  heading: {
    color: 'white',
    fontSize: screenHeight * 0.02,
    fontFamily: 'Manrope-Bold',
    marginLeft: wp('2')
  },
  topIconView: {
    marginTop: hp('1'),
    width: screenWidth * 100,
    height: screenHeight * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  scrollableView: {
    width: screenWidth * 100,
    height: screenHeight * 0.19,


  },
  recentCardView:{
  width:wp('40'),
  height:hp('17'),
  marginLeft:wp('1')

  }



})