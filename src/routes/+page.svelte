<script>    

    let homeSection;
    let projectsSection;
    let aboutSection;
    let contactSection;
    let phoenixSection;

    let isHomeHovered = false;
    let isProjectsHovered = false;
    let isAboutHovered = false;
    let isContactHovered = false;

    const scrollToHome = () => {
        homeSection.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToProjects = () => {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToAbout = () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToContact = () => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToPhoenix = () => {
        phoenixSection.scrollIntoView({ behavior: 'smooth' });
    }

</script>


<main class="font-apple overflow-hidden relative">
    <div class="h-screen flex flex-col fixed z-10 justify-center translate-x-10">
        <div class="space-y-3">
            <div class="flex items-center">
                <div class="justify-center flex items-center" class:space-x-4={isHomeHovered ? 'space-x-4' : ''}>
                    <button class="inline-flex p-4 items-center justify-center rounded-full bg-offdarkwhite text-white dark:bg-offdarkergray dark:text-darkwhite shadow-ml transition-all hover:scale-105 ease-in flex-shrink-0" on:mouseenter={() => isHomeHovered = true} on:mouseleave={() => isHomeHovered = false} on:click={() => {
                        scrollToHome();
                    }}>
                        <svg class="fill-slate-600 dark:fill-darkwhite"
                        xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"/></svg>
                    </button>
                    <p class="inline-flex px-2.5 py-1.5 items-center justify-center rounded-full bg-offdarkwhite shadow-ml text-slate-600 dark:bg-offdarkergray dark:text-darkwhite transition-all ease-in-out" class:opacity-0={!isHomeHovered} class:opacity-100={isHomeHovered}>
                        Home
                    </p>
                </div>
            </div>
            <div class="flex items-center">
                <div class="justify-center flex items-center" class:space-x-4={isAboutHovered ? 'space-x-4' : ''}>
                    <button class="inline-flex p-4 items-center justify-center rounded-full bg-offdarkwhite dark:bg-offdarkergray dark:text-darkwhite shadow-ml transition-all hover:scale-105 ease-in flex-shrink-0" on:mouseenter={() => isAboutHovered = true} on:mouseleave={() => isAboutHovered = false} on:click={() => {
                        scrollToAbout();
                    }}>
                        <svg class="fill-slate-600 dark:fill-darkwhite"
                        xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2zm4-7c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5 4.5 6.505 4.5 8.5 6.005 12 8 12z"/></svg>
                    </button>
                    <p class="inline-flex px-2.5 py-1.5 items-center justify-center rounded-full bg-offdarkwhite shadow-ml text-slate-600 dark:bg-offdarkergray dark:text-darkwhite transition-all ease-in-out" class:opacity-0={!isAboutHovered} class:opacity-100={isAboutHovered}>
                        About
                    </p>
                </div>
            </div>
            <div class="flex items-center">
                <div class="justify-center flex items-center" class:space-x-4={isProjectsHovered ? 'space-x-4' : ''}>
                    <button class="inline-flex p-4 items-center justify-center rounded-full bg-offdarkwhite text-white dark:bg-offdarkergray dark:text-darkwhite shadow-ml transition-all hover:scale-105 ease-in flex-shrink-0" on:mouseenter={() => isProjectsHovered = true} on:mouseleave={() => isProjectsHovered = false} on:click={() => {
                        scrollToProjects();
                    }}>
                        <svg class="fill-slate-600 dark:fill-darkwhite"
                        xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"/></svg>
                    </button>
                    <p class="inline-flex px-2.5 py-1.5 items-center justify-center rounded-full bg-offdarkwhite shadow-ml text-slate-600 dark:bg-offdarkergray dark:text-darkwhite transition-all ease-in-out" class:opacity-0={!isProjectsHovered} class:opacity-100={isProjectsHovered}>
                        Projects
                    </p>
                </div>
            </div>
            <div class="flex items-center">
                <div class="justify-center flex items-center" class:space-x-4={isContactHovered ? 'space-x-4' : ''}>
                    <button class="inline-flex p-4 items-center justify-center rounded-full bg-offdarkwhite text-white dark:bg-offdarkergray dark:text-darkwhite shadow-ml transition-all hover:scale-105 ease-in flex-shrink-0" on:mouseenter={() => isContactHovered = true} on:mouseleave={() => isContactHovered = false} on:click={() => {
                        scrollToContact();
                    }}>
                        <svg class="fill-slate-600 dark:fill-darkwhite"
                        xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z"/></svg>
                    </button>
                    <p class="inline-flex px-2.5 py-1.5 items-center justify-center rounded-full bg-offdarkwhite shadow-ml text-slate-600 dark:bg-offdarkergray dark:text-darkwhite transition-all ease-in-out" class:opacity-0={!isContactHovered} class:opacity-100={isContactHovered}>
                        Contact
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div bind:this={homeSection} class="relative">
        <div class="h-screen">
            <div class="bg-lightdesktopjames bg-cover h-screen dark:bg-darkdesktopjames"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-darkwhite to-transparent pointer-events-none dark:from-darkergray">
                <div class="flex flex-col translate-x-3/20 justify-center h-screen">
                    <div class="font-extrabold text-slate-600 text-8xl dark:text-darkwhite">
                        <h1 class="">
                            Hey there,
                        </h1>
                        <h1 class="">
                            I'm
                            <span class="bg-gradient animate-gradient-cycle bg-clip-text text-transparent bg-200%">James</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div bind:this={aboutSection} class="relative h-screen bg-darkwhite dark:bg-darkergray">
        <div class="flex h-screen items-center">
            <div class="justify-start w-screen">
                <div class="text-slate-600 dark:text-darkwhite text-left translate-x-1/4 w-104 space-y-4 font-medium text-ml">
                    <p>
                        I'm James, a 15 year old programmer based in San Francisco, California.
                    </p>

                    <p>
                        I started learing to program in C# using Unity for game development. There weren't many games to play on my Mac and this motivated me to try to make my own. This led to my first game, <button class="text-sky-500 dark:text-sky-300" on:click={() => {
                            scrollToProjects();
                        }}>Ultimate Tennis Quiz</button>, which has a pretty self explanatory name.
                    </p>
                    <p>
                        Now I'm in the midst of learning web development. I started out by making a web game whilst abroad in the UK to learn the basics of HTML, CSS, and JavaScript. I then moved on to learning Svelte, which is what this website is built with.
                    </p>
                    <p>
                        In the future, I'd like to get a better understanding of Swift, because I've only dabbled in it. Learning lower level languages like C++ and Rust would also be something I'd like to do in the future, along with collaborating with other developers. I've had a lot of fun working with other people on the game launcher <button class="text-sky-500 dark:text-sky-300" on:click={() => {
                            scrollToPhoenix();
                        }}>Phoenix</button>, and I'd like to do more projects like that in the future.
                    </p>
                    <p>
                        You can view my projects that are polished enough to show off below.
                    </p>
                </div>
            </div>
            <div class="justify-end w-screen translate-x-1/3">
                <div>
                    <img src="/images/pfps/pfp.png" alt="" class="h-96 shadow-md rounded-3xl">
                </div>
            </div>
        </div> 
    </div>
    <div bind:this={projectsSection} class="relative bg-darkwhite dark:bg-darkergray">
        <div class="flex h-screen items-center">
            <div class="justify-start translate-x-2/3">
                <img src="/images/projects/utq.png" alt="" class="w-96">
            </div>
            <div class="justify-end w-screen -translate-x-1/10">
                <div class="text-slate-600 text-right text-ml dark:text-darkwhite">
                    <a class="inline-block text-6xl font-extrabold hover:scale-102 transition-all ease-linear" href="https://apps.apple.com/us/app/ultimate-tennis-quiz/id1641028778" target="_blank">
                        Ultimate Tennis Quiz
                    </a>
                    <p>
                        A quiz app for tennis fans to test their knowledge of the sport and compete against each other.
                    </p>
                    <p>
                        Built with Unity and C#.
                    </p>
                </div>
            </div>
        </div>
        <div class="flex h-screen items-center" bind:this={phoenixSection}>
            <div class="justify-start w-screen">
                <div class="text-slate-600 text-left translate-x-1/3 text-ml dark:text-darkwhite">
                    <a class="inline-block text-6xl font-extrabold hover:scale-102 transition-all ease-linear" href="https://github.com/Shock9616/Phoenix" target="_blank">
                        Phoenix
                    </a>
                    <p>
                        An fast, small, open source game launcher for macOS.
                    </p>
                    <p>
                        Built with Swift and SwiftUI.
                    </p>
                </div>
            </div>
            <div class="justify-end min-w-screen translate-x-1/20">
                <div>
                    <img src="/images/projects/phoenix.png" alt="" class="w-auto scale-90">
                </div>
            </div>
        </div>
    </div>
    <div bind:this={contactSection} class="relative h-screen bg-darkwhite dark:bg-darkergray">
        <div class="flex h-screen items-center">
            <div class="justify-center w-screen">
                <div class="flex flex-row fill-slate-600 dark:fill-darkwhite items-center w-104 space-x-8 justify-center align-middle">
                    <button on:click={() => {window.location.href="mailto:james@jxhug.me"}} class="hover:scale-110 hover:drop-shadow-md transition-all ease-in">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"/></svg>
                    </button>
                    <button on:click={() => {window.open("https://github.com/jxhug")}} class="hover:scale-110 hover:drop-shadow-md transition-all ease-in">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/></svg>
                    </button>
                    <button on:click={() => {window.open("https://twitter.com/@diskutility")}} class="hover:scale-110 hover:drop-shadow-md transition-all ease-in">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"/></svg>
                    </button>
                    <button on:click={() => {window.open("https://discord.com/users/463024798784815105")}} class="hover:scale-110 hover:drop-shadow-md transition-all ease-in">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24"><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"/></svg>
                    </button>
                </div>
            </div>
        </div> 
    </div>
</main>


