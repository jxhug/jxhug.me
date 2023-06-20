<script>
    export let onclick;
    export let svgPath;
</script>

<button on:click={onclick} class="hover:scale-110 hover:drop-shadow-md transition-all ease-in">
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24"><path d={svgPath}></path></svg>
</button>