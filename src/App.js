import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Main from './components/main';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='top'>
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default App;