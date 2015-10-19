function intent(RNSource) {
  return {
    select$: RNSource.select('user').events('press')
      .map(ev => ev.currentTarget.props.dataUserId),
  };
}

export default intent;
