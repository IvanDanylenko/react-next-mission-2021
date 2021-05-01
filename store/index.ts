// create a makeStore function
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { reducer, RootState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const makeStore: MakeStore<RootState> = () => createStore(reducer, composeWithDevTools());

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore);
