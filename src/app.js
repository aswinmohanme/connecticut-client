import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import { Text } from '@shoutem/ui';

import BarCodeReader from './components/barCodeReader';
import UserCard from './components/userCard';

export default class App extends Component {
    render() {
        return(
            <UserCard name={"Aswin"} phone={"8589931950"}/>
        );
    }
}