<script>    
    import Home from "$lib/components/home.svelte";
    import SidebarButton from "$lib/components/sidebar-button.svelte";
    import Project from "$lib/components/project.svelte";
    import ContactButton from "$lib/components/contact-button.svelte";

    import { MetaTags } from "svelte-meta-tags";

    import { homeSVGPath, aboutSVGPath, projectsSVGPath, contactSVGPath, mailSVGPath, githubSVGPath, twitterSVGPath, discordSVGPath } from '$lib/svgs.js'

    let homeSection;
    let aboutSection;
    let projectSection;
    let contactSection;

    let isHomeHovered = false;
    let isProjectsHovered = false;
    let isAboutHovered = false;
    let isContactHovered = false;

    // const calculateAge = (birthday) => {
    //     var today = new Date();
    //     var age = today.getFullYear() - birthday.getFullYear();
    //     var m = today.getMonth() - birthday.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    //         age--;
    //     }
    //     return age;
    // }

    const scrollToHome = () => {
        homeSection.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToAbout = () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToProjects = () => {
        projectSection.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToContact = () => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<MetaTags
  title="James Hughes"
  description="Hey there, I'm James; a developer from California."
  openGraph={{
    url: 'https://www.jxhug.me',
    title: 'James Hughes',
    description: "Hey there, I'm James; a developer from California.",
    images: [
        {
            url: '/images/favicon.webp',
            width: 128,
            height: 128,
            alt: 'San Francisco'
        }
    ],
    site_name: 'James Hughes'
  }}
  twitter={{
    handle: '@diskutility',
    title: 'James Hughes',
    description: "Hey there, I'm James; a developer from California.",
    image: '/images/favicon.webp',
    imageAlt: 'San Francisco'
  }}
/>



<main class="font-manrope overflow-hidden">
    <div class="fixed z-10">
        <div class="fixed inset-x-0 bottom-0 flex items-end justify-center sm:hidden">
            <div class="flex w-screen h-10 justify-center bg-darkwhite dark:bg-darkergray absolute">
            </div>
            <div class="flex w-screen justify-center bg-gradient-to-t from-darkwhite via-darkwhite dark:from-darkergray dark:via-darkergray absolute -translate-y-5">
                <SidebarButton name="Home" scroll={scrollToHome} isHovered={isHomeHovered} svgPath={homeSVGPath} ariaLabel="Home"/>
                <SidebarButton name="About" scroll={scrollToAbout} isHovered={isAboutHovered} svgPath={aboutSVGPath} ariaLabel="About"/>
                <SidebarButton name="Projects" scroll={scrollToProjects} isHovered={isProjectsHovered} svgPath={projectsSVGPath} ariaLabel="Projects"/>
                <SidebarButton name="Contact" scroll={scrollToContact} isHovered={isContactHovered} svgPath={contactSVGPath} ariaLabel="Contact"/>
            </div>
        </div>
        <div class="translate-x-10 h-screen flex-col justify-center hidden sm:flex">
            <SidebarButton name="Home" scroll={scrollToHome} isHovered={isHomeHovered} svgPath={homeSVGPath} ariaLabel="Home"/>
            <SidebarButton name="About" scroll={scrollToAbout} isHovered={isAboutHovered} svgPath={aboutSVGPath} ariaLabel="About"/>
            <SidebarButton name="Projects" scroll={scrollToProjects} isHovered={isProjectsHovered} svgPath={projectsSVGPath} ariaLabel="Projects"/>
            <SidebarButton name="Contact" scroll={scrollToContact} isHovered={isContactHovered} svgPath={contactSVGPath} ariaLabel="Contact"/>
        </div>
    </div>
    <div bind:this={homeSection} class="h-screen">
        <Home />
    </div>
    <div bind:this={aboutSection}>
        <div>
            <div class="flex h-screen items-center">
                <div class="justify-start w-screen">
                    <div class="text-slate-700 font-medium dark:text-darkwhite text-left md:translate-x-1/4 text-lg lg:text-xl sm:text-base md:text-[1.05rem] tracking-normal object-scale-down p-5 sm:px-40 lg:p-0">
                        Hey there, I'm James; a developer from California. I'm currently in my sophomore year of high school and I have a passion for software development and design. In my free time I enjoy working on various coding projects, playing tennis, and playing video games.
                        <br/>
                        <br/>
                        To learn more about what I've done see my <button type='button' class='inline text-sky-500 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-600 transition-colors ease-in-out duration-75' on:click={() => {
                            scrollToProjects()
                        }}>
                            projects.
                        </button>
                    </div>
                </div>
                <div class="hidden md:block justify-end w-screen translate-x-1/3">
                    <div class="p-10 object-scale-down w-1/2">
                        <img src="/images/pfps/pfp.webp" alt="San Francisco" class="md:w-96 shadow-md rounded-3xl object-scale-down">
                    </div>
                </div>
            </div> 
        </div>
    </div>
    <div bind:this={projectSection} class="space-y-32 md:space-y-20 lg:space-y-0">
        <div class="h-screen">
            <div class="w-[90vw] h-1/2">
                <Project link="https://phoenixlauncher.app" name="Phoenix" description="A lightweight and open source game launcher for macOS." tools="Built with Swift and SwiftUI." imageName="phoenix" flipped={true} mobile={false} />
            </div> 
            <div class="w-[90vw] h-1/2">
                <Project link="https://www.spigotmc.org/resources/biomerace.96241/" name="BiomeRace" description="A Minecraft plugin where players race to see who can find a random biome first!" tools="Built with Java and Spigot." imageName="biomerace" flipped={false} mobile={false}/>
            </div> 
        </div>
        <div class="w-[90vw] h-1/2">
            <Project link="https://github.com/jxhug/UltimateTennisQuiz" name="Ultimate Tennis Quiz" description="A quiz app for tennis fans to test their knowledge of the sport and compete against each other. Was on the App Store from 2021-2023." tools="Built with Unity and C#." imageName="utq" flipped={true} mobile={true}/>
        </div>  
    </div>
    <div  bind:this={contactSection}>
        <div class="flex h-screen items-center justify-center">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 fill-slate-700 dark:fill-darkwhite">
                <ContactButton onclick={() => {window.location.href="mailto:james@jxhug.me"}} svgPath={mailSVGPath} ariaLabel="My Email" />
                <ContactButton onclick={() => {window.open("https://github.com/jxhug")}} svgPath={githubSVGPath} ariaLabel="My Github" />
                <ContactButton onclick={() => {window.open("https://twitter.com/@diskutility")}} svgPath={twitterSVGPath} ariaLabel="My Twitter" />
                <ContactButton onclick={() => {window.open("https://discord.com/users/463024798784815105")}} svgPath={discordSVGPath} ariaLabel="My Discord" />
            </div>
        </div> 
    </div>
</main>


