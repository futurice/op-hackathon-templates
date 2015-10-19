import styles from '../../styles/index.web';
import commonStyles from '../../styles/common.web';
import palette from '../../styles/palette';

export default {
  ...commonStyles,

  item: styles.registerStyle(commonStyles.item.style, {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'initial',
    '&:hover': {
      backgroundColor: 'initial',
    },
  }),

  description: styles.registerStyle({
  }),

  counterpartyName: styles.registerStyle({
    margin: '0',
  }),

  paymentButton: styles.registerStyle(commonStyles.bigButton.style, {
    marginLeft: '10px',
    marginTop: '10px',
    fontSize: '1em',
    backgroundColor: palette.green,
  }),

  transactionDate: styles.registerStyle({
  }),

  emptyTransactions: styles.registerStyle({
    display: 'block',
    margin: '10px',
    color: palette.gray,
  }),

  positiveTransactionAmount: styles.registerStyle({
    margin: '0',
    color: palette.green,
  }),

  negativeTransactionAmount: styles.registerStyle({
    margin: '0',
    color: palette.orange,
  }),
};
