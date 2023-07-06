<script>
    export let onclick;
    export let svgPath;
    export let ariaLabel;
</script>

<button on:click={onclick} class="hover:scale-110 hover:drop-shadow-md transition-all ease-in" aria-label={ariaLabel}>
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24"><path d={svgPath}></path></svg>
</button>