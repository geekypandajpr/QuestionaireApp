/*
 * @FileName       : QuestionList.js
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
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { getQuestion } from '../actions/user';

import Question from '../components/Question';
const {
    View,Button,ListView
} = ReactNative;
import { AppStyle } from '../style';

export class QustionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionAnswers : {},
            time : 0
        };
        this.handleAnswers = this.handleAnswers.bind(this);
        this.updateResults = this.updateResults.bind(this);
    }

    ListViewItemSeparatorLine = () => {
        return (
            <View style={{ height: .5, width: "100%", backgroundColor: "#000"}}/>
        );
    }

    handleAnswers(question,flag){
        const { questionAnswers } = this.state;
        questionAnswers[question] = flag;
        this.setState({
            questionAnswers : questionAnswers
        })
    }

    updateResults(){
        clearInterval(this._interval);
        const { questionAnswers,time } = this.state;
        var correctAnswers = 0;
        for (var key in questionAnswers) {
            if(questionAnswers[key]) {
                correctAnswers += 1;
            }
        }

        Actions.resultPage({timeComplete:time,scrore : correctAnswers});
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <View style = {{flex:1,flexDirection:'column',backgroundColor:'#FFFF'}}>
                <View style = {{flex:1,flexDirection:'column',backgroundColor:'#ECEEFC',padding:10,borderRadius:8}}>
                    
                    <View style={{backgroundColor:'#ECEEFC',flex:0.9}}> 
                        <ListView
                            showsVerticalScrollIndicator={false}
                            dataSource={ds.cloneWithRows(this.props.questions)}
                            renderRow={(rowData,rowID) => <Question { ...rowData} handleDataChange={this.handleAnswers}/>}
                            renderSeparator= {this.ListViewItemSeparatorLine}
                            enableEmptySections={true}
                        />
                    </View>
                    <View style={{backgroundColor:'#ECEEFC',flex:0.1,marginTop:20}}>
                        <Button title="Done" color="#841584"  onPress={ this.updateResults }/>
                    </View>
                </View>
                
            </View>        
        )
    }

    componentWillMount(){
        const { dispatch } =  this.props;
        dispatch(getQuestion());

    }

    componentDidMount(){
        this._interval = setInterval(() => {
            const { time } = this.state;
            this.setState({
                time : (time+1)
            });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this._interval);
    }

}
function mapStateToProps(state) {
    const { questions } = state.question;
    return {
        questions : questions ? questions : []
    }
}

export default connect(mapStateToProps)(QustionList);