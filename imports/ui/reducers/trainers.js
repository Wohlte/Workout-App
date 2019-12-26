import './../actions/trainers.js';

export const trainersLoading = (state = false, action) => {
    if (action.type === 'TRAINERS_LOADING') {
        return action.isLoading
    }
    return state;
};

export const trainersErrored = (state = false, action) => {
    if (action.type === 'TRAINERS_ERRORED') {
        return action.hasErrored;
    }
    return state;
};

export const trainerInfoObjectId = (trainerId = "5d10010e9112ea2c77b0a989", action) => {
    if (action.type === 'UPDATE_OBJECTID') {
        return action.trainerId;
    }
    return trainerId;
};

export const managerTrainersReducer = (trainersList = [], action) => {
    switch (action.type) {
        case 'ADD_TRAINER_SUCCESS':
            return [trainersList, action.trainer];
        case 'TRAINERS_FETCH_SUCCESS':
            return action.trainers.data;
        case 'ADD_TRAINER':
            return [...trainersList, action.payload];
        default:
            return trainersList;
    }
};

export const trainerSearchNameReducer = (trainerSearchName = "", action)=> {
    if (action.type === 'TRAINER_SEARCH_NAME') {
        return action.trainerSearchName;
    }
    return trainerSearchName;
};
