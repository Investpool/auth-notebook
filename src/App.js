import './App.css';
import NewNotes from './Components/NewNotes';
import NoteList from './Components/NoteList';
import {useState} from 'react';

function App() {

  const [notes, setUsers]= useState([]);

  function addNewNotes (note) {
    setUsers([...notes, note]);  
  };

  return (
    <div style={{backgroundColor:"lightblue", color:"black"}}>
      <div className ='container'>
        <h3 className='head_Nav'>NoteBook</h3 >
        
          <div className ='col-md-4'>
           
            <NewNotes  addNewNotes={addNewNotes}/>
            
          </div>
        
        <div className ='col-md-8' style={{color:"black"}}>
          <NoteList />
        </div>
      </div>
    </div>
  );
}

export default App;