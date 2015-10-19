import intent from './intent.web';
import model from './model';
import view from './view.web';
import links from './links';
import {HTTPRequest} from './http';

function NewPayment(sources) {
  const actions = intent(sources.DOM);
  const state$ = model(sources.props$, actions);
  const vtree$ = view(state$);
  const request$ = HTTPRequest(state$, actions);
  const link$ = links(actions, state$, sources.HTTP);

  return {
    DOM: vtree$,
    HTTP: request$,
    link: link$,
  };
}

export default NewPayment;
