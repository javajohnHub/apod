import {
  ApodActions,
  SET_APOD
} from "./apod.actions";
import { Apod } from "./apod.model";
import * as fromRoot from "../app.reducer";
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ApodState {

}

export interface State extends fromRoot.State {
    title: string;
    explanation: string;
    date: string;
    copyright: string;
    hdurl: string;
    media_type: string;
}

const initialState: ApodState = {
    title: undefined,
    explanation: undefined,
    date: undefined,
    copyright: undefined,
    hdurl: undefined,
    media_type: undefined
};

export function apodReducer(state = initialState, action: ApodActions) {
  switch (action.type) {
    case SET_APOD:
      return action.payload;
    default:
      return state;
  }
}

export const getApodState = createFeatureSelector<ApodState>('apod');

export const getApod = createSelector(getApodState, (state: ApodState) => state);
