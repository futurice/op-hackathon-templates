function intent(DOMSource) {
  return {
    back$: DOMSource.select('.back').events('click')
      .do(ev => { ev.preventDefault(); }).map(() => null),
    sendPayment$: DOMSource.select('.payment-form-send').events('click')
      .do(ev => { ev.preventDefault(); }).map(() => null),
    updateName$: DOMSource.select('.payment-counterparty-name').events('input')
      .map(ev => ev.currentTarget.value),
    updateIBAN$: DOMSource.select('.payment-counterparty-iban').events('input')
      .map(ev => ev.currentTarget.value),
    updateAmount$: DOMSource.select('.payment-amount').events('input')
      .map(ev => ev.currentTarget.value),
    updateDescription$: DOMSource.select('.payment-description').events('input')
      .map(ev => ev.currentTarget.value),
  };
}

export default intent;
