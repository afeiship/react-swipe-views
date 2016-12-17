import './style.scss';
import classNames from 'classnames';
import Swipeable from 'react-swipeable';

let instanceMap = {};

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    delegateHandle:React.PropTypes.string,
    unit:React.PropTypes.string,
    animate:React.PropTypes.string,
    duration:React.PropTypes.number,
    items:React.PropTypes.array,
    itemTemplate:React.PropTypes.func,
    activeIndex:React.PropTypes.number
  };

  static defaultProps = {
    unit:'width',
    animate:'linear',
    duration:0.3,
    items:[],
    itemTemplate:null,
    activeIndex: 0
  };

  static getInstance(inHandle){
    return instanceMap[inHandle] || null;
  }

  constructor(props){
    super(props);
    this.state = {
      unit:props.unit,
      animate:props.animate,
      duration: props.duration,
      items: props.items,
      itemTemplate:props.itemTemplate,
      activeIndex: props.activeIndex,
      translate: 0,
      bound:{}
    };
  }

  componentWillMount(){
    this.toIndex();
  }

  componentDidMount() {
    this.setState({
      bound:this.refs.root.getBoundingClientRect()
    });
    this.props.delegateHandle && (instanceMap[this.props.delegateHandle]=this);
  }

  play(inIndex){
    this._index = inIndex + this._boundary.min;
    this.slide();
    this.syncState();
  }

  slide(){
    this.setState({
      duration:this.props.duration,
      translate:`-${this._index * 100/this.props.items.length}%`
    });
  }

  toIndex(){
    //to be implement
  }

  updateIndex(){

  }

  syncState(){
    this.setState({
      activeIndex: this._index - this._boundary.min
    });
  }

  next(ev){
    this._index++;
    this.toIndex();
  }

  prev(ev) {
    this._index--;
    this.toIndex();
  }

  onSwipingNext(ev, delta) {
    var _translate = this._index * this.state.bound[this.state.unit];
    this.setState({
      duration: 0,
      translate: `${-_translate-delta}px`
    });
  }

  onSwipingPrev(ev,delta){
    var _translate = this._index * this.state.bound[this.state.unit];
    this.setState({
      duration:0,
      translate: `${-_translate+delta}px`
    });
  }

  render(){
    return (
      <div ref="root" className={classNames('react-swipe-views',`react-swipe-views-${this.state.unit}`,this.props.cssClass)}>
        {
          this.state.unit === 'width' &&
          <Swipeable flickThreshold={0.2} delta={10} preventDefaultTouchmoveEvent className="react-swipe-views-wrapper"
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
          </Swipeable>
        }

        {
          this.state.unit === 'height' &&
          <Swipeable flickThreshold={0.2} delta={10} preventDefaultTouchmoveEvent className="react-swipe-views-wrapper"
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
          </Swipeable>
        }
      </div>
    );
  }
}
