import './style.scss';
import React,{Children,PropTypes} from 'react';
import classNames from 'classnames';
import ReactSwipeable from 'react-swipeable';
import ReactSwipeableViews from 'react-swipeable-views';

export default class extends ReactSwipeableViews{

  static propTypes = {
    className: PropTypes.string
  };

  getFormatedStyle(){
    switch(this.state.unit){
      case 'width':
        return {
          width:`${this._length*100}%`,
          transition:`transform ${this.state.duration}s ${this.state.animate}`,
          WebkitTransition:`transform ${this.state.duration}s ${this.state.animate}`,
          transform:`translate(${this.state.translate},0)`,
          WebkitTransform:`translate(${this.state.translate},0)`
        };
      case 'height':
        return {
          height:`${this._length*100}%`,
          transition:`transform ${this.state.duration}s ${this.state.animate}`,
          WebkitTransition:`transform ${this.state.duration}s ${this.state.animate}`,
          transform:`translate(0,${this.state.translate})`,
          WebkitTransform:`translate(0,${this.state.translate})`
        };
    }
  }

  getFormatedEvents(){
    switch(this.state.unit){
      case 'width':
        return {
          onSwipingLeft:this.onSwipingNext.bind(this),
          onSwipingRight:this.onSwipingPrev.bind(this),
          onSwipedLeft:this.next.bind(this),
          onSwipedRight:this.prev.bind(this)
        };
      case 'height':
        return {
          onSwipingUp:this.onSwipingNext.bind(this),
          onSwipingDown:this.onSwipingPrev.bind(this),
          onSwipedUp:this.next.bind(this),
          onSwipedDown:this.prev.bind(this),
        };
    }
  }

  render(){
    const {unit} = this.state;
    return (
      <div ref="root" className={classNames('react-swipe-views',`react-swipe-views-${this.state.unit}`,this.props.className)}>
          <ReactSwipeable flickThreshold={0.2} delta={10}
          preventDefaultTouchmoveEvent
          className="react-swipe-views-wrapper"
          {...this.getFormatedEvents()}
          style={{ [unit]:`${this.state.bound[unit]}px` }}>
              <div className="react-swipe-views-scroller"
                style={this.getFormatedStyle()}>

                {Children.map(this.props.children,(child,index)=>{
                    return (
                      <div className="react-swipe-views-item" key={index} style={{ [unit]:`${100/this._length}%`}}>
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
