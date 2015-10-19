import {HOST} from '../../config';

function requests(props$) {
  return props$.flatMap(props => {
    return [
      {
        url: `http://${HOST}/accounts/${props.accountId}/transactions`,
        type: 'json',
        accept: 'json',
      },
      {
        url: `http://${HOST}/accounts/${props.accountId}/owners`,
        type: 'json',
        accept: 'json',
      },
    ];
  });
}

export default {requests};
