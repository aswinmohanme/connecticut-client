import React, { Component } from 'react';
import Expo from 'expo';
import {ToastAndroid} from 'react-native';
import {create} from 'apisauce';
import store from 'react-native-simple-store';

import UserCard from '../components/userCard';
import {View, Button, Title, Text} from '@shoutem/ui';
import Icon from 'react-native-vector-icons/FontAwesome';

const api = create({
    baseURL: 'http://127.0.0.1:8000'
});

class UserCardScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_data: null,
        };
        
        this.render = this.render.bind(this);
    }

    componentWillMount() {
        const {data} = this.props.navigation.state.params;

        alert(data);
        api
            .get('/get/id?' + data)
            .then(resp => this.setState({user_data: resp.data}));
    }

    render() {
        const {user_data} = this.state;

        if(user_data === null)
            return (
                <View><Text>Please wait while we load the Api</Text></View>
            );
        else
            return (
                <View style={{marginTop: Expo.Constants.statusBarHeight, flex:1, alignItems: 'center', justifyContent: 'center', 
                    backgroundColor: '#34495e', elevation: 2 }}>
                    <UserCard 
                        data={user_data}
                    />
                    <View styleName="fill-parent vertical v-end">
                        <Button 
                            style={{height: 56}}
                            onPress={this._saveData.bind(this)}>
                            <Icon style={{fontSize: 20}} name="life-saver" />
                            <Title styleName="md-gutter">Save</Title>
                        </Button>
                    </View>
                </View>
            );
    }

    async _saveData() {
        const prev_data = await store.get('friends');
        user_data_str = JSON.stringify(this.state.user_data)

        if (prev_data === null){
            await store.save('friends', [user_data_str]);
            ToastAndroid.showWithGravity('Saved !!', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
        else {
            for(i=0; i < prev_data.length; ++i){
                p = JSON.parse(prev_data[i])
                if ( p.number === this.state.user_data.number){
                    ToastAndroid.showWithGravity('Already Saved !!', ToastAndroid.LONG, ToastAndroid.BOTTOM);
                    return;
                }
            }

            await store
                .push('friends', user_data_str)
            ToastAndroid.showWithGravity('Saved !!', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }

    }
}

export default UserCardScreen;