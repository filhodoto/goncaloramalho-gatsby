// preloadedState will be passed in by the plugin
// Note: this is a gatsby-plugin-react-redux thing
import { createStore } from 'redux';
import appReducer from 'state/reducer';

export default (preloadedState: any): any =>
  createStore(appReducer, preloadedState);
