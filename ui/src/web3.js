import Web3 from 'web3'

const intializeWeb3 = async () => {
  if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    let w3;

    // metamask
    if (window.ethereum) {
      w3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        console.log("Accounts now exposed!", w3.eth);
        let accounts = await w3.eth.getAccounts();
        console.log("Account exposed: ", accounts);
      } catch(e) {
        // User denied access
        console.log(e);
      }
    }

    // legacy dapp browsers
    else if (window.web3) {
      w3 = new Web3(window.web3.currentProvider);
      console.log("Injected web3 detected!");
    }

    return w3;
  }
  
  //We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    process.env.INFURA_API_KEY
  );

  return new Web3(provider);
};

export default intializeWeb3;
