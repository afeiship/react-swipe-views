import './style.scss';

import React, {Children} from 'react';

import PropTypes from 'prop-types';
import ReactSwipeable from 'react-swipeable';
import ReactSwipeableViews from 'react-swipeable-views';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends ReactSwipeableViews {

  static propTypes = {
    className: PropTypes.string,
    followFinger:PropTypes.bool,
  };

  static defaultProps = {
    followFinger:true,
    unit:'width',
    animate:'linear',
    duration:0.3,
    activeIndex: 0,
    onNext:noop,
    onPrev:noop,
    onChange:noop
  };

  get bound(){
    const {root} = this.refs;
    if(root){
      return root.getBoundingClientRect();
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.processItems(props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.children !== this.props.children) {
      this.processItems(nextProps);
      this.setState(
        objectAssign({
          translate: `-${this._index * 100 / this._length}%`
        }, nextProps)
      );
    }
  }

  componentDidMount() {
    this.setState({bound: this.bound})
  }


  toIndex() {
    this.slide();
    this.updateIndex();
    this.syncState();
  }

  getStyles() {
    switch (this.state.unit) {
      case 'width':
        return {
          width: `${this._length * 100}%`,
          WebkitTransition: `-webkit-transform ${this.state.duration}s ${this.state.animate}`,
          WebkitTransform: `translate3d(${this.state.translate},0,0)`
        };
      case 'height':
        return {
          height: `${this._length * 100}%`,
          transition: `transform ${this.state.duration}s ${this.state.animate}`,
          WebkitTransition: `-webkit-transform ${this.state.duration}s ${this.state.animate}`,
          transform: `translate3d(0,${this.state.translate,0})`,
          WebkitTransform: `translate3d(0,${this.state.translate,0})`
        };
    }
  }

  getEvents() {
    switch (this.state.unit) {
      case 'width':
        return {
          onSwipingLeft: this.onSwipingNext.bind(this),
          onSwipingRight: this.onSwipingPrev.bind(this),
          onSwipedLeft: this.next.bind(this),
          onSwipedRight: this.prev.bind(this)
        };
      case 'height':
        return {
          onSwipingUp: this.onSwipingNext.bind(this),
          onSwipingDown: this.onSwipingPrev.bind(this),
          onSwipedUp: this.next.bind(this),
          onSwipedDown: this.prev.bind(this),
        };
    }
  }

  onSwipingNext(ev, delta) {
    this.__onSwipingItem('onSwipingNext',ev,delta);
  }

  onSwipingPrev(ev,delta){
    this.__onSwipingItem('onSwipingPrev',ev,delta);
  }

  __onSwipingItem(inMethod,ev,delta){
    if(this.props.followFinger){
      super[inMethod](ev, delta);
    }else{
      this.setState({
        duration:0,
      });
    }
  }

  render() {
    const {unit} = this.state;
    const {bound} = this.state;
    return (
      <div ref="root"
           className={classNames('react-swipe-views', `react-swipe-views-${this.state.unit}`, this.props.className)}>
        <ReactSwipeable flickThreshold={0.6} delta={10}
                        preventDefaultTouchmoveEvent
                        className="react-swipe-views-wrapper"
                        {...this.getEvents()}
                        style={{[unit]: `${this.state.bound[unit]}px`}}>
          <div className="react-swipe-views-scroller"
               style={this.getStyles()}>

            {Children.map(this.props.children, (child, index) => {
              return (
                <div className="react-swipe-views-item" key={index} style={{[unit]: bound.width }}>
                  {child}
                </div>
              )
            })}
          </div>
        </ReactSwipeable>
      </div>
    );
  }
}
