import styles from "./styles"
import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";


export default function SignUp({ navigation }) {



    return (

        <View style={styles.mainContainer}>
            <View style={styles.firstView}>
            <Image
        style={styles.loginImage}
        resizeMode='stretch'
        source={require('../../assets/images/login.png')}
      />

            </View>

            <View style={styles.secondView}></View>
        </View>


    )
}