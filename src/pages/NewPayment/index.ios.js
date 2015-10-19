import intent from './intent.ios';
import model from './model';
import view from './view.ios';
import links from './links';
import {HTTPRequest} from './http';

function NewPayment(sources) {
  const actions = intent(sources.RN);
  const state$ = model(sources.props$, actions);
  const vtree$ = view(state$);
  const request$ = HTTPRequest(state$, actions);
  const link$ = links(actions, state$, sources.HTTP);

  return {
    RN: vtree$,
    HTTP: request$,
    link: link$,
  };
}

export default NewPayment;
