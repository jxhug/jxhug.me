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


<div class="flex items-center fixed z-10 object-scale-down">
    <div class="flex w-screen h-screen justify-center sm:flex-row md:flex-col md:translate-x-10 items-end md:items-start">
        {#if isSmallMedia}
        <div class="flex w-screen h-10 justify-center bg-darkwhite absolute">
        </div>
        <div class="flex w-screen justify-center bg-white-transparent-gradient absolute -translate-y-5">
            <SidebarButton name="Home" scroll={scrollToHome} isHovered={isHomeHovered} svgPath={homeSVGPath} {isSmallMedia}/>
            <SidebarButton name="About" scroll={scrollToAbout} isHovered={isAboutHovered} svgPath={aboutSVGPath} {isSmallMedia}/>
            <SidebarButton name="Projects" scroll={scrollToPhoenix} isHovered={isProjectsHovered} svgPath={projectsSVGPath} {isSmallMedia}/>
            <SidebarButton name="Contact" scroll={scrollToContact} isHovered={isContactHovered} svgPath={contactSVGPath} {isSmallMedia}/>
        </div>
        {:else}
        <SidebarButton name="Home" scroll={scrollToHome} isHovered={isHomeHovered} svgPath={homeSVGPath} {isSmallMedia}/>
        <SidebarButton name="About" scroll={scrollToAbout} isHovered={isAboutHovered} svgPath={aboutSVGPath} {isSmallMedia}/>
        <SidebarButton name="Projects" scroll={scrollToPhoenix} isHovered={isProjectsHovered} svgPath={projectsSVGPath} {isSmallMedia}/>
        <SidebarButton name="Contact" scroll={scrollToContact} isHovered={isContactHovered} svgPath={contactSVGPath} {isSmallMedia}/>
        {/if}
    </div> 
</div>

<main class="font-apple overflow-clip snap-y">
    <div class="snap-center" bind:this={homeSection}>
        <Home />
    </div>
    <div class="snap-center" bind:this={aboutSection}>
        <Section>
            <div class="flex h-screen items-center">
                <div class="justify-start w-screen">
                    <div class="text-slate-600 dark:text-darkwhite text-left translate-x-1/4 w-104 space-y-4 font-medium text-ml">
                        <p>
                            I'm James, a {calculateAge(new Date(2008, 1, 6))} year old programmer based in San Francisco, California.
                        </p>

                        <p>
                            I started learning to program in C# using Unity for game development. There weren't many games to play on my Mac and this motivated me to try to make my own. This led to my first game, <button class="text-sky-500 dark:text-sky-300" on:click={() => {
                                scrollToUTQ();
                            }}>Ultimate Tennis Quiz</button>, which is no longer on the App Store due to my lack of an Apple Developer account.
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
                {#if !isSmallMedia}
                <div class="justify-end w-screen translate-x-1/3">
                    <div>
                        <img src="/images/pfps/pfp.jpg" alt="" class="h-96 shadow-md rounded-3xl">
                    </div>
                </div>
                {/if}
            </div> 
        </Section>
    </div>
    <div bind:this={phoenixSection} class="snap-center justify-center">
        <DesktopProject link="https://github.com/Shock9616/Phoenix" name="Phoenix" description="A lightweight and open source game launcher for macOS." tools="Built with Swift and SwiftUI." imageName="phoenix.png" flipped={true}/>
    </div> 
    <div bind:this={utqSection} class="snap-center">
        <MobileProject link="https://github.com/jxhug/UltimateTennisQuiz" name="Ultimate Tennis Quiz" description="A quiz app for tennis fans to test their knowledge of the sport and compete against each other." tools="Built with Unity and C#." imageName="utq.png" flipped={false} />
    </div>  
    <div class="snap-center" bind:this={contactSection}>
        <Section>
            <div class="flex h-screen items-center">
                <div class="justify-center w-screen">
                    <div class="flex flex-row fill-slate-600 dark:fill-darkwhite items-center w-104 space-x-8 justify-center align-middle">
                        <ContactButton onclick={() => {window.location.href="mailto:james@jxhug.me"}} svgPath={mailSVGPath} />
                        <ContactButton onclick={() => {window.open("https://github.com/jxhug")}} svgPath={githubSVGPath} />
                        <ContactButton onclick={() => {window.open("https://twitter.com/@diskutility")}} svgPath={twitterSVGPath} />
                        <ContactButton onclick={() => {window.open("https://discord.com/users/463024798784815105")}} svgPath={discordSVGPath} />
                    </div>
                </div>
            </div> 
        </Section>
        </div>
</main>


