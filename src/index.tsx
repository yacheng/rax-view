import { createElement, forwardRef, useImperativeHandle } from 'rax';
import { isWeex } from 'universal-env';

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

const View = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    _nativeNode: ref.current
  }));

  if (isWeex) {
    // TODO: do not pass object value in props
    return <div ref={ref} {...props} />;
  } else {
    const { style = {}, ...rest} = props;
    let styleProps = {
      ...styles.initial,
      ...style
    };
    return <div ref={ref} style={styleProps} {...rest}/>;
  }
});

export default View;


