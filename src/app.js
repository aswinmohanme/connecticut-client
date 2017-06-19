import React, { Component } from 'react';

import store from 'react-native-simple-store';
import { View, Text, Title, Button, } from '@shoutem/ui';

import BarCodeGenerate from './components/barCodeGenerate';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: '',
        };

        this.render = this.render.bind(this);
    }

   async componentWillMount(){
        user = await store.get('user');

        user = user || { number: '8589931950' };

        this.setState({
            number: user.number ,
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <BarCodeGenerate 
                    number={this.state.number}
                />
                <View styleName="fill-parent vertical v-end">
                    <Button 
                        style={{height: 56}}
                        onPress={() => navigate('UserCardScreen', {data: '8589931950'})}>
                        <Icon style={{fontSize: 40}} name="camera-iris" />
                    </Button>
                </View>
            </View>
        );
    }
}