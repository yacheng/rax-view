import { createElement } from 'rax';
import { isWeex } from 'universal-env';
import { Props } from './types';

export default (props: Props) => {
  if (isWeex) {
    // TODO: do not pass object value in props
    return <div {...props} />;
  } else {
    let styleProps:any = {
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
