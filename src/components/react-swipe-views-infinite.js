import ReactSwipeViewsBase from './react-swipe-views-base';

export default class extends ReactSwipeViewsBase{

  constructor(props){
  	super(props);
    this.processItems(props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    super.componentWillReceiveProps(nextProps, nextContext)
    this.processItems(nextProps);
    this.setState({
      translate:`-${this._index * 100/ this._length}%`
    });
  }

  processItems(inProps){
    var items = inProps.children;
    var first = items[0];
    var last = items[items.length - 1];
    items.push(first);
    items.unshift(last);

    this._index = inProps.activeIndex + 1;
    this._length = inProps.children.length;
    this._boundary = {
      min: 1,
      max: this._length - 2
    };
  }

  toIndex(){
    this.slide();
    this.updateIndex();
    this.syncState();
  }

  updateIndex(){
    if(this._index>this._boundary.max){
      this._index=this._boundary.min;
    }

    if(this._index<this._boundary.min){
      this._index=this._boundary.max;
    }
  }
}
