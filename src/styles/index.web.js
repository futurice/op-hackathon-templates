import FreeStyle from 'free-style';
import jss from 'jss';
import cc from 'jss-camel-case';
import palette from './palette';

const globalStyle = {
  body: {
    margin: '0',
    color: palette.black,
    fontFamily: '\'Dosis\', sans-serif',
  },
};

jss.use(cc);
jss.createStyleSheet(globalStyle, {named: false}).attach();
const styles = FreeStyle.create();

export default styles;
