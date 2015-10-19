import {Observable} from 'rx';

export default function links(actions) {
  return Observable.merge(
    actions.select$.map(accountId => `/transactions/${accountId}`),
    actions.back$.map(() => '/')
  );
}
