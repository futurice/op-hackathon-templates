import {StyleSheet} from 'react-native';
import commonStyles from '../../styles/common.android';
import palette from '../../styles/palette';

const styles = StyleSheet.create({
  ...commonStyles,

  form: {
    margin: 10,
  },

  inputField: {
    justifyContent: 'space-between',
    width: 200,
    marginBottom: 10,
  },

  sendButton: {
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    alignSelf: 'flex-start',
    backgroundColor: palette.green,
  },

  sendButtonDisabled: {
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    alignSelf: 'flex-start',
    backgroundColor: palette.gray,
  },
});

export default styles;

