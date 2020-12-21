// preloadedState will be passed in by the plugin
// Note: this is a gatsby-plugin-react-redux thing
import { createStore, StoreCreator } from 'redux';
import appReducer, { State } from 'state/reducer';

export default (preloadedState: State): StoreCreator =>
  createStore(appReducer, preloadedState);
