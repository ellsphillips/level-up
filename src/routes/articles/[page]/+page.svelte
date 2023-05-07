<script lang="ts">
	import { page } from '$app/stores';
	import ArticleCard from "$components/ArticleCard.svelte";
	import MaterialIcon from '$components/MaterialIcon.svelte';

	export let data;
	let pageSize = 3;
	$: totalPages = Math.ceil(data.articles.length / pageSize);
	$: currentPage = Number($page.params.page);
	$: currentArticles = data.articles.slice((currentPage - 1) * pageSize, currentPage * pageSize);
</script>

<div class="divide-y-2 divide-level-up-grey-75">
	<h1 class="text-6xl font-bold pb-8">Articles</h1>
	
	<div>
		{#each currentArticles as article}
		<div class="py-4">
			<ArticleCard data={article} />
		</div>
		{/each}

		<nav class="flex justify-between pt-4">
			<span
				class="flex items-center {currentPage === 1 ? 'opacity-50 cursor-default' : 'hover:text-level-up-orange'}"
			>
				<MaterialIcon kind="chevronRight" orientation="s" />
				{#if currentPage > 1}
					<a href="/articles/{currentPage > 0 ? currentPage - 1 : totalPages}">Previous</a>
				{:else}
					<p>Previous</p>
				{/if}
			</span>

			<div class="flex items-center gap-3">
				{#each Array(totalPages) as _, idx}
					<a
						href="/articles/{idx + 1}"
						class="hover:text-level-up-yellow {currentPage - 1 === idx ? 'text-level-up-orange' : ''}"
						>
						{idx + 1}
					</a>
				{/each}
			</div>

			<span
				class="flex items-center {currentPage === totalPages ? 'opacity-50 cursor-default' : 'hover:text-level-up-orange'}"
			>
				{#if currentPage < totalPages}
				<a href="/articles/{currentPage < totalPages ? (currentPage + 1) : totalPages}">Next</a>
				{:else}
				<p>Next</p>
				{/if}
				<MaterialIcon kind="chevronRight" orientation="n" />
			</span>
		</nav>
	</div>
</div>
