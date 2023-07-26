<script>
    export let link;
    export let name;
    export let description;
    export let tools;
    export let imageName;
    export let flipped = false;
</script>

<div class="w-full flex justify-evenly mb-20 {flipped ? 'flex-row-reverse' : 'flex-row'}">
    <div class="w-2/5 flex flex-col justify-center">
        <img src="images/projects/{imageName}" alt="Screenshot of {name}" class="drop-shadow-sm">
    </div>
    <div class="w-2/5 flex flex-col justify-center text-slate-700">
        <h1 class="font-bold text-5xl">
            {name}
        </h1>
        <p class="text-xl">
            {description}
    </div>
</div>
