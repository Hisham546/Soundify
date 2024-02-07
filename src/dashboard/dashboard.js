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
          <MaterialIcon name={'menu'} size={hp('3.5%')} color={'white'} style={{ marginLeft: wp('3') }} />

        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: hp('2'),marginLeft:wp('3'),fontWeight:'500' }}>Soundify</Text>


      </View>
      <View style={styles.secondView}>


      </View>
    </View>



  );


}




