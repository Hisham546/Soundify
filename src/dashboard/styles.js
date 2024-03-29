
import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";
import { Dimensions, Platform, StatusBar } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({

    firstView: {
        width: wp('100'),
        height: hp('8'),
        flexDirection:'row',
       // justifyContent:"space-evenly",
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'gray'
   



    },

    mainContainer: {
        flex: 1,
        backgroundColor: 'black'

    },
    heading: {
        color: 'white',
        fontSize: deviceHeight * 0.02,
        fontFamily: 'Manrope-Bold',
        marginLeft: wp('2')
    },

    secondView: {
        width: deviceWidth * 100,
        height: deviceHeight * 0.87,


    },
    recentCardView: {
        width: wp('40'),
        height: hp('17'),
        marginLeft: wp('1'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'

    },
    sampleLogo: {
        width: wp('20'),
        height: hp('10'),

    },



});

export default styles