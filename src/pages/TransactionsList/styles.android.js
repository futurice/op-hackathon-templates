import {StyleSheet} from 'react-native';
import commonStyles from '../../styles/common.android';
import palette from '../../styles/palette';

const styles = StyleSheet.create({
  ...commonStyles,

  emptyTransactions: {
    margin: 10,
    color: palette.gray,
  },

  listContainer: {
    flex: 1,
  },

  item: {
    ...commonStyles.item,
    justifyContent: 'space-between',
  },

  counterpartyName: {
    margin: 0,
  },

  paymentButton: {
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    alignSelf: 'flex-start',
    backgroundColor: palette.green,
  },

  description: {},
  transactionDate: {},

  positiveTransactionAmount: {
    margin: 0,
    color: palette.green,
  },

  negativeTransactionAmount: {
    margin: 0,
    color: palette.orange,
  },
});

styles.itemUnderlayColor = palette.grayLight;

export default styles;
