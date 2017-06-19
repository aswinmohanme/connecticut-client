import React, { Component } from 'react';

import store from 'react-native-simple-store';
import { View, Text } from '@shoutem/ui';

import BarCodeGenerate from './components/barCodeGenerate';

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
        });
    }

    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <BarCodeGenerate 
                    number={this.state.number}
                />
            </View>
        );
    }
}