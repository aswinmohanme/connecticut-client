import React, { Component } from 'react';

import store from 'react-native-simple-store';
import { View, Text, Title, Button, } from '@shoutem/ui';

import BarCodeGenerate from './components/barCodeGenerate';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: null,
        };

        this.render = this.render.bind(this);
    }

    async componentWillMount(){
        user = await store.get('user');

        if (user === null){

        }

        this.setState({
            number: user.number,
            name: user.name,
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <BarCodeGenerate 
                    number={this.state.number}
                    name={this.state.name}
                />
                <View styleName="fill-parent vertical v-end">
                    <Button 
                        style={{height: 56}}
                        onPress={() => navigate('BarCodeScan')}>
                        <Icon style={{fontSize: 40}} name="camera-iris" />
                    </Button>
                </View>
            </View>
        );
    }
}