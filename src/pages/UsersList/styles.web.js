import styles from '../../styles/index.web';
import commonStyles from '../../styles/common.web';

export default {
  ...commonStyles,

  item: styles.registerStyle({
    h3: {
      margin: '0',
    },
  }, commonStyles.item.style),
};
