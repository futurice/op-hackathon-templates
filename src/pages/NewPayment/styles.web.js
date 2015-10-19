import styles from '../../styles/index.web';
import commonStyles from '../../styles/common.web';
import palette from '../../styles/palette';

export default {
  ...commonStyles,

  backButton: styles.registerStyle(commonStyles.bigButton.style, {
    backgroundColor: palette.OPBrand,
  }),

  form: styles.registerStyle({
    margin: '10px',
  }),

  inputField: styles.registerStyle({
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '16em',
    marginBottom: '10px',
  }),

  sendButton: styles.registerStyle(commonStyles.bigButton.style, {
    backgroundColor: palette.green,
    fontSize: '1em',
  }),

  sendButtonDisabled: styles.registerStyle(commonStyles.bigButton.style, {
    backgroundColor: palette.gray,
    fontSize: '1em',
    cursor: 'unset',
    '&:hover': {
      'boxShadow': 'unset',
    },
  }),
};
