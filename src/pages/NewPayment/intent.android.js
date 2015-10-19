function intent(RNSource) {
  return {
    back$: RNSource.select('toolbar').events('iconClicked').map(() => null),

    sendPayment$: RNSource.select('payment-form-send').events('pressOut'),

    updateName$: RNSource
      .select('payment-counterparty-name')
      .events('changeText')
      .map(ev => ev.args[0]),

    updateIBAN$: RNSource
      .select('payment-counterparty-iban')
      .events('changeText')
      .map(ev => ev.args[0]),

    updateAmount$: RNSource
      .select('payment-amount')
      .events('changeText')
      .map(ev => ev.args[0]),

    updateDescription$: RNSource
      .select('payment-description')
      .events('changeText')
      .map(ev => ev.args[0]),
  };
}

export default intent;
