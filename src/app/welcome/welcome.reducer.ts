import { WelcomeActions, SET_STATS } from "./welcome.actions";


export interface State {
    near_earth_object_count: number;
    close_approach_count: number;
    last_updated: string;
    nasa_jpl_url: string;
    source: string;
}

const initialState: State = {
    near_earth_object_count: 0,
    close_approach_count: 0,
    last_updated: null,
    nasa_jpl_url: "",
    source: ""
};

export function statsReducer(state = initialState, action: WelcomeActions) {
  switch (action.type) {
    case SET_STATS:
      return {
        near_earth_object_count: action.payload.near_earth_object_count,
        close_approach_count: action.payload.close_approach_count,
        last_updated: action.payload.last_updated,
        nasa_jpl_url: action.payload.nasa_jpl_url,
        source: action.payload.source
      };
    default:
      return state;
  }
}

export const getStats = (state: State) => state['stats'];
