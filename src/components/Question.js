

import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-checkbox';

import CustomCheckBox from '../components/CustomCheckBox';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

const {
    View,Text,Button
} = ReactNative;
import { AppStyle } from '../style';

export default class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionAnswersState : {},
            multiSelectAnswers : []
        };
        this.onSelect = this.onSelect.bind(this);
        this.handleMultiSelect = this.handleMultiSelect.bind(this);
    }


    onSelect(index, value){
        const {correct_answer} = this.props;
        const flag = value.toString().toUpperCase() == correct_answer.toString().toUpperCase();
        this.props.handleDataChange(this.props.question,flag);
    }

    handleMultiSelect(value,checkedFlag){
        const {multiSelectAnswers} = this.state;
        var index = multiSelectAnswers.indexOf(value);
        if (index !== -1 && !checkedFlag)  {
            multiSelectAnswers.splice(index, 1);
        } else {
            multiSelectAnswers.push(value);
        }

        if(value == 1 && checkedFlag && multiSelectAnswers.length == 1) {
            this.props.handleDataChange(this.props.question,true);
        } else {
            this.props.handleDataChange(this.props.question,false);
        } 

        this.setState({
            multiSelectAnswers : multiSelectAnswers
        });
    }


    render() {
        const question = this.props;
        return (
            <View style = {{flex:1,flexDirection:'column',padding:5,backgroundColor:'#FFFF',padding:15}}>
                <Text style = {AppStyle.rowViewContainer}>{question.question}</Text>
                {   
                    question.type === "multiple" && 
                    question.incorrect_answers.map((item,index) => {
                        return  <CustomCheckBox handleMultiSelect={this.handleMultiSelect} data={{index:0,title:item}}/>
                    }) 
                }
                { question.type === "multiple" && <CustomCheckBox  handleMultiSelect={this.handleMultiSelect} data={{index:1,title:question.correct_answer}}/>}

                {question.type !== "multiple" && 
                    <RadioGroup onSelect = {(index, value) => this.onSelect(index, value)}>
                        {
                            question.incorrect_answers.map((item,index) => {
                                return  <RadioButton value={item} ><Text>{item}</Text></RadioButton>
                            })
                        }
                        <RadioButton value={question.correct_answer} ><Text>{question.correct_answer}</Text></RadioButton>
                    </RadioGroup>
                }
            </View>


        )
    }
}
  