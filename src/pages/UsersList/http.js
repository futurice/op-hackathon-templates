import {Observable} from 'rx';
import {HOST} from '../../config';

function requests() {
  return Observable.just({
    url: `http://${HOST}/users`,
    type: 'json',
    accept: 'json',
  });
}

export default {requests};
