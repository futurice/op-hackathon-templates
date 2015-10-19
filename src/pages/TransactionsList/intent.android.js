function intent(RNSource) {
  return {
    back$: RNSource.select('toolbar').events('iconClicked').map(() => null),
    selectNewPayment$: RNSource.select('new-payment').events('pressOut'),
  };
}

export default intent;
