import { createReducer, on } from '@ngrx/store';
import { loadPostSuccess } from './post.actions';

export const initialState = [];

const _postReducer = createReducer(
    initialState,
    on(loadPostSuccess, (state, { postsDetails }) => ({ postsDetails })),
);

export function postReducer(state, action): any{
    return _postReducer(state, action);
}
