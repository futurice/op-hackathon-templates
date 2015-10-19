import {HOST} from '../../config';
import moment from 'moment';

function HTTPRequest(state$, actions) {
  return actions.sendPayment$.withLatestFrom(state$, (action, state) => {
    if (state.name && state.iban && state.amount && state.description) {
      return {
        url: `http://${HOST}/transactions`,
        method: 'POST',
        eager: true,
        send: {
          account: state.accountId,
          amount: parseFloat(state.amount),
          currency: 'EUR',
          counterpartyName: state.name,
          counterpartyIBAN: state.iban,
          counterpartyBIC: 'OKOYFIHH',
          counterpartyBank: 'OP',
          dateOfPayment: moment().format('YYYY-MM-DD'),
          description: state.description,
        },
      };
    } else {
      return null;
    }
  })
  .filter(x => x !== null);
}

export default {HTTPRequest};
