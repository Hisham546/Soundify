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
export default function Dashboard({}){

    useEffect(() => {
    start()

    })


    const start = async () => {
        // Set up the player
        await TrackPlayer.setupPlayer();
    
        // Add a track to the queue
      
        console.log(TrackPlayer)
    }





return(

<View><Text>Music Player</Text></View>



);


}




const styles = StyleSheet.create({






})