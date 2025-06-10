<script>
	let studioTitle = "idkwhystudios"
	const cofounders = [
		{ name: 'Catalyst', img: '/catalyst.jpg', team: 'Lead Programmer', url: "https://github.com/AmalBiju0104"},
		{ name: 'Modkavartini', img: '/modka.jpg' , team: 'Lead Artist', url: "https://github.com/modkavartini"},
		{ name: 'RBJ', img: '/rbj.png', team: 'Lead Composer', url: "https://github.com/R-B-J"},
		{ name: 'Swassy', img: '/swassy.png', team: 'Game Director', url: "https://github.com/Swassyman"},
		{ name: 'MrValmeeki', img: '/mrvalmeeki.jpg', team: 'Lead QA', url: "https://github.com/MrValmeeki"}
	];
</script>

<svelte:head>
    <title>
        About | {studioTitle}
    </title>
</svelte:head>

<section class="max-w-4xl mx-auto px-4 py-16 text-white">
	<h2 class="text-3xl font-bold mb-4">Who Are We?</h2>
	<p class="text-lg leading-relaxed mb-12">
		We are a passionate team of developers, designers, and storytellers building unique games that make you feel something. Our studio thrives on creativity, weird ideas, and late-night coding sessions fueled by caffeine and memes.
	</p>

	<h3 class="text-2xl font-semibold mb-6">Meet the Founders</h3>
	<div class="grid grid-cols-1 md:grid-cols-5 gap-8">
		{#each cofounders as { name, img, team, url}}
        <a href={url}>
            <div class="flex flex-col items-center text-center bg-black">
				<img src={img} alt={name} class="w-28 h-28 rounded-full object-center border border-white" />
				<p class="mt-4 font-medium">{name}</p>
                <p class="italic mt-2 font-light">{team}</p>
			</div>
        </a>
		{/each}
	</div>
</section>