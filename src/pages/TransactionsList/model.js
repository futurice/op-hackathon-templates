import {Observable} from 'rx';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  accountId: '',
  transactions: null,
  owners: [],
});

function makeUpdateFn$(props$, response$$) {
  const updateWithProps$ = props$.first()
    .map(props => function updateWithProps(oldState) {
      return oldState.set('accountId', props.accountId);
    });

  const ownersResponse$ = response$$
    .filter(res$ => res$.request.url.match(
      /http:\/\/ophackathon-test\.apigee\.net\/accounts\/([\d|\w]+)\/owners$/
    ))
    .mergeAll()
    .map(res => res.body || JSON.parse(res.text));

  const transactionsResponse$ = response$$
    .filter(res$ => res$.request.url.match(
      /http:\/\/ophackathon-test\.apigee\.net\/accounts\/([\d|\w]+)\/transactions$/
    ))
    .mergeAll()
    .map(res => res.body || JSON.parse(res.text));

  const updateWithResponse$ = Observable.zip(ownersResponse$, transactionsResponse$,
    (owners, transactions) => function updateWithResponse(oldState) {
      return oldState
        .set('owners', owners)
        .set('transactions', transactions);
    });

  return Observable.merge(updateWithProps$, updateWithResponse$);
}

function model(props$, response$$) {
  const updateFn$ = makeUpdateFn$(props$, response$$);
  const state$ = updateFn$
    .scan((state, updateFn) => updateFn(state), initialState)
    .map(state => state.toJS())
    .shareReplay(1);
  return state$;
}

export default model;
