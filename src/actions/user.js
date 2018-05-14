/*
 * @FileName       : user.js
 * @Version        : 1.0
 * @DateOfCreation : 05/11/2018
 * @Author         : $uˆˆ!t
 * @Dependencies   : N/A
 * @Description    : Constant defining.
 *
 * Copyright (c) 2018
 */

import * as types from './types';
import Api from '../lib/api';




export function getQuestion() {

    return (dispatch, getState) => {
        return Api.get('').then(resp => {
            dispatch(setQuestions(resp));
          }).catch( (ex) => {
            console.log(ex);
        });
    };
}


export function setQuestions({ results }) {
    return {
      type: types.QESTION_RESPONSE,
      data : results,
    };
}

