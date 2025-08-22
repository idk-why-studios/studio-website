<script>
	let studioTitle = 'idkwhystudios';
	const cofounders = [
		{
			name: 'Catalyst',
			img: '/catalyst.jpg',
			team: 'Lead Programmer',
			url: 'https://github.com/AmalBiju0104'
		},
		{
			name: 'modkavartini',
			img: 'https://api.lanyard.rest/944986926400811008.jpg',
			team: 'Lead Artist',
			url: 'https://github.com/modkavartini'
		},
		{ name: 'RBJ', img: '/rbj.png', team: 'Lead Composer', url: 'https://github.com/R-B-J' },
		{
			name: 'Swassy',
			img: '/swassy.png',
			team: 'Game Director',
			url: 'https://github.com/Swassyman'
		},
		{
			name: 'MrValmeeki',
			img: 'https://api.lanyard.rest/1251792950439186511.jpg',
			team: 'Lead QA',
			url: 'https://github.com/MrValmeeki'
		}
	];
	const employees = [
		{ name: 'Rez', img: '/rez.jpg', team: 'Artist', url: 'https://github.com/Ajzal-me' },
		{ name: 'Jojo', img: '/jojo.jpg', team: 'Music Director', url: 'https://github.com/Johnny-cod' }
	];
</script>

<svelte:head>
	<title>
		About | {studioTitle}
	</title>
</svelte:head>

<section class="mx-auto max-w-4xl px-4 py-16 text-white">
	<h2 class="mb-4 text-3xl font-bold">Who Are We?</h2>
	<p class="mb-12 text-lg leading-relaxed">
		We are a passionate team of developers, designers, and storytellers building unique games that
		make you feel something. Our studio thrives on creativity, weird ideas, and late-night coding
		sessions fueled by caffeine and memes.
	</p>

	<h3 class="mb-6 text-2xl font-semibold">Meet the Founders</h3>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-5">
		{#each cofounders as { name, img, team, url }}
			<a href={url}>
				<div class="flex flex-col items-center bg-black text-center">
					<img
						src={img}
						alt={name}
						class="h-28 w-28 rounded-full border border-white object-center"
					/>
					<p class="mt-4 font-medium">{name}</p>
					<p class="mt-2 font-light italic">{team}</p>
				</div>
			</a>
		{/each}
	</div>

	<h3 class="mt-6 mb-6 text-2xl font-semibold">Meet the Developers</h3>
	<div class="flex w-full justify-center">
		<div class="w-fit place-items-center grid grid-cols-2 gap-8 md:grid-cols-2">
			{#each employees as { name, img, team, url }}
				<a class="w-fit" href={url}>
					<div class="flex flex-col items-center bg-black text-center">
						<img
							src={img}
							alt={name}
							class="h-28 w-28 rounded-full border border-white object-center"
						/>
						<p class="mt-4 font-medium">{name}</p>
						<p class="mt-2 font-light italic">{team}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
