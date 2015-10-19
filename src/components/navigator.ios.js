import React from 'react-native';
import {StyleSheet} from 'react-native';
import palette from '../styles/palette';
const View = React.createFactory(React.View);
const Text = React.createFactory(React.Text);

const styles = StyleSheet.create({
  navigator: {
    height: 50,
    borderWidth: 0,
    marginTop: 24,
    backgroundColor: palette.grayDark,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 1,
  },
});

export default function navigator(title, backButtonEnabled = true) {
  return View({style: styles.navigator}, [
    Text({
      selector: 'navigator',
      style: {color: palette.white, fontSize: 20, marginLeft: 5}},

      backButtonEnabled ? '\u2039 Back' : '         '
    ),
    Text({style: {color: palette.white, fontSize: 20}}, title),
    Text({style: {fontSize: 20}}, '            '),
  ]);
}
