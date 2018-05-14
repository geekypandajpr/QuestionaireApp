/*
 * @FileName       : MainScreen.js
 * @Version        : 1.0
 * @DateOfCreation : 05/11/2018
 * @Author         : $uˆˆ!t
 * @Dependencies   : N/A
 * @Description    : Constant defining.
 *
 * Copyright (c) 2018
 */

import React, { Component } from 'react';
import ReactNative, { AppState } from 'react-native';
import { Actions } from 'react-native-router-flux';
const {
    View,Button
} = ReactNative;
import { AppStyle } from '../style';

export default class MainScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={AppStyle.splash.splashcontainer} >
                <Button title="Start Quiz" color="#841584"  onPress={ () => Actions.questionList() }/>
            </View>
        )
    }


}