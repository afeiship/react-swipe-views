import './style.scss';
import classNames from 'classnames';
import Swipeable from 'react-swipeable';
import Utils from './react-swipe-views-utils';
import Measure from 'react-dimensions';


class ReactSwipeViews extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    activeIndex:React.PropTypes.number,
    items:React.PropTypes.array,
    itemTemplate:React.PropTypes.func,
  };

  static defaultProps = {
    activeIndex:0,
    duration:0.3,
    items:[],
    itemTemplate:function(inItem){
      return inItem;
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex,
      items: props.items,
      itemTemplate: props.itemTemplate,
      duration: props.duration,
      translateX: 0,
      dimensions: {}
    };
    this._length = props.items.length;
  }

  componentWillMount(){
    this.toIndex();
  }

  toIndex(){
    let state = this.state;
    Utils.toIndex(state.items,state.activeIndex);
    this.state.translateX = `-${100/this._length*(this.state.activeIndex + 1)}%`;
    this.setState(this.state);
  }

  _onSwipedLeft(){console.log('_onSwipedLeft..')}
  _onSwipedRight(){console.log('_onSwipedRight..')}
  _onSwipingLeft(){console.log('_onSwipingLeft..')}
  _onSwipingRight(){console.log('_onSwipingRight..')}

  render(){
    return (
      <Measure onMeasure={(dimensions) => {
          console.log(dimensions);
          this.setState({dimensions})
        }}>
        <div className={classNames('react-swipe-views',this.props.cssClass)}>
          <Swipeable className="react-swipe-views-wrapper"
            onSwipedLeft={this._onSwipedLeft.bind(this)}
            onSwipedRight={this._onSwipedRight.bind(this)}
            onSwipingLeft={this._onSwipingLeft.bind(this)}
            onSwipingRight={this._onSwipingRight.bind(this)}>
            <div className="react-swipe-views-scroller"
              style={{
                width:`${100*this._length}%`,
                transition:`transform ${this.state.duration}s`,
                transform:`translateX(${this.state.translateX})`
              }}>
              {this.state.items.map((item,index) => {
                return (
                    <div className="react-swipe-views-item"
                      key={index}
                      style={{
                        width:`${100/this._length}%`
                      }}>
                      {this.state.itemTemplate(item)}
                    </div>
                );
              })}
            </div>
          </Swipeable>
        </div>
      </Measure>
    );
  }
}

export default ReactSwipeViews;
