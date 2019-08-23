import { createElement, forwardRef, CSSProperties, ForwardRefExoticComponent, RefAttributes, HTMLAttributes } from 'rax';
import { isWeex } from 'universal-env';

const defaultStyle: CSSProperties = {
  border: '0 solid black',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'flex-start',
  flexShrink: 0
};

export type ViewProps = RefAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>;

const View: ForwardRefExoticComponent<ViewProps> = forwardRef(
  (props, ref) => {
    if (isWeex) {
      return <div ref={ref} {...props} />;
    } else {
      const { style = {}, ...rest } = props;
      return (
        <div ref={ref} style={{...defaultStyle, ...style}} {...rest} />
      );
    }
  }
);
export default View;
