

import React, { Component } from 'react';
import ReactNative from 'react-native';
import CheckBox from 'react-native-checkbox';

const {
    View,Text,Button
} = ReactNative;
import { AppStyle } from '../style';

export default class CustomCheckBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked : false
        };
        this.onQuestionAnswered = this.onQuestionAnswered.bind(this);
    }

    onQuestionAnswered(checked){
        this.setState({
            checked : !checked
        });

        this.props.handleMultiSelect(this.props.data.index,!checked);
    }


    render() {
        const question = this.props;
        return (
            <View>
                <CheckBox checked={this.state.checked} onChange={this.onQuestionAnswered} label={this.props.data.title} style={{padding:10}}/>
            </View>
        )
    }
}
  