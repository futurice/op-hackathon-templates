import {requests} from './http';
import intent from './intent.web';
import model from './model';
import view from './view.web';

function UsersList(sources) {
  const request$ = requests();
  const actions = intent(sources.DOM);
  const state$ = model(sources.HTTP);
  const vtree$ = view(state$);
  const link$ = actions.select$.map(userId => `/users/${userId}`);

  return {
    DOM: vtree$,
    HTTP: request$,
    link: link$,
  };
}

export default UsersList;
