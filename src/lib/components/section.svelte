<script>
    export let section;
</script>

<div bind:this={section} class="relative h-screen bg-darkwhite dark:bg-darkergray snap-center overflow-clip">
    <slot></slot>
</div>