<script lang="ts">
	import '../app.css';
	export const data = undefined;
	let studioTitle = "idk why studios";
</script>

<div class="min-h-screen flex flex-col bg-black text-white">
    <header class="bg-black shadow-md shadow-white-700 border-b">
        <div class="container mx-auto p-6 flex justify-between items-center">
            <a href="/">
                <div class="flex items-center gap-4 stroke-white">
                    <!-- <img class="w-50 h-50" src="/logo.png" alt="studio logo" /> -->
                    <h1 class="font-bold text-xl">{studioTitle}</h1>
                </div>
            </a>
            <nav class="flex flex-col sm:flex-row sm:gap-6 gap-2 text-white font-medium items-center text-sm sm:text-base">
                <a href="/about" class="hover:text-gray-400 transition-colors">About</a>
                <a href="/devblog" class="hover:text-gray-400 transition-colors">Dev Blog</a>
                <a href="/games" class="hover:text-gray-400 transition-colors">Showcase</a>
            </nav>

        </div>
    </header>

    <main class="flex-1 container mx-auto p-6 flex items-center justify-center flex-col text-center">
        <slot />
    </main>

    <footer class="bg-black text-center py-6 text-sm text-white-500 border-t">
        © {new Date().getFullYear()} idk why studios. All rights reserved.
    </footer>
</div>