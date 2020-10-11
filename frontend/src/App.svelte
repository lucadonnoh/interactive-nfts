<script>
  import Sketch from "./Sketch.svelte"
  import {line, clock, whiteBox} from "./sketch.js"
</script>

<Sketch id="sketch1" sketch={whiteBox} />
<Sketch id="sketch3" sketch={line} />
<Sketch id="sketch3" sketch={clock} />
