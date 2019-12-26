import './../actions/trainerTags';

export const trainerCommentUpdateLoading = (state = false, action) => {
    if (action.type === 'TRAINER_COMMENT_UPDATE_LOADING') {
        return action.isLoading
    }
    return state;
};

export const trainerCommentUpdateErrored = (state = false, action) => {
    if (action.type === 'TRAINER_COMMENT_UPDATE_ERRORED') {
        return action.hasErrored;
    }
    return state;
};

export const managerTrainerCommentUpdateReducer = (trainerCommentObject = [], action) => {
    switch (action.type) {
        case 'TRAINER_COMMENT_UPDATE_SUCCESS':
            return action.trainerComment;
        default:
            return trainerCommentObject;
    }
};