import { createAction, props } from '@ngrx/store';

export const loadPost = createAction('[Homepage] Load Post');
export const loadPostSuccess = createAction('[Homepage] Load Post Success', props<{postsDetails: any}>());
