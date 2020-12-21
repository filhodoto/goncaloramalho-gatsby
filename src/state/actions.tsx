import { Feature } from 'state/reducer';
export const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';
export const SET_FEATURE = 'SET_FEATURE';

export interface ToggleDarkMode {
  type: 'TOGGLE_DARKMODE';
  payload: boolean;
}

export interface SetFeatureMode {
  type: 'SET_FEATURE';
  payload: Feature;
}

export const toggleTheme = (payload: boolean): ToggleDarkMode => ({
  type: TOGGLE_DARKMODE,
  payload: payload,
});

export const setFeature = (feature: Feature): SetFeatureMode => ({
  type: SET_FEATURE,
  payload: feature,
});
