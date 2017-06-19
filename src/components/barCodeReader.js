import React, { Component } from 'react';
import Expo, { BarCodeScanner, Permissions  } from 'expo';

import { View, Text } from '@shoutem/ui';

class BarCodeReader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: '',
            hasCameraPermission: null,
        };

        this.render = this.render.bind(this);
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status})
    }

    render(){
        const { hasCameraPermission } = this.state;
        if(hasCameraPermission === null){
            return <Text>Hey Ther</Text>;
        }else if(hasCameraPermission === false){
            return <Text> Oops No Camera! </Text>
        } else {
            return(
                <View style={{flex: 1}}>
                    <BarCodeScanner 
                        onBarCodeRead = { this._handleQrCode}
                        style={{flex: 1}}
                    />
                </View>
            );
        }
    }

    _handleQrCode(data){
        alert(JSON.stringify(data));
    }
}

export default BarCodeReader;