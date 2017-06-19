
import React, { Component } from 'react';

import QRCode from 'react-native-qrcode';
import { View } from '@shoutem/ui';

const BarCodeGenerate = ({ name, number }) => {
    return(
        <QRCode 
            value={name + '~' + number}
            size={160}
        />
    );
}
export default BarCodeGenerate;