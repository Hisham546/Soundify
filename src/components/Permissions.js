
import React, { useEffect, useRef, useState } from "react";

import {
    View,
    Image,
    Text, Button, PermissionsAndroid,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";

export const checkPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getSongs(); //-- If permissions granted it will trigger  actualDownload()
        } else {
            Alert.alert('Permission Denied!', 'You need to give storage permission to download the file');
        }
    } catch (err) {
    }
}
