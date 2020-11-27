import { LightningElement, api } from 'lwc';
import { createStore, combineReducers } from 'c/lwcRedux';
import reducers from 'c/todoAppReducer';

export default class App extends LightningElement {
    @api
    get store() {
        return this._store;
    }
    initialize() {
        const combineReducersInstance = combineReducers(reducers);
        this._store = createStore(combineReducersInstance);
    }
}
