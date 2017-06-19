import React, { Component } from 'react';

import { View, Text, Button, Icon} from '@shoutem/ui';
import { TextInput } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            number: '',
        };

        this.render = this.render.bind(this);
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
                <Button onPress={() => alert(this.state.number)}><Icon name="pin"/></Button>
            </View>
        );
    }
}