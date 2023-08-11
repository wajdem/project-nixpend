import * as actionTypes from '../actions/type'

export const todosReducers = (state = [], action) => {

    switch (action.type) {
        case actionTypes.AddNew_Todo:
            return[action.payload, ...state]

        default:
            return state;
    }

}