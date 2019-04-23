import {createElement, forwardRef} from 'rax';
import {isWeex} from 'universal-env';

let View = (props, ref) => {
    if (isWeex) {
      // TODO: do not pass object value in props
      return <div {...props} />;
    } else {
      let styleProps = {
        ...styles.initial,
        ...props.style
      };
      return <div ref={ref} {...props} style={styleProps} />;
    }
};

const styles = {
  initial: {
    border: '0 solid black',
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    flexShrink: 0
  }
};

View = forwardRef(View);

export default View;