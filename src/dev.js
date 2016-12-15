import './dev.scss';
import ReactSwipeViews from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-swipe-views">
        <ReactSwipeViews items={['View1','View2','View3']} />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
