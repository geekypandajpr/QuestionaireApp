/*
* @FileName       : createReducer.js
* @Version        : 1.0
* @DateOfCreation : 05/11/2018
* @Author         : $uˆˆ!t
* @Dependencies   : N/A
* @Description    : 
*
* Copyright (c) 2018
*/

export default function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}
  