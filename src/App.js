
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';




function App() {
  return (
    <div className="app">
      <Header/>
      <div className='app__body'>
      <Sidebar/>
     <Feed/>
     <Widget/>
     </div>
    </div>
  );
}

export default App;
