
  import './App.css';
  import { Login } from './Login';
  import { BrowserRouter as Router, Route, Routes as Sw ,Link} from 'react-router-dom';
  import Home from './home'
  import { useState } from 'react';
  import Barra from './Barra';




  function App() {

    const [user, setUser] = useState([]);

    return(
      <div className='App'>
        {
          !user.length > 0
          ?  <Login setUser={setUser}/>
          :  <Home user={user} setUser={setUser}/>
        }
        
      </div>
    )

  }

  export default App;