import { useState } from 'react';
import './App.css';
import SignIn from './Components/SignIn';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './Components/firebase.jsx';
import Line from './Components/Line.jsx';

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="App">
        {user ? <Line /> : <SignIn />}
      </div>

    </>
  )
}

export default App
