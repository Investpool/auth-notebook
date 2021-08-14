import notesReducers from "../Reducers/notesReducers";
import {createStore} from 'redux';

export const store = createStore (notesReducers)