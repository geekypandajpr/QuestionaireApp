/*
 * @FileName       : AppContainer.js
 * @Version        : 1.0
 * @DateOfCreation : 05/11/2018
 * @Author         : $uˆˆ!t
 * @Dependencies   : N/A
 * @Description    : Constant defining.
 *
 * Copyright (c) 2018
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router } from 'react-native-router-flux';
import { ActionCreators } from '../actions/';
import { Scenes } from '../scenes';

const RouterWithRedux = connect()(Router);

const AppContainer = (props) => (
    <RouterWithRedux scenes={ Scenes } {...props}/>
);

function mapDispatchToPros(dispatch){
    return bindActionCreators(ActionCreators,dispatch);
}
    
export default connect( () => { return {} },mapDispatchToPros )(AppContainer);