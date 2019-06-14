import fmtEvent from './fmtEvent';
Component({
  data: {
  },
  props: {
    className: '',
    style:"",
    defaultStyle:"border:0 solid black;display:flex;flex-direction:column;align-content:flex-start;flex-shrink:0;box-sizing:border-box;",
    onClick: ()=>{
    },
    onLongpress:()=>{},
    onAppear:()=>{},
    onDisAppear:()=>{},
    onTouchStart:()=>{},
    onTouchMove:()=>{},
    onTouchEnd:()=>{},
    onTouchCancel:()=>{}
  },
  didMount() {
  },
  methods: {
    onClick(e){
      const event = fmtEvent(this.props, e);
      this.props.onClick(event)
    },
    onLongpress(e){
      const event = fmtEvent(this.props, e);
      this.props.onLongpress(event)
    },
    onAppear(e){
      const event = fmtEvent(this.props, e);
      this.props.onAppear(event)
    },
    onDisAppear(e){
      const event = fmtEvent(this.props, e);
      this.props.onDisAppear(event)
    },
    onTouchStart(e){
      const event = fmtEvent(this.props, e);
      this.props.onTouchStart(event)
    },
    onTouchMove(e){
      const event = fmtEvent(this.props, e);
      this.props.onTouchMove(event)
    },
    onTouchEnd(e){
      const event = fmtEvent(this.props, e);
      this.props.onTouchEnd(event)
    },
    onTouchCancel(e){
      const event = fmtEvent(this.props, e);
      this.props.onTouchCancel(event)
    }
  }
});
