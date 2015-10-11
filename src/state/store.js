import {createStore} from 'redux';
import quoteReducer from './quote/quoteReducer';

export const store = createStore(quoteReducer);
