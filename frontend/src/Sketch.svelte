<script>
  import p5 from 'p5';
  import { onMount } from "svelte";

  export let sketch;
  export let id;

  onMount(() => {
    try {
      // convert the string to a runnable function
      let s = new Function(`return ${sketch}`)();

      // instantiate a new p5 sketch instance
      let render = new p5(s, id);
    } catch(e) {
      console.log(e);
    }
  });
</script>

<div {id}></div>
