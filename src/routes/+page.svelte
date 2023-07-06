<script>    

    import Section from "$lib/components/section.svelte";
    import Home from "$lib/components/home.svelte";
    import SidebarButton from "$lib/components/sidebar-button.svelte";
    import DesktopProject from "$lib/components/desktop-project.svelte";
    import MobileProject from "$lib/components/mobile-project.svelte";
    import ContactButton from "$lib/components/contact-button.svelte";
    import ScrollArrow from "$lib/components/scroll-arrow.svelte";

    import { homeSVGPath, aboutSVGPath, projectsSVGPath, contactSVGPath, mailSVGPath, githubSVGPath, twitterSVGPath, discordSVGPath } from '$lib/svgs.js'

    import { onMount } from 'svelte';

    let homeSection;
    let aboutSection;
    let contactSection;
    let utqSection;
    let phoenixSection;

    let isHomeHovered = false;
    let isProjectsHovered = false;
    let isAboutHovered = false;
    let isContactHovered = false;

    let isSmallMedia = false;

    onMount(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        handleMediaChange(mediaQuery);
        mediaQuery.addEventListener('change', handleMediaChange);
    });

    function handleMediaChange(event) {
        isSmallMedia = event.matches;
    }

    const calculateAge = (birthday) => {
        var today = new Date();
        var age = today.getFullYear() - birthday.getFullYear();
        var m = today.getMonth() - birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }
        return age;
    }

    const scrollToHome = () => {
        homeSection.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToAbout = () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToUTQ = () => {
        utqSection.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToPhoenix = () => {
        phoenixSection.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToContact = () => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
</script>



<main class="font-apple overflow-hidden snap-y">
    <div class="fixed z-10">
        {#if isSmallMedia}
        <div class="fixed inset-x-0 bottom-0 flex items-end justify-center">
            <div class="flex w-screen h-10 justify-center bg-darkwhite dark:bg-darkergray absolute">
            </div>
            <div class="flex w-screen justify-center bg-white-transparent-gradient dark:bg-black-transparent-gradient absolute -translate-y-5">
                <SidebarButton name="Home" scroll={scrollToHome} isHovered={isHomeHovered} svgPath={homeSVGPath} {isSmallMedia}/>
                <SidebarButton name="About" scroll={scrollToAbout} isHovered={isAboutHovered} svgPath={aboutSVGPath} {isSmallMedia}/>
                <SidebarButton name="Projects" scroll={scrollToPhoenix} isHovered={isProjectsHovered} svgPath={projectsSVGPath} {isSmallMedia}/>
                <SidebarButton name="Contact" scroll={scrollToContact} isHovered={isContactHovered} svgPath={contactSVGPath} {isSmallMedia}/>
            </div>
        </div>
        {:else}
        <div class="translate-x-10 h-screen flex flex-col justify-center">
            <SidebarButton name="Home" scroll={scrollToHome} isHovered={isHomeHovered} svgPath={homeSVGPath} {isSmallMedia}/>
            <SidebarButton name="About" scroll={scrollToAbout} isHovered={isAboutHovered} svgPath={aboutSVGPath} {isSmallMedia}/>
            <SidebarButton name="Projects" scroll={scrollToPhoenix} isHovered={isProjectsHovered} svgPath={projectsSVGPath} {isSmallMedia}/>
            <SidebarButton name="Contact" scroll={scrollToContact} isHovered={isContactHovered} svgPath={contactSVGPath} {isSmallMedia}/>
        </div>
        {/if}
    </div>
    <div class="snap-center" bind:this={homeSection}>
        <Home />
    </div>
    <div class="snap-center" bind:this={aboutSection}>
        <Section>
            <div class="flex h-screen items-center">
                <div class="justify-start w-screen">
                    <div class="text-slate-600 dark:text-darkwhite text-left md:translate-x-1/4 space-y-4 font-medium text-sm sm:text-base md:text-ml object-scale-down p-5">
                        <p>
                            I'm James, a {calculateAge(new Date(2008, 1, 6))} year old programmer based in San Francisco, California.
                            <br/><br/>
                            I started learning to program in C# using Unity for game development. There weren't many games to play on my Mac and this motivated me to try to make my own. This led to my first game, <button class="text-sky-500 dark:text-sky-300 hover:text-indigo-500 transition-all ease-linear" on:click={() => {
                                scrollToUTQ();
                            }}>Ultimate Tennis Quiz</button>, which was on the App Store in 2022.
                            <br/><br/>
                            Now I'm in the midst of learning web development. I started out by making a web game to learn the basics of HTML, CSS, and JavaScript. I then moved on to learning Svelte, which is what this website is built with. You can find the <a class="text-sky-500 dark:text-sky-300 hover:text-indigo-500 transition-all ease-linear" href="https://github.com/jxhug/jxhug.me">source code</a> on Github.
                            <br/><br/>
                            In the future, I'd like to get a better understanding of Swift, because I've only dabbled in it. Learning lower level languages like C++ and Rust would also be something I'd like to do in the future, along with collaborating with other developers. I've had a lot of fun working with other people on the game launcher <button class="text-sky-500 dark:text-sky-300 hover:text-indigo-500 transition-all ease-linear" on:click={() => {
                                scrollToPhoenix();
                            }}>Phoenix</button>, and I'd like to do more projects like that in the future.
                            <br/><br/>
                            You can view my projects that are polished enough to show off below.
                        </p>
                    </div>
                </div>
                {#if !isSmallMedia}
                <div class="justify-end w-screen translate-x-1/3">
                    <div>
                        <img src="/images/pfps/pfp.jpg" alt="" class="md:h-40 lg:h-96 shadow-md rounded-3xl">
                    </div>
                </div>
                {/if}
            </div> 
        </Section>
    </div>
    <div bind:this={phoenixSection} class="snap-center justify-center">
        <DesktopProject link="https://github.com/Shock9616/Phoenix" name="Phoenix" description="A lightweight and open source game launcher for macOS." tools="Built with Swift and SwiftUI." imageName="phoenix.png" flipped={true} />
    </div> 
    <div bind:this={utqSection} class="snap-center">
        <MobileProject link="https://github.com/jxhug/UltimateTennisQuiz" name="Ultimate Tennis Quiz" description="A quiz app for tennis fans to test their knowledge of the sport and compete against each other." tools="Built with Unity and C#." imageName="utq.png" flipped={false} />
    </div>  
    <div class="snap-center" bind:this={contactSection}>
        <Section>
            <div class="flex h-screen items-center justify-center">
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 fill-slate-600 dark:fill-darkwhite">
                    <ContactButton onclick={() => {window.location.href="mailto:james@jxhug.me"}} svgPath={mailSVGPath} ariaLabel="My Email" />
                    <ContactButton onclick={() => {window.open("https://github.com/jxhug")}} svgPath={githubSVGPath} ariaLabel="My Github" />
                    <ContactButton onclick={() => {window.open("https://twitter.com/@diskutility")}} svgPath={twitterSVGPath} ariaLabel="My Twitter" />
                    <ContactButton onclick={() => {window.open("https://discord.com/users/463024798784815105")}} svgPath={discordSVGPath} ariaLabel="My Discord" />
                </div>
            </div> 
        </Section>
    </div>
</main>


