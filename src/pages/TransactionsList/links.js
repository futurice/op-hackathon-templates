import {Observable} from 'rx';

export default function links(actions, state$) {
  return Observable.merge(
    actions.back$.withLatestFrom(state$,
      (action, state) => `/users/${state.owners[0].id}`
    ),
    actions.selectNewPayment$.withLatestFrom(state$,
      (action, state) => `/transactions/${state.accountId}/new`
    )
  );
}
