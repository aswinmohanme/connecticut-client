import React, { Component } from 'react';
import {Card, Text} from '@shoutem/ui';

const UserCard = ({ data }) => {
    return(
        <Card>
            <Text>{data}</Text>
        </Card>
    );
}
export default UserCard;