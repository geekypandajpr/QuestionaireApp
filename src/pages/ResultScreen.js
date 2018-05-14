/*
 * @FileName       : ResultScreen.js
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
import  moment from 'moment';
import  momentDurationFormatSetup from 'moment-duration-format';
const {
    View,Text,Button
} = ReactNative;
import { AppStyle } from '../style';

export default class ResultScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style = {{flex:1,flexDirection:'column',backgroundColor:'#FFFF',alignItems:'center'}}>
                <View style = {{flex:0.4,flexDirection:'column',backgroundColor:'#FFFF',alignItems:'center'}}>
                    <Text style = {{fontWeight:'bold',fontSize:20,marginTop:20}}>Test Result</Text>
                    <Text style = {{fontWeight:'bold',fontSize:20,marginTop:20}}>{this.props.scrore}/10 </Text>
                </View> 
                <View style = {{flex:0.4,flexDirection:'column',backgroundColor:'#FFFF',alignItems:'center'}}>  
                    <Text style = {{fontWeight:'bold',fontSize:20}}>Time Taken</Text>
                    <Text style = {{fontWeight:'bold',fontSize:20,marginTop:20}}>{moment.duration(this.props.timeCompletes, "seconds").format("h:mm:ss")}</Text>
                </View>
                <Button title="Play Again" color="#841584"  onPress={ () => Actions.questionList() } />
            </View>
        )
    }


}