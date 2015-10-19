import styles from './styles.ios';
import React from 'react-native';
import navigator from '../../components/navigator.ios';
const View = React.createFactory(React.View);
const TouchableHighlight = React.createFactory(React.TouchableHighlight);
const Text = React.createFactory(React.Text);

function view(state$) {
  return state$.map(state =>
    View(null, state.users.map(user =>
      TouchableHighlight({
        selector: 'user',
        dataUserId: user.id,
        underlayColor: styles.itemUnderlayColor},

        View({style: styles.item}, [
          Text(null, user.name),
          Text(null, user.email),
        ])
      )
    ))
  )
  .startWith(
    View({style: styles.loading}, [
      Text(null, 'Loading...'),
    ])
  )
  .map(body =>
    View(null, [
      navigator('Users', false),
      body,
    ])
  );
}

export default view;
