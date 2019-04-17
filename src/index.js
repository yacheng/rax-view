import {createElement} from 'rax';
import {isWeex} from 'universal-env';

export default (props) => {
  if (isWeex) {
    // TODO: do not pass object value in props
    return <div {...props} />;
  } else {
    let styleProps = {
      ...styles.initial,
      ...props.style
    };
    return <div {...props} style={styleProps} />;
  }
};

const styles = {
  initial: {
    border: '0 solid black',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    flexShrink: 0
  }
};
