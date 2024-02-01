import React, { useEffect, useRef, useState } from "react";

import {
  View,
  Image,
  Text, Button,
  StyleSheet, TouchableOpacity, FlatList,
  Dimensions, Linking
}
  from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TrackPlayer from 'react-native-track-player';
import DocumentPicker from 'react-native-document-picker'
import * as RNFS from '@dr.pogodin/react-native-fs';
import CardView from 'react-native-cardview'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFocusEffect } from '@react-navigation/native';
import styles from "./styles";
import SongsList from "../home/songsList";
export default function Dashboard({ navigation }) {





  return (

    <View style={styles.mainContainer}>

      <View style={styles.firstView}>

        <TouchableOpacity >
          <MaterialIcon name={'chevron-down'} size={hp('3.5%')} color={'white'} style={{ marginLeft: wp('3') }} />

        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: hp('1.80') }}>Soundify</Text>


      </View>
      <View style={styles.secondView}>
        <SongsList />

      </View>
    </View>



  );


}




