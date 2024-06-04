<script>
	let projects = [{
		name: "phoenix",
		description: "a lightweight macOS game launcher"
	}]
	import { Mail, Github, Twitter, Bird } from 'lucide-svelte';
</script>

<div class="h-screen w-screen flex flex-col font-manrope dark:bg-black">
	<div class="w-full h-[50vh] flex flex-col items-center justify-center pt-20 space-y-6">
		<img class="w-40 rounded-2xl" src="/images/pfps/pfp rodeo.webp" alt="">
		<div class="flex flex-col items-center justify-evenly text-center space-y-3 w-96">
			<div class="flex flex-row space-x-5">
				<h1 class="text-4xl dark:text-white">👋</h1>
				<h1 class="text-4xl dark:text-white"> heyo! i'm james</h1>
			</div>
			<p class="text-xl text-gray-600 dark:text-gray-500">
				i'm a 16 year old from california that likes to write swift and listen to music!
			</p>
			<div class="flex flex-row space-x-3">
				<button class="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all ease-linear">
					<Mail class="stroke-gray-600"/>
				</button>
				<button class="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:bg-gray-300 transition-all ease-linear">
					<Twitter class="stroke-gray-600"/>
				</button>
				<button class="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all ease-linear" on:click>
					<Github class="stroke-gray-600"/>
				</button>
			</div>
		</div>
	</div>
	<div class="w-full h-[50vh] flex flex-col items-center justify-center pb-20">
		<div class="flex flex-row items-center justify-evenly text-center">
			{#each projects as project}
			<div class="w-72 h-36 border-2 border-gray-300 rounded-3xl p-5 flex flex-col items-start justify-start">
				<div class="flex flex-col text-left">
					<p class="text-xl">{project.name}</p>
					<p class="text-sm">{project.description}</p>
				</div>
			</div>
			{/each}
		</div>
	</div>
</div>