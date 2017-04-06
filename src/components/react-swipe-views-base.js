import './style.scss';
import React,{PropTypes} from 'react';
import classNames from 'classnames';
import ReactSwipeable from 'react-swipeable';
import ReactSwipeableViews from 'react-swipeable-views';

export default class extends ReactSwipeableViews{

  static propTypes = {
    className: PropTypes.string
  };

  render(){
    return (
      <div ref="root" className={classNames('react-swipe-views',`react-swipe-views-${this.state.unit}`,this.props.className)}>
        {
          this.state.unit === 'width' &&
          <ReactSwipeable flickThreshold={0.2} delta={10} preventDefaultTouchmoveEvent className="react-swipe-views-wrapper"
            onSwipingLeft={this.onSwipingNext.bind(this)}
            onSwipingRight={this.onSwipingPrev.bind(this)}
            onSwipedLeft={this.next.bind(this)}
            onSwipedRight={this.prev.bind(this)}
            style={{
              width:`${this.state.bound.width}px`
            }}
            >
              <div className="react-swipe-views-scroller"
                style={{
                  width:`${this._length*100}%`,
                  transition:`transform ${this.state.duration}s ${this.state.animate}`,
                  WebkitTransition:`transform ${this.state.duration}s ${this.state.animate}`,
                  transform:`translate(${this.state.translate},0)`,
                  WebkitTransform:`translate(${this.state.translate},0)`
                }}>
                {this.props.items.map(function(item,index){
                  return (
                    <div className="react-swipe-views-item" key={index} style={{ width:`${100/this._length}%`}}>
                      {this.props.itemTemplate ? this.props.itemTemplate(item,index) : item}
                    </div>
                  )
                }.bind(this))}
              </div>
          </ReactSwipeable>
        }

        {
          this.state.unit === 'height' &&
          <ReactSwipeable flickThreshold={0.2} delta={10} preventDefaultTouchmoveEvent className="react-swipe-views-wrapper"
            onSwipingUp={this.onSwipingNext.bind(this)}
            onSwipingDown={this.onSwipingPrev.bind(this)}
            onSwipedUp={this.next.bind(this)}
            onSwipedDown={this.prev.bind(this)}
            style={{
              height:`${this.state.bound.height}px`
            }}
            >
              <div className="react-swipe-views-scroller"
                style={{
                  height:`${this._length*100}%`,
                  transition:`transform ${this.state.duration}s ${this.state.animate}`,
                  WebkitTransition:`transform ${this.state.duration}s ${this.state.animate}`,
                  transform:`translate(0,${this.state.translate})`,
                  WebkitTransform:`translate(0,${this.state.translate})`
                }}>
                {this.props.items.map(function(item,index){
                  return (
                    <div className="react-swipe-views-item" key={index} style={{ height:`${100/this._length}%`}}>
                      {this.props.itemTemplate ? this.props.itemTemplate(item,index) : item}
                    </div>
                  )
                }.bind(this))}
              </div>
          </ReactSwipeable>
        }
      </div>
    );
  }
}
