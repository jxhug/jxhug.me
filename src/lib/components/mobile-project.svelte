<script>
    export let section;
    export let link;
    export let name;
    export let description;
    export let tools;
    export let imageName;
</script>

<div class="flex h-screen items-center overflow-clip bg-darkwhite dark:bg-darkergray" bind:this={section}>
    <div class="justify-start translate-x-2/3">
        <img src="/images/projects/{imageName}" alt={name} class="w-96">
    </div>
    <div class="justify-end w-screen -translate-x-1/10">
        <div class="text-slate-600 text-right text-ml dark:text-darkwhite">
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
</div>