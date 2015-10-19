import intent from './intent.android';
import {requests} from './http';
import links from './links';
import model from './model';
import view from './view.android';

function UserAccountsList(sources) {
  const request$ = requests(sources.props$);
  const actions = intent(sources.RN);
  const state$ = model(sources.props$, sources.HTTP);
  const vtree$ = view(state$);
  const link$ = links(actions);

  return {
    RN: vtree$,
    HTTP: request$,
    link: link$,
  };
}

export default UserAccountsList;
