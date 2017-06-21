import ReactSwipeViewsBase from './react-swipe-views-base';

export default class extends ReactSwipeViewsBase {

  processItems(inProps) {
    let items = inProps.children;
      if(items && items.length>0){
      let first = items[0];
      let last = items[items.length - 1];
      items.push(first);
      items.unshift(last);

      this._index = inProps.activeIndex + 1;
      this._length = inProps.children.length;
      this._boundary = {
        min: 1,
        max: this._length - 2
      };
    }
  }

  updateIndex() {
    if (this._index > this._boundary.max) {
      this._index = this._boundary.min;
    }

    if (this._index < this._boundary.min) {
      this._index = this._boundary.max;
    }
  }
}
