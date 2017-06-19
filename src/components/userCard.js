import React, { Component } from 'react';
import {View, Text} from '@shoutem/ui';

const UserCard = ({ data }) => {
    return(
        <View>
            <Text>{data}</Text>
        </View>
    );
}
export default UserCard;