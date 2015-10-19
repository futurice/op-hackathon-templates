function model(response$$) {
  const USERS_PATH = 'http://ophackathon-test.apigee.net/users';
  const state$ = response$$
    .filter(res$ => res$.request.url === USERS_PATH)
    .mergeAll()
    .map(res => ({users: res.body || JSON.parse(res.text)}))
    .shareReplay(1);
  return state$;
}

export default model;
