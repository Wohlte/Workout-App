import axios from 'axios';

/*
 *
 * LOAD GYMS
 *
 */

export const gymsErrored = (bool) => {
    return {
        type: 'GYMS_ERRORED',
        hasErrored: bool
    };
};

export const isGymsLoading = (bool) => {
    return {
        type: 'GYMS_LOADING',
        isLoading: bool
    };
};

export const gymsSuccess = (gyms) => {
    return {
        type: 'GYMS_FETCH_SUCCESS',
        gyms: gyms
    };
};

export const gymsFetchData = (url) => {
    return (dispatch) => {
        dispatch(isGymsLoading(true));

        axios.get(url)
            .then((response) => {
                if (!response.data) {
                    throw Error(response.statusText);
                }
                dispatch(isGymsLoading(false));
                dispatch(gymsSuccess(response.data));
                return response.data;
            })
            .catch((err) => {
                console.log("There is an error occurring in fetch gyms action");
                console.log(err);
                dispatch(gymsErrored(true))
            });
    };
};

/*
 *
 * ADD GYM
 *
 */

export const addGymSuccess = gym => {
    return {
        type: 'ADD_GYM',
        gym: gym
    };
};

export const addGymStarted = () => {
    return {
        type: 'ADD_GYM_STARTED'
    };
};

export const addGymFailure = error => {
    return {
        type: 'ADD_GYM_FAILURE',
        payload: error
    };
};

export const addGym = (gym) => {
    return dispatch => {
        dispatch(addGymStarted());

        axios
            .post("http://localhost:9000/gyms", {
                gym: gym
            })
            .then(res => {
                dispatch(addGymSuccess(gym));
            })
            .catch(err => {
                console.log("There is an error occurring in add gym");
                console.log(err);
                dispatch(addGymFailure(err.message));
            });
    };
};