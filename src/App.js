import './App.css';
import './index.css';
import Games from './components/Games';
import Artist from './components/Artist';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <h1>My first react app</h1>
      <Games game1 = "watchdogs" game2 = "most wanted 2005" game3 = "FC24"/>
      <Artist artist1 = "Dax" artist2 = "JCole" artist3 = "NF"/>
      <People />
    </div>
  );
}

export default App;
