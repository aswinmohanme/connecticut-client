import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import { Text } from '@shoutem/ui';

import BarCodeReader from './components/barCodeReader';

export default class App extends Component {
    render() {
        return(
            <BarCodeReader />
        );
    }
}