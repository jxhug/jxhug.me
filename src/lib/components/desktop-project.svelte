<script>
    export let link;
    export let name;
    export let description;
    export let tools;
    export let imageName;
    export let flipped;
</script>

<div class="bg-darkwhite dark:bg-darkergray overflow-clip h-screen flex items-center justify-center">
    <div class="flex items-center flex-col {flipped ? "md:flex-row-reverse" : "md:flex-row"} mx-auto translate-x-12">
        <img src="/images/projects/{imageName}" alt={name} class="md:w-200 mr-24 md:mr-10 drop-shadow">
        <div class="text-slate-600 {flipped ? "md:text-left" : "md:text-right"} text-base dark:text-darkwhite -ml-3 md:ml-28 mr-10 w-fit pr-10">
            <a class="inline-block text-6xl font-extrabold hover:scale-105 transition-all ease-linear" href={link} target="_blank">
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

