<script>
    export let link;
    export let name;
    export let description;
    export let tools;
    export let imageName;
    export let flipped;
</script>

<div class="bg-darkwhite dark:bg-darkergray overflow-clip mt-36">
    <div class="flex items-center {flipped ? "flex-row-reverse" : "flex-row"}">
        <img src="/images/projects/{imageName}" alt={name} class="w-200 ml-40">
        <div class="text-slate-600 {flipped ? "text-left" : "text-right"} text-ml dark:text-darkwhite ml-40 -mr-40">
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

