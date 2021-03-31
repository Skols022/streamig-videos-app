/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash';
import * as actionTypes from '../actions/types';

// Array-based approach
// const streamReducer = (state = [], action) => {
//     switch (action.type) {
//         case actionTypes.EDIT_STREAM:
//             return state.map(stream => {
//                 if (stream.id === action.payload.id) {
//                     return action.payload;
//                 } else {
//                     return stream;
//                 }
//             });
//         default:
//             return state;
//     };
// };

// Object-based approach (much more simplier)
export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case actionTypes.FETCH_STREAM:
            return { ...state, [ action.payload.id ]: action.payload };
        case actionTypes.CREATE_STREAM:
            return { ...state, [ action.payload.id ]: action.payload };
        case actionTypes.EDIT_STREAM:
            return { ...state, [ action.payload.id ]: action.payload };
        case actionTypes.DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}