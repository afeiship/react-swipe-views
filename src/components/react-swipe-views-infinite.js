import './style.scss';
import React,{PropTypes} from 'react';
import classNames from 'classnames';
import ReactSwipeable from 'react-swipeable';
import ReactSwipeableViews from 'react-swipeable-views';
import ReactSwipeViewsBase from './react-swipe-views-base';


export default class extends ReactSwipeViewsBase{

  constructor(props){
  	super(props);
    this.processItems();
    this._length = props.items.length;
    this._boundary = {
      min: 1,
      max: this._length - 2
    };
  }

  processItems(){
    var items = this.props.items;
    var first = items[0];
    var last = items[items.length - 1];
    items.push(first);
    items.unshift(last);

    this._index = this.props.activeIndex + 1;
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
