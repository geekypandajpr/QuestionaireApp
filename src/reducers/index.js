/*
* @FileName       : index.js
* @Version        : 1.0
* @DateOfCreation : 05/11/2018
* @Author         : $uˆˆ!t
* @Dependencies   : N/A
* @Description    : 
*
* Copyright (c) 2018
*/
import { combineReducers } from 'redux';
import * as userReducer from './user';

export default combineReducers(Object.assign(
    userReducer
));


 