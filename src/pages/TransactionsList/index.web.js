import {requests} from './http';
import intent from './intent.web';
import model from './model';
import view from './view.web';

function TransactionsList(sources) {
  const request$ = requests(sources.props$);
  const actions = intent(sources.DOM);
  const state$ = model(sources.props$, sources.HTTP);
  const vtree$ = view(state$);
  const link$ = actions.selectNewPayment$.withLatestFrom(sources.props$,
    (action, props) => `/transactions/${props.accountId}/new`
  );

  return {
    DOM: vtree$,
    HTTP: request$,
    link: link$,
  };
}

export default TransactionsList;
