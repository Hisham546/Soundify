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

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#1B1A1C'
        //backgroundColor:'white'

    },
    firstView: {
        width: deviceWidth,
        height: '40%',


    },
    secondView: {
        width: '100%',
        height: '50%',


    },
    loginImage: {
        width: '100',
       // height: '100'

    }

})
export default styles