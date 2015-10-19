import {Observable} from 'rx';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  userId: '',
  userName: '',
  accounts: null,
});

function makeUpdateFn$(props$, response$$) {
  const updateWithProps$ = props$.first()
    .map(props => function updateWithProps(oldState) {
      return oldState.set('userId', props.userId);
    });

  const userResponse$ = response$$
    .filter(res$ => res$.request.url.match(
      /http:\/\/ophackathon-test\.apigee\.net\/users\/([\d|\w]+)$/
    ))
    .mergeAll()
    .map(res => res.body || JSON.parse(res.text));

  const accountsResponse$ = response$$
    .filter(res$ => res$.request.url.match(
      /http:\/\/ophackathon-test\.apigee\.net\/users\/([\d|\w]+)\/accounts$/
    ))
    .mergeAll()
    .map(res => res.body || JSON.parse(res.text));

  const updateWithResponse$ = Observable.zip(userResponse$, accountsResponse$,
    (user, accounts) => function updateWithResponse(oldState) {
      return oldState
        .set('userName', user.name)
        .set('accounts', accounts);
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
