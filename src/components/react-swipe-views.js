import ReactSwipeViewsBase from './react-swipe-views-base';

export default class extends ReactSwipeViewsBase {

  processItems(inProps) {
    this._index = inProps.activeIndex;
    this._length = inProps.children.length;
    this._boundary = {
      min: 0,
      max: this._length - 1
    };
  }

  updateIndex() {
    if (this._index > this._boundary.max) {
      this._index = this._boundary.max;
    }

    if (this._index < this._boundary.min) {
      this._index = this._boundary.min;
    }
  }
}
