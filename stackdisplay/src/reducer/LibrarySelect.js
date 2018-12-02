import { select_library } from '../actions/types'

const initialState =  null;

const selectLibrary = (state, action) => {
    return action.payload
};

export default (state = initialState, action) => {
    switch(action.type) {
        case select_library : return selectLibrary(state, action)
        default :
            return state;
    }
};
