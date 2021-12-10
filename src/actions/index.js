import axios from 'axios';
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const fetchSmurfs = () => {
    return(dispatch) => {
        dispatch(fetchStart);
        axios.get("http://localhost:3333/smurfs")
            .then(res => {
                dispatch(fetchSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchFail(err));
            })
    }
}

export const fetchStart = () => {
    return({ type: FETCH_START });
}

export const fetchSuccess = (allSmurfs) => {
    return({ type: FETCH_SUCCESS, payload: allSmurfs });
}

export const fetchFail = (error) => {
    return({ type: FETCH_FAIL, payload: error });
}

export const addSmurfSuccess = (newSmurf) => {
    return({ type: ADD_SMURF_SUCCESS, payload: newSmurf });
}

export const setError = (error) => {
    return({ type: ADD_SMURF_FAIL, payload: error });
}




export const errorMessage = () => {}

// export const setError = (errorMessage) => {
//     return({type: ADD_SMURF_FAIL, payload: { error: errorMessage }})
// }

// export const addSmurf = ({ name, nickname, position, description }) => {
//     return({type: ADD_SMURF_SUCCESS, payload: { id: Date().getUTCMilliseconds(), name: name, position: position, nickname: nickname, description: description }})
// }


// Task List:
// 1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
// 2. Add a standard action that allows us to add new smurf (including the name, nickname, position, description)
// 3. Add a standard action that allows us to set the value of the error message slice of state.