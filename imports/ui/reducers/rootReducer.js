import {combineReducers} from "redux";
import {gymsLoading, gymsErrored, manageGymsReducer, gymSearchNameReducer} from "./gyms";
import {trainersLoading, trainersErrored, managerTrainersReducer, trainerInfoObjectId, trainerSearchNameReducer} from "./trainers"
import {trainersTagsLoading,trainersTagsErrored,managerTrainersTagsReducer} from"./trainerTags"
import {gymsTagsLoading, gymsTagsErrored, managerGymsTagsReducer} from "./gymTags"
import {trainerCommentUpdateLoading, trainerCommentUpdateErrored, managerTrainerCommentUpdateReducer} from "./trainerCommentUpdate"
import {manageSortingTagsReducer} from "./sortingTags";

const rootReducer = combineReducers({

    gymsReducer: manageGymsReducer,
    gymsLoading: gymsLoading,
    gymsErrored: gymsErrored,
    manageGyms: manageGymsReducer,
    gymSearchName: gymSearchNameReducer,

    trainersReducer: managerTrainersReducer,
    trainersLoading: trainersLoading,
    trainersErrored: trainersErrored,
    trainerId: trainerInfoObjectId,
    trainerSearchName: trainerSearchNameReducer,

    manageSortingTags: manageSortingTagsReducer,

    trainersTagsLoading: trainersTagsLoading,
    trainersTagsErrored: trainersTagsErrored,
    trainersTagsReducer: managerTrainersTagsReducer,

    gymsTagsLoading: gymsTagsLoading,
    gymsTagsErrored: gymsTagsErrored,
    gymsTagsReducer: managerGymsTagsReducer,

    trainerCommentUpdateLoading: trainerCommentUpdateLoading,
    trainerCommentUpdateErrored: trainerCommentUpdateErrored,
    trainerCommentUpdateReducer: managerTrainerCommentUpdateReducer,

});

export default rootReducer;
