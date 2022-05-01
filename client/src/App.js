import './App.css';
import {useState, useEffect} from 'react';

function App() {


  // gets the current users account info metamask
  const [currentAccount, setCurrentAccount] = useState('');
  // checks to see what network the user is connected to 
  const [correctNetwork, setCorrectNetwork] = useState(false);


  // Call Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {

    try {


      // Detect the Ethereum provider
      const {ethereum} = window;

      if(!ethereum) {
        console.log('Metamask not detected');
      }

      // get the chain ID of the network the user is connected to
      let chainId = await ethereum.request({method: 'eth_chainId'});
      console.log('Connected to chain: ' + chainId);

      const goerliChainId = '0x5';

      
      if(chainId !== goerliChainId) {
        alert('You are not connected to the Goerli Testnet!');
        setCorrectNetwork(false);
        return;
      } else {
        setCorrectNetwork(true);
      }

      const accounts = await ethereum.request({method: 'eth_requestAccounts'});

      console.log("Found Account", accounts[0]);
      setCurrentAccount(accounts[0]);

    }catch(error) {
      console.log("Error connecting to metamask", error);
    }
  }


  useEffect(() => {
    connectWallet();
  })


  return (
    <div>
    {currentAccount === '' ? (
      <button
      className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
      onClick={connectWallet}
      >
      Connect Wallet
      </button>
      ) : correctNetwork ? (
        <div className="app">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      ) : (
      <div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
      <div>----------------------------------------</div>
      <div>Please connect to the Rinkeby Testnet</div>
      <div>and reload the page</div>
      <div>----------------------------------------</div>
      </div>
    )}
    </div>
  );
}

export default App;
