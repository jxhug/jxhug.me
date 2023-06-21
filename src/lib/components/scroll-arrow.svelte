<script>
    import { onMount } from "svelte";
    import { slide } from 'svelte/transition';

    export let type;
    export let scroll = () => {};
    let svgPath;
    let isHovered = false;
    
    onMount(() => {
    if (type == "down") {
      svgPath = "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z";
    } else {
      svgPath = "M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z";
    }
  });
</script>

<div class="w-screen justify-center items-center flex flex-col"> 
    {#if isHovered}
    <p class="text-slate-600" transition:slide={{duration: 150}}>
        Next Project
    </p>
    {/if}
    <button class="hover:scale-110 hover:drop-shadow-md transition-all ease-in justify-center items-center" 
    on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false} on:click={
        scroll()
    }>
        <svg class="fill-slate-600" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24"><path d={svgPath}></path></svg>
    </button>
</div>
