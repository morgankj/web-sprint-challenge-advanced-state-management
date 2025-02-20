import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL } from '../actions';

export const initialState = {
    allSmurfs: [],
    isLoading: false,
    error: ""
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                allSmurfs: [],
                isLoading: true,
                error: ""
            })
        case(FETCH_SUCCESS):
            return({
                ...state,
                allSmurfs: action.payload,
                isLoading: false,
                error: ""
            })
        case(FETCH_FAIL):
            return({
                ...state,
                allSmurfs: [ ...state.allSmurfs ],
                isLoading: false,
                error: action.payload
            })
        case(ADD_SMURF_SUCCESS):
            return({
                ...state,
                allSmurfs: [ ...state.allSmurfs, action.payload ],
                isLoading: false,
                error: ""
            })
        case(ADD_SMURF_FAIL):
            return({
                ...state,
                allSmurfs: [ ...state.allSmurfs ],
                isLoading: false,
                error: action.payload
            })
        default:
            return state;
    }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

// Task List:
// 1. Add the following state values into the initialState:
//   - an array of smurfs
//   - a boolean indicating if the app is loading
//   - a string indicating a possible error message

// 2. Add in the arguments needed to complete a standard reducer function.
// 3. Add in a reducer case to accommodate the start of a smurf fetch.
// 4. Add in a reducer case to accommodate the successful smurf api fetch.
// 5. Add in a reducer cases to accommodate the failed smurf api fetch.
// 6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
// 7. Add in a reducer case that adds in a value to the error message.