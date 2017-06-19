import React, { Component } from 'react';

import { View, Text, Button, Icon} from '@shoutem/ui';
import { TextInput } from 'react-native';

import store from 'react-native-simple-store';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            number: '',
        };

        this.render = this.render.bind(this);
    }

    _handleUserData() {
        store
            .save('user', {
                name: this.state.name,
                number: this.state.number
            })
            .catch(err => alert(err.message));
    }

    render() {
        return(
            <View style={{flex: 1, width: '80%', alignSelf: 'center'}}>
                <Text>Name</Text>
                <TextInput 
                    onChangeText = {(text) => this.setState({name: text})}
                    value={this.state.name}
                />
                <Text>Phone Number</Text>
                <TextInput 
                    onChangeText = {(text) => this.setState({number: text})} 
                    value={this.state.number}
                />
                <Button onPress={this._handleUserData.bind(this)}><Icon name="pin"/></Button>
            </View>
        );
    }
}