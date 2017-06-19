import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import { Text } from '@shoutem/ui';

import BarCodeReader from './components/barCodeReader';
import BarCodeGenerate from './components/barCodeGenerate';

export default class App extends Component {
    render() {
        return(
            <BarCodeGenerate name={"Aswin"} phone={"8589931950"}/>
        );
    }
}