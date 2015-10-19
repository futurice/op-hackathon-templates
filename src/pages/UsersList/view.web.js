import styles from './styles.web';
import {div, ul, li, h1, h3, span} from '../../hyperscript';

function view(state$) {
  return state$.map(state =>
    ul('.users' + styles.list.selector, state.users.map(user =>
      li('.user' + styles.item.selector, {attributes: {'data-userId': user.id}}, [
        h3('.user-name', user.name),
        span('.user-email', user.email),
      ])
    ))
  )
  .startWith(span('.loading' + styles.loading.selector, 'Loading...'))
  .map(body =>
    div('.users-page', [
      h1('.users-header' + styles.header.selector, 'Users'),
      body,
    ])
  );
}

export default view;
