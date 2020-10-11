<script>
  import Sketch from "./Sketch.svelte"
  import {line, clock, whiteBox} from "./sketch.js"
  import web3 from "../../ethereum/web3";
  import InteractiveNFT from '../../ethereum/InteractiveNFT';

  let count = 0;

  async function mintEmpty() {
    try {
      const accounts = await web3.eth.getAccounts();
      await InteractiveNFT.methods
        .mint("")
        .send({
          from: accounts[0]
        });
        count++;
    } catch(err) {
      console.log(err);
    }


  }
</script>

<button on:click={mintEmpty}>{count} tokens minted</button>
<Sketch id="sketch1" sketch={whiteBox} />
<Sketch id="sketch3" sketch={line} />
<Sketch id="sketch3" sketch={clock} />
