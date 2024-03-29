import {
  TOGGLE_DARKMODE,
  SET_FEATURE,
  ToggleDarkMode,
  SetFeatureMode,
} from 'state/actions';

export interface Feature {
  feature: string;
  icon: string;
}

export interface State {
  darkmode: boolean;
  currentFeature: Feature;
  features: Feature[];
}

const features: Feature[] = [
  { feature: 'Developer', icon: 'web' },
  { feature: 'Backpacker', icon: 'plane' },
  { feature: 'Beer enthusiast', icon: 'beer' },
  { feature: 'Comics reader', icon: 'comic' },
  { feature: 'Cheese addict', icon: 'dish' },
];

export const initialState: State = {
  darkmode: true,
  features,
  currentFeature: features[0],
};

const appReducer = (
  state: State = initialState,
  action: ToggleDarkMode | SetFeatureMode
): State => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return {
        ...state,
        darkmode: action.payload,
      };

    case SET_FEATURE:
      return {
        ...state,
        currentFeature: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
