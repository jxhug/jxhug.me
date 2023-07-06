<script>
    export let link;
    export let name;
    export let description;
    export let tools;
    export let imageName;
    export let flipped;
</script>

<div class="overflow-clip h-screen sm:flex sm:snap-center hidden absolute sm:relative bg-darkwhite dark:bg-darkergray">
    <div class={`absolute max-w-4xl max-h-4xl ${flipped ? "right-[72vw]" : "left-[72vw]"} ${flipped ? "translate-x-1/3" : "-translate-x-1/3"} translate-y-[8vh]`}>
        <img class="object-scale-down animate hover" alt="Picture of {name} on an iPhone" src="/images/projects/{imageName}">
    </div>
    <div class={`flex ${flipped ? "flex-row-reverse" : "flex-row"} grow self-center`}>
        <a href={link} target="_blank" rel="noreferrer noopener" class="m-40">
            <div class="flex flex-col transition duration-300 hover:ease-in-out hover:scale-105 text-slate-600 dark:text-darkwhite {flipped ? "text-right" : "text-left"}">
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

<div class="flex flex-col justify-center h-screen sm:hidden relative sm:absolute bg-darkwhite">
    <div class="max-w-4xl max-h-4xl w-fit justify-center flex">
        <img class="object-scale-down animate hover w-1/2" alt="Picture of {name} on an iPhone" src="/images/projects/{imageName}">
    </div>
    <div class="flex">
        <a href={link} target="_blank" rel="noreferrer noopener" class="p-5 w-fit">
            <div class="flex flex-col transition duration-300 hover:ease-in-out hover:scale-105 text-slate-600">
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

