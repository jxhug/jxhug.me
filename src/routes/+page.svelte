<script>    

    import Section from "$lib/components/section.svelte";
    import Home from "$lib/components/home.svelte";
    import SidebarButton from "$lib/components/sidebar-button.svelte";
    import DesktopProject from "$lib/components/desktop-project.svelte";
    import MobileProject from "$lib/components/mobile-project.svelte";
    import ContactButton from "$lib/components/contact-button.svelte";
    import ScrollArrow from "$lib/components/scroll-arrow.svelte";

    import { homeSVGPath, aboutSVGPath, projectsSVGPath, contactSVGPath, mailSVGPath, githubSVGPath, twitterSVGPath, discordSVGPath } from '$lib/svgs.js'

    let homeSection;
    let aboutSection;
    let contactSection;
    let utqSection;
    let phoenixSection;

    let isHomeHovered = false;
    let isProjectsHovered = false;
    let isAboutHovered = false;
    let isContactHovered = false;

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

<div class="h-screen flex flex-col fixed z-10 justify-center translate-x-10">
    <div class="space-y-3">
        <SidebarButton name="Home" scroll={scrollToHome} isHovered={isHomeHovered} svgPath={homeSVGPath} />
        <SidebarButton name="About" scroll={scrollToAbout} isHovered={isAboutHovered} svgPath={aboutSVGPath} />
        <SidebarButton name="Projects" scroll={scrollToUTQ} isHovered={isProjectsHovered} svgPath={projectsSVGPath} />
        <SidebarButton name="Contact" scroll={scrollToContact} isHovered={isContactHovered} svgPath={contactSVGPath} />
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
                        <img src="/images/pfps/pfp.jpg" alt="" class="h-96 shadow-md rounded-3xl">
                    </div>
                </div>
            </div> 
        </Section>
    </div>
    <div class="snap-center h-screen bg-darkwhite flex flex-col">
        <div bind:this={utqSection} class="snap-center">
            <MobileProject link="https://apps.apple.com/us/app/ultimate-tennis-quiz/id1641028778" name="Ultimate Tennis Quiz" description="A quiz app for tennis fans to test their knowledge of the sport and compete against each other." tools="Built with Unity and C#." imageName="utq.png" flipped={false} />
        </div>  
        <ScrollArrow type="down" scroll={scrollToPhoenix}/> 
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


