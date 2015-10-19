import moment from 'moment';
import styles from './styles.ios';
import React from 'react-native';
import ReactNativeMaterialButton from 'react-native-material-button';
import navigator from '../../components/navigator.ios';
const Button = React.createFactory(ReactNativeMaterialButton);
const View = React.createFactory(React.View);
const TouchableHighlight = React.createFactory(React.TouchableHighlight);
const ListView = React.createFactory(React.ListView);
const Text = React.createFactory(React.Text);

function transactionItem(transaction) {
  const positive = styles.positiveTransactionAmount;
  const negative = styles.negativeTransactionAmount;
  return (
    TouchableHighlight({
      selector: 'transaction',
      dataTransactionId: transaction.id,
      underlayColor: styles.itemUnderlayColor},

      View({style: styles.item}, [
        View({style: styles.description}, [
          Text({style: styles.counterpartyName},
            transaction.counterpartyName
          ),
          Text({style: styles.transactionDate},
            moment(transaction.dateOfEntry || (transaction.timestamp / 1000))
              .format('DD.MM.YYYY HH:MM')
          ),
        ]),
        Text({style: (transaction.amount > 0 ? positive : negative)},
          `${transaction.amount} ${transaction.currency}`
        ),
      ])
    )
  );
}

function body(state) {
  if (state.transactions && state.transactions.length > 0) {
    return ListView({
      dataSource: state.dataSource,
      renderRow: transactionItem,
      automaticallyAdjustContentInsets: true,
      height: 70});
  } else if (state.transactions) {
    return View(null, [
      Text({selector: 'no-transactions', style: styles.emptyTransactions},
        'No transactions'
      ),
    ]);
  } else {
    return View({selector: 'loading', style: styles.loading}, [
      Text(null, 'Loading...'),
    ]);
  }
}

function augmentWithDataSource(state$) {
  return state$.scan((prevState, currState) => {
    let prevDataSource;
    if (!prevState || !prevState.dataSource) {
      prevDataSource = new React.ListView.DataSource({
        rowHasChanged: (row1, row2) => row1.id !== row2.id,
      });
    } else {
      prevDataSource = prevState.dataSource;
    }
    return {
      ...currState,
      dataSource: prevDataSource.cloneWithRows(currState.transactions || []),
    };
  }, {});
}

function view(state$) {
  return augmentWithDataSource(state$).map(state =>
    View({style: styles.listContainer}, [
      navigator('Transactions'),

      Button({
        selector: 'new-payment',
        withShadow: true,
        style: styles.paymentButton},

        Text({style: {color: 'white'}}, 'New payment')
      ),

      body(state),
    ])
  );
}

export default view;
