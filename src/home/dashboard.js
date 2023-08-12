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
import DocumentPicker from 'react-native-document-picker'
export default function Dashboard({navigation }) {


  const fetchData = async () => {


    const result = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });
    console.log(result)
  }


  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue

    console.log(TrackPlayer)
  }





  return (

    <View style={styles.mainContainer}>

      <TouchableOpacity onPress={() => navigation.navigate('SongsList')}
        style={{ width: wp('40'), height: hp('5'), backgroundColor: 'gray' }}>

        <Text>Pick</Text>
      </TouchableOpacity>

    </View>



  );


}




const styles = StyleSheet.create({


  mainContainer: {
    flex: 1,
    backgroundColor: '#7E6E5B'

  },




})