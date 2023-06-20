<script>
    export let name;
    export let isHovered;
    export let svgPath;
    export let scroll = () => {};
</script>

<div class="flex items-center">
    <div class="justify-center flex items-center" class:space-x-4={isHovered ? 'space-x-4' : ''}>
        <button class="inline-flex p-4 items-center justify-center rounded-full bg-offdarkwhite text-white dark:bg-offdarkergray dark:text-darkwhite shadow-ml transition-all hover:scale-105 ease-in flex-shrink-0" on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false} 
        on:click={
            scroll()
        }>
            <svg class="fill-slate-600 dark:fill-darkwhite"
            xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d={svgPath}/></svg>
        </button>
        <p class="inline-flex px-2.5 py-1.5 items-center justify-center rounded-full bg-offdarkwhite shadow-ml text-slate-600 dark:bg-offdarkergray dark:text-darkwhite transition-all ease-in-out" class:opacity-0={!isHovered} class:opacity-100={isHovered}>
            {name}
        </p>
    </div>
</div>