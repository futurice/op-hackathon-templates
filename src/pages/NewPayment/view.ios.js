import styles from './styles.ios';
import React from 'react-native';
import ReactNativeMaterialButton from 'react-native-material-button';
import navigator from '../../components/navigator.ios';
const Button = React.createFactory(ReactNativeMaterialButton);
const View = React.createFactory(React.View);
const Text = React.createFactory(React.Text);
const TextInput = React.createFactory(React.TextInput);

function inputField(labelContent, inputSelector) {
  return (
    View({style: styles.inputField}, [
      Text(null, labelContent),
      TextInput({style: styles.textInput, selector: inputSelector}),
    ])
  );
}

function sendButton(state) {
  const style = (state.name && state.iban && state.amount && state.description) ?
    styles.sendButton :
    styles.sendButtonDisabled;
  return Button({selector: 'payment-form-send', withShadow: true, style: style},
    Text({style: {color: 'white'}}, 'Send')
  );
}

function view(state$) {
  return state$.map(state =>
    View(null, [
      navigator('New payment'),
      View({style: styles.form}, [
        inputField('Name:', 'payment-counterparty-name'),
        inputField('IBAN:', 'payment-counterparty-iban'),
        inputField('Amount (EUR):', 'payment-amount'),
        inputField('Description:', 'payment-description'),
        sendButton(state),
      ]),
    ])
  );
}

export default view;
