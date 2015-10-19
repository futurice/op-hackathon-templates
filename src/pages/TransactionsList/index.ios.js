import {requests} from './http';
import links from './links';
import intent from './intent.ios';
import model from './model';
import view from './view.ios';

function TransactionsList(sources) {
  const request$ = requests(sources.props$);
  const actions = intent(sources.RN);
  const state$ = model(sources.props$, sources.HTTP);
  const vtree$ = view(state$);
  const link$ = links(actions, state$);

  return {
    RN: vtree$,
    HTTP: request$,
    link: link$,
  };
}

export default TransactionsList;
