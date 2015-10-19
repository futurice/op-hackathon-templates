import {div, ul, li, h1, h3, span, a} from '../../hyperscript';
import moment from 'moment';
import styles from './styles.web';

function transactionItem(transaction) {
  const positive = styles.positiveTransactionAmount.selector;
  const negative = styles.negativeTransactionAmount.selector;
  return (
    li('.transaction' + styles.item.selector, [
      div('.transaction-description' + styles.description.selector, [
        h3('.transaction-counterparty-name' + styles.counterpartyName.selector,
          transaction.counterpartyName
        ),
        span('.transaction-date' + styles.transactionDate.selector,
          moment(transaction.dateOfEntry || (transaction.timestamp / 1000))
            .format('DD.MM.YYYY HH:MM')
        ),
      ]),
      h3('.transaction-amount' + (transaction.amount > 0 ? positive : negative),
        `${transaction.amount} ${transaction.currency}`
      ),
    ])
  );
}

function body(state) {
  if (state.transactions && state.transactions.length > 0) {
    return (
      ul('.transactions' + styles.list.selector,
        state.transactions.map(transactionItem)
      )
    );
  } else if (state.transactions) {
    return (
      ul('.transactions' + styles.list.selector, [
        span('.empty-transactions' + styles.emptyTransactions.selector,
          'No transactions'
        ),
      ])
    );
  } else {
    return span('.loading' + styles.loading.selector, 'Loading...');
  }
}

function view(state$) {
  return state$.map(state =>
    div('.transactions-page', [
      h1('.transactions-header' + styles.header.selector, 'Transactions'),
      a('.new-payment' + styles.paymentButton.selector,
        {href: `/transactions/${state.accountId}/new`},
        'New payment'
      ),
      body(state),
    ])
  );
}

export default view;
