
import './App.css';
import About from './Components/About/About';
import Fotter from './Components/fotter/Fotter';
import Main from './Components/Main/Main';
import Portfolio from './Components/Portfolio/Portfolio';
import Header from './Components/styles/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Portfolio/>
      <Fotter/>

    </div>
  );
}

export default App;
