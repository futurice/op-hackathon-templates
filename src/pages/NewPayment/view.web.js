import styles from './styles.web';
import {div, form, label, button, input, h1, a} from '../../hyperscript';

function inputField(labelContent, inputSelector) {
  return (
    div('.payment-form-input-field' + styles.inputField.selector, [
      label(labelContent),
      input(inputSelector, {type: 'text'}),
    ])
  );
}

function sendButton(state) {
  const styleSelector = (state.name && state.iban && state.amount && state.description) ?
    styles.sendButton.selector :
    styles.sendButtonDisabled.selector;
  return button('.payment-form-send' + styleSelector, 'Send');
}

function view(state$) {
  return state$.map(state =>
    div('.new-payment-page', [
      h1('.new-payment-header' + styles.header.selector, [
        a('.back' + styles.backButton.selector,
          {href: `/transactions/${state.accountId}`},
          '\u2039 Back to account'
        ),
        'New payment',
      ]),
      form('.payment-form' + styles.form.selector, [
        inputField('Name:', '.payment-counterparty-name'),
        inputField('IBAN:', '.payment-counterparty-iban'),
        inputField('Amount (EUR):', '.payment-amount'),
        inputField('Description:', '.payment-description'),
        sendButton(state),
      ]),
    ])
  );
}

export default view;
