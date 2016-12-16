import './style.scss';
import classNames from 'classnames';
import Swipeable from 'react-swipeable';


export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    duration:React.PropTypes.number,
    animate:React.PropTypes.string,
    items:React.PropTypes.array,
    itemTemplate:React.PropTypes.func,
    activeIndex:React.PropTypes.number,
    infinite:React.PropTypes.bool,
  };

  static defaultProps = {
    duration:0.3,
    animate:'linear',
    items:[],
    itemTemplate:null,
    activeIndex: 0,
    infinite:true
  };

  constructor(props){
    super(props);
    this.fomratItems();
    this.state={
      animate:props.animate,
      duration: props.duration,
      items: props.items,
      itemTemplate:props.itemTemplate,
      activeIndex: props.activeIndex,
      infinite:props.infinite,
      translateX: 0
    };

    this._additional = Number(this.props.infinite);
    this._index = props.activeIndex + this._additional;
  }

  componentWillMount(){
    // this.toIndex(this.state.activeIndex + this._additional);
    this.toIndex(this._index);
  }

  componentDidMount() {
    var root = this._root = this.refs.root;
    this._bound = root.getBoundingClientRect();
  }

  fomratItems(){
    if(this.props.infinite){
      var items = this.props.items;
      var first,last;
      if(this.props.infinite){
        first = items[0];
        last = items[items.length - 1];
        items.push(first);
        items.unshift(last);
      }
      return items;
    }
  }

  toIndex(inIndex){
    var activeIndex = this.getAbsIndex(inIndex);
    var index = this.props.infinite ? inIndex : activeIndex;
    this.setState({
      activeIndex:activeIndex,
      duration:this.props.duration,
      translateX:`-${index * 100/this.props.items.length}%`
    });
  }

  _onSwipedLeft(ev){
    var activeIndex = this.state.activeIndex + 1;
    this.toIndex(activeIndex);
  }

  _onSwipedRight(ev){
    var activeIndex = this.state.activeIndex - 1;
    this.toIndex(activeIndex);
  }

  _onSwipingLeft(ev,deltaX){
    var _translateX = this.state.activeIndex * this._bound.width;
    this.setState({
      duration:0,
      translateX:`-${_translateX+deltaX}px`
    });
  }

  _onSwipingRight(ev,deltaX){
    var _translateX = this.state.activeIndex * this._bound.width;
    this.setState({
      duration:0,
      translateX: `${-_translateX+deltaX}px`
    });
  }

  getAbsIndex(inIndex){
    var activeIndex = inIndex;
    var _length = this.props.items.length -1;
    if(this.props.infinite){
      if(activeIndex == 0){
        activeIndex = _length - 1;
      }

      if(activeIndex == _length){
        activeIndex = 1;
      }
    }else{
      if (activeIndex <= 0) {
        activeIndex=0;
      }
      if (activeIndex >= _length) {
        activeIndex = _length;
      }
    }

    return activeIndex;
  }


  render(){
    return (
      <div ref="root" className={classNames('react-swipe-views',this.props.cssClass)}>
        <Swipeable flickThreshold={0.2} delta={10} preventDefaultTouchmoveEvent className="react-swipe-views-wrapper"
          onSwipingLeft={this._onSwipingLeft.bind(this)}
          onSwipingRight={this._onSwipingRight.bind(this)}
          onSwipedLeft={this._onSwipedLeft.bind(this)}
          onSwipedRight={this._onSwipedRight.bind(this)}
          >
            <div className="react-swipe-views-scroller"
              style={{
                width:`${this.props.items.length*100}%`,
                transition:`transform ${this.state.duration}s ${this.props.animate}`,
                transform:`translateX(${this.state.translateX})`
              }}>
              {this.props.items.map(function(item,index){
                return (
                  <div className="react-swipe-views-item" key={index} style={{ width:`${100/this.props.items.length}%`}}>
                    {this.props.itemTemplate ? this.props.itemTemplate(item,index) : item}
                  </div>
                )
              }.bind(this))}
            </div>
        </Swipeable>
      </div>
    );
  }
}
