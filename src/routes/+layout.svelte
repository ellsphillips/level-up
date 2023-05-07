<script lang="ts">
	import '../app.css';
</script>

<div class="container mx-auto w-full">
	<div class="pt-8 flex justify-between w-full items-center">
		<p class="font-medium">Level Up</p>
		<nav class="space-x-4">
			<a href="/about" class="hover:text-level-up-orange">About</a>
			<a href="/articles" class="hover:text-level-up-orange">Articles</a>
		</nav>
	</div>
	<div class="py-12">
		<slot />
	</div>
</div>