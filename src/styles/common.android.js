import palette from './palette';

export default {
  header: {
    padding: 10,
    margin: 0,
    backgroundColor: palette.grayDark,
    color: palette.white,
  },

  toolbar: {
    backgroundColor: palette.grayDark,
    height: 56,
  },

  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: palette.gray,
    borderStyle: 'solid',
  },

  loading: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
};
