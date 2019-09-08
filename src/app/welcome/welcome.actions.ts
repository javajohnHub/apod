import { Action } from '@ngrx/store';
import { Stats } from './stats.model';

export const SET_STATS = '[STATS] Set Stats';

export class SetStats implements Action {
  readonly type = SET_STATS;
  constructor(public payload: Stats){}
}


export type WelcomeActions = SetStats;