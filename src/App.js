import './App.css';
import './index.css';
import Games from './components/Games';
import Artist from './components/Artist';
import People from './components/People';
import Car from './components/Car';
import People2 from './components/People2';
import Car2 from './components/Car2';
import AddPeople from './components/AddPeople';

function App() {
  return (
    <div className="App">
      <h1>My first react app</h1>
      <Games game1 = "watchdogs" game2 = "most wanted 2005" game3 = "FC24"/>
      <Artist artist1 = "Dax" artist2 = "JCole" artist3 = "NF"/>
      <People />
      <Car />
      <People2 />
      <Car2 />
      <AddPeople />
    </div>
  );
}

export default App;
