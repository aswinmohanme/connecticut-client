import React, { Component } from 'react';
import {Card, Text} from '@shoutem/ui';

const UserCard = ({ name, phone }) => {
    return(
        <Card>
            <Text>{name}</Text>
            <Text>{phone}</Text>
        </Card>
    );
}
export default UserCard;