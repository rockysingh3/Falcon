import './App.css';
import {useState, useEffect} from 'react';

function App() {


  // gets the current users account info metamask
  const [currentAccount, setCurrentAccount] = useState('');
  // checks to see what network the user is connected to 
  const [correctNetwork, setCorrectNetwork] = useState(false);


  // Call Metamask to connect wallet on clicking Connect Wallet button



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
