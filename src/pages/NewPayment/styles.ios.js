import {StyleSheet} from 'react-native';
import commonStyles from '../../styles/common.ios';
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

  textInput: {
    height: 40,
    borderColor: palette.gray,
    borderWidth: 1,
  },

  sendButton: {
    marginTop: 10,
    padding: 10,
    alignSelf: 'flex-start',
    backgroundColor: palette.green,
  },

  sendButtonDisabled: {
    marginTop: 10,
    padding: 10,
    alignSelf: 'flex-start',
    backgroundColor: palette.gray,
  },
});

export default styles;

