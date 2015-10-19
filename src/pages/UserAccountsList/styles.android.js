import {StyleSheet} from 'react-native';
import commonStyles from '../../styles/common.android';
import palette from '../../styles/palette';

const styles = StyleSheet.create({
  ...commonStyles,

  accountBalance: {
    color: palette.green,
  },
});

styles.itemUnderlayColor = palette.grayLight;

export default styles;
