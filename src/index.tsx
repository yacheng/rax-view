import { createElement, forwardRef } from 'rax';
import { isWeex } from 'universal-env';
import { Props } from './types';

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

const View = forwardRef((props: Props, ref) => {
  if (isWeex) {
    // TODO: do not pass object value in props
    return <div ref={ref} {...props} />;
  } else {
    let styleProps: any = {
      ...styles.initial,
      ...props.style
    };
    return <div ref={ref} style={styleProps} />;
  }
});

export default View;


