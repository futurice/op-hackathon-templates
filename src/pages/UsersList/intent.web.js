function intent(DOMSource) {
  return {
    select$: DOMSource.select('.user').events('click')
      .map(ev => ev.currentTarget.dataset.userid),
  };
}

export default intent;
