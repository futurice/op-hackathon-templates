import {requests} from './http';
import intent from './intent.ios';
import model from './model';
import view from './view.ios';

function UsersList(sources) {
  const request$ = requests();
  const actions = intent(sources.RN);
  const state$ = model(sources.HTTP);
  const vtree$ = view(state$);
  const link$ = actions.select$.map(userId => `/users/${userId}`);

  return {
    RN: vtree$,
    HTTP: request$,
    link: link$,
  };
}

export default UsersList;
