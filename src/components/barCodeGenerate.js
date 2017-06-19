
import React, { Component } from 'react';

import QRCode from 'react-native-qrcode';
import { View } from '@shoutem/ui';

const BarCodeGenerate = ({ name, phone }) => {
    return(
        <View style={{flex: 1}}>
            <QRCode 
                value={phone}
                size={120}
            />
        </View>
    );
}
export default BarCodeGenerate;