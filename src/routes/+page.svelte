<script>
    import {goto} from "$app/navigation";
    let studioTitle = "idkwhystudios"
</script>

<svelte:head>
    <title>
        {studioTitle}
    </title>
</svelte:head>

<section id="home" class="flex flex-col items-center justify-center text-center px-4 py-20">
    <div>
        <p class="mt-4 text-lg text-white-700">Welcome!</p>
        <button
        on:click={() => goto("/about")}
        class="mt-6 px-3 py-2 bg-black text-white rounded hover:bg-white hover:text-black border">
            Read about us
        </button>
    </div>
</section>