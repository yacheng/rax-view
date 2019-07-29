import {
  createElement,
  forwardRef,
  useImperativeHandle,
  useRef,
  Ref
} from 'rax';
import { isWeex } from 'universal-env';
import { ViewProps, ElementWithNativeNode } from './types';

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

const View: Rax.RefForwardingComponent<HTMLDivElement, ViewProps> = forwardRef(
  (props: ViewProps, ref: Ref<HTMLDivElement>) => {
    const viewRef = useRef(null);
    useImperativeHandle<HTMLDivElement, ElementWithNativeNode>(ref, () => ({
      _nativeNode: viewRef.current,
      ...viewRef.current
    }));

    if (isWeex) {
      return <div ref={viewRef} {...props} />;
    } else {
      const { style = {}, ...rest } = props;
      let styleProps = {
        ...styles.initial,
        ...style
      };
      return (
        <div ref={viewRef} style={styleProps as Rax.CSSProperties} {...rest} />
      );
    }
  }
);
export default View;
