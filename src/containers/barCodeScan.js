import React, { Component } from 'react';
import Expo from 'expo';

import BarCodeReader from '../components/barCodeReader';
import {View} from '@shoutem/ui';

class BarCodeScan extends Component {
    render() {
        return (
            <View style={{marginTop: Expo.Constants.statusBarHeight, flex:1}}>
                <BarCodeReader />
            </View>
        );
    }
}

export default BarCodeScan;