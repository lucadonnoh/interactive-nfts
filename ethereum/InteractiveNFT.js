import web3 from './web3';
import InteractiveNFT from './build/contracts/InteractiveNFT.json';

const instance = new web3.eth.Contract(
    InteractiveNFT.abi,
    '0x782A050fAA63b4Dbb83Dc9D37a1d84DB7be5A237'
);

export default instance;