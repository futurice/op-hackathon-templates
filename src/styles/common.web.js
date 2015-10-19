import styles from './index.web';
import palette from './palette';

export default {
  header: styles.registerStyle({
    padding: '10px',
    margin: 0,
    backgroundColor: palette.grayDark,
    color: palette.white,
  }),

  bigButton: styles.registerStyle({
    display: 'inline-block',
    marginRight: '10px',
    verticalAlign: 'top',
    marginTop: '4px',
    borderRadius: '4px',
    padding: '4px',
    color: palette.white,
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.7em',
    textDecoration: 'none',
    '&:hover': {
      'boxShadow': '0 2px 2px 0 rgba(0,0,0,0.5)',
    },
  }),

  list: styles.registerStyle({
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  }),

  item: styles.registerStyle({
    padding: '10px',
    borderBottom: `1px solid ${palette.gray}`,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: palette.grayLight,
    },
  }),

  loading: styles.registerStyle({
    display: 'block',
    padding: '20px 10px',
  }),
};
