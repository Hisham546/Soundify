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





  return (

    <View style={styles.mainContainer}>

      <View style={styles.topIconView}>

        <Text style={styles.heading}>Recently Played</Text>
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
    fontFamily:'Manrope-Bold',
    marginLeft:wp('2')
  },
  topIconView: {
    marginTop: hp('1'),
    width: screenWidth * 100,
    height: screenHeight * 0.05,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',

  },



})