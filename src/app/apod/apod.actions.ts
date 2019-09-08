import { Action } from '@ngrx/store';
import { Apod } from './apod.model';

export const START_FETCHING = '[APOD] Start Fetching';
export const SET_APOD = '[APOD] Set Apod';

export class StartFetching implements Action {
  readonly type = START_FETCHING;
}

export class SetApod implements Action {
  readonly type = SET_APOD;

  constructor(public payload: Apod){}
}

export type ApodActions = SetApod;