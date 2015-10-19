import {Observable} from 'rx';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  accountId: '',
  name: '',
  iban: '',
  amount: 0,
  description: '',
});

function makeUpdateFn$(props$, actions) {
  const updateWithProps$ = props$.first()
    .map(props => function updateWithProps(oldState) {
      return oldState.set('accountId', props.accountId);
    });

  const updateWithNewName$ = actions.updateName$
    .map(name => oldState => oldState.set('name', name));
  const updateWithNewIBAN$ = actions.updateIBAN$
    .map(iban => oldState => oldState.set('iban', iban));
  const updateWithNewAmount$ = actions.updateAmount$
    .map(amount => oldState => oldState.set('amount', amount));
  const updateWithNewDescription$ = actions.updateDescription$
    .map(description => oldState => oldState.set('description', description));

  return Observable.merge(
    updateWithProps$,
    updateWithNewName$,
    updateWithNewIBAN$,
    updateWithNewAmount$,
    updateWithNewDescription$
  );
}

function model(props$, actions) {
  const updateFn$ = makeUpdateFn$(props$, actions);
  const state$ = updateFn$
    .scan((state, updateFn) => updateFn(state), initialState)
    .map(state => state.toJS())
    .shareReplay(1);
  return state$;
}

export default model;
