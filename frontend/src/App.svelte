<script>
  import Sketch from "./Sketch.svelte"
  import {line, clock, whiteBox} from "./sketch.js"
  import web3 from "../../ethereum/web3";
  import InteractiveNFT from '../../ethereum/InteractiveNFT';
</script>

<Sketch id="sketch1" sketch={whiteBox} />
<Sketch id="sketch3" sketch={line} />
<Sketch id="sketch3" sketch={clock} />
