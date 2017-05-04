import './dev.scss';
import {ReactSwipeViews,ReactSwipeViewsInfinite} from './main';


class App extends React.Component{
  _click(inIndex){
    this.refs.test1.play(inIndex);
  }
  _change1(state){
    console.log(state);
  }
  render(){
    const items1=[
              require('./assets/1_s.jpg'),
              require('./assets/2_s.jpg'),
              require('./assets/3_s.jpg'),
              require('./assets/4_s.jpg')
            ];
    const items2= [
              require('./assets/4_s.jpg'),
              require('./assets/5_s.jpg'),
              require('./assets/6_s.jpg'),
            ];
    return (
      <div className="hello-react-swipe-views">
        <h3>ReactSwipeViewsInfinite[1,2,3,4]--X</h3>
        <p style={{textAlign:'center'}}>
          <button onClick={this._click.bind(this,0)}>To index 0</button>
          <button onClick={this._click.bind(this,1)}>To index 1</button>
          <button onClick={this._click.bind(this,2)}>To index 2</button>
          <button onClick={this._click.bind(this,3)}>To index 3</button>
        </p>
        <ReactSwipeViewsInfinite
          ref="test1"
          unit='width'
          duration={0.4}
          activeIndex={0}
          onChange={this._change1.bind(this)}>
            {
              items1.map((item,index)=>{
                return <img key={index} src={item} alt=""/>
              })
            }
        </ReactSwipeViewsInfinite>
        <h3>ReactSwipeViews[4,5,6]--Y</h3>
          <ReactSwipeViews
            unit='height'
            duration={0.4}
            activeIndex={0}
            onChange={this._change1.bind(this)}>
            {
              items2.map((item,index)=>{
                return <img key={index} src={item} alt=""/>
              })
            }
            </ReactSwipeViews>
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
