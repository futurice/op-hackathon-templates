import styles from '../../styles/index.web';
import commonStyles from '../../styles/common.web';
import palette from '../../styles/palette';

export default {
  ...commonStyles,

  item: styles.registerStyle({
    h3: {
      margin: '0',
    },
  }, commonStyles.item.style),

  accountBalance: styles.registerStyle({
    color: palette.green,
    marginLeft: '10px',
  }),

  usersButton: styles.registerStyle(commonStyles.bigButton.style, {
    backgroundColor: palette.OPBrand,
  }),
};
