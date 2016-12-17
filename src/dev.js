import './dev.scss';
import {ReactSwipeViews,ReactSwipeViewsInfinite} from './main';


class App extends React.Component{

  _itemTemplate(inItem,inIndex){
    return <div className={`item-${inIndex}`}><img src={inItem.url} /></div>
  }

  _click(inIndex){
    this.refs.test1.play(inIndex);
  }
  _change1(state){
    console.log(state);
  }
  render(){
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
          onChange={this._change1.bind(this)}
          itemTemplate={(item,index)=>this._itemTemplate(item,index)}
          items={
            [
              {
                url:require('./assets/1_s.jpg')
              },
              {
                url:require('./assets/2_s.jpg')
              },
              {
                url:require('./assets/3_s.jpg')
              },
              {
                url:require('./assets/4_s.jpg')
              }
            ]
          } />
        <h3>ReactSwipeViews[4,5,6]--Y</h3>
          <ReactSwipeViews
            unit='height'
            duration={0.4}
            activeIndex={0}
            onChange={this._change1.bind(this)}
            itemTemplate={(item,index)=>this._itemTemplate(item,index)}
            items={
              [
                {
                  url:require('./assets/4_s.jpg')
                },
                {
                  url:require('./assets/5_s.jpg')
                },
                {
                  url:require('./assets/6_s.jpg')
                }
              ]
            } />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
