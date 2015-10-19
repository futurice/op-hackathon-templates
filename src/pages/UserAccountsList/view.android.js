import styles from './styles.android';
import React from 'react-native';
const View = React.createFactory(React.View);
const Text = React.createFactory(React.Text);
const ToolbarAndroid = React.createFactory(React.ToolbarAndroid);
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
              Text({style: styles.accountBalance}, account.balance)
            ]),
            Text(null, account.IBAN)
          ])
        )
      ))
    );
  } else {
    return (
      View({selector: 'loading', style: styles.loading}, [
        Text(null, 'Loading...')
      ])
    );
  }
}

function view(state$) {
  return state$.map(state =>
    View(null, [
      ToolbarAndroid({
        selector: 'toolbar',
        style: styles.toolbar,
        navIcon: require('image!ic_arrow_left_white_24dp'),
        titleColor: '#ffffff',
        title: `${state.userName} Accounts`,
      }),
      body(state)
    ])
  );
}

export default view;
