import {div, ul, li, h1, h3, span, a} from '../../hyperscript';
import styles from './styles.web';

function body(state) {
  if (state.accounts) {
    return (
      ul('.accounts' + styles.list.selector, state.accounts.map(account =>
        li('.account' + styles.item.selector, {
          attributes: {'data-accountId': account.id}}, [
            h3('.account-name', [
              account.name,
              span('.account-balance' + styles.accountBalance.selector,
                String(account.balance)
              ),
            ]),
            span('.account-iban', account.IBAN),
          ])
      ))
    );
  } else {
    return span('.loading' + styles.loading.selector, 'Loading...');
  }
}

function view(state$) {
  return state$.map(state =>
    div('.accounts-page', [
      h1('.accounts-header' + styles.header.selector, [
        a(styles.usersButton.selector, {href: '/'}, '\u2039 Users'),
        `${state.userName} Accounts`,
      ]),
      body(state),
    ])
  );
}

export default view;
