import React, { Component } from 'react';
import Expo from 'expo';

import UserCard from '../components/userCard';
import {View} from '@shoutem/ui';

class UserCardScreen extends Component {
    render() {
        const { data } = this.props.navigation.state.params;
        return (
            <View style={{marginTop: Expo.Constants.statusBarHeight, flex:1, alignItems: 'center', justifyContent: 'center', 
                backgroundColor: '#34495e', elevation: 2 }}>
                <UserCard data={data} />
            </View>
        );
    }
}

export default UserCardScreen;