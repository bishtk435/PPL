import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { ApiService } from '../core/api.service';

@Injectable()
export class PostEffects{
    loadPost$ = createEffect(() => this.action$.pipe(
        ofType('[Homepage] Load Post'),
        mergeMap(() => this.api.getWithoutParams('get-all-post')
            .pipe(
                map(post => ({ type: '[Homepage] Load Post Success', postsDetails: post['post']})),
                catchError(()=> EMPTY)
            )
        )
    ));
    constructor(
        private action$: Actions,
        private api: ApiService
    ){}
}
