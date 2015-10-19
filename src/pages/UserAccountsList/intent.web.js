function intent(DOMSource) {
  return {
    select$: DOMSource.select('.account').events('click')
      .map(ev => ev.currentTarget.dataset.accountid),
  };
}

export default intent;
