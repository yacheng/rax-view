declare type AnyObject = Record<string, any>

declare namespace JSX {
  interface IntrinsicElements {
    scroller: any;
    slider: any;
    indicator: any;
    div: any;
    img: any;
    image:any;
  }
}

declare namespace Component {
  interface Methods {
    [propName: string]: any;
  }

  interface BaseProps<D extends AnyObject = any> {
    /** 组件内部状态 */
    data?: D;

    /** 组件外部传入属性 */
    props?: D;

    /** 更新组件数据 */
    setData?<K extends keyof D>(
      data: D | Pick<D, K>,
      callback?: () => void,
    ): void;
  }

  interface Instance<
    D extends AnyObject = any,
    T extends AnyObject = any
  > extends BaseProps<D> {
    /** 组件创建完毕时触发 */
    didMount?(): void;

    /** 组件更新完毕时触发 */
    didUpdate?(prevProps: AnyObject, prevData: AnyObject): void;

    /** 组件卸载时触发 */
    didUnmount?(): void;

    methods?: Methods;

    [propName: string]: any;
  }

  interface Constructor {
    <D extends AnyObject, T extends AnyObject & Instance>(
      options: Instance<D, T> & T,
    ): void;
  }
}

declare const Component: Component.Constructor;
