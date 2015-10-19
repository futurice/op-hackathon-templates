function intent(DOMSource) {
  return {
    selectNewPayment$: DOMSource.select('.new-payment').events('click')
      .do(ev => { ev.preventDefault(); }).map(() => null),
  };
}

export default intent;
