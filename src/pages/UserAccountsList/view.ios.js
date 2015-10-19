import styles from './styles.ios';
import React from 'react-native';
import navigator from '../../components/navigator.ios';
const View = React.createFactory(React.View);
const Text = React.createFactory(React.Text);
const TouchableHighlight = React.createFactory(React.TouchableHighlight);

function body(state) {
  if (state.accounts) {
    return (
      View(null, state.accounts.map(account =>
        TouchableHighlight({
          selector: 'account',
          dataAccountId: account.id,
          underlayColor: styles.itemUnderlayColor},

          View({style: styles.item}, [
            Text(null, [
              `${account.name}    `,
              Text({style: styles.accountBalance}, account.balance),
            ]),
            Text(null, account.IBAN),
          ])
        )
      ))
    );
  } else {
    return (
      View({selector: 'loading', style: styles.loading}, [
        Text(null, 'Loading...'),
      ])
    );
  }
}

function view(state$) {
  return state$.map(state =>
    View(null, [
      navigator(`${state.userName} Accounts`),
      body(state),
    ])
  );
}

export default view;
