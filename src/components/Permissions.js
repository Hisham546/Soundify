
import React, { useEffect, useRef, useState } from "react";

import {
   PermissionsAndroid
}
    from "react-native";

export const checkPermission = async () => {
    console.log('permission called')
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
        } else {
            Alert.alert('Permission Denied!', 'You need to give storage permission to download the file');
            return false;
        }
    } catch (err) {
    }
}
