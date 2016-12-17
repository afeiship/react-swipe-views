import './style.scss';
import classNames from 'classnames';
import Swipeable from 'react-swipeable';
import ReactSwipeViewsBase from './react-swipe-views-base';


export default class extends ReactSwipeViewsBase{

  constructor(props){
  	super(props);
  	this._index = this.props.activeIndex;
    this._length = props.items.length;
    this._boundary = {
      min: 0,
      max: this._length - 1
    };
  }

  toIndex(){
    this.updateIndex();
    this.play();
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
