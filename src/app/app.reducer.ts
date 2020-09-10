import { createReducer, on } from '@ngrx/store';

import { loggedIn, loggedOut } from './app.actions';

export const isLoogedIn = false;

// tslint:disable-next-line: variable-name
const _loggedReducer = createReducer(
    isLoogedIn,
    on(loggedIn, state => state = true),
    on(loggedOut, state => state = false),
);

export function loggedReducer(state, action): any{
    return _loggedReducer(state, action);
}
