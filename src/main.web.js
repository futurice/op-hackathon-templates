import Cycle from '@cycle/core';
import {Observable} from 'rx';
import {makeDOMDriver} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';
import {makeHistoryDriver} from 'cycle-history';
import switchPath from 'switch-path';
import styles from './styles/index.web';
import UsersList from './pages/UsersList/index.web';
import UserAccountsList from './pages/UserAccountsList/index.web';
import TransactionsList from './pages/TransactionsList/index.web';
import NewPayment from './pages/NewPayment/index.web';
import API_KEY from './apikey';

function AccountsListForUser(userId) {
  const props$ = Observable.just({userId});
  return (sources) => UserAccountsList({...sources, props$});
}

function TransactionsListForAccount(accountId) {
  const props$ = Observable.just({accountId});
  return (sources) => TransactionsList({...sources, props$});
}

function NewPaymentForAccount(accountId) {
  const props$ = Observable.just({accountId});
  return (sources) => NewPayment({...sources, props$});
}

function augmentRequestWithAPIKey(request) {
  return {...request,
    query: {...request.query, apikey: API_KEY},
  };
}

function Main(sources) {
  const sinks$ = sources.History.map(location => {
    const pathAndValue = switchPath(location.pathname, {
      '/': UsersList,
      '/users/:id': id => AccountsListForUser(id),
      '/transactions/:id': id => TransactionsListForAccount(id),
      '/transactions/:id/new': id => NewPaymentForAccount(id),
    });
    const component = pathAndValue.value;
    return component(sources);
  }).shareReplay(1);

  return {
    DOM: sinks$.flatMapLatest(s => s.DOM),
    HTTP: sinks$.flatMapLatest(s => s.HTTP).map(augmentRequestWithAPIKey),
    History: sinks$.flatMapLatest(s => s.link),
  };
}

const drivers = {
  DOM: makeDOMDriver('#main-container'),
  HTTP: makeHTTPDriver(),
  History: makeHistoryDriver({hash: true}),
};

Cycle.run(Main, drivers);
styles.inject();
