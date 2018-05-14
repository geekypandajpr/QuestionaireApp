/*
* @FileName       : user.js
* @Version        : 1.0
* @DateOfCreation : 05/11/2018
* @Author         : $uˆˆ!t
* @Dependencies   : N/A
* @Description    : 
*
* Copyright (c) 2018
*/

import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const question = createReducer({}, {
    [types.QESTION_RESPONSE](state, action) {
        return  {
            questions: action.data
        };
    }
});