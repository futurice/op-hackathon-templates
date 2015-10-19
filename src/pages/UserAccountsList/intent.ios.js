function intent(RNSource) {
  return {
    back$: RNSource.select('navigator').events('press').map(() => null),
    select$: RNSource.select('account').events('press')
      .map(ev => ev.currentTarget.props.dataAccountId),
  };
}

export default intent;
