export const ADD = 'add';

export function add() {
    return (dispatch, getState) => {
        const { count } = getState();
        dispatch({
            type: ADD,
            data: count + 1,
        });
    };
};

export function decrease() {
    return (dispatch, getState) => {
        const { count } = getState();
        dispatch({
            type: ADD,
            data: count - 1,
        });
    };
}

export function increase() {
    return (dispatch, getState) => {
        const { count } = getState();
        dispatch({
            type: ADD,
            data: count + 1,
        });
    };
}