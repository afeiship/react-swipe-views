import './dev.scss';
import ReactSwipeViews from './main';


class App extends React.Component{
  _itemTemplate(inItem,inIndex){
    return <div className={`item-${inIndex}`}>{inItem}</div>
  }

  render(){
    return (
      <div className="hello-react-swipe-views">
        <ReactSwipeViews
          items={['View1','View2','View3','View4','View5']} />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
