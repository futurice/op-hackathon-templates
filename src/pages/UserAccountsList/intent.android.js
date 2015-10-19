function intent(RNSource) {
  return {
    back$: RNSource.select('toolbar').events('iconClicked').map(() => null),
    select$: RNSource.select('account').events('press')
      .map(ev => ev.currentTarget.props.dataAccountId),
  };
}

export default intent;
