<script>
    export let section;
    export let link;
    export let name;
    export let description;
    export let tools;
    export let imageName;
</script>

<div class="flex h-screen items-center snap-center overflow-clip bg-darkwhite dark:bg-darkergray" bind:this={section}>
    <div class="justify-start w-screen">
        <div class="text-slate-600 text-left translate-x-1/3 text-ml dark:text-darkwhite">
            <a class="inline-block text-6xl font-extrabold hover:scale-102 transition-all ease-linear" href={link} target="_blank">
                {name}
            </a>
            <p>
                {description}
            </p>
            <p>
                {tools}
            </p>
        </div>
    </div>
    <div class="justify-end min-w-screen translate-x-1/20">
        <div>
            <img src="/images/projects/{imageName}" alt={name} class="w-auto scale-90">
        </div>
    </div>
</div>

<style lang="postcss">

</style>