import * as actions from '../actions/index';
const initialState = {
    count: 0,
};

export default function reducers(state = initialState, action) {
    console.log(actions);
    const { type, data } = action;
    switch(type) {
        case actions.ADD:
            return { ...state, count: data };
        default:
            return state;
    }
}