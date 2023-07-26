<script>
    import { onMount } from "svelte";

    export let name;
    export let isHovered;
    export let svgPath;
    export let scroll = () => {};
    export let ariaLabel;
</script>

<div class="flex items-center p-2 sm:p-2.5 md:p-2 object-scale-down">
    <div class="flex items-center" class:md:space-x-4={isHovered ? 'md:space-x-4' : ''}>
        <button aria-label={ariaLabel} class="inline-flex p-4 items-center justify-center rounded-full bg-offdarkwhite text-white dark:bg-offdarkergray dark:text-darkwhite shadow-ml transition-all hover:scale-105 ease-in flex-shrink-0" on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false} 
        on:click={
            scroll()
        }>
            <svg class="fill-slate-700 dark:fill-darkwhite"
            xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d={svgPath}/></svg>
        </button>
        <p class="sm:inline-flex hidden px-2.5 py-1.5 items-center justify-center rounded-full bg-offdarkwhite shadow-ml text-slate-700 dark:bg-offdarkergray dark:text-darkwhite transition-all ease-in-out" class:opacity-0={!isHovered} class:opacity-100={isHovered}>
            {name}
        </p>
    </div>
</div>