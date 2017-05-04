import ReactSwipeViewsBase from './react-swipe-views-base';

export default class extends ReactSwipeViewsBase{

  constructor(props){
  	super(props);
    this.processItems(props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.processItems(nextProps);
    this.setState({
      translate:`-${this._index * 100/ this._length}%`
    });
  }

  processItems(inProps){
    this._index = inProps.activeIndex;
    this._length = inProps.children.length;
    this._boundary = {
      min: 0,
      max: this._length - 1
    };
  }

  toIndex(){
    this.updateIndex();
    this.slide();
    this.syncState();
  }


  updateIndex(){
    if (this._index > this._boundary.max) {
      this._index = this._boundary.max;
    }

    if (this._index < this._boundary.min) {
      this._index = this._boundary.min;
    }
  }
}
