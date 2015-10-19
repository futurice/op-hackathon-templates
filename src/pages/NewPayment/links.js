import {Observable} from 'rx';

export default function link(actions, state$, response$$) {
  const response$ = response$$
    .filter(res$ =>
      res$.request.url === 'http://ophackathon-test.apigee.net/transactions' &&
      res$.request.method === 'POST'
    )
    .mergeAll();

  return Observable.merge(actions.back$, response$)
    .withLatestFrom(state$,
      (action, state) => `/transactions/${state.accountId}`
    );
}
