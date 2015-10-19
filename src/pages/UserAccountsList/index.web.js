import intent from './intent.web';
import model from './model';
import view from './view.web';

function UserAccountsList(sources) {
  const request$ = sources.props$.flatMap(props => {
    return [
      {url: `http://ophackathon-test.apigee.net/users/${props.userId}`},
      {url: `http://ophackathon-test.apigee.net/users/${props.userId}/accounts`},
    ];
  });
  const actions = intent(sources.DOM);
  const state$ = model(sources.props$, sources.HTTP);
  const vtree$ = view(state$);
  const link$ = actions.select$.map(accountId => `/transactions/${accountId}`);

  return {
    DOM: vtree$,
    HTTP: request$,
    link: link$,
  };
}

export default UserAccountsList;
