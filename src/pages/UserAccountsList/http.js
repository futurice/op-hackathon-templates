import {HOST} from '../../config';

function requests(props$) {
  return props$.flatMap(props => {
    return [
      {
        url: `http://${HOST}/users/${props.userId}`,
        type: 'json',
        accept: 'json',
      },
      {
        url: `http://${HOST}/users/${props.userId}/accounts`,
        type: 'json',
        accept: 'json',
      },
    ];
  });
}

export default {requests};
