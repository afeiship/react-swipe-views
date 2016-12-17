import './dev.scss';
import {ReactSwipeViews,ReactSwipeViewsInfinite} from './main';


class App extends React.Component{

  _itemTemplate(inItem,inIndex){
    return <div className={`item-${inIndex}`}><img src={inItem.url} /></div>
  }

  render(){
    return (
      <div className="hello-react-swipe-views">
        <h3>ReactSwipeViewsInfinite[1,2,3,4]</h3>
        <ReactSwipeViewsInfinite
          unit='width'
          duration={0.4}
          activeIndex={0}
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
        <h3>ReactSwipeViews[4,5,6]</h3>
          <ReactSwipeViews
            unit='width'
            duration={0.4}
            activeIndex={0}
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
