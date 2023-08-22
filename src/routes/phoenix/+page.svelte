<script>
    import { scrollTo } from "svelte-scrollto";
    import { MetaTags } from "svelte-meta-tags";

    const download = () => {
        window.open('https://github.com/jxhug/Phoenix/releases/download/v0.0.6/Phoenix.zip')
    }
</script>

<MetaTags
  title="Phoenix Game Launcher"
  description="A beautiful macOS game launcher made with SwiftUI."
  openGraph={{
    url: 'https://www.jxhug.me/phoenix',
    title: 'Phoenix Game Launcher',
    description: 'A beautiful macOS game launcher made with SwiftUI.',
    images: [
        {
            url: '/images/projects/phoenix-icon.webp',
            width: 128,
            height: 128,
            alt: 'Phoenix Icon'
        }
    ],
    site_name: 'Phoenix Game Launcher'
  }}
  twitter={{
    handle: '@diskutility',
    cardType: 'summary_large_image',
    title: 'Phoenix Game Launcher',
    description: 'A beautiful macOS game launcher made with SwiftUI.',
    image: '/images/projects/phoenix-icon.webp',
    imageAlt: 'Phoenix Icon'
  }}
/>

<div class="font-apple bg-white dark:bg-darkergray w-screen snap-y snap-mandatory flex flex-col overflow-y-scroll" id="main">
    <div class="w-screen h-screen bg-gradient-to-b from-orange-100 dark:from-orange-900 snap-start">
        <div class="h-[93vh] flex flex-col justify-center items-center space-y-6">  
            <h1 class="translate-y-12 text-[5.5rem] lg:text-[8rem] xl:text-[10rem] font-bold bg-orange-gradient bg-clip-text text-transparent animate-gradient-cycle bg-200%">Phoenix</h1>
            <h2 class="text-xl md:text-2xl lg:text-[3rem] xl:text-[4rem] font-semibold text-center text-orange-600">A beautiful macOS game launcher</h2>
            <button class="rounded-full w-40 h-12 bg-orange-700 dark:bg-orange-500 flex flex-row items-center justify-center space-x-3 stroke-white dark:stroke-black fill-none" on:click={() => {scrollTo({element: "#footer"})}}>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 inline-flex" viewBox="0 0 14 14"><g stroke-linecap="round" stroke-linejoin="round"><path d="m4 7l3 3.5L10 7m-3 3.5v-7"/><circle cx="7" cy="7" r="6.5"/></g></svg>
                <h1 class="text-[1rem] font-semibold text-center text-white dark:text-black">
                    Download
                </h1>
            </button>
        </div>
        <div class="w-screen flex justify-center items-center">
            <button class="bg-none items-center text-center flex flex-col fill-orange-600 text-orange-700 -translate-y-5" on:click={() => {scrollTo({element: "#page1"})}}>
                see more
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24"><path d="m12 16.175l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.063T11.3 18.3l-4.6-4.6q-.275-.275-.288-.687T6.7 12.3q.275-.275.7-.275t.7.275l3.9 3.875Zm0-6L15.9 6.3q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.062T11.3 12.3L6.7 7.7q-.275-.275-.288-.688T6.7 6.3q.275-.275.7-.275t.7.275l3.9 3.875Z"/></svg>
            </button>
        </div>
    </div>
    <div class="h-screen flex flex-col items-center justify-start snap-start relative" id="page1">
        <div class="h-[93vh] flex flex-col justify-center items-center p-10">  
            <div class="justify-center flex p-16">
                <img src="/images/projects/phoenix-laptop.webp" alt="" class="block dark:hidden w-[90vw] lg:w-[55vw] drop-shadow-4xl-orange">
                <img src="/images/projects/phoenix-laptop-dark.webp" alt="" class="hidden dark:block w-[90vw] lg:w-[55vw] drop-shadow-4xl-orange">
            </div>
            <h2 class="font-semibold tracking-tight text-center text-3xl md:text-4xl xl:text-5xl text-orange-600">
                Open source. Apple silicon native. Built with SwiftUI.
                <br/>
                What's not to like?
            </h2>
        </div>
        <div class="w-screen flex justify-center items-center">
            <button class="bg-none items-center text-center flex flex-col fill-orange-600 text-orange-700 -translate-y-5" on:click={() => {scrollTo({element: "#page2"})}}>
                see more
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24"><path d="m12 16.175l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.063T11.3 18.3l-4.6-4.6q-.275-.275-.288-.687T6.7 12.3q.275-.275.7-.275t.7.275l3.9 3.875Zm0-6L15.9 6.3q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.062T11.3 12.3L6.7 7.7q-.275-.275-.288-.688T6.7 6.3q.275-.275.7-.275t.7.275l3.9 3.875Z"/></svg>
            </button>
        </div>
    </div>
    <div class="h-screen items-center" id="page2">
        <div class="h-[93vh] flex flex-col-reverse lg:flex-row justify-evenly items-center">  
            <h2 class="font-semibold tracking-tight text-center lg:text-left text-4xl lg:text-5xl text-orange-600 w-[80vw] lg:w-auto">
                A lightweight and 
                <br/>
                beautiful macOS interface.
            </h2>
            <div class="justify-center flex p-16">
                <img src="/images/projects/phoenix-side.webp" alt="" class="block dark:hidden w-[80vw] lg:w-[45vw] drop-shadow-sm">
                <img src="/images/projects/phoenix-side-dark.webp" alt="" class="hidden dark:block w-[80vw] lg:w-[45vw] drop-shadow-sm">
            </div>
        </div>
        <div class="w-screen flex justify-center items-center">
            <button class="bg-none items-center text-center flex flex-col fill-orange-600 text-orange-700 -translate-y-5" on:click={() => {scrollTo({element: "#footer"})}}>
                download
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24"><path d="m12 16.175l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.063T11.3 18.3l-4.6-4.6q-.275-.275-.288-.687T6.7 12.3q.275-.275.7-.275t.7.275l3.9 3.875Zm0-6L15.9 6.3q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.062T11.3 12.3L6.7 7.7q-.275-.275-.288-.688T6.7 6.3q.275-.275.7-.275t.7.275l3.9 3.875Z"/></svg>
            </button>
        </div>
    </div>
    <div id="footer" class="h-[50vh] flex flex-col lg:flex-row justify-evenly items-center snap-start relative">
        <h2 class="font-semibold tracking-tight lg:text-left text-3xl lg:text-5xl text-orange-600 p-32 w-[80vw] lg:w-auto">
            Download today
            or contribute on GitHub
        </h2>
        <div class="justify-center items-center inline-flex flex-row space-x-20 -translate-y-10 lg:translate-y-0">
            <button class="rounded-full w-40 h-12 bg-orange-700 dark:bg-orange-500 inline-flex flex-row items-center justify-center space-x-3 stroke-white dark:stroke-black fill-none" on:click={download}>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 inline-flex" viewBox="0 0 14 14"><g stroke-linecap="round" stroke-linejoin="round"><path d="m4 7l3 3.5L10 7m-3 3.5v-7"/><circle cx="7" cy="7" r="6.5"/></g></svg>
                <h1 class="text-[1rem] font-semibold text-center text-white dark:text-black">
                    Download
                </h1>
            </button>
            <button class="rounded-full w-40 h-12 bg-orange-700 dark:bg-orange-500 inline-flex flex-row items-center justify-center space-x-3 fill-white dark:fill-black" on:click={() => {
                window.open('https://github.com/Shock9616/Phoenix/')
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 0 24a12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14a.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028a1.832 1.832 0 0 0-.542-.875a8.014 8.014 0 0 0 2.038-.471a4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13a4.138 4.138 0 0 0-.26-1.476a3.892 3.892 0 0 0-.795-1.284a2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604c0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763a.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26a6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0a13.507 13.507 0 0 0-.572-.362a6.022 6.022 0 0 0-.672-.342a4.516 4.516 0 0 0-.705-.261a2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02a5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773c0 .202.017.404.051.604c.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476a6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516c.415.422.915.75 1.466.964c.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633a2.99 2.99 0 0 0-.2.744a2.754 2.754 0 0 1-1.175.27a1.788 1.788 0 0 1-1.065-.3a2.904 2.904 0 0 1-.752-.824a3.1 3.1 0 0 0-.292-.382a2.693 2.693 0 0 0-.372-.343a1.841 1.841 0 0 0-.432-.24a1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02a.408.408 0 0 0-.13.06a.116.116 0 0 0-.06.1a.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333c.112.098.213.209.3.33c.09.119.168.246.231.381c.073.134.15.288.231.463c.188.474.522.875.954 1.145c.453.243.961.364 1.476.351c.174 0 .349-.01.522-.03c.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z"/></svg>
                <h1 class="text-[1rem] font-semibold text-center text-white dark:text-black">
                    Contribute
                </h1>
            </button>
        </div>
    </div>
</div>

<style>
    #main {
        -webkit-overflow-scrolling: touch;
    }
    * {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
</style>