<script>
    export let link;
    export let name;
    export let description;
    export let tools;
    export let imageName;
    export let flipped;
</script>

<div class="overflow-clip h-screen sm:flex sm:snap-center hidden absolute sm:relative bg-darkwhite dark:bg-darkergray">
    <div class={`absolute max-w-4xl max-h-4xl ${flipped ? "right-[30vw]" : "left-[30vw]"} translate-y-1/4`}>
        <img class="object-scale-down animate hover" alt={`Screenshot of ${name}`} src="/images/projects/{imageName}">
    </div>
    <div class={`flex ${flipped ? "flex-row-reverse" : "flex-row"} grow self-center`}>
        <a href={link} target="_blank" rel="noreferrer noopener" class="m-40">
            <div class="flex flex-col transition duration-300 hover:ease-in-out hover:scale-105 text-slate-700 dark:text-darkwhite {flipped ? "text-right" : "text-left"}">
                <h2 class="text-6xl font-extrabold w-max">{name}</h2>
                <p class="text-base">
                    {description}
                    <br/><br/>
                    {tools}
                </p>
            </div>
        </a>
        <div class="w-full" />
    </div>
</div>

<div class="flex flex-col justify-center h-screen sm:hidden relative sm:absolute bg-darkwhite dark:bg-darkergray">
    <div class="max-w-4xl max-h-4xl w-fit justify-center flex">
        <img class="object-scale-down animate hover" alt={`Screenshot of ${name}`} src="/images/projects/{imageName}">
    </div>
    <div class="flex">
        <a href={link} target="_blank" rel="noreferrer noopener" class="m-5 w-fit">
            <div class="flex flex-col transition duration-300 hover:ease-in-out hover:scale-105 text-slate-700 dark:text-darkwhite">
                <h2 class="text-4xl font-extrabold w-screen">{name}</h2>
                <p class="text-base w-screen pr-5">
                    {description}
                    <br/><br/>
                    {tools}
                </p>
            </div>
        </a>
    </div>
</div>
