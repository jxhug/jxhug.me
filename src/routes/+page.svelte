<script>
    let m = { x: 0, y: 0 };
    /**
	 * @type {HTMLDivElement}
	 */
    // let blob;

    // onpointermove = function(e){
    //     m.x = e.clientX;
    //     m.y = e.clientY;
    //     blob.style.left = m.x + "px";
    //     blob.style.top = m.y + "px";
    // }

</script>

<main>
    <!-- <div bind:this={blob} id="blob"></div> -->
    <div class="section" style="padding: 0% 0%;">
        <h1>Hi,I'm <span class="gradient-red">jxhug</span></h1>
        <h3>//scroll down ⬇️</h3>
    </div>
    <div class="section">
        <h1>About Me</h1>
        <h3>👋 Hi, I'm jxhug, a teenage web developer from the Bay Area!</h3>
        <h3>⌨️ I mostly do front-end web development and game development.</h3>
        <h3>📫 You can reach me at <a class="link" href="mailto:contact@jxhug.me">contact@jxhug.me</a></h3>
        <h3>//a little more ⬇️</h3>
    </div>
    <div class="section">
        <h1>My Skills</h1>
        <div class="skills">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://svelte.dev/", "_blank");
            }}>
                <img class="logo" src="/images/svelte.png" alt="">
                <h2 class="skill-text">Svelte</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://developer.mozilla.org/en-US/docs/Web/HTML", "_blank");
            }}>
                <img class="logo" src="/images/html.png" alt="">
                <h2 class="skill-text">HTML</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank");
            }}>
                <img class="logo" src="/images/css.png" alt="">
                <h2 class="skill-text">CSS</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://developer.mozilla.org/en-US/docs/Web/javascript", "_blank");
            }}>
                <img class="logo" src="/images/js.png" alt="">
                <h2 class="skill-text">Javascript</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://tailwindcss.com", "_blank");
            }}>
                <img class="logo" src="/images/tailwind.png" alt="">
                <h2 class="skill-text">Tailwind</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://supabase.com", "_blank");
            }}>
                <img class="logo" src="/images/supabase.png" alt="">
                <h2 class="skill-text">Supabase</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://dotnet.microsoft.com/en-us/languages/csharp", "_blank");
            }}>
                <img class="logo" src="/images/cs.png" alt="">
                <h2 class="skill-text">C#</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://unity.com", "_blank");
            }}>
                <img class="logo" src="/images/unity.png" alt="">
                <h2 class="skill-text">Unity</h2>
            </div>
        </div>
        <h3>//a little more ⬇️</h3>
        <div class="section">
            <h1>My Projects</h1>
            <div class="projects">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="container" on:click={ () =>  {
                    window.open("https://cacodemon-game.vercel.app", "_blank");
                }}>
                    <div class="card">
                        <img class="project-image" src="/images/cacodemon.png" alt="">
                    </div>
                    <div>
                        <h2><span class="gradient-red">Cacodemon</span> Game</h2>
                        <p>A side scrolling DOOM game. Uses: <img src="/images/html.png" alt="HTML" class="project-language"><img src="/images/css.png" alt="CSS" class="project-language"><img src="/images/js.png" alt="Javascript" class="project-language"></p>
                    </div>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="container" on:click={ () =>  {
                    window.open("https://apps.apple.com/us/app/ultimate-tennis-quiz/id1641028778", "_blank");
                }}>
                    <div class="card">
                        <img class="project-image" src="/images/utq.png" alt="">
                    </div>
                    <div>
                        <h2><span class="gradient-green">Ultimate</span> Tennis Quiz</h2>
                        <p>A tennis trivia game. Uses: <img src="/images/cs.png" alt="C#" class="project-language"><img src="/images/unity.png" alt="Unity" class="project-language"></p>
                    </div>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="container" on:click={ () =>  {
                    window.open("https://www.spigotmc.org/resources/biomerace.96241/", "_blank");
                }}>
                    <div class="card">
                        <img class="project-image" src="/images/biomerace.png" alt="">
                    </div>
                    <div>
                        <h2><span class="gradient-blue">Biome</span>Race</h2>
                        <p>A race based Minecraft plugin. Uses: <img src="/images/java.png" alt="Java" class="project-language"></p>
                    </div>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="container" on:click={ () =>  {
                    window.open("https://www.spigotmc.org/resources/biomerace.96241/", "_blank");
                }}>
                    <div class="card">
                        <img class="project-image" src="/images/phoenix.png" alt="">
                    </div>
                    <div>
                        <h2><span class="gradient-orange">Phoenix</span></h2>
                        <p>An open source game launcher. Uses: <img src="/images/swift.png" alt="Swift" class="project-language"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    /* #blob {
        background: linear-gradient(90deg, salmon, #ff3b3b, crimson, salmon);
        height: 300px;
        aspect-ratio: 1;
        position: fixed;
        translate: -50% -50%;
        border-radius: 50%;
        animation: rotate 20s linear infinite;
        filter: blur(200px);
        z-index: -1;
        opacity: .75;
    } */
    @keyframes rotate {
        from {
            transform: rotate(0deg);
            transform: scale(1, 1);
        }

        33% {
            transform: scale(1.5, 1);
        }

        66% {
            transform: scale(1, 1.5);
        }

        to {
            transform: rotate(360deg);
            transform: scale(1, 1);
        }
    }
    @keyframes background-pan {
        from {
            background-position: 0%;
        }

        to {
            background-position: -200%;
        }
    }

    .gradient-red {
        background: linear-gradient(90deg, crimson, #ff3b3b, salmon, crimson);
        background-size: 200%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: background-pan 3s ease infinite;
    }
    .gradient-green {
        background: linear-gradient(90deg, green, #54984c, lightgreen, green);
        background-size: 200%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: background-pan 3s ease infinite;
    }
    .gradient-blue {
        background: linear-gradient(90deg, blue, #158bbd, lightblue, blue);
        background-size: 200%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: background-pan 3s ease infinite;
    }
    .gradient-orange {
        background: linear-gradient(90deg, orange, #ff5912, #ffd292, orange);
        background-size: 200%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: background-pan 3s ease infinite;
    }
    .section {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 50% 0%;
    }
    h2 {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 2rem;
        font-weight: medium;
    }
    h3 {
        font-family: monospace;
    }

    @media screen and (min-width: 1200px) {
        h3 { 
            font-size: 1.5rem;
        }
    }

    @media screen and (min-width: 1024px) {
        h3 { 
            font-size: 1.4rem;
        }
    }

    @media screen and (min-width: 768px) {
        h3 { 
            font-size: 1.3rem;
        }
    }

    .link {
        color: #ff6161;
        text-decoration: none;
    }
    .skills {
        display: grid;
        grid-template-columns: 150px 150px 150px 150px;
    }
    .skill {
        padding: 0px 20px;
        transition: all .5s ease;
        text-align: center;
        align-items: center;
        align-content: center;
        justify-content: center;
    }
    .skill:hover {
        transform: scale(1.1, 1.1);
        cursor: pointer;
    }
    .logo {
        height: 50px;
    }

    .project-image {
        width: 100px;
    }

    .container {
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all .3s ease-in-out;
    }

    .container:hover {
        transform: scale(1.1, 1.1);
    }

    .card {
        width: 200px;
        height: 200px;
        margin-right: 20px;
        border-radius: 30px;
        display: block;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .card img {
        width: 100%;
        height: 100%;
        /* Make the image cover the entire card */
        object-fit: contain;
        transform: translateY(-5px);
    }
    .skill-text {
        font-size: 1.5rem;
        font-weight: 500;
    }
    .project-language {
        height: 20px;
        margin-left: 5px;
        transform: translateY(3px);
    }
</style>
