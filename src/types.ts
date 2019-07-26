import * as Rax from 'rax';

export interface ViewProps extends Rax.HTMLAttributes<HTMLDivElement> {
  ref?: Rax.Ref<ElementWithNativeNode>;
}
export interface ElementWithNativeNode extends HTMLDivElement {
  _nativeNode: HTMLDivElement;
}
