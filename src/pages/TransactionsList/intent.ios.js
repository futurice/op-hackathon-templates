function intent(RNSource) {
  return {
    back$: RNSource.select('navigator').events('press').map(() => null),
    selectNewPayment$: RNSource.select('new-payment').events('pressOut'),
  };
}

export default intent;
