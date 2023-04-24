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
        <h1>Hi,I'm <span class="gradient">jxhug</span></h1>
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
                <h2>Svelte</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://developer.mozilla.org/en-US/docs/Web/HTML", "_blank");
            }}>
                <img class="logo" src="/images/html.png" alt="">
                <h2>HTML</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank");
            }}>
                <img class="logo" src="/images/css.png" alt="">
                <h2>CSS</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://developer.mozilla.org/en-US/docs/Web/javascript", "_blank");
            }}>
                <img class="logo" src="/images/js.png" alt="">
                <h2>Javascript</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://tailwindcss.com", "_blank");
            }}>
                <img class="logo" src="/images/tailwind.png" alt="">
                <h2>Tailwind</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://supabase.com", "_blank");
            }}>
                <img class="logo" src="/images/supabase.png" alt="">
                <h2>Supabase</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://dotnet.microsoft.com/en-us/languages/csharp", "_blank");
            }}>
                <img class="logo" src="/images/cs.png" alt="">
                <h2>C#</h2>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="skill" on:click={ () =>  {
                window.open("https://unity.com", "_blank");
            }}>
                <img class="logo" src="/images/unity.png" alt="">
                <h2>Unity</h2>
            </div>
        </div>
        <!-- <h3>//a little more ⬇️</h3>
        <div class="section">
            <h1>My projects</h1>
            
        </div> -->
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

    h1 > .gradient {
        background: linear-gradient(90deg, crimson, #ff3b3b, salmon, crimson);
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
        font-family: "Poppins", sans-serif;
        font-size: 1.25rem;
        font-weight: medium;
    }
    h3 {
        font-family: monospace;
        font-size: 1.5rem;
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
    }
    .skill:hover {
        transform: scale(1.1, 1.1);
        cursor: pointer;
    }
    .logo {
        width: 62.5px;
        height: 62.5px;
    }
</style>
