<script>
	import { projects } from "./projects"
	
	let studioTitle = "idkwhystudios"
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Jersey+10&display=swap');
</style>

<svelte:head>
    <title>
        About | {studioTitle}
    </title>
</svelte:head>

<section class="max-w-4x1 mx-auto px-4 py-16 text-white">
	<!-- Card Container -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 ">
		{#each projects as {projectName, projectImage, projectDesc, updateDate, fontClass} }
		<!-- Card -->
			<div class="bg-black rounded-2xl border-1 border-white overflow-hidden hover:scale-103 transition-transform">
				 <img src={projectImage} alt={projectName} class="w-full h-96 object-cover">
				<div class="p-4 {fontClass}">
					<!-- Card Details -->
					<h2 class="text-xl font-semibold text-white">{projectName}</h2>
					<p class="text-gray-300 text-sm mt-2">{projectDesc}</p>
					<a href="/about" class="inline-block mt-4 text-white p-2">Play</a>
				</div>
			</div>
		{/each}
	</div>

</section>