import styles from './styles.android';
import React from 'react-native';
const View = React.createFactory(React.View);
const ToolbarAndroid = React.createFactory(React.ToolbarAndroid);
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
          Text(null, user.email)
        ])
      )
    ))
  )
  .startWith(
    View({style: styles.loading}, [
      Text(null, 'Loading...')
    ])
  )
  .map(body =>
    View(null, [
      ToolbarAndroid({
        style: styles.toolbar,
        titleColor: '#ffffff',
        title: 'OP Template - Users',
      }),
      body
    ])
  );
}

export default view;
