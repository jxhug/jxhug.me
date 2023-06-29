<script>
    export let link;
    export let name;
    export let description;
    export let tools;
    export let imageName;
    export let flipped;
</script>

<div class="bg-darkwhite dark:bg-darkergray overflow-clip h-screen flex items-center justify-center">
    <div class="flex items-center {flipped ? "flex-row-reverse" : "flex-row"}">
        <img src="/images/projects/{imageName}" alt={name} class="w-80 ml-24">
        <div class="text-slate-600 {flipped ? "text-left" : "text-right"} text-ml dark:text-darkwhite ml-20 mr-20">
            <a class="inline-block text-6xl font-extrabold hover:scale-105 transition-all ease-linear" href={link} target="_blank">
                {name}
            </a>
            <p>
                {description}
            </p>
            <p>
                No longer on the App Store due to my lack of an Apple Developer account.
            </p>
            <p>
                {tools}
            </p>
        </div>
    </div>
</div>

