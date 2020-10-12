import InteractiveNFT from 'utils/InteractiveNFT.json';

const initContract = (w3) => {
  try {
    console.log("ADDRESS: ", w3.eth.accounts[0]);
    return new w3.eth.Contract(
      InteractiveNFT.abi,
      '0x782A050fAA63b4Dbb83Dc9D37a1d84DB7be5A237',
    );
  } catch(e) {
    console.log(e);
  }
}

export default initContract;
